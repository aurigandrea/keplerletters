#!/usr/bin/env python3
"""
Build an interactive HTML map of Kepler's correspondence network.

WHAT THIS SCRIPT DOES
---------------------
1. Reads the correspondence CSV (letters) and places.csv (coordinates).
2. Draws a dot on the map for every city that sent or received letters.
   - The dot is bigger if more letters passed through that city.
3. Draws a line between every (Origin → Destination) pair.
   - The line is thicker if more letters were sent on that route.
4. Each dot and line has a popup: click it to see details.
5. Saves the result as an HTML file you can open in any web browser.

HOW TO RUN
----------
First install Folium (only needed once):
  pip install folium

Then run:
  python scripts/build_map.py

Optional arguments:
  --letters   path to the correspondence CSV    (default: data/processed/emlo_kepler_letters.csv)
  --places    path to the geocoded places CSV   (default: data/processed/places.csv)
  --output    path to write the HTML map        (default: data/processed/map.html)

WHAT IS FOLIUM?
---------------
Folium is a Python library that creates interactive web maps using Leaflet.js.
The output is a single self-contained HTML file — no server needed, just open
it in a browser.

REQUIREMENTS
------------
  pip install folium
"""

import argparse
import csv
import math
from collections import defaultdict
from pathlib import Path

try:
    import folium
except ImportError:
    raise SystemExit(
        "Folium is not installed.  Run:  pip install folium"
    )


# --- FILE HELPERS ------------------------------------------------------------

def read_letters(path: Path) -> list[dict[str, str]]:
    """Read the correspondence CSV and return a list of row dicts."""
    with path.open("r", newline="", encoding="utf-8") as fh:
        return list(csv.DictReader(fh))


