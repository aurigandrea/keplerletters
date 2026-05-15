#!/usr/bin/env python3
"""
Kepler correspondence measurements (educational, script-first version).

What this script does
---------------------
1. Builds directed, weighted person and place networks from EMLO-derived CSVs.
2. Computes centrality measurements for people and places.
3. Runs people analysis in two modes:
   - full: Kepler included
   - kepler_removed: Kepler removed
4. Finds "unexpected places of interest" by ranking place-years where
   influential people appear despite low overall place activity.
5. Writes all measurement tables to a configurable output folder.

How to run
----------
python scripts/measurements.py

Optional arguments
------------------
--data-dir PATH     Folder containing input CSV files.
                    Default: data
--output-dir PATH   Folder where results are written.
                    Default: data/measurements
--top-n INT         Number of top outlier rows to export separately.
                    Default: 30

Required input files in data-dir
--------------------------------
- emlo_kepler_letters.csv
- places.csv

Optional (loaded only if present)
---------------------------------
- edges.csv
- nodes.csv
- person_locations.csv
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Iterable

import networkx as nx
import numpy as np
import pandas as pd


KEPLER_NAME = "Kepler, Johannes, 1571-1630"


# ---------------------------------------------------------------------------
# Helpers: loading and cleaning
# ---------------------------------------------------------------------------

def read_required_csv(data_dir: Path, filename: str) -> pd.DataFrame:
    path = data_dir / filename
    if not path.exists():
        raise FileNotFoundError(f"Missing required file: {path}")
    return pd.read_csv(path)


def read_optional_csv(data_dir: Path, filename: str) -> pd.DataFrame | None:
    path = data_dir / filename
    if not path.exists():
        return None
    return pd.read_csv(path)


def clean_text(value: object) -> object:
    if pd.isna(value):
        return np.nan
    return str(value).strip()


def extract_year(date_string: object) -> object:
    """Extract the first 4-digit year from a date-like string."""
    if pd.isna(date_string):
        return np.nan
    match = re.search(r"\b(15|16)\d{2}\b", str(date_string))
    if not match:
        return np.nan
    return int(match.group(0))


def clean_letters(letters: pd.DataFrame) -> pd.DataFrame:
    letters = letters.copy()
    letters["Author"] = letters["Author"].apply(clean_text)
    letters["Addressee"] = letters["Addressee"].apply(clean_text)
    letters["Origin"] = letters["Origin"].apply(clean_text)
    letters["Destination"] = letters["Destination"].apply(clean_text)
    letters["Year"] = letters["Date"].apply(extract_year)
    return letters


# ---------------------------------------------------------------------------
# Network builders
# ---------------------------------------------------------------------------

def build_directed_weighted_network(
    frame: pd.DataFrame,
    source_col: str,
    target_col: str,
    weight_col_name: str = "weight",
) -> tuple[nx.DiGraph, pd.DataFrame]:
    edge_table = (
        frame.dropna(subset=[source_col, target_col])
        .groupby([source_col, target_col])
        .size()
        .reset_index(name=weight_col_name)
    )

    graph = nx.DiGraph()
    for row in edge_table.itertuples(index=False):
        graph.add_edge(
            getattr(row, source_col),
            getattr(row, target_col),
            weight=getattr(row, weight_col_name),
        )

    return graph, edge_table


# ---------------------------------------------------------------------------
# Centrality calculations
# ---------------------------------------------------------------------------

def add_inverse_distance(graph: nx.DiGraph) -> nx.DiGraph:
    """
    Add a 'distance' edge attribute where stronger ties are shorter paths.

    Why: betweenness centrality uses shortest paths. In correspondence data,
    larger edge weights represent stronger ties, so we invert them.
    """
    g = graph.copy()
    for _, _, data in g.edges(data=True):
        w = data.get("weight", 1)
        data["distance"] = 1 / w if w > 0 else 1
    return g


def person_centralities(graph: nx.DiGraph, network_label: str) -> pd.DataFrame:
    g = add_inverse_distance(graph)

    weighted_in = dict(g.in_degree(weight="weight"))
    weighted_out = dict(g.out_degree(weight="weight"))
    weighted_total = {
        node: weighted_in.get(node, 0) + weighted_out.get(node, 0)
        for node in g.nodes()
    }

    unweighted_in = dict(g.in_degree())
    unweighted_out = dict(g.out_degree())

    betweenness = nx.betweenness_centrality(g, weight="distance", normalized=True)
    pagerank = nx.pagerank(g, weight="weight")

    # Undirected version is more stable for eigenvector on this kind of graph.
    try:
        eigenvector = nx.eigenvector_centrality(
            g.to_undirected(), weight="weight", max_iter=2000
        )
    except nx.PowerIterationFailedConvergence:
        eigenvector = {node: np.nan for node in g.nodes()}

    df = pd.DataFrame(
        {
            "person": list(g.nodes()),
            "network": network_label,
            "weighted_in_degree": [weighted_in.get(n, 0) for n in g.nodes()],
            "weighted_out_degree": [weighted_out.get(n, 0) for n in g.nodes()],
            "weighted_total_degree": [weighted_total.get(n, 0) for n in g.nodes()],
            "in_degree": [unweighted_in.get(n, 0) for n in g.nodes()],
            "out_degree": [unweighted_out.get(n, 0) for n in g.nodes()],
            "betweenness": [betweenness.get(n, 0) for n in g.nodes()],
            "pagerank": [pagerank.get(n, 0) for n in g.nodes()],
            "eigenvector": [eigenvector.get(n, np.nan) for n in g.nodes()],
        }
    )

    return df.sort_values("weighted_total_degree", ascending=False).reset_index(drop=True)


def place_centralities(graph: nx.DiGraph) -> pd.DataFrame:
    g = add_inverse_distance(graph)

    weighted_in = dict(g.in_degree(weight="weight"))
    weighted_out = dict(g.out_degree(weight="weight"))
    weighted_total = {
        node: weighted_in.get(node, 0) + weighted_out.get(node, 0)
        for node in g.nodes()
    }

    unweighted_in = dict(g.in_degree())
    unweighted_out = dict(g.out_degree())

    betweenness = nx.betweenness_centrality(g, weight="distance", normalized=True)
    pagerank = nx.pagerank(g, weight="weight")

    df = pd.DataFrame(
        {
            "place": list(g.nodes()),
            "weighted_in_degree": [weighted_in.get(n, 0) for n in g.nodes()],
            "weighted_out_degree": [weighted_out.get(n, 0) for n in g.nodes()],
            "weighted_total_degree": [weighted_total.get(n, 0) for n in g.nodes()],
            "in_degree": [unweighted_in.get(n, 0) for n in g.nodes()],
            "out_degree": [unweighted_out.get(n, 0) for n in g.nodes()],
            "betweenness": [betweenness.get(n, 0) for n in g.nodes()],
            "pagerank": [pagerank.get(n, 0) for n in g.nodes()],
        }
    )

    return df.sort_values("weighted_total_degree", ascending=False).reset_index(drop=True)


# ---------------------------------------------------------------------------
# Place-year outlier logic
# ---------------------------------------------------------------------------

def build_person_place_year(letters: pd.DataFrame) -> pd.DataFrame:
    """
    Build person-place-year activity table:
    - Author mapped to Origin
    - Addressee mapped to Destination
    """
    author = letters[["Year", "Author", "Origin"]].rename(
        columns={"Author": "person", "Origin": "place"}
    )
    addressee = letters[["Year", "Addressee", "Destination"]].rename(
        columns={"Addressee": "person", "Destination": "place"}
    )

    ppy = pd.concat([author, addressee], ignore_index=True)
    ppy = ppy.dropna(subset=["Year", "person", "place"]).copy()
    ppy["Year"] = ppy["Year"].astype(int)
    return ppy


def place_year_scores(
    ppy: pd.DataFrame,
    person_metrics: pd.DataFrame,
    metric_label: str,
) -> pd.DataFrame:
    """
    Score place-year combinations by:
    - High-importance people present at that place-year.
    - Low overall place activity across the full corpus.

    This identifies peripheral places where influential people meet.
    """
    cols = ["person", "weighted_total_degree", "betweenness", "pagerank", "eigenvector"]
    metrics = person_metrics[cols].copy()
    metrics = metrics.rename(
        columns={
            "weighted_total_degree": "person_weighted_degree",
            "betweenness": "person_betweenness",
            "pagerank": "person_pagerank",
            "eigenvector": "person_eigenvector",
        }
    )

    merged = ppy.merge(metrics, on="person", how="left")
    merged[[
        "person_weighted_degree",
        "person_betweenness",
        "person_pagerank",
        "person_eigenvector",
    ]] = merged[[
        "person_weighted_degree",
        "person_betweenness",
        "person_pagerank",
        "person_eigenvector",
    ]].fillna(0)

    grouped = (
        merged.groupby(["place", "Year"]).agg(
            mentions=("person", "size"),
            distinct_people=("person", "nunique"),
            max_person_weighted_degree=("person_weighted_degree", "max"),
            mean_person_weighted_degree=("person_weighted_degree", "mean"),
            max_person_betweenness=("person_betweenness", "max"),
            mean_person_betweenness=("person_betweenness", "mean"),
            max_person_pagerank=("person_pagerank", "max"),
            mean_person_pagerank=("person_pagerank", "mean"),
        )
    ).reset_index()

    place_totals = (
        merged.groupby("place").size().reset_index(name="place_total_activity")
    )
    grouped = grouped.merge(place_totals, on="place", how="left")

    # Core idea: influential people + several attendees / globally peripheral place.
    grouped["meeting_intensity_score"] = (
        (
            grouped["max_person_weighted_degree"]
            + grouped["mean_person_weighted_degree"]
        )
        * np.log1p(grouped["distinct_people"])
        / np.log1p(grouped["place_total_activity"])
    )

    grouped["brokerage_intensity_score"] = (
        (
            grouped["max_person_betweenness"]
            + grouped["mean_person_betweenness"]
        )
        * np.log1p(grouped["distinct_people"])
        / np.log1p(grouped["place_total_activity"])
    )

    grouped["pagerank_intensity_score"] = (
        (
            grouped["max_person_pagerank"]
            + grouped["mean_person_pagerank"]
        )
        * np.log1p(grouped["distinct_people"])
        / np.log1p(grouped["place_total_activity"])
    )

    grouped["metric_mode"] = metric_label

    return grouped.sort_values("brokerage_intensity_score", ascending=False).reset_index(
        drop=True
    )


# ---------------------------------------------------------------------------
# Temporal place activity
# ---------------------------------------------------------------------------

def annual_place_activity(letters: pd.DataFrame) -> pd.DataFrame:
    base = letters.dropna(subset=["Year"]).copy()
    base["Year"] = base["Year"].astype(int)

    origins = base[["Year", "Origin"]].rename(columns={"Origin": "place"})
    destinations = base[["Year", "Destination"]].rename(columns={"Destination": "place"})

    long_df = pd.concat([origins, destinations], ignore_index=True)
    long_df = long_df.dropna(subset=["place"])

    return (
        long_df.groupby(["Year", "place"]).size().reset_index(name="activity")
        .sort_values(["Year", "activity"], ascending=[True, False])
        .reset_index(drop=True)
    )


def top_places_each_year(activity: pd.DataFrame, top_k: int = 5) -> pd.DataFrame:
    return (
        activity.sort_values(["Year", "activity"], ascending=[True, False])
        .groupby("Year")
        .head(top_k)
        .reset_index(drop=True)
    )


# ---------------------------------------------------------------------------
# Output
# ---------------------------------------------------------------------------

def write_csv(df: pd.DataFrame, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(path, index=False)


def write_summary_markdown(
    output_dir: Path,
    person_full: pd.DataFrame,
    person_no_kepler: pd.DataFrame,
    place_scores_full: pd.DataFrame,
    place_scores_no_kepler: pd.DataFrame,
) -> None:
    summary_path = output_dir / "measurements_summary.md"

    def top_rows(df: pd.DataFrame, cols: Iterable[str], n: int = 10) -> str:
        subset = df.loc[:, list(cols)].head(n)
        return subset.to_markdown(index=False)

    text = "\n".join(
        [
            "# Measurements Summary",
            "",
            "This file provides a quick interpretation layer on top of the CSV outputs.",
            "",
            "## Person Network (Kepler Included)",
            "Top people by weighted total degree:",
            "",
            top_rows(
                person_full,
                ["person", "weighted_in_degree", "weighted_out_degree", "weighted_total_degree", "betweenness", "pagerank"],
            ),
            "",
            "## Person Network (Kepler Removed)",
            "Top people by weighted total degree:",
            "",
            top_rows(
                person_no_kepler,
                ["person", "weighted_in_degree", "weighted_out_degree", "weighted_total_degree", "betweenness", "pagerank"],
            ),
            "",
            "## Unexpected Places Of Interest (Kepler Included)",
            "Top place-years by brokerage_intensity_score:",
            "",
            top_rows(
                place_scores_full,
                ["place", "Year", "distinct_people", "place_total_activity", "brokerage_intensity_score", "meeting_intensity_score"],
            ),
            "",
            "## Unexpected Places Of Interest (Kepler Removed)",
            "Top place-years by brokerage_intensity_score:",
            "",
            top_rows(
                place_scores_no_kepler,
                ["place", "Year", "distinct_people", "place_total_activity", "brokerage_intensity_score", "meeting_intensity_score"],
            ),
            "",
        ]
    )

    summary_path.write_text(text, encoding="utf-8")


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------

def run(data_dir: Path, output_dir: Path, top_n: int) -> None:
    letters = read_required_csv(data_dir, "emlo_kepler_letters.csv")
    places = read_required_csv(data_dir, "places.csv")

    # Optional files are loaded for sanity checks / context only.
    edges = read_optional_csv(data_dir, "edges.csv")
    nodes = read_optional_csv(data_dir, "nodes.csv")
    person_locations = read_optional_csv(data_dir, "person_locations.csv")

    letters = clean_letters(letters)

    print("Loaded:")
    print(f"  letters: {letters.shape}")
    print(f"  places: {places.shape}")
    if edges is not None:
        print(f"  edges (optional): {edges.shape}")
    if nodes is not None:
        print(f"  nodes (optional): {nodes.shape}")
    if person_locations is not None:
        print(f"  person_locations (optional): {person_locations.shape}")

    # Person networks
    people_graph, people_edges = build_directed_weighted_network(
        letters, "Author", "Addressee"
    )
    people_full = person_centralities(people_graph, "full")

    people_no_kepler_graph = people_graph.copy()
    if KEPLER_NAME in people_no_kepler_graph:
        people_no_kepler_graph.remove_node(KEPLER_NAME)
    people_no_kepler = person_centralities(people_no_kepler_graph, "kepler_removed")

    people_comparison = people_full.merge(
        people_no_kepler,
        on="person",
        how="outer",
        suffixes=("_full", "_no_kepler"),
    )
    people_comparison["betweenness_change"] = (
        people_comparison["betweenness_no_kepler"]
        - people_comparison["betweenness_full"]
    )

    # Place network
    places_graph, place_edges = build_directed_weighted_network(
        letters, "Origin", "Destination"
    )
    place_metrics = place_centralities(places_graph)

    # Place-year outlier scoring
    ppy = build_person_place_year(letters)
    place_scores_full = place_year_scores(ppy, people_full, "full")
    place_scores_no_kepler = place_year_scores(ppy, people_no_kepler, "kepler_removed")

    # Temporal place activity
    place_activity = annual_place_activity(letters)
    top5_per_year = top_places_each_year(place_activity, top_k=5)

    # Persist outputs
    output_dir.mkdir(parents=True, exist_ok=True)

    write_csv(people_edges, output_dir / "person_edges_weighted.csv")
    write_csv(people_full, output_dir / "person_centrality_full.csv")
    write_csv(people_no_kepler, output_dir / "person_centrality_kepler_removed.csv")
    write_csv(people_comparison, output_dir / "person_centrality_comparison.csv")

    write_csv(place_edges, output_dir / "place_edges_weighted.csv")
    write_csv(place_metrics, output_dir / "place_centrality.csv")

    write_csv(ppy, output_dir / "person_place_year.csv")
    write_csv(place_scores_full, output_dir / "place_year_scores_full.csv")
    write_csv(place_scores_no_kepler, output_dir / "place_year_scores_kepler_removed.csv")

    write_csv(
        place_scores_full.head(top_n),
        output_dir / f"top_{top_n}_place_year_outliers_full.csv",
    )
    write_csv(
        place_scores_no_kepler.head(top_n),
        output_dir / f"top_{top_n}_place_year_outliers_kepler_removed.csv",
    )

    write_csv(place_activity, output_dir / "annual_place_activity.csv")
    write_csv(top5_per_year, output_dir / "top_5_places_each_year.csv")

    write_summary_markdown(
        output_dir,
        person_full=people_full,
        person_no_kepler=people_no_kepler,
        place_scores_full=place_scores_full,
        place_scores_no_kepler=place_scores_no_kepler,
    )

    print("\nDone. Wrote measurement outputs to:")
    print(f"  {output_dir}")


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run Kepler correspondence measurements.")
    parser.add_argument(
        "--data-dir",
        type=Path,
        default=Path("data"),
        help="Folder containing input CSV files.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("data/measurements"),
        help="Folder where output measurement tables are written.",
    )
    parser.add_argument(
        "--top-n",
        type=int,
        default=30,
        help="Number of top outlier rows to export separately.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    run(data_dir=args.data_dir, output_dir=args.output_dir, top_n=args.top_n)


if __name__ == "__main__":
    main()
