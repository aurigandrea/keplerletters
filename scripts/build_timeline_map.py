#!/usr/bin/env python3
"""
Build an animated timeline map of Kepler's correspondence.

WHAT THIS SCRIPT DOES
---------------------
1. Reads the correspondence CSV and places.csv.
2. Extracts the year from each letter's Date field.
3. Draws the map with TWO layers:

   STATIC LAYER — City circles in the background, sized by total letter count.
   These are always visible and give you geographic reference points.

   ANIMATED LAYER — One line per letter, appearing at the year it was sent.
   Use the play/pause button and timeline slider (bottom of the map) to scrub
   through time and watch Kepler's network grow year by year.

4. Saves the result as an HTML file you can open in any web browser.

HOW TO READ THE MAP
-------------------
- Press PLAY to animate letters appearing in chronological order.
- Drag the slider manually to jump to a specific year.
- Lines show Origin -> Destination of each letter.
- Line colour shows direction: red = sent by Kepler, blue = received by Kepler.
- Grey lines = letters between other correspondents in the dataset.

HOW TO RUN
----------
  /path/to/python scripts/build_timeline_map.py

Optional arguments:
  --letters   data/processed/emlo_kepler_letters.csv
  --places    data/processed/places.csv
  --output    data/processed/timeline_map.html
"""

import argparse
import csv
import json
import re
from collections import defaultdict
from pathlib import Path

try:
    import folium
    from folium.plugins import TimestampedGeoJson
except ImportError:
    raise SystemExit("Folium is not installed. Run: pip install folium")


# --- CONSTANTS ---------------------------------------------------------------

# The canonical name for Kepler in the dataset.
# Letters sent by him get one colour; letters received get another.
KEPLER_NAME = "Kepler, Johannes, 1571-1630"

COLOUR_SENT     = "#e74c3c"   # Red   — Kepler sent this letter.
COLOUR_RECEIVED = "#2980b9"   # Blue  — Kepler received this letter.
COLOUR_OTHER    = "#7f8c8d"   # Grey  — Between two other people.


# --- FILE IO -----------------------------------------------------------------

def read_letters(path: Path):
    with path.open("r", newline="", encoding="utf-8") as fh:
        return list(csv.DictReader(fh))


def read_places(path: Path):
    coords = {}
    with path.open("r", newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if row["Latitude"] and row["Longitude"]:
                coords[row["Place"]] = (float(row["Latitude"]), float(row["Longitude"]))
    return coords


# --- DATE PARSING ------------------------------------------------------------

def extract_year(date_str: str):
    """
    Pull the 4-digit year out of a date string like:
      "22 May 1590"  ->  1590
      "June 1590"    ->  1590
      "1590"         ->  1590
    Returns None if no year is found.
    """
    match = re.search(r'\b(\d{4})\b', date_str or "")
    return int(match.group(1)) if match else None


# --- GEOJSON BUILDING --------------------------------------------------------

def letter_colour(author: str, addressee: str) -> str:
    """Return a line colour based on Kepler's role in this letter."""
    if author == KEPLER_NAME:
        return COLOUR_SENT
    if addressee == KEPLER_NAME:
        return COLOUR_RECEIVED
    return COLOUR_OTHER


def build_geojson_features(letters, places):
    """
    Convert each letter into a GeoJSON LineString feature with a timestamp.

    The TimestampedGeoJson plugin uses these timestamps to decide WHEN each
    feature appears on the map during animation.

    Features with missing or ungeocoded locations are skipped.
    """
    features = []
    skipped = 0

    for letter in letters:
        origin      = (letter.get("Origin")      or "").strip()
        destination = (letter.get("Destination") or "").strip()
        author      = (letter.get("Author")      or "").strip()
        addressee   = (letter.get("Addressee")   or "").strip()
        date_str    = (letter.get("Date")         or "").strip()

        year = extract_year(date_str)

        if not year or origin not in places or destination not in places:
            skipped += 1
            continue

        if origin == destination:
            skipped += 1
            continue

        # GeoJSON uses [longitude, latitude] order (opposite of Folium's lat/lon).
        o_lat, o_lon = places[origin]
        d_lat, d_lon = places[destination]

        # ISO-8601 date string for the animation slider.  We use Jan 1 of the
        # year because most letters only have year-level precision anyway.
        timestamp = f"{year}-01-01"

        colour = letter_colour(author, addressee)

        feature = {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                # Each coordinate is [lon, lat].  Two points for each end of the line.
                # TimestampedGeoJson requires one timestamp per coordinate.
                "coordinates": [[o_lon, o_lat], [d_lon, d_lat]],
            },
            "properties": {
                # 'times' must have one entry per coordinate point.
                "times": [timestamp, timestamp],
                "style": {
                    "color": colour,
                    "weight": 1.5,
                    "opacity": 0.7,
                },
                "popup": (
                    f"<b>{author}</b> → <b>{addressee}</b><br>"
                    f"{date_str}<br>"
                    f"{origin} → {destination}"
                ),
            },
        }
        features.append(feature)

    return features, skipped