def read_places(path: Path) -> dict[str, tuple[float, float]]:
    """
    Read places.csv and return a dict mapping place name -> (lat, lon).
    Rows without coordinates (not found during geocoding) are skipped.
    """
    coords: dict[str, tuple[float, float]] = {}
    with path.open("r", newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if row["Latitude"] and row["Longitude"]:
                coords[row["Place"]] = (float(row["Latitude"]), float(row["Longitude"]))
    return coords


# --- DATA AGGREGATION --------------------------------------------------------

def aggregate(letters: list[dict[str, str]],
              places: dict[str, tuple[float, float]]
              ) -> tuple[dict[str, int], dict[tuple[str, str], list[dict]]]:
    """
    From the list of letters, build two aggregated structures:

    place_totals  — dict mapping place_name -> total number of letters (sent + received)
                    Used to size the circle markers on the map.

    route_letters — dict mapping (origin, destination) -> list of letter dicts
                    Each entry represents all letters sent on one route.
                    Used to draw and label the lines on the map.

    Only letters where BOTH origin and destination are in places.csv are included.
    """
    place_totals: dict[str, int] = defaultdict(int)
    route_letters: dict[tuple[str, str], list[dict]] = defaultdict(list)

    for letter in letters:
        origin      = (letter.get("Origin")      or "").strip()
        destination = (letter.get("Destination") or "").strip()

        # Skip if either place was not geocoded (unknown location).
        if origin not in places or destination not in places:
            continue

        # Skip letters sent and received in the same city (no line to draw).
        if origin == destination:
            continue

        place_totals[origin]      += 1
        place_totals[destination] += 1
        route_letters[(origin, destination)].append(letter)

    return dict(place_totals), dict(route_letters)


# --- SCALE HELPERS -----------------------------------------------------------

def circle_radius(letter_count: int, max_count: int) -> int:
    """
    Convert a letter count into a circle radius (in pixels).
    The busiest city gets radius 30; the quietest gets radius 4.
    Uses a square-root scale so small cities are still visible.
    """
    if max_count == 0:
        return 4
    proportion = math.sqrt(letter_count / max_count)
    return int(4 + proportion * 26)


def line_weight(letter_count: int, max_count: int) -> float:
    """
    Convert a letter count into a line weight (stroke width in pixels).
    The busiest route gets weight 8; the quietest gets weight 1.
    """
    if max_count == 0:
        return 1.0
    proportion = math.sqrt(letter_count / max_count)
    return round(1.0 + proportion * 7.0, 1)


# --- MAP BUILDING ------------------------------------------------------------

def build_map(place_totals: dict[str, int],
              route_letters: dict[tuple[str, str], list[dict]],
              places: dict[str, tuple[float, float]]) -> folium.Map:
    """
    Create and return a Folium map with:
      - One circle marker per city (sized by letter count).
      - One line per (origin, destination) route (weighted by letter count).
    """
    # Start the map centred over central Europe, where most of the
    # correspondence took place.
    m = folium.Map(location=[48.5, 13.0], zoom_start=5,
                   tiles="CartoDB positron")

    # --- DRAW ROUTE LINES ---------------------------------------------------
    # Draw lines first so they appear underneath the city dots.

    max_route = max((len(v) for v in route_letters.values()), default=1)

    for (origin, dest), letters in route_letters.items():
        count = len(letters)
        origin_coords = places[origin]
        dest_coords   = places[dest]

        # Build a short HTML summary for the popup.
        # Show the three most recent letters as examples.
        examples = letters[:3]
        example_lines = "".join(
            f"<li>{l.get('Date','?')} — {l.get('Author','?')}</li>"
            for l in examples
        )
        more = f"<br><em>…and {count - 3} more</em>" if count > 3 else ""
        popup_html = (
            f"<b>{origin} → {dest}</b><br>"
            f"{count} letter{'s' if count != 1 else ''}<br>"
            f"<ul style='margin:4px 0 0 0; padding-left:16px'>{example_lines}</ul>"
            f"{more}"
        )

        folium.PolyLine(
            locations=[origin_coords, dest_coords],
            weight=line_weight(count, max_route),
            color="#c0392b",          # Dark red for correspondence lines.
            opacity=0.6,
            tooltip=f"{origin} → {dest}: {count} letter{'s' if count != 1 else ''}",
            popup=folium.Popup(popup_html, max_width=300),
        ).add_to(m)

    # --- DRAW CITY MARKERS --------------------------------------------------

    max_city = max(place_totals.values(), default=1)

    for place, total in place_totals.items():
        lat, lon = places[place]

        popup_html = (
            f"<b>{place}</b><br>"
            f"{total} letter{'s' if total != 1 else ''} sent or received"
        )

        folium.CircleMarker(
            location=(lat, lon),
            radius=circle_radius(total, max_city),
            color="#2c3e50",          # Dark border.
            fill=True,
            fill_color="#2980b9",     # Blue fill for cities.
            fill_opacity=0.7,
            tooltip=f"{place} ({total})",
            popup=folium.Popup(popup_html, max_width=250),
        ).add_to(m)

    return m


# --- MAIN --------------------------------------------------------------------

def main() -> None:
    # Step 1: Parse command-line arguments.
    parser = argparse.ArgumentParser(description="Build an interactive correspondence map.")
    parser.add_argument("--letters", default="data/processed/emlo_kepler_letters.csv",
                        help="Path to the correspondence CSV.")
    parser.add_argument("--places",  default="data/processed/places.csv",
                        help="Path to the geocoded places CSV.")
    parser.add_argument("--output",  default="data/processed/map.html",
                        help="Path to write the HTML map.")
    args = parser.parse_args()

    letters_path = Path(args.letters)
    places_path  = Path(args.places)
    output_path  = Path(args.output)

    # Step 2: Load the data.
    print("Reading correspondence data …")
    letters = read_letters(letters_path)
    print(f"  {len(letters)} letters loaded.")

    print("Reading geocoded places …")
    places = read_places(places_path)
    print(f"  {len(places)} places with coordinates.")

    # Step 3: Aggregate letters by city and by route.
    print("Aggregating by city and route …")
    place_totals, route_letters = aggregate(letters, places)
    skipped = len(letters) - sum(len(v) for v in route_letters.values())
    print(f"  {len(place_totals)} cities with known coordinates.")
    print(f"  {len(route_letters)} unique origin → destination routes.")
    print(f"  {skipped} letters skipped (missing or same-city location).")

    # Step 4: Build and save the map.
    print("Building map …")
    m = build_map(place_totals, route_letters, places)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    m.save(str(output_path))

    print(f"Map saved to {output_path}")
    print("Open it in any web browser to explore the correspondence network.")


if __name__ == "__main__":
    main()
