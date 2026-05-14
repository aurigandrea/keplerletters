#!/usr/bin/env python3
"""Scrape EMLO Kepler correspondence table across paginated results.

Output:
- data/emlo_kepler_letters.csv: merged table as CSV
"""

from __future__ import annotations

import argparse
import csv
import time
from pathlib import Path
from typing import List, Sequence, Tuple

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://emlo.bodleian.ox.ac.uk/forms/advanced"
DEFAULT_QUERY = "col_cat=Kepler%2C+Johannes"


def normalize_cell_text(text: str) -> str:
    return " ".join(text.split())


def fetch_page(session: requests.Session, url: str, timeout: int = 30) -> str:
    response = session.get(url, timeout=timeout)
    response.raise_for_status()
    return response.text


def pick_results_table(soup: BeautifulSoup):
    """Pick the most likely results table among all tables on the page."""
    candidates = []
    for table in soup.find_all("table"):
        thead = table.find("thead")
        tbody = table.find("tbody")
        if not thead or not tbody:
            continue

        rows = tbody.find_all("tr")
        if not rows:
            continue

        cols = max(len(row.find_all(["td", "th"])) for row in rows)
        candidates.append((len(rows), cols, table))

    if not candidates:
        raise RuntimeError("No table with both <thead> and <tbody> found on page.")

    candidates.sort(key=lambda item: (item[0], item[1]), reverse=True)
    return candidates[0][2]


def extract_table(table) -> Tuple[List[str], List[List[str]]]:
    thead = table.find("thead")
    tbody = table.find("tbody")

    headers = [normalize_cell_text(th.get_text(" ", strip=True)) for th in thead.find_all("th")]
    if not headers:
        raise RuntimeError("No headers found in <thead>.")

    normalized_headers = []
    for idx, header in enumerate(headers, start=1):
        normalized_headers.append(header if header else f"column_{idx}")

    rows: List[List[str]] = []
    for tr in tbody.find_all("tr"):
        cells = [normalize_cell_text(td.get_text(" ", strip=True)) for td in tr.find_all(["td", "th"])]
        if not any(cells):
            continue

        if len(cells) < len(normalized_headers):
            cells += [""] * (len(normalized_headers) - len(cells))
        elif len(cells) > len(normalized_headers):
            cells = cells[: len(normalized_headers)]

        rows.append(cells)

    return normalized_headers, rows


def build_page_url(query: str, start: int) -> str:
    return f"{BASE_URL}?{query}&start={start}"


def write_csv(headers: Sequence[str], rows: Sequence[Sequence[str]], output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(headers)
        writer.writerows(rows)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Scrape paginated EMLO Kepler correspondence table.")
    parser.add_argument("--query", default=DEFAULT_QUERY, help="Query string used by EMLO advanced search")
    parser.add_argument("--pages", type=int, default=24, help="Number of pages to fetch")
    parser.add_argument("--page-size", type=int, default=50, help="Rows per page (used for start offset)")
    parser.add_argument(
        "--csv-output",
        default="data/emlo_kepler_letters.csv",
        help="Output CSV path",
    )
    parser.add_argument("--delay", type=float, default=0.35, help="Delay between requests in seconds")
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    all_rows: List[List[str]] = []
    headers: List[str] | None = None

    with requests.Session() as session:
        session.headers.update(
            {
                "User-Agent": "keplerletters-scraper/0.1 (+research use)",
                "Accept": "text/html,application/xhtml+xml",
            }
        )

        for page_idx in range(args.pages):
            start = page_idx * args.page_size
            url = build_page_url(args.query, start)
            html = fetch_page(session, url)
            soup = BeautifulSoup(html, "html.parser")
            table = pick_results_table(soup)
            page_headers, rows = extract_table(table)

            if headers is None:
                headers = page_headers
            elif headers != page_headers:
                raise RuntimeError(
                    f"Header mismatch on page {page_idx + 1}.\n"
                    f"Expected: {headers}\nGot:      {page_headers}"
                )

            all_rows.extend(rows)
            print(f"Fetched page {page_idx + 1}/{args.pages} with {len(rows)} rows")

            if args.delay > 0 and page_idx < args.pages - 1:
                time.sleep(args.delay)

    if headers is None:
        raise RuntimeError("No data collected.")

    csv_output = Path(args.csv_output)
    write_csv(headers, all_rows, csv_output)

    print(f"Wrote {len(all_rows)} rows to {csv_output}")


if __name__ == "__main__":
    main()