# --- STATIC CITY LAYER -------------------------------------------------------

def add_city_circles(m, letters, places):
    """
    Add static city circles to the map as a background reference layer.
    Sized by total letters passing through each city (sent + received).
    Always visible underneath the animated lines.
    """
    import math
    from collections import Counter

    city_totals: Counter = Counter()
    for letter in letters:
        origin      = (letter.get("Origin")      or "").strip()
        destination = (letter.get("Destination") or "").strip()
        if origin in places:
            city_totals[origin] += 1
        if destination in places:
            city_totals[destination] += 1

    max_count = max(city_totals.values(), default=1)
    city_layer = folium.FeatureGroup(name="City Reference", show=True)

    for city, count in city_totals.items():
        lat, lon = places[city]
        radius = int(3 + math.sqrt(count / max_count) * 18)
        folium.CircleMarker(
            location=(lat, lon),
            radius=radius,
            color="#2c3e50",
            fill=True,
            fill_color="#bdc3c7",   # Light grey — unobtrusive background.
            fill_opacity=0.5,
            tooltip=f"{city} ({count} letters)",
        ).add_to(city_layer)

    city_layer.add_to(m)


# --- MAIN --------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Build an animated timeline correspondence map.")
    parser.add_argument("--letters", default="data/processed/emlo_kepler_letters.csv")
    parser.add_argument("--places",  default="data/processed/places.csv")
    parser.add_argument("--output",  default="data/processed/timeline_map.html")
    args = parser.parse_args()

    print("Reading data …")
    letters = read_letters(Path(args.letters))
    places  = read_places(Path(args.places))
    print(f"  {len(letters)} letters, {len(places)} geocoded places.")

    print("Building GeoJSON features …")
    features, skipped = build_geojson_features(letters, places)
    print(f"  {len(features)} letters placed on the timeline.")
    print(f"  {skipped} letters skipped (missing date, location, or same-city).")

    years = sorted(set(
        extract_year(l.get("Date", ""))
        for l in letters
        if extract_year(l.get("Date", ""))
    ))
    print(f"  Year range: {years[0]} – {years[-1]}")

    print("Building map …")
    m = folium.Map(location=[48.5, 13.0], zoom_start=5, tiles="CartoDB positron")

    # Static city circles go on first (drawn underneath).
    add_city_circles(m, letters, places)

    # Add a simple legend as an HTML overlay in the bottom-left corner.
    legend_html = """
    <div style="position:fixed; bottom:40px; left:10px; z-index:1000;
                background:white; padding:10px 14px; border-radius:6px;
                border:1px solid #ccc; font-size:13px; line-height:1.8;">
      <b>Letter direction</b><br>
      <span style="color:#e74c3c">&#9644;</span> Sent by Kepler<br>
      <span style="color:#2980b9">&#9644;</span> Received by Kepler<br>
      <span style="color:#7f8c8d">&#9644;</span> Between others<br>
      <span style="color:#7f8c8d">&#9711;</span> City (size = volume)
    </div>
    """
    m.get_root().html.add_child(folium.Element(legend_html))

    # Animated timeline layer.
    TimestampedGeoJson(
        data={"type": "FeatureCollection", "features": features},
        period="P1Y",           # Step size: 1 year per frame.
        duration="P1Y",         # How long each feature stays visible.
        auto_play=False,        # Don't start playing automatically.
        loop=False,
        max_speed=10,
        loop_button=True,
        date_options="YYYY",    # Show only the year on the slider label.
        time_slider_drag_update=True,
    ).add_to(m)

    folium.LayerControl(collapsed=False).add_to(m)

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    m.save(str(output_path))

    print(f"Saved: {output_path}")
    print("Open in a browser and press PLAY on the slider to animate.")


if __name__ == "__main__":
    main()
