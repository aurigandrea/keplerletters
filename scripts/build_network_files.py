#!/usr/bin/env python3
"""Build network files (nodes and edges) from EMLO correspondence CSV."""

from __future__ import annotations

import argparse
import csv
from collections import Counter, defaultdict
from pathlib import Path
from typing import Dict, List, Sequence, Tuple


def normalize_text(value: str) -> str:
    return " ".join((value or "").split())


def find_column(headers: Sequence[str], candidates: Sequence[str]) -> str:
    lowered = {h.lower(): h for h in headers}
    for candidate in candidates:
        if candidate in lowered:
            return lowered[candidate]

    for header in headers:
        lower = header.lower()
        for candidate in candidates:
            if candidate in lower:
                return header

    raise RuntimeError(f"Could not find any of columns: {', '.join(candidates)}")


def read_rows(path: Path) -> Tuple[List[str], List[Dict[str, str]]]:
    with path.open("r", newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        headers = reader.fieldnames
        if not headers:
            raise RuntimeError("Input CSV has no header row.")
        rows = [row for row in reader]
    return headers, rows


def write_csv(path: Path, headers: Sequence[str], rows: Sequence[Sequence[object]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(headers)
        writer.writerows(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description="Create nodes and edges from correspondence table")
    parser.add_argument(
        "--input",
        default="data/processed/emlo_kepler_letters.csv",
        help="Input correspondence CSV",
    )
    parser.add_argument("--nodes-output", default="data/processed/nodes.csv", help="Nodes CSV output path")
    parser.add_argument("--edges-output", default="data/processed/edges.csv", help="Edges CSV output path")
    args = parser.parse_args()

    input_path = Path(args.input)
    headers, rows = read_rows(input_path)

    sender_col = find_column(headers, ["author", "sender"]) 
    recipient_col = find_column(headers, ["recipient", "addressee"])

    edge_counter: Counter[Tuple[str, str]] = Counter()
    out_degree: Counter[str] = Counter()
    in_degree: Counter[str] = Counter()

    for row in rows:
        sender = normalize_text(row.get(sender_col, ""))
        recipient = normalize_text(row.get(recipient_col, ""))

        if not sender or not recipient:
            continue

        edge_counter[(sender, recipient)] += 1
        out_degree[sender] += 1
        in_degree[recipient] += 1

    all_nodes = sorted(set(out_degree.keys()) | set(in_degree.keys()))

    node_rows = []
    for node in all_nodes:
        outgoing = out_degree[node]
        incoming = in_degree[node]
        node_rows.append([node, incoming, outgoing, incoming + outgoing])

    edge_rows = []
    for (source, target), weight in sorted(edge_counter.items(), key=lambda x: (-x[1], x[0][0], x[0][1])):
        edge_rows.append([source, target, "Directed", weight])

    write_csv(Path(args.nodes_output), ["Id", "InDegree", "OutDegree", "TotalDegree"], node_rows)
    write_csv(Path(args.edges_output), ["Source", "Target", "Type", "Weight"], edge_rows)

    print(f"Input rows: {len(rows)}")
    print(f"Valid directed ties: {sum(edge_counter.values())}")
    print(f"Unique nodes: {len(node_rows)}")
    print(f"Unique edges: {len(edge_rows)}")
    print(f"Wrote nodes to {args.nodes_output}")
    print(f"Wrote edges to {args.edges_output}")


if __name__ == "__main__":
    main()
