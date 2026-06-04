#!/usr/bin/env python3
"""
Build a multi-view interactive map for Kepler correspondence.

This script creates ONE HTML page with multiple layers you can toggle:

1) City Nodes
   - Cities as circles, sized by how many letters passed through.

2) City Routes
   - Origin -> Destination lines between cities, weighted by route frequency.

3) Person Nodes
   - Individuals placed at their "home city".
   - Home city is chosen by OPTION 1: the city where they most often SENT letters
     (most frequent Origin among geocoded rows).
   - If a person never appears with a geocoded Origin, a fallback is used:
     most frequent Destination where they appear as Addressee.

4) Person Edges
   - Author -> Addressee lines between people, weighted by letter count.
   - A person edge is drawn only if both people have assigned coordinates.

The output is a single HTML file (a small website page) that opens in a browser.
Use the layer control in the top-right corner to switch views and overlap them.

Usage:
  python scripts/build_multiview_map.py

Optional arguments:
  --letters   data/processed/emlo_kepler_letters.csv
  --places    data/processed/places.csv
  --output    data/processed/multiview_map.html
  --people    data/processed/person_locations.csv
"""

import argparse
import csv
import math
from collections import Counter, defaultdict
from html import escape
from pathlib import Path

try:
    import folium
except ImportError:
    raise SystemExit("Folium is not installed. Run: pip install folium")


KEPLER_NAME = "Kepler, Johannes, 1571-1630"


# --- FILE IO -----------------------------------------------------------------

def read_letters(path: Path) -> list[dict[str, str]]:
    with path.open("r", newline="", encoding="utf-8") as fh:
        return list(csv.DictReader(fh))


