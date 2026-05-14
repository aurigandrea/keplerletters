#!/usr/bin/env python3
"""
Look up the latitude and longitude of every place in the correspondence CSV.

WHAT THIS SCRIPT DOES
---------------------
1. Reads the correspondence CSV and collects every unique place name from
   the Origin and Destination columns.
2. For each place, asks the free OpenStreetMap Nominatim service where it is
   and records the latitude and longitude.
3. Saves the results to places.csv so the map script can use them.

IMPORTANT: RE-RUNNING THIS SCRIPT
----------------------------------
If places.csv already exists, the script will SKIP any place that has already
been looked up.  This means you can safely re-run the script if it is
interrupted without starting over from the beginning.

NOMINATIM RATE LIMIT
--------------------
OpenStreetMap's Nominatim service is free but asks that you:
  - Wait at least 1 second between requests (this script does this).
  - Identify your application in the request User-Agent header (done below).
Please do not remove the delay or change the User-Agent to something generic.

HOW TO RUN
----------
  python scripts/geocode_places.py

Optional arguments:
    --input   path to the correspondence CSV  (default: data/emlo_kepler_letters.csv)
    --output  path to write places.csv        (default: data/places.csv)
"""

import argparse
import csv
import json
import re
import time
import urllib.parse
import urllib.request
import unicodedata
from pathlib import Path

# --- CONFIGURATION -----------------------------------------------------------

# Nominatim requires a descriptive User-Agent that identifies your project.
# Change the email to yours if you plan to make heavy use of this script.
USER_AGENT = "keplerletters-geocoder/1.0 (digital-humanities-project)"

# How long to wait between requests (seconds).  Nominatim policy: >= 1 second.
REQUEST_DELAY = 1.1

# The base URL for the Nominatim search endpoint.
NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"

# Column names in the correspondence CSV that contain place names.
PLACE_COLUMNS = ["Origin", "Destination"]


# --- GEOCODING ---------------------------------------------------------------

def _dedupe_preserve_order(values: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for value in values:
        if value and value not in seen:
            seen.add(value)
            result.append(value)
    return result


def place_query_candidates(place_name: str) -> list[str]:
    """
    Build fallback query variants for historical place names.

    Many EMLO place strings include qualifiers in brackets (for example
    "Prague (Holy Roman Empire)" or "Königsberg [Kaliningrad]") that can
    confuse Nominatim. We keep the original query first, then try simpler forms.
    """
    raw = " ".join((place_name or "").split())
    if not raw:
        return []

    without_round = re.sub(r"\([^)]*\)", "", raw)
    without_square = re.sub(r"\[[^\]]*\]", "", raw)
    without_any_brackets = re.sub(r"\([^)]*\)|\[[^\]]*\]", "", raw)
    without_bracket_chars = raw.replace("(", " ").replace(")", " ").replace("[", " ").replace("]", " ")

    no_brackets = " ".join(without_any_brackets.split(" ,;"))
    comma_head = no_brackets.split(",")[0].strip()
    semicolon_head = no_brackets.split(";")[0].strip()
    ascii_variant = unicodedata.normalize("NFKD", no_brackets).encode("ascii", "ignore").decode("ascii")

    candidates = [
        raw,
        " ".join(without_round.split()),
        " ".join(without_square.split()),
        " ".join(without_any_brackets.split()),
        " ".join(without_bracket_chars.split()),
        comma_head,
        semicolon_head,
        " ".join(ascii_variant.split()),
    ]
    return _dedupe_preserve_order(candidates)

def geocode(place_name: str) -> tuple[float, float] | None:
    """
    Ask Nominatim for the latitude and longitude of a place name.

    Returns a (latitude, longitude) tuple if found, or None if not found.
    """
    candidates = place_query_candidates(place_name)
    for idx, query in enumerate(candidates):
        params = urllib.parse.urlencode({
            "q": query,
            "format": "json",
            "limit": 1,          # We only want the top result.
            "addressdetails": 0,
        })
        url = f"{NOMINATIM_URL}?{params}"

        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})

        try:
            with urllib.request.urlopen(request, timeout=10) as response:
                results = json.loads(response.read().decode("utf-8"))
        except Exception as exc:
            print(f"  WARNING: network error for '{place_name}': {exc}")
            return None

        if results:
            # Nominatim returns a list; the first result is the best match.
            best = results[0]
            return float(best["lat"]), float(best["lon"])

        if idx < len(candidates) - 1:
            time.sleep(REQUEST_DELAY)

    return None


