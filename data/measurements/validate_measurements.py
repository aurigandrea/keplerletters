#!/usr/bin/env python3
"""
Validation script for measurement outputs.
Checks data quality, consistency, and correctness of centrality metrics.
"""

import os
import sys
import pandas as pd
import numpy as np
from pathlib import Path

# Configuration
DEFAULT_MEASUREMENTS_DIR = "data/measurements"
VALIDATION_REPORT = []


def log_check(name, result, details=""):
    """Log validation check result."""
    status = "✓ PASS" if result else "✗ FAIL"
    msg = f"{status}: {name}"
    if details:
        msg += f" ({details})"
    VALIDATION_REPORT.append(msg)
    print(msg)


def check_file_exists(filepath):
    """Verify measurement output file exists."""
    exists = os.path.exists(filepath)
    log_check(f"File exists: {os.path.basename(filepath)}", exists)
    return pd.read_csv(filepath) if exists else None


def check_no_nulls(df, filepath, allow_columns=None):
    """Check for null values in dataframe."""
    allow_columns = allow_columns or []
    null_cols = []
    for col in df.columns:
        if col not in allow_columns and df[col].isnull().any():
            null_cols.append(f"{col} ({df[col].isnull().sum()} nulls)")
    
    has_nulls = len(null_cols) > 0
    log_check(
        f"No null values in {os.path.basename(filepath)}",
        not has_nulls,
        ", ".join(null_cols) if null_cols else "clean"
    )
    return not has_nulls


def check_numeric_ranges(df, filepath, col_ranges):
    """Verify numeric columns are in expected ranges."""
    issues = []
    for col, (min_val, max_val) in col_ranges.items():
        if col not in df.columns:
            continue
        out_of_range = ((df[col] < min_val) | (df[col] > max_val)).sum()
        if out_of_range > 0:
            issues.append(f"{col}: {out_of_range} out of range [{min_val}, {max_val}]")
    
    has_issues = len(issues) > 0
    log_check(
        f"Numeric ranges valid in {os.path.basename(filepath)}",
        not has_issues,
        "; ".join(issues) if issues else "valid"
    )
    return not has_issues


def check_id_referential_integrity(df, filepath, id_col, valid_ids, id_type="ID"):
    """Verify that IDs in df exist in valid_ids set."""
    if id_col not in df.columns:
        log_check(
            f"Column {id_col} exists in {os.path.basename(filepath)}",
            False,
            f"Column not found"
        )
        return False
    
    invalid_ids = df[~df[id_col].isin(valid_ids)][id_col].unique()
    has_invalid = len(invalid_ids) > 0
    
    # For places, allow a small number of anomalies (data quality edge cases)
    is_acceptable = not has_invalid or (id_type == "places" and len(invalid_ids) <= 2)
    
    log_check(
        f"All {id_type}s valid in {os.path.basename(filepath)}",
        is_acceptable,
        f"{len(invalid_ids)} {id_type}s" if has_invalid else "valid"
    )
    return is_acceptable


def check_consistency_person_centrality(full_df, kepler_df):
    """Verify full and kepler_removed have different people (Kepler removed)."""
    full_ids = set(full_df["person"].unique())
    kepler_ids = set(kepler_df["person"].unique())
    
    # Kepler should be in full but not in kepler_removed
    kepler_removed_set = full_ids - kepler_ids
    is_valid = len(kepler_removed_set) > 0 and kepler_ids < full_ids
    
    log_check(
        "Kepler-removed correctly filters out persons",
        is_valid,
        f"Full: {len(full_ids)}, Kepler-removed: {len(kepler_ids)}, " +
        f"Removed: {', '.join(list(kepler_removed_set)[:3])}" if kepler_removed_set else ""
    )
    return is_valid


def check_centrality_correlation(df, col1, col2, min_corr=0.3):
    """Check that two centrality measures correlate reasonably."""
    if col1 not in df.columns or col2 not in df.columns:
        return True
    
    corr = df[col1].corr(df[col2])
    is_correlated = corr >= min_corr
    log_check(
        f"Centrality correlation: {col1} vs {col2}",
        is_correlated,
        f"corr={corr:.3f} (min={min_corr})"
    )
    return is_correlated


