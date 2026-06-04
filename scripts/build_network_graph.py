#!/usr/bin/env python3
"""
Build an interactive person-to-person correspondence network graph.

WHAT THIS SCRIPT DOES
---------------------
1. Reads nodes.csv (people) and edges.csv (correspondence links).
2. Draws each person as a circle node. Size = total letters sent + received.
3. Draws each correspondence pair as a directed arrow.
   Arrow thickness = number of letters between that pair (edge weight).
4. Kepler himself is highlighted in red so he stands out as the hub.
5. Saves the result as an HTML file you can open in any browser.

INTERACTING WITH THE GRAPH
--------------------------
- Drag nodes to rearrange the layout.
- Scroll to zoom in and out.
- Click a node to highlight its direct connections.
- Hover over a node or edge to see details.
- The graph starts with a brief physics simulation that finds a good layout;
  it then freezes. You can drag nodes freely after that.

HOW TO RUN
----------
  /path/to/python scripts/build_network_graph.py

Optional arguments:
  --nodes    data/processed/nodes.csv
  --edges    data/processed/edges.csv
  --output   data/processed/network_graph.html
  --min-weight  minimum edge weight to include (default: 1, meaning all edges)

Example — show only connections with 3 or more letters:
  python scripts/build_network_graph.py --min-weight 3

REQUIREMENTS
------------
  pip install pyvis
"""

import argparse
import csv
import math
from collections import Counter
from pathlib import Path

try:
    from pyvis.network import Network
except ImportError:
    raise SystemExit("pyvis is not installed.  Run: pip install pyvis")


# --- CONSTANTS ---------------------------------------------------------------

KEPLER_NAME = "Kepler, Johannes, 1571-1630"

COLOUR_KEPLER = "#e74c3c"    # Red  — Kepler stands out.
COLOUR_OTHER  = "#2980b9"    # Blue — everyone else.
COLOUR_BORDER = "#1a252f"    # Dark border on all nodes.
EDGE_COLOUR   = "#7f8c8d"    # Grey edges.


# --- HELPERS -----------------------------------------------------------------

def node_size(total_degree: int, max_degree: int) -> int:
    """
    Scale node size between 10px and 60px using a square-root scale.
    The most connected person gets size 60; someone with 1 letter gets size 10.
    Square-root scaling prevents Kepler from completely overwhelming the graph.
    """
    if max_degree <= 0:
        return 10
    proportion = math.sqrt(total_degree / max_degree)
    return int(10 + proportion * 50)


def edge_width(weight: int, max_weight: int) -> float:
    """
    Scale edge width between 0.5px and 8px using a square-root scale.
    """
    if max_weight <= 0:
        return 0.5
    proportion = math.sqrt(weight / max_weight)
    return round(0.5 + proportion * 7.5, 1)


  def short_label(name: str) -> str:
    """Return a short display label (usually surname or institution head)."""
    return (name or "").split(",", 1)[0].strip()


  def disambiguation_token(name: str) -> str:
    """Return a short token to disambiguate people sharing the same short label."""
    parts = [part.strip() for part in (name or "").split(",")]
    if len(parts) < 2 or not parts[1]:
      return ""

    token = parts[1]
    if ";" in token:
      return "multiple"
    return token.split()[0]


