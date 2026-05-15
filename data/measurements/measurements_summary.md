# Measurements Summary

This file provides a quick interpretation layer on top of the CSV outputs.

## Person Network (Kepler Included)
Top people by weighted total degree:

| person                                       |   weighted_in_degree |   weighted_out_degree |   weighted_total_degree |   betweenness |   pagerank |
|:---------------------------------------------|---------------------:|----------------------:|------------------------:|--------------:|-----------:|
| Kepler, Johannes, 1571-1630                  |                  693 |                   374 |                    1067 |    0.376072   | 0.356889   |
| Herwart von Hohenburg, Hans Georg, 1553-1622 |                   37 |                    70 |                     107 |    0.00731328 | 0.0277804  |
| Bernegger, Matthias, 1582-1640               |                   49 |                    28 |                      77 |    0.0120159  | 0.0393593  |
| Mästlin, Michael, 1550-1631                  |                   44 |                    31 |                      75 |    0.00430498 | 0.0396744  |
| Fabricius, David, 1564-1617                  |                    9 |                    40 |                      49 |    0          | 0.00842215 |
| Schickard, Wilhelm, 1592-1635                |                   19 |                    25 |                      44 |    0.00731328 | 0.0164372  |
| Hebenstreit, Johann Baptist, 1580-1638       |                    1 |                    30 |                      31 |    0          | 0.00231482 |
| Crüger, Peter, 1580-1639                     |                    8 |                    13 |                      21 |    0          | 0.00761084 |
| Brahe, Tycho, 1546-1601                      |                    8 |                    13 |                      21 |    0.0120678  | 0.00636427 |
| Pape, Johann, 1558-1622                      |                    0 |                    21 |                      21 |    0          | 0.00112036 |

## Person Network (Kepler Removed)
Top people by weighted total degree:

| person                                       |   weighted_in_degree |   weighted_out_degree |   weighted_total_degree |   betweenness |   pagerank |
|:---------------------------------------------|---------------------:|----------------------:|------------------------:|--------------:|-----------:|
| Brahe, Tycho, 1546-1601                      |                    4 |                     9 |                      13 |   0.000784519 | 0.0174535  |
| Schickard, Wilhelm, 1592-1635                |                    6 |                     7 |                      13 |   0.000435844 | 0.0150296  |
| Bernegger, Matthias, 1582-1640               |                    6 |                     7 |                      13 |   0.00041841  | 0.0142125  |
| Galilei, Galileo, 1564-1642                  |                    8 |                     3 |                      11 |   0.00013947  | 0.0152516  |
| Herwart von Hohenburg, Hans Georg, 1553-1622 |                    7 |                     4 |                      11 |   0.000488145 | 0.0104539  |
| Mästlin, Michael, 1550-1631                  |                    5 |                     3 |                       8 |   0.000261506 | 0.0201742  |
| Müller, Philip, 1585-1659                    |                    7 |                     0 |                       7 |   0           | 0.0102727  |
| Crüger, Peter, 1580-1639                     |                    0 |                     5 |                       5 |   0           | 0.00326101 |
| Württemberg, Friedrich I von, 1557-1608      |                    2 |                     2 |                       4 |   0           | 0.0146951  |
| Medici, Giuliano de', fl. 1610-1611          |                    1 |                     3 |                       4 |   0           | 0.0075829  |

## Unexpected Places Of Interest (Kepler Included)
Top place-years by brokerage_intensity_score:

| place                                     |   Year |   distinct_people |   place_total_activity |   brokerage_intensity_score |   meeting_intensity_score |
|:------------------------------------------|-------:|------------------:|-----------------------:|----------------------------:|--------------------------:|
| Baierdorf bei Anger, Styria, Austria      |   1598 |                 1 |                      1 |                    0.752144 |                  2134     |
| Steyregg, Upper Austria, Austria          |   1613 |                 1 |                      1 |                    0.752144 |                  2134     |
| Bad Cannstatt, Baden-Württemberg, Germany |   1617 |                 1 |                      1 |                    0.752144 |                  2134     |
| Leonberg, Baden-Württemberg, Germany      |   1593 |                 1 |                      2 |                    0.47455  |                  1346.4   |
| Styria, Austria                           |   1605 |                 1 |                      2 |                    0.47455  |                  1346.4   |
| Rosswälden, Baden-Württemberg, Germany    |   1625 |                 1 |                      2 |                    0.47455  |                  1346.4   |
| Wels, Upper Austria, Austria              |   1614 |                 3 |                      5 |                    0.387959 |                  1101.5   |
| Wels, Upper Austria, Austria              |   1623 |                 1 |                      5 |                    0.290969 |                   825.544 |
| Eferding, Upper Austria, Austria          |   1613 |                 1 |                      5 |                    0.290969 |                   825.544 |
| Lubań, Lower Silesia, Poland              |   1630 |                 1 |                      5 |                    0.290969 |                   825.544 |

## Unexpected Places Of Interest (Kepler Removed)
Top place-years by brokerage_intensity_score:

| place                                                |   Year |   distinct_people |   place_total_activity |   brokerage_intensity_score |   meeting_intensity_score |
|:-----------------------------------------------------|-------:|------------------:|-----------------------:|----------------------------:|--------------------------:|
| Girsitz                                              |   1599 |                 2 |                      2 |                 0.00117678  |                  19.5     |
| Wandsbek, Hamburg, Germany                           |   1598 |                 1 |                      3 |                 0.000784519 |                  13       |
| Wandsbek, Hamburg, Germany                           |   1597 |                 1 |                      3 |                 0.000784519 |                  13       |
| Benátky nad Jizerou, Central Bohemia, Czech Republic |   1600 |                 1 |                     12 |                 0.000424014 |                   7.02619 |
| Benátky nad Jizerou, Central Bohemia, Czech Republic |   1599 |                 1 |                     12 |                 0.000424014 |                   7.02619 |
| Wittenberg, Saxony-Anhalt, Germany                   |   1599 |                 1 |                     23 |                 0.000342214 |                   5.67071 |
| Nürtingen, Baden-Württemberg, Germany                |   1618 |                 1 |                      6 |                 0.000310501 |                   9.26139 |
| Nürtingen, Baden-Württemberg, Germany                |   1617 |                 1 |                      6 |                 0.000310501 |                   9.26139 |
| Prague, Czech Republic                               |   1600 |                 5 |                    511 |                 0.000289707 |                   5.14941 |
| Bellosguardo , Florence, Tuscany, Italy              |   1627 |                 1 |                      1 |                 0.00027894  |                  22       |