def read_places(path: Path) -> dict[str, tuple[float, float]]:
    coords: dict[str, tuple[float, float]] = {}
    with path.open("r", newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            place = (row.get("Place") or "").strip()
            lat = (row.get("Latitude") or "").strip()
            lon = (row.get("Longitude") or "").strip()
            if place and lat and lon:
                coords[place] = (float(lat), float(lon))
    return coords


def write_person_locations(path: Path, person_home: dict[str, str], places: dict[str, tuple[float, float]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(["Person", "HomeCity", "Latitude", "Longitude"])
        for person in sorted(person_home):
            city = person_home[person]
            lat, lon = places[city]
            writer.writerow([person, city, lat, lon])


# --- SMALL HELPERS -----------------------------------------------------------

def norm(value: str) -> str:
    return " ".join((value or "").split())


def node_radius(count: int, max_count: int, min_px: int, max_px: int) -> int:
    if max_count <= 0:
        return min_px
    scaled = math.sqrt(count / max_count)
    return int(min_px + scaled * (max_px - min_px))


def edge_weight(count: int, max_count: int, min_px: float, max_px: float) -> float:
    if max_count <= 0:
        return min_px
    scaled = math.sqrt(count / max_count)
    return round(min_px + scaled * (max_px - min_px), 1)


# --- AGGREGATION -------------------------------------------------------------

def aggregate_city_view(
    letters: list[dict[str, str]],
    places: dict[str, tuple[float, float]],
) -> tuple[dict[str, int], dict[tuple[str, str], int], int]:
    """
    Build city-level structures:
    - city_totals: city -> letters sent+received
    - city_routes: (origin, destination) -> number of letters on that route
    - skipped_rows: letters skipped due to missing geocodes
    """
    city_totals: Counter[str] = Counter()
    city_routes: Counter[tuple[str, str]] = Counter()
    skipped = 0

    for row in letters:
        origin = norm(row.get("Origin", ""))
        destination = norm(row.get("Destination", ""))

        if origin not in places or destination not in places:
            skipped += 1
            continue

        if origin == destination:
            continue

        city_totals[origin] += 1
        city_totals[destination] += 1
        city_routes[(origin, destination)] += 1

    return dict(city_totals), dict(city_routes), skipped


def assign_person_home_city(
    letters: list[dict[str, str]],
    places: dict[str, tuple[float, float]],
) -> tuple[dict[str, str], dict[str, str]]:
    """
    Choose one home city per person.

    Primary rule (option 1):
    - Most frequent geocoded Origin where person appears as Author.

    Fallback rule:
    - If no such Origin exists, use most frequent geocoded Destination where
      person appears as Addressee.

    Returns:
    - person_home: person -> city
    - assignment_mode: person -> "origin-primary" or "destination-fallback"
    """
    origin_counts: dict[str, Counter[str]] = defaultdict(Counter)
    destination_counts: dict[str, Counter[str]] = defaultdict(Counter)

    for row in letters:
        author = norm(row.get("Author", ""))
        addressee = norm(row.get("Addressee", ""))
        origin = norm(row.get("Origin", ""))
        destination = norm(row.get("Destination", ""))

        if author and origin in places:
            origin_counts[author][origin] += 1

        if addressee and destination in places:
            destination_counts[addressee][destination] += 1

    all_people = set(origin_counts) | set(destination_counts)
    person_home: dict[str, str] = {}
    assignment_mode: dict[str, str] = {}

    for person in all_people:
        if origin_counts[person]:
            city, _ = origin_counts[person].most_common(1)[0]
            person_home[person] = city
            assignment_mode[person] = "origin-primary"
        elif destination_counts[person]:
            city, _ = destination_counts[person].most_common(1)[0]
            person_home[person] = city
            assignment_mode[person] = "destination-fallback"

    return person_home, assignment_mode


def aggregate_person_edges(
    letters: list[dict[str, str]],
    person_home: dict[str, str],
) -> tuple[dict[str, int], dict[tuple[str, str], int], int]:
    """
    Build person-level structures:
    - person_totals: person -> letters sent+received in the drawable subset
    - person_edges: (author, addressee) -> number of letters
    - skipped_rows: rows skipped because one or both people have no home city
    """
    person_totals: Counter[str] = Counter()
    person_edges: Counter[tuple[str, str]] = Counter()
    skipped = 0

    for row in letters:
        author = norm(row.get("Author", ""))
        addressee = norm(row.get("Addressee", ""))

        if not author or not addressee:
            skipped += 1
            continue

        if author not in person_home or addressee not in person_home:
            skipped += 1
            continue

        person_totals[author] += 1
        person_totals[addressee] += 1
        person_edges[(author, addressee)] += 1

    return dict(person_totals), dict(person_edges), skipped


def aggregate_city_people(
    letters: list[dict[str, str]],
    places: dict[str, tuple[float, float]],
) -> tuple[dict[str, dict[str, int]], dict[str, dict[str, int]]]:
    """
    Build city-level people summaries for map popups.

    Returns:
    - city_people: city -> {person -> count of city-associated letters}
    - city_kepler_counterparts: city -> {counterpart -> count with Kepler at that city}
    """
    city_people: dict[str, Counter[str]] = defaultdict(Counter)
    city_kepler_counterparts: dict[str, Counter[str]] = defaultdict(Counter)

    for row in letters:
        author = norm(row.get("Author", ""))
        addressee = norm(row.get("Addressee", ""))
        origin = norm(row.get("Origin", ""))
        destination = norm(row.get("Destination", ""))

        if origin in places and author:
            city_people[origin][author] += 1
            if addressee == KEPLER_NAME and author:
                city_kepler_counterparts[origin][author] += 1

        if destination in places and addressee:
            city_people[destination][addressee] += 1
            if author == KEPLER_NAME and addressee:
                city_kepler_counterparts[destination][addressee] += 1

    return (
        {city: dict(counter) for city, counter in city_people.items()},
        {city: dict(counter) for city, counter in city_kepler_counterparts.items()},
    )


# --- MAP DRAWING -------------------------------------------------------------

def build_multiview_map(
    city_totals: dict[str, int],
    city_routes: dict[tuple[str, str], int],
    city_people: dict[str, dict[str, int]],
    city_kepler_counterparts: dict[str, dict[str, int]],
    person_home: dict[str, str],
    person_totals: dict[str, int],
    person_edges: dict[tuple[str, str], int],
    places: dict[str, tuple[float, float]],
) -> folium.Map:
    m = folium.Map(location=[48.5, 13.0], zoom_start=5, tiles="CartoDB positron")

    layer_city_nodes = folium.FeatureGroup(name="City Nodes", show=True)
    layer_city_edges = folium.FeatureGroup(name="City Routes", show=True)
    layer_person_nodes = folium.FeatureGroup(name="Person Nodes", show=True)
    layer_person_edges = folium.FeatureGroup(name="Person Edges", show=True)

    # Draw city routes (under city nodes)
    max_city_route = max(city_routes.values(), default=1)
    for (origin, dest), count in sorted(city_routes.items(), key=lambda x: -x[1]):
        folium.PolyLine(
            locations=[places[origin], places[dest]],
            weight=edge_weight(count, max_city_route, 1.0, 8.0),
            color="#c0392b",
            opacity=0.55,
            tooltip=f"City route: {origin} -> {dest} ({count})",
        ).add_to(layer_city_edges)

    # Draw city nodes
    max_city_total = max(city_totals.values(), default=1)
    for city, count in sorted(city_totals.items(), key=lambda x: -x[1]):
        lat, lon = places[city]
        top_people = sorted(
            city_people.get(city, {}).items(),
            key=lambda x: (-x[1], x[0]),
        )[:5]
        top_people_html = "".join(
            f"<li>{escape(person)}: {letters}</li>" for person, letters in top_people
        )

        kepler_counterparts = sorted(
            city_kepler_counterparts.get(city, {}).items(),
            key=lambda x: (-x[1], x[0]),
        )[:5]
        kepler_html = "".join(
            f"<li>{escape(person)}: {letters}</li>" for person, letters in kepler_counterparts
        )

        popup_parts = [
            f"<b>{escape(city)}</b>",
            f"<br>{count} letters sent/received",
        ]
        if top_people_html:
            popup_parts.append("<br><b>Top people associated with this city:</b><ul style='margin:4px 0 0 0; padding-left:18px'>")
            popup_parts.append(top_people_html)
            popup_parts.append("</ul>")
        if kepler_html:
            popup_parts.append("<b>Kepler correspondents at this city:</b><ul style='margin:4px 0 0 0; padding-left:18px'>")
            popup_parts.append(kepler_html)
            popup_parts.append("</ul>")

        folium.CircleMarker(
            location=(lat, lon),
            radius=node_radius(count, max_city_total, 4, 30),
            color="#2c3e50",
            fill=True,
            fill_color="#2980b9",
            fill_opacity=0.65,
            tooltip=f"City: {city} ({count})",
            popup=folium.Popup("".join(popup_parts), max_width=380),
        ).add_to(layer_city_nodes)

    # Draw person edges (under person nodes)
    max_person_edge = max(person_edges.values(), default=1)
    for (author, addressee), count in sorted(person_edges.items(), key=lambda x: -x[1]):
        author_city = person_home[author]
        addressee_city = person_home[addressee]
        folium.PolyLine(
            locations=[places[author_city], places[addressee_city]],
            weight=edge_weight(count, max_person_edge, 0.5, 4.5),
            color="#8e44ad",
            opacity=0.45,
            tooltip=f"People: {author} -> {addressee} ({count})",
        ).add_to(layer_person_edges)

    # Draw person nodes on top
    max_person_total = max(person_totals.values(), default=1)
    for person, count in sorted(person_totals.items(), key=lambda x: -x[1]):
        city = person_home[person]
        lat, lon = places[city]
        folium.CircleMarker(
            location=(lat, lon),
            radius=node_radius(count, max_person_total, 2, 10),
            color="#4a235a",
            fill=True,
            fill_color="#f39c12",
            fill_opacity=0.8,
            tooltip=f"Person: {person}",
            popup=folium.Popup(
                f"<b>{person}</b><br>Home city: {city}<br>Letters in drawable network: {count}",
                max_width=320,
            ),
        ).add_to(layer_person_nodes)

    layer_city_edges.add_to(m)
    layer_city_nodes.add_to(m)
    layer_person_edges.add_to(m)
    layer_person_nodes.add_to(m)

    folium.LayerControl(collapsed=False).add_to(m)
    return m


# --- MAIN --------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(description="Build city and person map views in one HTML file.")
    parser.add_argument("--letters", default="data/processed/emlo_kepler_letters.csv",
                        help="Path to correspondence CSV.")
    parser.add_argument("--places", default="data/processed/places.csv",
                        help="Path to geocoded places CSV.")
    parser.add_argument("--output", default="data/processed/multiview_map.html",
                        help="Path to output HTML map file.")
    parser.add_argument("--people", default="data/processed/person_locations.csv",
                        help="Path to output person-home-city CSV.")
    args = parser.parse_args()

    letters = read_letters(Path(args.letters))
    places = read_places(Path(args.places))

    city_totals, city_routes, skipped_city = aggregate_city_view(letters, places)
    city_people, city_kepler_counterparts = aggregate_city_people(letters, places)
    person_home, assignment_mode = assign_person_home_city(letters, places)
    person_totals, person_edges, skipped_person = aggregate_person_edges(letters, person_home)

    write_person_locations(Path(args.people), person_home, places)

    m = build_multiview_map(
        city_totals=city_totals,
        city_routes=city_routes,
        city_people=city_people,
        city_kepler_counterparts=city_kepler_counterparts,
        person_home=person_home,
        person_totals=person_totals,
        person_edges=person_edges,
        places=places,
    )

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    m.save(str(output_path))

    origin_primary = sum(1 for mode in assignment_mode.values() if mode == "origin-primary")
    destination_fallback = sum(1 for mode in assignment_mode.values() if mode == "destination-fallback")

    print(f"Letters loaded: {len(letters)}")
    print(f"Geocoded places loaded: {len(places)}")
    print(f"City nodes: {len(city_totals)}")
    print(f"City routes: {len(city_routes)}")
    print(f"City-view rows skipped (missing geocodes): {skipped_city}")
    print(f"People assigned home city: {len(person_home)}")
    print(f"  Origin-primary assignments: {origin_primary}")
    print(f"  Destination-fallback assignments: {destination_fallback}")
    print(f"Person nodes in drawable network: {len(person_totals)}")
    print(f"Person edges in drawable network: {len(person_edges)}")
    print(f"Person-edge rows skipped (missing names/coords): {skipped_person}")
    print(f"Wrote person locations: {args.people}")
    print(f"Wrote multiview map: {args.output}")


if __name__ == "__main__":
    main()