# --- MAIN --------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Build interactive person network graph.")
    parser.add_argument("--nodes",      default="data/processed/nodes.csv")
    parser.add_argument("--edges",      default="data/processed/edges.csv")
    parser.add_argument("--output",     default="data/processed/network_graph.html")
    parser.add_argument("--min-weight", type=int, default=1,
                        help="Only include edges with at least this many letters (default: 1).")
    args = parser.parse_args()

    # Step 1: Read nodes.
    nodes = {}   # id -> {InDegree, OutDegree, TotalDegree}
    with open(args.nodes, newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            nodes[row["Id"]] = {
                "in":    int(row["InDegree"]),
                "out":   int(row["OutDegree"]),
                "total": int(row["TotalDegree"]),
            }
    print(f"Nodes loaded: {len(nodes)}")

    # Step 2: Read edges, filtering by minimum weight.
    edges = []
    with open(args.edges, newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            weight = int(row["Weight"])
            if weight >= args.min_weight:
                edges.append({
                    "source": row["Source"],
                    "target": row["Target"],
                    "weight": weight,
                })
    print(f"Edges loaded (weight >= {args.min_weight}): {len(edges)}")

    # Only keep nodes that appear in at least one filtered edge.
    # (Filtering edges can leave isolated nodes that clutter the view.)
    connected_people = set()
    for e in edges:
        connected_people.add(e["source"])
        connected_people.add(e["target"])

    active_nodes = {name: data for name, data in nodes.items()
                    if name in connected_people}
    print(f"Nodes after filtering: {len(active_nodes)}")

    # Some distinct people share the same surname (e.g. multiple Brahe/Kepler entries).
    # Count short labels so we can disambiguate duplicates in the rendered graph.
    short_label_counts = Counter(short_label(name) for name in active_nodes)

    max_degree = max((d["total"] for d in active_nodes.values()), default=1)
    max_weight = max((e["weight"] for e in edges), default=1)

    # Step 3: Build the pyvis Network.
    # height/width fill the browser window.
    # directed=True draws arrows on edges.
    # bgcolor and font_color set the overall look.
    net = Network(
        height="100vh",
        width="100%",
        directed=True,
        bgcolor="#1a1a2e",      # Dark background — edges and nodes pop.
        font_color="white",
    )

    # Step 4: Add nodes.
    for name, data in active_nodes.items():
        is_kepler = (name == KEPLER_NAME)
        size   = node_size(data["total"], max_degree)
        colour = COLOUR_KEPLER if is_kepler else COLOUR_OTHER

        label = short_label(name)
        if short_label_counts[label] > 1:
          token = disambiguation_token(name)
          label = f"{label} ({token})" if token else name

        tooltip = (
            f"{name}\n"
            f"Letters sent:     {data['out']}\n"
            f"Letters received: {data['in']}\n"
            f"Total:            {data['total']}"
        )

        net.add_node(
            name,
            label=label,
            title=tooltip,        # 'title' is the hover popup in pyvis.
            size=size,
            color={
                "background": colour,
                "border":     COLOUR_BORDER,
                "highlight":  {"background": "#f39c12", "border": COLOUR_BORDER},
            },
            font={"size": 11 if not is_kepler else 15, "color": "white"},
            borderWidth=2 if not is_kepler else 3,
        )

    # Step 5: Add edges.
    for e in edges:
        width = edge_width(e["weight"], max_weight)
        net.add_edge(
            e["source"],
            e["target"],
            value=width,          # 'value' controls thickness in pyvis.
            title=f"{e['weight']} letter{'s' if e['weight'] != 1 else ''}",
            color={"color": EDGE_COLOUR, "opacity": 0.6},
            arrows={"to": {"enabled": True, "scaleFactor": 0.5}},
        )

    # Step 6: Physics options.
    # Barnes-Hut is fast and produces clean hub-and-spoke layouts.
    # The simulation runs briefly to find a good layout, then freezes.
    net.set_options("""
    {
      "physics": {
        "barnesHut": {
          "gravitationalConstant": -8000,
          "centralGravity": 0.3,
          "springLength": 120,
          "springConstant": 0.04,
          "damping": 0.09
        },
        "stabilization": {
          "enabled": true,
          "iterations": 200,
          "fit": true
        }
      },
      "edges": {
        "smooth": { "type": "continuous" }
      },
      "interaction": {
        "hover": true,
        "tooltipDelay": 100,
        "navigationButtons": true,
        "keyboard": true
      }
    }
    """)

    # Step 7: Save.
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    net.save_graph(str(output_path))

    print(f"Saved: {output_path}")
    print("Open in a browser. Drag nodes, scroll to zoom, click to highlight.")
    if args.min_weight == 1:
        print(f"Tip: run with --min-weight 3 to show only stronger connections.")


if __name__ == "__main__":
    main()