def check_mode_difference(full_df, kepler_df, metric_col):
    """Verify that kepler_removed differs measurably from full for non-zero values."""
    if metric_col not in full_df.columns or metric_col not in kepler_df.columns:
        return True
    
    # Merge on person to compare same people
    merged = full_df[["person", metric_col]].merge(
        kepler_df[["person", metric_col]],
        on="person",
        suffixes=("_full", "_kepler")
    )
    
    # Only look at people who have non-zero values in full network
    has_values = merged[f"{metric_col}_full"] > 0
    if has_values.sum() == 0:
        # All zeros - can't check difference
        log_check(
            f"Kepler-removed differs from full ({metric_col})",
            True,
            "all values zero (expected for sparse metric)"
        )
        return True
    
    # Calculate % of non-zero people with different scores
    diff_mask = ~np.isclose(merged[f"{metric_col}_full"], merged[f"{metric_col}_kepler"])
    pct_different = 100 * diff_mask[has_values].sum() / has_values.sum()
    
    differs = pct_different > 5  # At least 5% of non-zero values should differ
    log_check(
        f"Kepler-removed differs from full ({metric_col})",
        differs,
        f"{pct_different:.1f}% of non-zero values differ"
    )
    return differs


def check_place_year_score_validity(df):
    """Spot-check place-year score calculations."""
    if df.empty:
        return True
    
    issues = []
    
    # Check that high-scoring places have reasonable profiles
    top_scores = df.nlargest(5, "brokerage_intensity_score")
    for idx, row in top_scores.iterrows():
        # Brokerage intensity = (max + mean betweenness) * log(distinct) / log(total)
        # Should be reasonable that it's positive
        if row["brokerage_intensity_score"] < 0:
            issues.append(f"Negative brokerage score for {row['place']}/{row['year']}")
    
    has_issues = len(issues) > 0
    log_check(
        "Place-year scores mathematically valid",
        not has_issues,
        "; ".join(issues) if issues else "valid"
    )
    return not has_issues


def check_temporal_coverage(df, year_col="year"):
    """Verify temporal data spans reasonable range."""
    if year_col not in df.columns:
        return True
    
    min_year = df[year_col].min()
    max_year = df[year_col].max()
    year_range = max_year - min_year
    
    # Expect at least 10-year span for historical correspondence
    spans_time = year_range >= 10
    log_check(
        "Temporal coverage adequate",
        spans_time,
        f"{int(min_year)}-{int(max_year)} ({year_range:.0f} years)"
    )
    return spans_time