# --- FILE HELPERS ------------------------------------------------------------

def load_existing_places(path: Path) -> dict[str, tuple[float, float] | None]:
    """
    Read a places.csv that was written by a previous run of this script.

    Returns a dict mapping place_name -> (lat, lon) or None if it was not found.
    This lets us skip places we have already looked up.
    """
    existing: dict[str, tuple[float, float] | None] = {}
    if not path.exists():
        return existing

    with path.open("r", newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            name = row["Place"]
            if row["Latitude"] and row["Longitude"]:
                existing[name] = (float(row["Latitude"]), float(row["Longitude"]))
            else:
                # Place was looked up before but not found; record as None.
                existing[name] = None

    return existing


def extract_unique_places(csv_path: Path) -> list[str]:
    """
    Open the correspondence CSV and return a sorted list of unique place names
    from the Origin and Destination columns (blanks excluded).
    """
    places: set[str] = set()
    with csv_path.open("r", newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            for col in PLACE_COLUMNS:
                value = (row.get(col) or "").strip()
                if value:
                    places.add(value)
    return sorted(places)


def write_places(path: Path, places: dict[str, tuple[float, float] | None]) -> None:
    """
    Write the places dict to a CSV file.
    Places that were not found get empty Latitude/Longitude fields.
    """
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(["Place", "Latitude", "Longitude"])
        for name, coords in sorted(places.items()):
            if coords is not None:
                writer.writerow([name, coords[0], coords[1]])
            else:
                writer.writerow([name, "", ""])


# --- MAIN --------------------------------------------------------------------

def main() -> None:
    # Step 1: Parse command-line arguments.
    parser = argparse.ArgumentParser(description="Geocode place names from the correspondence CSV.")
    parser.add_argument("--input",  default="data/emlo_kepler_letters.csv",
                        help="Path to the correspondence CSV.")
    parser.add_argument("--output", default="data/places.csv",
                        help="Path to write the geocoded places CSV.")
    args = parser.parse_args()

    input_path  = Path(args.input)
    output_path = Path(args.output)

    # Step 2: Load any places already geocoded from a previous run.
    already_done = load_existing_places(output_path)
    print(f"Places already geocoded from a previous run: {len(already_done)}")

    # Step 3: Collect all unique place names from the correspondence CSV.
    all_places = extract_unique_places(input_path)
    print(f"Total unique places in the correspondence data: {len(all_places)}")

    # Step 4: Identify which places still need to be looked up.
    to_geocode = [p for p in all_places if p not in already_done]
    print(f"Places still to geocode: {len(to_geocode)}")

    if not to_geocode:
        print("Nothing to do — all places are already geocoded.")
        return

    # Step 5: Geocode each remaining place, one per second.
    results: dict[str, tuple[float, float] | None] = dict(already_done)
    found = 0
    not_found = 0

    for i, place in enumerate(to_geocode, start=1):
        print(f"  [{i}/{len(to_geocode)}] {place} ...", end=" ", flush=True)
        coords = geocode(place)

        if coords is not None:
            print(f"lat={coords[0]:.4f}, lon={coords[1]:.4f}")
            found += 1
        else:
            print("NOT FOUND")
            not_found += 1

        results[place] = coords

        # Save progress after every place so we don't lose work if interrupted.
        write_places(output_path, results)

        # Wait before the next request to respect Nominatim's rate limit.
        if i < len(to_geocode):
            time.sleep(REQUEST_DELAY)

    # Step 6: Final summary.
    print()
    print(f"Geocoding complete.")
    print(f"  Found:     {found}")
    print(f"  Not found: {not_found}")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
