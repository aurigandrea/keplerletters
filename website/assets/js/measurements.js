
/*
  measurements.js — Interactive charts for the Measurements page

  This script renders all visualizations and handles UI logic for the Measurements page.
  It is organized by research question:
    1) Who is central? (network centrality metrics)
    2) What changes if we remove Kepler? (network robustness)
    3) Which place-year-exchange combinations are unusual? (outlier detection)

  Data arrays (PERSONS, OUTLIERS, etc.) are exported from Python scripts as JSON.
  All chart rendering uses Plotly.js for consistency and interactivity.
  UI state (e.g., toggles) is managed with simple global variables and DOM updates.
  All major functions are documented for clarity and maintainability.
*/

// Data arrays are exported from the computed measurement CSV outputs.
// PERSONS: Array of all correspondents with centrality metrics (full network, including Kepler)
// Each object: { person, pagerank, betweenness, weighted_in_degree, weighted_out_degree }
const PERSONS = [{"person": "Kepler, Johannes, 1571-1630", "pagerank": 0.3569, "betweenness": 0.3761, "weighted_in_degree": 693, "weighted_out_degree": 374}, {"person": "M\u00e4stlin, Michael, 1550-1631", "pagerank": 0.0397, "betweenness": 0.0043, "weighted_in_degree": 44, "weighted_out_degree": 31}, {"person": "Bernegger, Matthias, 1582-1640", "pagerank": 0.0394, "betweenness": 0.012, "weighted_in_degree": 49, "weighted_out_degree": 28}, {"person": "Herwart von Hohenburg, Hans Georg, 1553-1622", "pagerank": 0.0278, "betweenness": 0.0073, "weighted_in_degree": 37, "weighted_out_degree": 70}, {"person": "Schickard, Wilhelm, 1592-1635", "pagerank": 0.0164, "betweenness": 0.0073, "weighted_in_degree": 19, "weighted_out_degree": 25}, {"person": "M\u00fcller, Philip, 1585-1659", "pagerank": 0.0122, "betweenness": 0.0, "weighted_in_degree": 16, "weighted_out_degree": 1}, {"person": "Albert (Herr), fl. 1606", "pagerank": 0.0112, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Guldin, Paul, 1577-1643", "pagerank": 0.011, "betweenness": 0.0, "weighted_in_degree": 13, "weighted_out_degree": 1}, {"person": "W\u00fcrttemberg, Johann Friedrich von, 1582-1628", "pagerank": 0.0109, "betweenness": 0.0, "weighted_in_degree": 12, "weighted_out_degree": 1}, {"person": "Galilei, Galileo, 1564-1642", "pagerank": 0.0104, "betweenness": 0.0103, "weighted_in_degree": 15, "weighted_out_degree": 6}, {"person": "W\u00fcrttemberg, Friedrich I von, 1557-1608", "pagerank": 0.0098, "betweenness": 0.0, "weighted_in_degree": 10, "weighted_out_degree": 3}, {"person": "Fabricius, David, 1564-1617", "pagerank": 0.0084, "betweenness": 0.0, "weighted_in_degree": 9, "weighted_out_degree": 40}, {"person": "Cr\u00fcger, Peter, 1580-1639", "pagerank": 0.0076, "betweenness": 0.0, "weighted_in_degree": 8, "weighted_out_degree": 13}, {"person": "Calvisius, Sethus, 1556-1615", "pagerank": 0.0076, "betweenness": 0.0, "weighted_in_degree": 8, "weighted_out_degree": 6}, {"person": "Brahe, Tycho, 1546-1601", "pagerank": 0.0064, "betweenness": 0.0121, "weighted_in_degree": 8, "weighted_out_degree": 13}, {"person": "Quietanus, Johannes Remus, 1588-1654", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 6, "weighted_out_degree": 11}, {"person": "Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634", "pagerank": 0.006, "betweenness": 0.003, "weighted_in_degree": 6, "weighted_out_degree": 5}, {"person": "Magini, Giovanni Antonio, 1555-1617", "pagerank": 0.0053, "betweenness": 0.0022, "weighted_in_degree": 5, "weighted_out_degree": 4}, {"person": "Bianchi, Vincenzo, 1583-1637", "pagerank": 0.0052, "betweenness": 0.0, "weighted_in_degree": 5, "weighted_out_degree": 7}, {"person": "Rudolf II, 1552-1612", "pagerank": 0.0052, "betweenness": 0.0, "weighted_in_degree": 5, "weighted_out_degree": 0}, {"person": "T\u00fcbingen University, formed 1477", "pagerank": 0.0049, "betweenness": 0.0052, "weighted_in_degree": 4, "weighted_out_degree": 3}, {"person": "Hafenreffer, Matthias, 1561-1619", "pagerank": 0.0046, "betweenness": 0.0, "weighted_in_degree": 4, "weighted_out_degree": 11}, {"person": "Vicke, Nikolaus, fl. 1605", "pagerank": 0.0044, "betweenness": 0.0, "weighted_in_degree": 4, "weighted_out_degree": 13}, {"person": "Brengger, Johann Georg, 1559-1637 or after", "pagerank": 0.0044, "betweenness": 0.0, "weighted_in_degree": 4, "weighted_out_degree": 5}, {"person": "Wacker von Wackenfels, Joannes Matthaeus, 1550-1619", "pagerank": 0.0044, "betweenness": 0.0, "weighted_in_degree": 4, "weighted_out_degree": 0}];

// PERSONS_NO_KEPLER: Same as PERSONS, but with Kepler removed from the network (for robustness analysis)
const PERSONS_NO_KEPLER = [{"person": "Burgermeister and Council, Weil der Stadt, fl. 1590-1591", "pagerank": 0.0214, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 2}, {"person": "T\u00fcbingen University, formed 1477", "pagerank": 0.0214, "betweenness": 0.0, "weighted_in_degree": 2, "weighted_out_degree": 1}, {"person": "M\u00e4stlin, Michael, 1550-1631", "pagerank": 0.0202, "betweenness": 0.0003, "weighted_in_degree": 5, "weighted_out_degree": 3}, {"person": "Brahe, Tycho, 1546-1601", "pagerank": 0.0175, "betweenness": 0.0008, "weighted_in_degree": 4, "weighted_out_degree": 9}, {"person": "Galilei, Galileo, 1564-1642", "pagerank": 0.0153, "betweenness": 0.0001, "weighted_in_degree": 8, "weighted_out_degree": 3}, {"person": "Schickard, Wilhelm, 1592-1635", "pagerank": 0.015, "betweenness": 0.0004, "weighted_in_degree": 6, "weighted_out_degree": 7}, {"person": "W\u00fcrttemberg, Friedrich I von, 1557-1608", "pagerank": 0.0147, "betweenness": 0.0, "weighted_in_degree": 2, "weighted_out_degree": 2}, {"person": "Bernegger, Matthias, 1582-1640", "pagerank": 0.0142, "betweenness": 0.0004, "weighted_in_degree": 6, "weighted_out_degree": 7}, {"person": "Herwart von Hohenburg, Hans Georg, 1553-1622", "pagerank": 0.0105, "betweenness": 0.0005, "weighted_in_degree": 7, "weighted_out_degree": 4}, {"person": "M\u00fcller, Philip, 1585-1659", "pagerank": 0.0103, "betweenness": 0.0, "weighted_in_degree": 7, "weighted_out_degree": 0}, {"person": "Hafenreffer, Matthias, 1561-1619", "pagerank": 0.009, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Guldin, Paul, 1577-1643", "pagerank": 0.0088, "betweenness": 0.0, "weighted_in_degree": 2, "weighted_out_degree": 0}, {"person": "Albert (Herr), fl. 1606", "pagerank": 0.0084, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Hoffmann, Johannes Fridericus, fl. 1600", "pagerank": 0.0082, "betweenness": 0.0, "weighted_in_degree": 3, "weighted_out_degree": 1}, {"person": "Medici, Giuliano de', fl. 1610-1611", "pagerank": 0.0076, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 3}, {"person": "Vinta, Belisario, 1542-1613", "pagerank": 0.0076, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Carosio, Matteo, fl. 1610", "pagerank": 0.0076, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Memhard, Johann, fl. 1602", "pagerank": 0.0072, "betweenness": 0.0, "weighted_in_degree": 2, "weighted_out_degree": 0}, {"person": "Hochkircher, Christoph von, fl. 1624", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 2, "weighted_out_degree": 0}, {"person": "Cysat, Johann Baptist, 1587-1657", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 2, "weighted_out_degree": 0}, {"person": "Schulten, Otto, d.1624", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Johann Georg I, Elector of Saxony, 1585-1656", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Osiander, Lucas II, 1571-1638", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Bayer, Andreas, 1566-1635", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}, {"person": "Bacon, Francis, 1561-1626", "pagerank": 0.006, "betweenness": 0.0, "weighted_in_degree": 1, "weighted_out_degree": 0}];

// COMP: Comparison of centrality metrics for selected correspondents, with and without Kepler
// Each object: { person, betweenness_full, betweenness_no_kepler, pagerank_full, pagerank_no_kepler, pagerank_change }
const COMP = [{"person": "Brahe, Tycho, 1546-1601", "betweenness_full": 0.01207, "betweenness_no_kepler": 0.00078, "pagerank_full": 0.00636, "pagerank_no_kepler": 0.01745, "pagerank_change": 0.01109}, {"person": "Bernegger, Matthias, 1582-1640", "betweenness_full": 0.01202, "betweenness_no_kepler": 0.00042, "pagerank_full": 0.03936, "pagerank_no_kepler": 0.01421, "pagerank_change": -0.02515}, {"person": "Galilei, Galileo, 1564-1642", "betweenness_full": 0.0103, "betweenness_no_kepler": 0.00014, "pagerank_full": 0.01044, "pagerank_no_kepler": 0.01525, "pagerank_change": 0.00481}, {"person": "Herwart von Hohenburg, Hans Georg, 1553-1622", "betweenness_full": 0.00731, "betweenness_no_kepler": 0.00049, "pagerank_full": 0.02778, "pagerank_no_kepler": 0.01045, "pagerank_change": -0.01733}, {"person": "Schickard, Wilhelm, 1592-1635", "betweenness_full": 0.00731, "betweenness_no_kepler": 0.00044, "pagerank_full": 0.01644, "pagerank_no_kepler": 0.01503, "pagerank_change": -0.00141}, {"person": "T\u00fcbingen University, formed 1477", "betweenness_full": 0.00515, "betweenness_no_kepler": 0.0, "pagerank_full": 0.00487, "pagerank_no_kepler": 0.02144, "pagerank_change": 0.01657}, {"person": "M\u00e4stlin, Michael, 1550-1631", "betweenness_full": 0.0043, "betweenness_no_kepler": 0.00026, "pagerank_full": 0.03967, "pagerank_no_kepler": 0.02017, "pagerank_change": -0.0195}, {"person": "Taxis, Gerhard von, 1578-1654", "betweenness_full": 0.00303, "betweenness_no_kepler": 0.0, "pagerank_full": 0.00355, "pagerank_no_kepler": 0.00326, "pagerank_change": -0.00029}, {"person": "Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634", "betweenness_full": 0.00301, "betweenness_no_kepler": 0.0, "pagerank_full": 0.00599, "pagerank_no_kepler": 0.00326, "pagerank_change": -0.00273}, {"person": "Cysat, Johann Baptist, 1587-1657", "betweenness_full": 0.00218, "betweenness_no_kepler": 0.0, "pagerank_full": 0.00207, "pagerank_no_kepler": 0.00603, "pagerank_change": 0.00396}, {"person": "Osiander, Lucas II, 1571-1638", "betweenness_full": 0.00218, "betweenness_no_kepler": 0.0, "pagerank_full": 0.00207, "pagerank_no_kepler": 0.00603, "pagerank_change": 0.00396}, {"person": "Magini, Giovanni Antonio, 1555-1617", "betweenness_full": 0.00216, "betweenness_no_kepler": 0.0, "pagerank_full": 0.00532, "pagerank_no_kepler": 0.00603, "pagerank_change": 0.00072}];

// OUTLIERS: Place-year combinations with unusually high brokerage/meeting intensity (full network)
const OUTLIERS = [{"place": "Baierdorf bei Anger, Styria, Austria", "Year": 1598, "brokerage_intensity_score": 0.7521, "meeting_intensity_score": 2134.0, "distinct_people": 1, "mentions": 1}, {"place": "Steyregg, Upper Austria, Austria", "Year": 1613, "brokerage_intensity_score": 0.7521, "meeting_intensity_score": 2134.0, "distinct_people": 1, "mentions": 1}, {"place": "Bad Cannstatt, Baden-W\u00fcrttemberg, Germany", "Year": 1617, "brokerage_intensity_score": 0.7521, "meeting_intensity_score": 2134.0, "distinct_people": 1, "mentions": 1}, {"place": "Leonberg, Baden-W\u00fcrttemberg, Germany", "Year": 1593, "brokerage_intensity_score": 0.4745, "meeting_intensity_score": 1346.4041, "distinct_people": 1, "mentions": 1}, {"place": "Styria, Austria", "Year": 1605, "brokerage_intensity_score": 0.4745, "meeting_intensity_score": 1346.4041, "distinct_people": 1, "mentions": 1}, {"place": "Rossw\u00e4lden, Baden-W\u00fcrttemberg, Germany", "Year": 1625, "brokerage_intensity_score": 0.4745, "meeting_intensity_score": 1346.4041, "distinct_people": 1, "mentions": 2}, {"place": "Wels, Upper Austria, Austria", "Year": 1614, "brokerage_intensity_score": 0.388, "meeting_intensity_score": 1101.4989, "distinct_people": 3, "mentions": 3}, {"place": "Wels, Upper Austria, Austria", "Year": 1623, "brokerage_intensity_score": 0.291, "meeting_intensity_score": 825.5439, "distinct_people": 1, "mentions": 2}, {"place": "Eferding, Upper Austria, Austria", "Year": 1613, "brokerage_intensity_score": 0.291, "meeting_intensity_score": 825.5439, "distinct_people": 1, "mentions": 1}, {"place": "Luba\u0144, Lower Silesia, Poland", "Year": 1630, "brokerage_intensity_score": 0.291, "meeting_intensity_score": 825.5439, "distinct_people": 1, "mentions": 1}, {"place": "Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic", "Year": 1630, "brokerage_intensity_score": 0.2728, "meeting_intensity_score": 774.9716, "distinct_people": 3, "mentions": 5}, {"place": "G\u00fcglingen, Baden-W\u00fcrttemberg, Germany", "Year": 1620, "brokerage_intensity_score": 0.2679, "meeting_intensity_score": 760.1461, "distinct_people": 1, "mentions": 6}, {"place": "Ingolstadt, Bavaria, Germany, (Holy Roman Empire)", "Year": 1620, "brokerage_intensity_score": 0.2679, "meeting_intensity_score": 760.1461, "distinct_people": 1, "mentions": 2}, {"place": "Ulm, Baden-W\u00fcrttemberg, Germany", "Year": 1627, "brokerage_intensity_score": 0.2376, "meeting_intensity_score": 674.0631, "distinct_people": 3, "mentions": 33}, {"place": "Frankfurt am Main, Hesse, Germany", "Year": 1630, "brokerage_intensity_score": 0.2373, "meeting_intensity_score": 673.202, "distinct_people": 1, "mentions": 1}, {"place": "Frankfurt am Main, Hesse, Germany", "Year": 1627, "brokerage_intensity_score": 0.2373, "meeting_intensity_score": 673.202, "distinct_people": 1, "mentions": 1}, {"place": "Graz, Styria, Austria", "Year": 1597, "brokerage_intensity_score": 0.227, "meeting_intensity_score": 644.07, "distinct_people": 4, "mentions": 27}, {"place": "G\u00f6rlitz, Saxony, Germany", "Year": 1629, "brokerage_intensity_score": 0.2098, "meeting_intensity_score": 595.2642, "distinct_people": 1, "mentions": 4}, {"place": "Prague, Czech Republic", "Year": 1606, "brokerage_intensity_score": 0.2035, "meeting_intensity_score": 577.4018, "distinct_people": 5, "mentions": 43}, {"place": "Prague, Czech Republic", "Year": 1604, "brokerage_intensity_score": 0.1871, "meeting_intensity_score": 530.9721, "distinct_people": 4, "mentions": 42}, {"place": "Graz, Styria, Austria", "Year": 1594, "brokerage_intensity_score": 0.184, "meeting_intensity_score": 522.1932, "distinct_people": 3, "mentions": 9}, {"place": "Prague, Czech Republic", "Year": 1605, "brokerage_intensity_score": 0.1837, "meeting_intensity_score": 521.4073, "distinct_people": 4, "mentions": 47}, {"place": "Prague, Czech Republic", "Year": 1601, "brokerage_intensity_score": 0.1817, "meeting_intensity_score": 516.2875, "distinct_people": 5, "mentions": 22}, {"place": "Vienna, Wien, Austria", "Year": 1624, "brokerage_intensity_score": 0.1786, "meeting_intensity_score": 508.2264, "distinct_people": 4, "mentions": 10}, {"place": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)", "Year": 1596, "brokerage_intensity_score": 0.1712, "meeting_intensity_score": 486.842, "distinct_people": 2, "mentions": 27}, {"place": "Linz, Upper Austria, Austria", "Year": 1613, "brokerage_intensity_score": 0.1703, "meeting_intensity_score": 483.3655, "distinct_people": 3, "mentions": 21}, {"place": "Regensburg, Bavaria, Germany", "Year": 1613, "brokerage_intensity_score": 0.1687, "meeting_intensity_score": 478.5363, "distinct_people": 1, "mentions": 6}, {"place": "Regensburg, Bavaria, Germany", "Year": 1625, "brokerage_intensity_score": 0.1687, "meeting_intensity_score": 478.5363, "distinct_people": 1, "mentions": 1}, {"place": "Regensburg, Bavaria, Germany", "Year": 1621, "brokerage_intensity_score": 0.1687, "meeting_intensity_score": 478.5363, "distinct_people": 1, "mentions": 5}, {"place": "Regensburg, Bavaria, Germany", "Year": 1617, "brokerage_intensity_score": 0.1687, "meeting_intensity_score": 478.5363, "distinct_people": 1, "mentions": 1}];

// OUTLIERS_NO_KEPLER: Outlier place-years with Kepler removed (for robustness analysis)
const OUTLIERS_NO_KEPLER = [{"place": "Girsitz", "Year": 1599, "brokerage_intensity_score": 0.0011767782426778243, "meeting_intensity_score": 19.5, "distinct_people": 2, "mentions": 2}, {"place": "Wandsbek, Hamburg, Germany", "Year": 1598, "brokerage_intensity_score": 0.0007845188284518828, "meeting_intensity_score": 13.0, "distinct_people": 1, "mentions": 2}, {"place": "Wandsbek, Hamburg, Germany", "Year": 1597, "brokerage_intensity_score": 0.0007845188284518828, "meeting_intensity_score": 13.0, "distinct_people": 1, "mentions": 1}, {"place": "Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic", "Year": 1600, "brokerage_intensity_score": 0.0004240138406286397, "meeting_intensity_score": 7.026192015110313, "distinct_people": 1, "mentions": 11}, {"place": "Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic", "Year": 1599, "brokerage_intensity_score": 0.0004240138406286397, "meeting_intensity_score": 7.026192015110313, "distinct_people": 1, "mentions": 1}, {"place": "Wittenberg, Saxony-Anhalt, Germany", "Year": 1599, "brokerage_intensity_score": 0.00034221384725763315, "meeting_intensity_score": 5.67071159162382, "distinct_people": 1, "mentions": 1}, {"place": "N\u00fcrtingen, Baden-W\u00fcrttemberg, Germany", "Year": 1618, "brokerage_intensity_score": 0.0003105013834623624, "meeting_intensity_score": 9.261386864808577, "distinct_people": 1, "mentions": 5}, {"place": "N\u00fcrtingen, Baden-W\u00fcrttemberg, Germany", "Year": 1617, "brokerage_intensity_score": 0.0003105013834623624, "meeting_intensity_score": 9.261386864808577, "distinct_people": 1, "mentions": 1}, {"place": "Prague, Czech Republic", "Year": 1600, "brokerage_intensity_score": 0.00028970739323683014, "meeting_intensity_score": 5.149409426039764, "distinct_people": 5, "mentions": 14}, {"place": "Bellosguardo , Florence, Tuscany, Italy", "Year": 1627, "brokerage_intensity_score": 0.0002789400278940028, "meeting_intensity_score": 22.0, "distinct_people": 1, "mentions": 1}, {"place": "Calw, Baden-W\u00fcrttemberg, Germany", "Year": 1594, "brokerage_intensity_score": 0.00026775870599607166, "meeting_intensity_score": 8.532577431074817, "distinct_people": 2, "mentions": 2}, {"place": "Calw, Baden-W\u00fcrttemberg, Germany", "Year": 1595, "brokerage_intensity_score": 0.00022524924585428505, "meeting_intensity_score": 6.890824929174289, "distinct_people": 1, "mentions": 2}, {"place": "Munich, Bavaria, Germany", "Year": 1597, "brokerage_intensity_score": 0.00021229561054754637, "meeting_intensity_score": 4.783929943967138, "distinct_people": 2, "mentions": 7}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1620, "brokerage_intensity_score": 0.0002106481283632101, "meeting_intensity_score": 6.29366607553968, "distinct_people": 3, "mentions": 10}, {"place": "Strasbourg, Grand Est, France", "Year": 1628, "brokerage_intensity_score": 0.00019677656518549965, "meeting_intensity_score": 6.134295532087098, "distinct_people": 2, "mentions": 12}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1624, "brokerage_intensity_score": 0.00019290121644982612, "meeting_intensity_score": 5.753703163292252, "distinct_people": 3, "mentions": 6}, {"place": "Strasbourg, Grand Est, France", "Year": 1621, "brokerage_intensity_score": 0.00019066549173253383, "meeting_intensity_score": 5.923976828129826, "distinct_people": 2, "mentions": 7}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1623, "brokerage_intensity_score": 0.00018518516779183306, "meeting_intensity_score": 5.5235550367605635, "distinct_people": 3, "mentions": 5}, {"place": "Strasbourg, Grand Est, France", "Year": 1625, "brokerage_intensity_score": 0.00018501274878854045, "meeting_intensity_score": 5.766237800161872, "distinct_people": 2, "mentions": 4}, {"place": "Strasbourg, Grand Est, France", "Year": 1620, "brokerage_intensity_score": 0.00017966555951719535, "meeting_intensity_score": 5.58220893419926, "distinct_people": 2, "mentions": 4}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1627, "brokerage_intensity_score": 0.0001742724808173876, "meeting_intensity_score": 5.198060139836383, "distinct_people": 2, "mentions": 10}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1596, "brokerage_intensity_score": 0.0001649305400646013, "meeting_intensity_score": 5.211527288289713, "distinct_people": 7, "mentions": 24}, {"place": "Strasbourg, Grand Est, France", "Year": 1617, "brokerage_intensity_score": 0.00016426565441572146, "meeting_intensity_score": 5.103733882696465, "distinct_people": 2, "mentions": 5}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1626, "brokerage_intensity_score": 0.00016051412706864646, "meeting_intensity_score": 4.787686970901932, "distinct_people": 2, "mentions": 4}, {"place": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany", "Year": 1621, "brokerage_intensity_score": 0.00014675577331990533, "meeting_intensity_score": 4.37731380196748, "distinct_people": 2, "mentions": 5}, {"place": "Munich, Bavaria, Germany", "Year": 1601, "brokerage_intensity_score": 0.0001442469724199167, "meeting_intensity_score": 3.2505024899310944, "distinct_people": 1, "mentions": 4}, {"place": "Munich, Bavaria, Germany", "Year": 1609, "brokerage_intensity_score": 0.0001442469724199167, "meeting_intensity_score": 3.2505024899310944, "distinct_people": 1, "mentions": 6}, {"place": "Munich, Bavaria, Germany", "Year": 1600, "brokerage_intensity_score": 0.0001442469724199167, "meeting_intensity_score": 3.2505024899310944, "distinct_people": 1, "mentions": 7}, {"place": "Munich, Bavaria, Germany", "Year": 1604, "brokerage_intensity_score": 0.0001442469724199167, "meeting_intensity_score": 3.2505024899310944, "distinct_people": 1, "mentions": 4}, {"place": "Munich, Bavaria, Germany", "Year": 1607, "brokerage_intensity_score": 0.0001442469724199167, "meeting_intensity_score": 3.2505024899310944, "distinct_people": 1, "mentions": 10}];

// LAYOUT_BASE: Shared Plotly layout settings for all charts (background, font, axes, etc.)
const LAYOUT_BASE = {
  paper_bgcolor: "rgba(14,23,46,0)",
  plot_bgcolor: "rgba(14,23,46,0)",
  font: { family: "Space Grotesk, sans-serif", color: "#d8d4cc", size: 12 },
  margin: { t: 20, r: 20, b: 80, l: 220 },
  xaxis: { gridcolor: "#2a365f", zerolinecolor: "#2a365f" },
  yaxis: { gridcolor: "#2a365f", zerolinecolor: "#2a365f" },
};

// CONFIG: Plotly config for responsiveness and minimal UI
const CONFIG = { responsive: true, displayModeBar: false };

// METRIC_MAP: Maps metric keys to data keys and axis labels for centrality chart
const METRIC_MAP = {
  pagerank: { key: "pagerank", label: "PageRank Score" },
  betweenness: { key: "betweenness", label: "Betweenness Centrality" },
  in_degree: { key: "weighted_in_degree", label: "Letters Received (weighted)" },
  out_degree: { key: "weighted_out_degree", label: "Letters Sent (weighted)" },
};

// UI state variables
let currentMetric = "pagerank";         // Which metric is currently shown in the centrality chart
let keplerRemoved = false;              // Is Kepler removed from the centrality chart?
let outliersKeplerRemoved = false;      // Is Kepler removed from the outliers chart?
let resizeTimer = null;                 // Debounce chart rerender on viewport resize.

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// shortName: Utility to shorten person names for y-axis labels (removes dates, "fl.", etc.)
function shortName(name) {
  return name
    .replace(/,\s*\d{4}-\d{4}.*$/, "")
    .replace(/,\s*fl\..*$/, "")
    .replace(/,\s*d\..*$/, "")
    .replace(/,\s*formed.*$/, "")
    .trim();
}

// getCentralityDataset: Returns the correct dataset for the centrality chart based on toggle state
function getCentralityDataset() {
  return keplerRemoved ? PERSONS_NO_KEPLER : PERSONS;
}

// updateKeplerToggleVisual: Updates the appearance of the Kepler toggle button
function updateKeplerToggleVisual() {
  const btn = document.getElementById("kepler-toggle");
  if (!btn) return;

  if (keplerRemoved) {
    btn.textContent = "Kepler Removed";
    btn.style.background = "var(--accent)";
    btn.style.color = "#1f1a11";
    btn.style.borderColor = "var(--accent)";
    btn.style.fontWeight = "700";
  } else {
    btn.textContent = "Remove Kepler";
    btn.style.background = "transparent";
    btn.style.color = "var(--accent)";
    btn.style.borderColor = "var(--accent)";
    btn.style.fontWeight = "";
  }
}

// updateOutliersToggleVisual: Updates the appearance of the outliers Kepler toggle button
function updateOutliersToggleVisual() {
  const btn = document.getElementById("outliers-toggle");
  if (!btn) return;

  if (outliersKeplerRemoved) {
    btn.textContent = "Kepler Removed";
    btn.style.background = "var(--accent)";
    btn.style.color = "#1f1a11";
    btn.style.borderColor = "var(--accent)";
    btn.style.fontWeight = "700";
  } else {
    btn.textContent = "Remove Kepler";
    btn.style.background = "transparent";
    btn.style.color = "var(--accent)";
    btn.style.borderColor = "var(--accent)";
    btn.style.fontWeight = "";
  }
}

// renderCentrality: Draws the centrality bar chart for the selected metric and dataset
// metric: one of 'pagerank', 'betweenness', 'in_degree', 'out_degree'
function renderCentrality(metric) {
  const metricInfo = METRIC_MAP[metric];
  // Sort correspondents by selected metric (descending)
  const sorted = [...getCentralityDataset()].sort((a, b) => b[metricInfo.key] - a[metricInfo.key]);

  const trace = {
    type: "bar",
    orientation: "h",
    x: sorted.map((d) => d[metricInfo.key]),
    y: sorted.map((d) => shortName(d.person)),
    customdata: sorted.map((d) => d.person),
    marker: {
      color: sorted.map((d) => (d.person.startsWith("Kepler") ? "#f0bf69" : "#3b82f6")),
      opacity: 0.9,
    },
    hovertemplate: "<b>%{customdata}</b><br>" + metricInfo.label + ": %{x}<extra></extra>",
  };

  const layout = {
    ...LAYOUT_BASE,
    xaxis: { ...LAYOUT_BASE.xaxis, title: metricInfo.label },
    yaxis: { ...LAYOUT_BASE.yaxis, autorange: "reversed", tickfont: { size: 11 } },
    margin: { t: 20, r: 30, b: 50, l: 220 },
  };

  Plotly.react("chart-centrality", [trace], layout, CONFIG);
}

// renderDiff: Draws the comparison chart showing how centrality changes if Kepler is removed
// Shows betweenness (full vs. no Kepler) and PageRank delta for selected correspondents
function renderDiff() {
  // Only include correspondents with nonzero betweenness in the full network
  const ranked = [...COMP]
    .filter((d) => d.betweenness_full > 0)
    .sort((a, b) => b.betweenness_full - a.betweenness_full);

  const names = ranked.map((d) => shortName(d.person));

  // Bar: Betweenness in full network
  const traceFull = {
    type: "bar",
    orientation: "h",
    name: "Betweenness (full network)",
    x: ranked.map((d) => d.betweenness_full),
    y: names,
    marker: { color: "#3b82f6", opacity: 0.85 },
    hovertemplate: "<b>%{y}</b><br>Betweenness (full): %{x:.5f}<extra></extra>",
  };

  // Bar: Betweenness with Kepler removed
  const traceNoKepler = {
    type: "bar",
    orientation: "h",
    name: "Betweenness (Kepler removed)",
    x: ranked.map((d) => d.betweenness_no_kepler || 0),
    y: names,
    marker: { color: "#d6a451", opacity: 0.85 },
    hovertemplate: "<b>%{y}</b><br>Betweenness (no Kepler): %{x:.5f}<extra></extra>",
  };

  // Bar: PageRank change (delta) if Kepler is removed
  const tracePageRankChange = {
    type: "bar",
    orientation: "h",
    name: "PageRank change (no Kepler)",
    x: ranked.map((d) => d.pagerank_change),
    y: names,
    xaxis: "x2",
    marker: {
      color: ranked.map((d) => (d.pagerank_change >= 0 ? "#34d399" : "#f87171")),
      opacity: 0.8,
    },
    hovertemplate: "<b>%{y}</b><br>PageRank change: %{x:+.5f}<extra></extra>",
  };

  if (isMobileViewport()) {
    const mobileLayout = {
      ...LAYOUT_BASE,
      margin: { t: 20, r: 20, b: 50, l: 165 },
      yaxis: { ...LAYOUT_BASE.yaxis, autorange: "reversed", tickfont: { size: 10 } },
      xaxis: {
        ...LAYOUT_BASE.xaxis,
        title: "PageRank Delta (no Kepler)",
        zerolinecolor: "#f87171",
      },
      showlegend: false,
    };

    Plotly.react("chart-diff", [tracePageRankChange], mobileLayout, CONFIG);
    return;
  }

  const layout = {
    ...LAYOUT_BASE,
    barmode: "group",
    margin: { t: 30, r: 160, b: 50, l: 230 },
    yaxis: { ...LAYOUT_BASE.yaxis, autorange: "reversed", tickfont: { size: 11 } },
    xaxis: {
      ...LAYOUT_BASE.xaxis,
      title: "Betweenness Centrality",
      domain: [0, 0.58],
    },
    xaxis2: {
      gridcolor: "#2a365f",
      zerolinecolor: "#f87171",
      title: "PageRank Delta (no Kepler)",
      domain: [0.63, 1],
      overlaying: false,
      side: "top",
    },
    legend: {
      orientation: "h",
      y: -0.12,
      font: { size: 11 },
      bgcolor: "rgba(0,0,0,0)",
    },
    annotations: [
      {
        text: "Betweenness",
        xref: "paper",
        yref: "paper",
        x: 0.27,
        y: 1.03,
        showarrow: false,
        font: { color: "#d8d4cc", size: 11 },
      },
    ],
  };

  Plotly.react("chart-diff", [traceFull, traceNoKepler, tracePageRankChange], layout, CONFIG);
}

// renderOutliers: Draws the place-year outliers scatterplot (brokerage intensity vs. year)
// Uses OUTLIERS or OUTLIERS_NO_KEPLER depending on toggle state
function renderOutliers() {
  const data = outliersKeplerRemoved ? OUTLIERS_NO_KEPLER : OUTLIERS;
  
  const trace = {
    type: "scatter",
    mode: "markers",
    x: data.map((d) => d.Year),
    y: data.map((d) => d.brokerage_intensity_score),
    text: data.map((d) => `${d.place} (${d.Year})`),
    marker: {
      size: data.map((d) => Math.max(8, Math.sqrt(d.mentions) * 5)), // marker size by mentions
      color: data.map((d) => d.distinct_people), // color by number of distinct people
      colorscale: [
        [0, "#1e3a5f"],
        [0.33, "#3b82f6"],
        [0.66, "#d6a451"],
        [1, "#f0bf69"],
      ],
      colorbar: {
        title: { text: "Distinct<br>People", font: { color: "#d8d4cc", size: 11 } },
        tickfont: { color: "#d8d4cc" },
        thickness: 14,
      },
      line: { color: "rgba(255,255,255,0.15)", width: 1 },
      opacity: 0.9,
    },
    customdata: data.map((d) => [d.place, d.distinct_people, d.mentions, d.brokerage_intensity_score]),
    hovertemplate:
      "<b>%{customdata[0]}</b><br>" +
      "Year: %{x}<br>" +
      "Brokerage score: %{customdata[3]:.4f}<br>" +
      "Distinct people: %{customdata[1]}<br>" +
      "Letter mentions: %{customdata[2]}<extra></extra>",
  };

  const layout = {
    ...LAYOUT_BASE,
    margin: { t: 20, r: 120, b: 60, l: 70 },
    xaxis: {
      ...LAYOUT_BASE.xaxis,
      title: "Year",
      tickmode: "linear",
      dtick: 5,
      range: [1588, 1633],
    },
    yaxis: {
      ...LAYOUT_BASE.yaxis,
      title: "Brokerage Intensity Score",
    },
    hovermode: "closest",
  };

  Plotly.newPlot("chart-outliers", [trace], layout, CONFIG);
}

// showMetric: Handles tab switching for centrality metrics (UI and chart update)
function showMetric(metric) {
  currentMetric = metric;
  document.querySelectorAll("#metric-tab-group .tab-btn").forEach((btn) => {
    const active = (btn.getAttribute("onclick") || "").includes(`'${metric}'`);
    btn.classList.toggle("active", active);
  });
  renderCentrality(currentMetric);
}

// toggleKepler: Toggles Kepler on/off for the centrality chart and updates UI
function toggleKepler() {
  keplerRemoved = !keplerRemoved;
  updateKeplerToggleVisual();
  renderCentrality(currentMetric);
}

// toggleOutliersKepler: Toggles Kepler on/off for the outliers chart and updates UI
function toggleOutliersKepler() {
  outliersKeplerRemoved = !outliersKeplerRemoved;
  updateOutliersToggleVisual();
  renderOutliers();
}

// Expose handlers to inline onclick attributes in the HTML (for tab and toggle buttons)
window.showMetric = showMetric;
window.toggleKepler = toggleKepler;
window.toggleOutliersKepler = toggleOutliersKepler;

// initMeasurementsPage: Initializes all charts and UI state on DOMContentLoaded
function initMeasurementsPage() {
  updateKeplerToggleVisual();
  updateOutliersToggleVisual();
  renderCentrality(currentMetric);
  renderDiff();
  renderOutliers();

  // Re-render comparison chart when crossing responsive breakpoints.
  window.addEventListener("resize", () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => {
      renderDiff();
    }, 120);
  });
}

// Initialize charts when the page is fully loaded
document.addEventListener("DOMContentLoaded", initMeasurementsPage);