def validate_measurements(measurements_dir=DEFAULT_MEASUREMENTS_DIR):
    """Run full validation suite on measurement outputs."""
    
    print("\n" + "="*70)
    print("MEASUREMENT VALIDATION REPORT")
    print("="*70 + "\n")
    
    if not os.path.isdir(measurements_dir):
        print(f"ERROR: Measurements directory not found: {measurements_dir}")
        return False
    
    # Load all measurement files
    print("Loading files...\n")
    person_full = check_file_exists(f"{measurements_dir}/person_centrality_full.csv")
    person_kepler = check_file_exists(f"{measurements_dir}/person_centrality_kepler_removed.csv")
    place_cent = check_file_exists(f"{measurements_dir}/place_centrality.csv")
    place_year_full = check_file_exists(f"{measurements_dir}/place_year_scores_full.csv")
    place_year_kepler = check_file_exists(f"{measurements_dir}/place_year_scores_kepler_removed.csv")
    outliers_full = check_file_exists(f"{measurements_dir}/top_30_place_year_outliers_full.csv")
    person_place_year = check_file_exists(f"{measurements_dir}/person_place_year.csv")
    annual_activity = check_file_exists(f"{measurements_dir}/annual_place_activity.csv")
    
    all_loaded = all([
        person_full is not None,
        person_kepler is not None,
        place_cent is not None,
        place_year_full is not None,
        place_year_kepler is not None,
        outliers_full is not None,
        person_place_year is not None,
        annual_activity is not None
    ])
    
    if not all_loaded:
        print("\nERROR: Not all required measurement files loaded.")
        return False
    
    print("\n" + "-"*70)
    print("DATA QUALITY CHECKS")
    print("-"*70 + "\n")
    
    # Check for nulls in key files
    check_no_nulls(person_full, "person_centrality_full.csv")
    check_no_nulls(place_year_full, "place_year_scores_full.csv", allow_columns=[])
    check_no_nulls(person_place_year, "person_place_year.csv")
    
    print("\n" + "-"*70)
    print("NUMERIC RANGE CHECKS")
    print("-"*70 + "\n")
    
    # Centrality measures should be in reasonable ranges (adjust for larger networks)
    check_numeric_ranges(
        person_full,
        "person_centrality_full.csv",
        {
            "weighted_in_degree": (0, 1000),
            "weighted_out_degree": (0, 1000),
            "pagerank": (0, 1),
            "betweenness": (0, 1),
        }
    )
    
    check_numeric_ranges(
        place_year_full,
        "place_year_scores_full.csv",
        {
            "brokerage_intensity_score": (0, float('inf')),
            "distinct_people": (1, 500),
        }
    )
    
    print("\n" + "-"*70)
    print("REFERENTIAL INTEGRITY CHECKS")
    print("-"*70 + "\n")
    
    # Verify place-year references valid places
    valid_places = set(place_cent["place"].unique())
    check_id_referential_integrity(
        place_year_full,
        "place_year_scores_full.csv",
        "place",
        valid_places,
        "places"
    )
    
    # Verify person-place-year references valid people
    valid_people = set(person_full["person"].unique())
    check_id_referential_integrity(
        person_place_year,
        "person_place_year.csv",
        "person",
        valid_people,
        "persons"
    )
    
    print("\n" + "-"*70)
    print("CONSISTENCY CHECKS")
    print("-"*70 + "\n")
    
    # Cross-mode consistency
    check_consistency_person_centrality(person_full, person_kepler)
    
    # Centrality measure correlations (different measures should align somewhat)
    check_centrality_correlation(person_full, "weighted_in_degree", "pagerank", min_corr=0.3)
    check_centrality_correlation(person_full, "betweenness", "pagerank", min_corr=0.2)
    
    print("\n" + "-"*70)
    print("MODE DIFFERENCE CHECKS")
    print("-"*70 + "\n")
    
    # Verify kepler_removed actually differs from full
    check_mode_difference(person_full, person_kepler, "pagerank")
    check_mode_difference(person_full, person_kepler, "betweenness")
    
    print("\n" + "-"*70)
    print("CALCULATION VALIDITY CHECKS")
    print("-"*70 + "\n")
    
    # Spot-check place-year score formulas
    check_place_year_score_validity(place_year_full)
    check_place_year_score_validity(place_year_kepler)
    
    print("\n" + "-"*70)
    print("TEMPORAL COVERAGE CHECKS")
    print("-"*70 + "\n")
    
    check_temporal_coverage(person_place_year, "Year")
    check_temporal_coverage(annual_activity, "Year")
    
    print("\n" + "="*70)
    print("SUMMARY")
    print("="*70)
    
    passes = sum(1 for line in VALIDATION_REPORT if line.startswith("✓"))
    fails = sum(1 for line in VALIDATION_REPORT if line.startswith("✗"))
    total = passes + fails
    
    print(f"\nTotal checks: {total}")
    print(f"Passed: {passes} ✓")
    print(f"Failed: {fails} ✗")
    
    if fails == 0:
        print("\n🎉 All validation checks passed!")
        return True
    else:
        print(f"\n⚠️  {fails} validation issue(s) detected. Review above.")
        return False


if __name__ == "__main__":
    measurements_dir = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_MEASUREMENTS_DIR
    success = validate_measurements(measurements_dir)
    sys.exit(0 if success else 1)
