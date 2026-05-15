L_NO_TOUCH = false;
                L_DISABLE_3D = false;

(function() {
    // Folium may generate `let map_xxx = L.map(...)` which is not attached to `window`.
    // Capture the created map instance once so timeline line drawing can always find it.
    if (typeof L !== "undefined" && typeof L.map === "function" && !window.__timelineLeafletMapHooked) {
        const originalMapFactory = L.map;
        L.map = function() {
            const createdMap = originalMapFactory.apply(this, arguments);
            window.__timelineLeafletMap = createdMap;
            return createdMap;
        };
        window.__timelineLeafletMapHooked = true;
    }

  // --- Data injected by Python ---
  let YEAR_DATA = {"1590": [{"from_lat": 48.7501041, "from_lon": 8.8707147, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Weil der Stadt, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Burgermeister and Council \u2192 T\u00fcbingen University"}], "1591": [{"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.7501041, "to_lon": 8.8707147, "count": 1, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Weil der Stadt, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>T\u00fcbingen University \u2192 Burgermeister and Council"}, {"from_lat": 48.7501041, "from_lon": 8.8707147, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Weil der Stadt, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Burgermeister and Council \u2192 T\u00fcbingen University"}], "1593": [{"from_lat": 49.3180932, "from_lon": 9.4217233, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#2980b9", "label": "Widdern, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Sch\u00e4rer \u2192 Kepler"}, {"from_lat": 48.4121233, "from_lon": 9.7847091, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#2980b9", "label": "Blaubeuren Abbey, Blaubeuren, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>K\u00f6llin \u2192 Kepler"}, {"from_lat": 48.8012983, "from_lon": 9.0150026, "to_lat": 48.7501041, "to_lon": 8.8707147, "count": 1, "colour": "#e74c3c", "label": "Leonberg, Baden-W\u00fcrttemberg, Germany \u2192 Weil der Stadt, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Kepler"}], "1594": [{"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 47.2500001, "to_lon": 15.1666665, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Styria, Austria<br>1 letter<br>Kepler \u2192 Styria"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Gerlach"}, {"from_lat": 48.7142691, "from_lon": 8.7397624, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "Calw, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>2 letters<br>M\u00e4stlin \u2192 Kepler<br>Hafenreffer \u2192 Kepler"}], "1595": [{"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.7142691, "to_lon": 8.7397624, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Calw, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.7142691, "from_lon": 8.7397624, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Calw, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>1 letter<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 5, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>5 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.734346, "from_lon": 8.7352364, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Hirsau, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>1 letter<br>Ortholph \u2192 Kepler"}, {"from_lat": 48.2741408, "from_lon": 14.5817826, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Schwertberg, Upper Austria, Austria \u2192 Graz, Styria, Austria<br>1 letter<br>Tschernembl \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Reimers"}], "1596": [{"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>2 letters<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 1, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>1 letter<br>M\u00e4stlin \u2192 W\u00fcrttemberg"}, {"from_lat": 48.7031377, "from_lon": 9.6541116, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 1, "colour": "#2980b9", "label": "G\u00f6ppingen, Baden-W\u00fcrttemberg, Germany \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>1 letter<br>Osiander \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 6, "colour": "#e74c3c", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>6 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 6, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>6 letters<br>M\u00e4stlin \u2192 Kepler<br>Pape \u2192 Kepler<br>Hafenreffer \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>W\u00fcrttemberg \u2192 M\u00e4stlin"}], "1597": [{"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 4, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>4 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 7, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>7 letters<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>W\u00fcrttemberg \u2192 M\u00e4stlin"}, {"from_lat": 48.8387397, "from_lon": 7.8318155, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 3, "colour": "#95a5a6", "label": "Haguenau, Grand Est, France \u2192 Munich, Bavaria, Germany<br>3 letters<br>R\u00f6slin \u2192 Herwart von Hohenburg<br>R\u00f6slin \u2192 Herwart von Hohenburg<br>R\u00f6slin \u2192 Herwart von Hohenburg"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Graz, Styria, Austria<br>1 letter<br>Reimers \u2192 Kepler"}, {"from_lat": 45.3984428, "from_lon": 11.8956829, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Padua, Veneto, Italy \u2192 Graz, Styria, Austria<br>1 letter<br>Galilei \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 2, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Munich, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 45.3984428, "to_lon": 11.8956829, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Padua, Veneto, Italy<br>1 letter<br>Kepler \u2192 Galilei"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Graz, Styria, Austria<br>2 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Fickler \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 47.4121987, "to_lon": 15.2721668, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Bruck an der Mur, Styria, Austria<br>1 letter<br>Kepler \u2192 Vochtmann"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 53.5760029, "to_lon": 10.0755348, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Wandsbek, Hamburg, Germany<br>1 letter<br>Kepler \u2192 Brahe"}, {"from_lat": 48.4283109, "from_lon": 9.2657297, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Burgstein, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>1 letter<br>Pleuring \u2192 Kepler"}], "1598": [{"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 4, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>4 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.5621964, "from_lon": 12.0859345, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 3, "colour": "#95a5a6", "label": "Altdorf, Bavaria, Germany \u2192 Munich, Bavaria, Germany<br>3 letters<br>Praetorius \u2192 Herwart von Hohenburg<br>Praetorius \u2192 Herwart von Hohenburg<br>Praetorius \u2192 Herwart von Hohenburg"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 3, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Graz, Styria, Austria<br>3 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Graz, Styria, Austria<br>1 letter<br>W\u00fcrttemberg \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 2, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Munich, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 53.5760029, "from_lon": 10.0755348, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Wandsbek, Hamburg, Germany \u2192 Graz, Styria, Austria<br>1 letter<br>Brahe \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 5, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>5 letters<br>Hafenreffer \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 53.5760029, "from_lon": 10.0755348, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Wandsbek, Hamburg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Brahe \u2192 M\u00e4stlin"}, {"from_lat": 50.9281717, "from_lon": 11.5879359, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Jena, Thuringia, Germany \u2192 Graz, Styria, Austria<br>1 letter<br>Limn\u00e4us \u2192 Kepler"}, {"from_lat": 47.2850667, "from_lon": 15.7110617, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Baierdorf bei Anger, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 46.1456196, "from_lon": 15.0817358, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "Hrastnik, Hrastnik, Slovenia \u2192 Graz, Styria, Austria<br>2 letters<br>Zehentmair \u2192 Kepler<br>Zehentmair \u2192 Kepler"}], "1599": [{"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 7, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Graz, Styria, Austria<br>7 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 3, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>3 letters<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 6, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Munich, Bavaria, Germany<br>6 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 3, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>3 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 51.8666527, "to_lon": 12.646761, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Wittenberg, Saxony-Anhalt, Germany<br>1 letter<br>Kepler \u2192 Brahe"}, {"from_lat": 46.1456196, "from_lon": 15.0817358, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 11, "colour": "#2980b9", "label": "Hrastnik, Hrastnik, Slovenia \u2192 Graz, Styria, Austria<br>11 letters<br>Zehentmair \u2192 Kepler<br>Zehentmair \u2192 Kepler<br>Zehentmair \u2192 Kepler"}, {"from_lat": 49.2888745, "from_lon": 10.5597693, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 3, "colour": "#2980b9", "label": "Ansbach, Bavaria, Germany \u2192 Graz, Styria, Austria<br>3 letters<br>Pape \u2192 Kepler<br>Pape \u2192 Kepler<br>Pape \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 45.3984428, "to_lon": 11.8956829, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Padua, Veneto, Italy<br>1 letter<br>Kepler \u2192 Bruce"}, {"from_lat": 50.8090106, "from_lon": 8.7704695, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "Marburg, Hesse, Germany \u2192 Graz, Styria, Austria<br>2 letters<br>Homelius \u2192 Kepler<br>Homelius \u2192 Kepler"}, {"from_lat": 50.291767, "from_lon": 14.8260014, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic \u2192 Graz, Styria, Austria<br>1 letter<br>Brahe \u2192 Kepler"}, {"from_lat": 47.5242934, "from_lon": 14.3264883, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Strechau, Styria, Austria \u2192 Graz, Styria, Austria<br>1 letter<br>Hoffmann \u2192 Kepler"}, {"from_lat": 50.253211, "from_lon": 14.8409386, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 1, "colour": "#95a5a6", "label": "Girsitz \u2192 Vienna, Wien, Austria<br>1 letter<br>Brahe \u2192 Blotius"}, {"from_lat": 50.253211, "from_lon": 14.8409386, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Girsitz \u2192 Graz, Styria, Austria<br>1 letter<br>Meherentius \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Graz, Styria, Austria<br>1 letter<br>Dasypodius \u2192 Kepler"}], "1600": [{"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Graz, Styria, Austria<br>1 letter<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 50.291767, "from_lon": 14.8260014, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#2980b9", "label": "Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic \u2192 Graz, Styria, Austria<br>1 letter<br>Brahe \u2192 Kepler"}, {"from_lat": 50.291767, "from_lon": 14.8260014, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 4, "colour": "#95a5a6", "label": "Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic \u2192 Prague, Czech Republic<br>4 letters<br>Brahe \u2192 Hoffmann<br>Brahe \u2192 Hoffmann<br>Brahe \u2192 Hoffmann"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 50.291767, "to_lon": 14.8260014, "count": 1, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic<br>1 letter<br>Hoffmann \u2192 Brahe"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 3, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Graz, Styria, Austria<br>3 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 49.7477415, "from_lon": 13.3775249, "to_lat": 50.291767, "to_lon": 14.8260014, "count": 1, "colour": "#95a5a6", "label": "Plze\u0148, Plze\u0148sk\u00fd, Czech Republic \u2192 Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic<br>1 letter<br>Tengnagel \u2192 Brahe"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 50.291767, "to_lon": 14.8260014, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Ben\u00e1tky nad Jizerou, Central Bohemia, Czech Republic<br>2 letters<br>Kepler \u2192 Brahe<br>Kepler \u2192 Brahe"}, {"from_lat": 46.1456196, "from_lon": 15.0817358, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "Hrastnik, Hrastnik, Slovenia \u2192 Graz, Styria, Austria<br>2 letters<br>Zehentmair \u2192 Kepler<br>Zehentmair \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Munich, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 2, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Graz, Styria, Austria<br>2 letters<br>Longomontanus \u2192 Kepler<br>Brahe \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 1, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>1 letter<br>Brahe \u2192 Herwart von Hohenburg"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#95a5a6", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Herwart von Hohenburg \u2192 Brahe<br>Herwart von Hohenburg \u2192 Brahe"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 M\u00e4stlin"}], "1601": [{"from_lat": 51.0493286, "from_lon": 13.7381437, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Dresden, Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Leyser \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>3 letters<br>Jo\u0308stel \u2192 Kepler<br>Rhodius \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Vienna, Wien, Austria<br>1 letter<br>Kepler \u2192 Blotius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Hafenreffer \u2192 Kepler<br>Hafenreffer \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 5, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Graz, Styria, Austria<br>5 letters<br>Eriksen \u2192 Kepler<br>Kepler \u2192 Kepler<br>Eriksen \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>2 letters<br>Kepler \u2192 Kepler<br>Kepler \u2192 Maximilian II"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 44.4938203, "to_lon": 11.3426327, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Bologna, Emilia-Romagna, Italy<br>1 letter<br>Kepler \u2192 Magini"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>1 letter<br>Kepler \u2192 Blotius"}, {"from_lat": 52.2694897, "from_lon": 6.2364886, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Deventer, Overijssel, Netherlands \u2192 Prague, Czech Republic<br>2 letters<br>Eriksen \u2192 Kepler<br>Eriksen \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 4, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>4 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}], "1602": [{"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 10, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>10 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Linz, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Memhard \u2192 Kepler"}, {"from_lat": 52.1314783, "from_lon": 11.6400789, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Magdeburg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Rollenhagius \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#95a5a6", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Herwart von Hohenburg \u2192 Barvitius<br>Herwart von Hohenburg \u2192 Memhard"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 5, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>5 letters<br>Rhodius \u2192 Kepler<br>Rhodius \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 53.6373063, "from_lon": 7.4341272, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 5, "colour": "#2980b9", "label": "Resterhafe, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>5 letters<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler"}, {"from_lat": 52.503379, "from_lon": 13.3386522, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Berlin, Berlin, Germany \u2192 Prague, Czech Republic<br>1 letter<br>M\u00fcller \u2192 Kepler"}, {"from_lat": 52.3412273, "from_lon": 14.549452, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Frankfurt (Oder), Brandenburg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Origanus \u2192 Kepler"}, {"from_lat": 43.7697955, "from_lon": 11.2556404, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Florence, Tuscany, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Bruce \u2192 Kepler"}, {"from_lat": 49.2888745, "from_lon": 10.5597693, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Ansbach, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Pape \u2192 Kepler<br>Pape \u2192 Kepler"}, {"from_lat": 53.5094623, "from_lon": 7.3583406, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Aurich, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Fabricius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.6373063, "to_lon": 7.4341272, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Resterhafe, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 53.6468107, "from_lon": 7.6118499, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "Esens, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>3 letters<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.6468107, "to_lon": 7.6118499, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Esens, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}], "1603": [{"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 5, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>5 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 53.0758196, "from_lon": 8.8071646, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#95a5a6", "label": "Bremen, Bremen, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Riddershusius \u2192 Schulten"}, {"from_lat": 49.0681018, "from_lon": 17.4663899, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Uhersk\u00e9 Hradi\u0161t\u011b, Zl\u00edn, Czech Republic \u2192 Prague, Czech Republic<br>1 letter<br>Budovec z Budova \u2192 Kepler"}, {"from_lat": 53.6468107, "from_lon": 7.6118499, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 10, "colour": "#2980b9", "label": "Esens, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>10 letters<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Prague, Czech Republic<br>1 letter<br>Gerhard \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 6, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>6 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 49.2888745, "from_lon": 10.5597693, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Ansbach, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Pape \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.6468107, "to_lon": 7.6118499, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Esens, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Rhodius \u2192 Kepler"}, {"from_lat": 49.3068037, "from_lon": 15.6766872, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Brtnice, Vyso\u010dina, Czech Republic \u2192 Prague, Czech Republic<br>1 letter<br>Virdung \u2192 Kepler"}, {"from_lat": 45.3984428, "from_lon": 11.8956829, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Padua, Veneto, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Bruce \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 45.3984428, "to_lon": 11.8956829, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Padua, Veneto, Italy<br>1 letter<br>Kepler \u2192 Bruce"}, {"from_lat": 47.2466319, "from_lon": 15.3092173, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Schloss Rabenstein, Styria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Bruce \u2192 Kepler"}, {"from_lat": 48.7180364, "from_lon": 10.7807299, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Donauw\u00f6rth, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Gerhard \u2192 Kepler"}], "1604": [{"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>2 letters<br>Dietrichstein \u2192 Kepler<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 3, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>3 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 T\u00fcbingen University<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>3 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Prague, Czech Republic<br>1 letter<br>Pape \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 52.3730796, "to_lon": 4.8924534, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Amsterdam, North Holland, (United Provinces) Netherlands<br>1 letter<br>Kepler \u2192 Blaeu"}, {"from_lat": 51.2077989, "from_lon": 5.9461436, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Horn, (West Frisia) Limburg, Netherlands \u2192 Prague, Czech Republic<br>1 letter<br>Virdung \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.6468107, "to_lon": 7.6118499, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Esens, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 49.4093582, "from_lon": 8.694724, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Heidelberg, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Christmann \u2192 Kepler"}, {"from_lat": 54.0886707, "from_lon": 12.1400211, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Rostock, Mecklenburg-Vorpommern, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Longomontanus \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Rhodius \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Frankfurt am Main, Hesse, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Marne \u2192 Kepler"}, {"from_lat": 53.0758196, "from_lon": 8.8071646, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Bremen, Bremen, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Riddershusius \u2192 Kepler"}, {"from_lat": 47.2466319, "from_lon": 15.3092173, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Schloss Rabenstein, Styria, Austria \u2192 Prague, Czech Republic<br>2 letters<br>Dietrichstein \u2192 Kepler<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Regensburg, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Hagenloch \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 53.5336832, "from_lon": 7.2642003, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Osteel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Fabricius \u2192 Kepler"}, {"from_lat": 48.7180364, "from_lon": 10.7807299, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Donauw\u00f6rth, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Gerhard \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.2654296, "to_lon": 11.3927685, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Innsbruck, Tyrol, Austria, (Holy Roman Empire)<br>1 letter<br>Kepler \u2192 Maximilian Ernest of Austria"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 46.8370716, "from_lon": 13.3704357, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "M\u00f6llbr\u00fccke, Carinthia, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 51.0493286, "from_lon": 13.7381437, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Dresden, Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Jo\u0308stel \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.5336832, "to_lon": 7.2642003, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Osteel, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 47.8803788, "from_lon": 10.622246, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Kaufbeuren, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Brengger \u2192 Kepler"}, {"from_lat": 48.745628, "from_lon": 11.1879622, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Neuburg an der Donau, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Pfalz-Neuberg \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.745628, "to_lon": 11.1879622, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Neuburg an der Donau, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Pfalz-Neuberg"}], "1605": [{"from_lat": 53.6468107, "from_lon": 7.6118499, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Esens, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Fabricius \u2192 Kepler"}, {"from_lat": 53.5336832, "from_lon": 7.2642003, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 7, "colour": "#2980b9", "label": "Osteel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>7 letters<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.8803788, "to_lon": 10.622246, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Kaufbeuren, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Brengger"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 8, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>8 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 4, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>4 letters<br>Hafenreffer \u2192 Kepler<br>T\u00fcbingen University \u2192 Kepler<br>Besold \u2192 Kepler"}, {"from_lat": 51.5074456, "from_lon": -0.1277653, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "London, England, United Kingdom \u2192 Prague, Czech Republic<br>1 letter<br>Heydon \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 1, "colour": "#e74c3c", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Munich, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.5621964, "to_lon": 12.0859345, "count": 1, "colour": "#e74c3c", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Altdorf, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Szenci Moln\u00e1r"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Dietrichstein \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.1563185, "to_lon": 14.991018, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 G\u00f6rlitz, Saxony, Germany<br>1 letter<br>Kepler \u2192 Scultetus"}, {"from_lat": 45.0677551, "from_lon": 7.6824892, "to_lat": 44.4938203, "to_lon": 11.3426327, "count": 1, "colour": "#95a5a6", "label": "Turin, Piedmont, Italy \u2192 Bologna, Emilia-Romagna, Italy<br>1 letter<br>Cristini \u2192 Magini"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.745628, "from_lon": 11.1879622, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Neuburg an der Donau, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Pfalz-Neuberg \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 50.5229864, "from_lon": 14.9741022, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Mnichovo Hradi\u0161t\u011b, Central Bohemia, Czech Republic \u2192 Prague, Czech Republic<br>1 letter<br>Budovec z Budova \u2192 Kepler"}, {"from_lat": 51.0493286, "from_lon": 13.7381437, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Dresden, Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Jo\u0308stel \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Rhodius \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 49.9995205, "from_lon": 8.2736253, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Mainz, Rhineland-Palatinate, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Serarius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 52.1594747, "to_lon": 4.4908843, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Leiden, South Holland, Netherlands<br>2 letters<br>Kepler \u2192 Scaliger<br>Kepler \u2192 Scaliger"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.2500001, "to_lon": 15.1666665, "count": 1, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Styria, Austria<br>1 letter<br>Odontius \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Odontius"}, {"from_lat": 52.3412273, "from_lon": 14.549452, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Frankfurt (Oder), Brandenburg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Origanus \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.5336832, "to_lon": 7.2642003, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Osteel, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.5074456, "to_lon": -0.1277653, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 London, England, United Kingdom<br>1 letter<br>Kepler \u2192 Heydon"}, {"from_lat": 51.3406321, "from_lon": 12.3747329, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Leipzig, Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Vicke \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 50.039436, "to_lon": 15.5606989, "count": 1, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 P\u0159elou\u010d, Pardubick\u00fd, Czech Republic<br>1 letter<br>Bachacius \u2192 von Mies"}], "1606": [{"from_lat": 51.2211097, "from_lon": 4.3997081, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Antwerp, Flanders, Belgium \u2192 Prague, Czech Republic<br>1 letter<br>Martinius \u2192 Kepler"}, {"from_lat": 49.9995205, "from_lon": 8.2736253, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 6, "colour": "#2980b9", "label": "Mainz, Rhineland-Palatinate, Germany \u2192 Prague, Czech Republic<br>6 letters<br>Serarius \u2192 Kepler<br>Ziegler \u2192 Kepler<br>Krzistanowicz \u2192 Kepler"}, {"from_lat": 53.5336832, "from_lon": 7.2642003, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Osteel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Fabricius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>3 letters<br>Hafenreffer \u2192 Kepler<br>Dietrichstein \u2192 Kepler<br>Casal \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 46.603354, "to_lon": 1.8883335, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 France<br>1 letter<br>Kepler \u2192 Nautonier"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 49.9995205, "to_lon": 8.2736253, "count": 3, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Mainz, Rhineland-Palatinate, Germany<br>3 letters<br>Kepler \u2192 Ziegler<br>Kepler \u2192 Ziegler<br>Kepler \u2192 Ziegler"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Prague, Czech Republic<br>2 letters<br>Pape \u2192 Kepler<br>Pape \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Besold \u2192 Kepler<br>Hafenreffer \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 3, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>3 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 Hafenreffer"}, {"from_lat": 41.8933203, "from_lon": 12.4829321, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Rome, Latium, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Heck \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Jo\u0308stel \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 48.5621964, "from_lon": 12.0859345, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Altdorf, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Odontius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5621964, "to_lon": 12.0859345, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Altdorf, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Odontius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.5074456, "to_lon": -0.1277653, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 London, England, United Kingdom<br>1 letter<br>Kepler \u2192 Harriot"}, {"from_lat": 50.2136597, "from_lon": 14.4405574, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Panensk\u00e9 B\u0159e\u017eany, Central Bohemia \u2192 Prague, Czech Republic<br>1 letter<br>Jessen \u2192 Kepler"}, {"from_lat": 51.5074456, "from_lon": -0.1277653, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "London, England, United Kingdom \u2192 Prague, Czech Republic<br>1 letter<br>Harriot \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.2211097, "to_lon": 4.3997081, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Antwerp, Flanders, Belgium<br>1 letter<br>Kepler \u2192 Coignet"}], "1607": [{"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>3 letters<br>Hafenreffer \u2192 Kepler<br>Hafenreffer \u2192 Kepler<br>Hafenreffer \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 7, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>7 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 53.5336832, "from_lon": 7.2642003, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 4, "colour": "#2980b9", "label": "Osteel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>4 letters<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 3, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>3 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Rhodius \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Regensburg, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Ruland \u2192 Kepler"}, {"from_lat": 47.9960901, "from_lon": 7.8494005, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Freiburg, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Pistorius \u2192 Kepler<br>Pistorius \u2192 Kepler"}, {"from_lat": 51.0493286, "from_lon": 13.7381437, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Dresden, Saxony, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Zeidler \u2192 Kepler<br>Fersius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 Besold"}, {"from_lat": 49.9995205, "from_lon": 8.2736253, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "Mainz, Rhineland-Palatinate, Germany \u2192 Prague, Czech Republic<br>3 letters<br>Serarius \u2192 Kepler<br>Ziegler \u2192 Kepler<br>Ziegler \u2192 Kepler"}, {"from_lat": 53.0758196, "from_lon": 8.8071646, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Bremen, Bremen, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Riddershusius \u2192 Kepler<br>Riddershusius \u2192 Kepler"}, {"from_lat": 51.3406321, "from_lon": 12.3747329, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 5, "colour": "#2980b9", "label": "Leipzig, Saxony, Germany \u2192 Prague, Czech Republic<br>5 letters<br>Calvisius \u2192 Kepler<br>Calvisius \u2192 Kepler<br>Calvisius \u2192 Kepler"}, {"from_lat": 51.1563185, "from_lon": 14.991018, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "G\u00f6rlitz, Saxony, Germany \u2192 Prague, Czech Republic<br>3 letters<br>Eichler \u2192 Kepler<br>Eichler \u2192 Kepler<br>Dornau \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.9960901, "to_lon": 7.8494005, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Freiburg, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Pistorius"}, {"from_lat": 50.9772092, "from_lon": 11.9863951, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Crossen an der Elster, Thuringia, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Anhalt-Pl\u00f6tzkau \u2192 Kepler<br>Anhalt-Pl\u00f6tzkau \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.5336832, "to_lon": 7.2642003, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Osteel, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.5074456, "to_lon": -0.1277653, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 London, England, United Kingdom<br>1 letter<br>Kepler \u2192 Harriot"}, {"from_lat": 47.8803788, "from_lon": 10.622246, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Kaufbeuren, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Brengger \u2192 Kepler<br>Brengger \u2192 Kepler"}, {"from_lat": 49.5940567, "from_lon": 17.251143, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 4, "colour": "#2980b9", "label": "Olomouc, Moravia, Czech Republic \u2192 Prague, Czech Republic<br>4 letters<br>Decker \u2192 Kepler<br>Decker \u2192 Kepler<br>Decker \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 49.5940567, "to_lon": 17.251143, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Olomouc, Moravia, Czech Republic<br>2 letters<br>Kepler \u2192 Decker<br>Kepler \u2192 Decker"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 4, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Leipzig, Saxony, Germany<br>4 letters<br>Kepler \u2192 Calvisius<br>Kepler \u2192 Calvisius<br>Kepler \u2192 Calvisius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.8803788, "to_lon": 10.622246, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Kaufbeuren, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Brengger<br>Kepler \u2192 Brengger"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 52.1594747, "to_lon": 4.4908843, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Leiden, South Holland, Netherlands<br>1 letter<br>Kepler \u2192 Scaliger"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Prague, Czech Republic<br>1 letter<br>Pape \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.0493286, "to_lon": 13.7381437, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Dresden, Saxony, Germany<br>1 letter<br>Kepler \u2192 Fersius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 50.9772092, "to_lon": 11.9863951, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Crossen an der Elster, Thuringia, Germany<br>1 letter<br>Kepler \u2192 Anhalt-Pl\u00f6tzkau"}, {"from_lat": 48.3082607, "from_lon": 14.0203999, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Eferding, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Starhemberg \u2192 Kepler"}], "1608": [{"from_lat": 51.1563185, "from_lon": 14.991018, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "G\u00f6rlitz, Saxony, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Eichler \u2192 Kepler<br>Dornau \u2192 Kepler"}, {"from_lat": 51.3406321, "from_lon": 12.3747329, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 7, "colour": "#2980b9", "label": "Leipzig, Saxony, Germany \u2192 Prague, Czech Republic<br>7 letters<br>Tanckius \u2192 Kepler<br>Tanckius \u2192 Kepler<br>Tanckius \u2192 Kepler"}, {"from_lat": 49.9837884, "from_lon": 13.9359785, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Nov\u00fd J\u00e1chymov, Central Bohemia, Czech Republic \u2192 Prague, Czech Republic<br>1 letter<br>M\u00fcller \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 5, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>5 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.1563185, "to_lon": 14.991018, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 G\u00f6rlitz, Saxony, Germany<br>1 letter<br>Kepler \u2192 Eichler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 3, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Leipzig, Saxony, Germany<br>3 letters<br>Kepler \u2192 Calvisius<br>Kepler \u2192 Tanckius<br>Kepler \u2192 Calvisius"}, {"from_lat": 53.5336832, "from_lon": 7.2642003, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 5, "colour": "#2980b9", "label": "Osteel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>5 letters<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler<br>Fabricius \u2192 Kepler"}, {"from_lat": 47.8803788, "from_lon": 10.622246, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Kaufbeuren, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Brengger \u2192 Kepler<br>Brengger \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Fabricius \u2192 Kepler<br>Rhodius \u2192 Kepler"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Graz, Styria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>School Inspectors \u2192 Kepler"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Prague, Czech Republic<br>2 letters<br>Pape \u2192 Kepler<br>Pape \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 47.8803788, "to_lon": 10.622246, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Kaufbeuren, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Brengger"}, {"from_lat": 51.5074456, "from_lon": -0.1277653, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "London, England, United Kingdom \u2192 Prague, Czech Republic<br>1 letter<br>Harriot \u2192 Kepler"}, {"from_lat": 54.0703296, "from_lon": 9.9884451, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Neum\u00fcnster, Schleswig-Holstein, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Forst \u2192 Kepler"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Frankfurt am Main, Hesse, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Beyer \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1371079, "to_lon": 11.5753822, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Munich, Bavaria, Germany<br>2 letters<br>Kepler \u2192 Herwart von Hohenburg<br>Kepler \u2192 Herwart von Hohenburg"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 53.5336832, "to_lon": 7.2642003, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Osteel, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.8666527, "to_lon": 12.646761, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Wittenberg, Saxony-Anhalt, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 49.5940567, "to_lon": 17.251143, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Olomouc, Moravia, Czech Republic<br>1 letter<br>Kepler \u2192 Decker"}], "1609": [{"from_lat": 51.3406321, "from_lon": 12.3747329, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 4, "colour": "#2980b9", "label": "Leipzig, Saxony, Germany \u2192 Prague, Czech Republic<br>4 letters<br>Calvisius \u2192 Kepler<br>Tanckius \u2192 Kepler<br>Calvisius \u2192 Kepler"}, {"from_lat": 49.9995205, "from_lon": 8.2736253, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Mainz, Rhineland-Palatinate, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Ziegler \u2192 Kepler"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 6, "colour": "#2980b9", "label": "Munich, Bavaria, Germany \u2192 Prague, Czech Republic<br>6 letters<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler<br>Herwart von Hohenburg \u2192 Kepler"}, {"from_lat": 53.5336832, "from_lon": 7.2642003, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Osteel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Fabricius \u2192 Kepler"}, {"from_lat": 50.879202, "from_lon": 4.7011675, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Leuven, Flemish Brabant, Belgium \u2192 Prague, Czech Republic<br>1 letter<br>Roomen \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Gerlach"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.5074456, "to_lon": -0.1277653, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 London, England, United Kingdom<br>1 letter<br>Kepler \u2192 Harriot"}, {"from_lat": 52.3412273, "from_lon": 14.549452, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Frankfurt (Oder), Brandenburg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Origanus \u2192 Kepler"}, {"from_lat": 51.6511561, "from_lon": 14.0342532, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Altd\u00f6bern, Brandenburg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Moller \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>T\u00fcbingen University \u2192 Kepler"}, {"from_lat": 51.8953514, "from_lon": 11.0520563, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Halberstadt, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Vicke \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Kepler \u2192 Calvisius"}], "1610": [{"from_lat": 44.4938203, "from_lon": 11.3426327, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 13, "colour": "#2980b9", "label": "Bologna, Emilia-Romagna, Italy \u2192 Prague, Czech Republic<br>13 letters<br>Hork\u00fd \u2192 Kepler<br>Magini \u2192 Kepler<br>Hork\u00fd \u2192 Kepler"}, {"from_lat": 51.8953514, "from_lon": 11.0520563, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Halberstadt, Saxony-Anhalt, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Vicke \u2192 Kepler<br>Vicke \u2192 Kepler"}, {"from_lat": 52.1625283, "from_lon": 10.5348215, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Wolfenb\u00fcttel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Krabbe \u2192 Kepler<br>Krabbe \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 44.4938203, "to_lon": 11.3426327, "count": 5, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Bologna, Emilia-Romagna, Italy<br>5 letters<br>Kepler \u2192 Magini<br>Kepler \u2192 Magini<br>Kepler \u2192 Magini"}, {"from_lat": 55.6867243, "from_lon": 12.5700724, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Copenhagen, Capital Region, Denmark \u2192 Prague, Czech Republic<br>1 letter<br>Longomontanus \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.8953514, "to_lon": 11.0520563, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Halberstadt, Saxony-Anhalt, Germany<br>2 letters<br>Kepler \u2192 Vicke<br>Kepler \u2192 Vicke"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Prague, Czech Republic<br>1 letter<br>Pape \u2192 Kepler"}, {"from_lat": 50.698157, "from_lon": 17.3849804, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Grodk\u00f3w, Opole Voivodeship, Poland \u2192 Prague, Czech Republic<br>1 letter<br>Hannke \u2192 Kepler"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Prague, Czech Republic<br>1 letter<br>Cr\u00fcger \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 45.3984428, "to_lon": 11.8956829, "count": 4, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 Padua, Veneto, Italy<br>4 letters<br>Hasdale \u2192 Galilei<br>Medici \u2192 Galilei<br>Hasdale \u2192 Galilei"}, {"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Prague, Czech Republic<br>2 letters<br>Fugger \u2192 Kepler<br>Fugger \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 45.3984428, "to_lon": 11.8956829, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Padua, Veneto, Italy<br>2 letters<br>Kepler \u2192 Galilei<br>Kepler \u2192 Galilei"}, {"from_lat": 45.3984428, "from_lon": 11.8956829, "to_lat": 43.7697955, "to_lon": 11.2556404, "count": 1, "colour": "#95a5a6", "label": "Padua, Veneto, Italy \u2192 Florence, Tuscany, Italy<br>1 letter<br>Galilei \u2192 Vinta"}, {"from_lat": 45.3984428, "from_lon": 11.8956829, "to_lat": 48.8534951, "to_lon": 2.3483915, "count": 1, "colour": "#95a5a6", "label": "Padua, Veneto, Italy \u2192 Paris, \u00cele-de-France, France<br>1 letter<br>Galilei \u2192 Carosio"}, {"from_lat": 52.2277037, "from_lon": 11.0104702, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Helmstedt, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Caselius \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Hafenreffer"}, {"from_lat": 45.3984428, "from_lon": 11.8956829, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Padua, Veneto, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Galilei \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Prague, Czech Republic<br>1 letter<br>Lotter \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 43.7697955, "to_lon": 11.2556404, "count": 2, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 Florence, Tuscany, Italy<br>2 letters<br>Medici \u2192 Galilei<br>Hasdale \u2192 Galilei"}, {"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Regensburg, Bavaria, Germany \u2192 Prague, Czech Republic<br>2 letters<br>Donauer \u2192 Kepler<br>Donauer \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 43.7697955, "from_lon": 11.2556404, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#95a5a6", "label": "Florence, Tuscany, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Galilei \u2192 Medici"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Kepler \u2192 Calvisius"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 43.7697955, "to_lon": 11.2556404, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Florence, Tuscany, Italy<br>2 letters<br>Kepler \u2192 Galilei<br>Kepler \u2192 Galilei"}, {"from_lat": 51.0493286, "from_lon": 13.7381437, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Dresden, Saxony, Germany \u2192 Prague, Czech Republic<br>1 letter<br>G\u00f6delmann \u2192 Kepler"}, {"from_lat": 49.8422832, "from_lon": 13.9665265, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Lochovice, Central Bohemia , Czech Republic \u2192 Prague, Czech Republic<br>1 letter<br>Hork\u00fd \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 51.0493286, "to_lon": 13.7381437, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Dresden, Saxony, Germany<br>1 letter<br>Kepler \u2192 Unknown"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Linz, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>J\u00f6rger von Tollet \u2192 Kepler"}], "1611": [{"from_lat": 52.1625283, "from_lon": 10.5348215, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 6, "colour": "#2980b9", "label": "Wolfenb\u00fcttel, Lower Saxony, Germany \u2192 Prague, Czech Republic<br>6 letters<br>Vicke \u2192 Kepler<br>Vicke \u2192 Kepler<br>Vicke \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 43.7697955, "to_lon": 11.2556404, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Florence, Tuscany, Italy<br>2 letters<br>Kepler \u2192 Galilei<br>Kepler \u2192 Galilei"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 43.7697955, "to_lon": 11.2556404, "count": 1, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 Florence, Tuscany, Italy<br>1 letter<br>Medici \u2192 Galilei"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 52.1625283, "to_lon": 10.5348215, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Wolfenb\u00fcttel, Lower Saxony, Germany<br>2 letters<br>Kepler \u2192 Vicke<br>Kepler \u2192 Vicke"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Linz, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Starhemberg \u2192 Kepler"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Prague, Czech Republic<br>1 letter<br>Pape \u2192 Kepler"}, {"from_lat": 48.5621964, "from_lon": 12.0859345, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Altdorf, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Odontius \u2192 Kepler"}, {"from_lat": 41.8933203, "from_lon": 12.4829321, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Rome, Latium, Italy \u2192 Prague, Czech Republic<br>1 letter<br>Quietanus \u2192 Kepler"}], "1612": [{"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 41.8933203, "to_lon": 12.4829321, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Rome, Latium, Italy<br>1 letter<br>Kepler \u2192 Quietanus"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 4, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Linz, Upper Austria, Austria<br>4 letters<br>Ursinus \u2192 Kepler<br>Ursinus \u2192 Kepler<br>Ursinus \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#95a5a6", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bernegger \u2192 Memhard"}, {"from_lat": 48.5296743, "from_lon": 11.5084954, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Pfaffenhofen an der Ilm, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Lorenz \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Stuttgart \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Frankfurt am Main, Hesse, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Freher \u2192 Kepler"}, {"from_lat": 48.3690341, "from_lon": 10.8979522, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Augsburg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Welser \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 49.2888745, "to_lon": 10.5597693, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Ansbach, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Marius"}, {"from_lat": 50.8467372, "from_lon": 4.352493, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Brussels, Brussels Capital Region, Belgium \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Maelcote \u2192 Kepler"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Pape \u2192 Kepler"}], "1613": [{"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 5, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>5 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>2 letters<br>R\u00fcttel \u2192 Kepler<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>2 letters<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 49.453872, "from_lon": 11.077298, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Nuremberg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Brunn \u2192 Kepler"}, {"from_lat": 48.3690341, "from_lon": 10.8979522, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Augsburg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Welser \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.8467372, "to_lon": 4.352493, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Brussels, Brussels Capital Region, Belgium<br>1 letter<br>Kepler \u2192 Maelcote"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 49.2888745, "from_lon": 10.5597693, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Ansbach, Bavaria, Germany \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Marius \u2192 Kepler"}, {"from_lat": 51.2211097, "from_lon": 4.3997081, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Antwerp, Flanders, Belgium \u2192 Prague, Czech Republic<br>1 letter<br>Pisani \u2192 Kepler"}, {"from_lat": 51.2211097, "from_lon": 4.3997081, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Antwerp, Flanders, Belgium \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Pisani \u2192 Kepler"}, {"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Regensburg, Bavaria, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 51.0493286, "from_lon": 13.7381437, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Dresden, Saxony, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Seussius \u2192 Kepler"}, {"from_lat": 51.2211097, "from_lon": 4.3997081, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Antwerp, Flanders, Belgium \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Pisani \u2192 Kepler"}, {"from_lat": 49.259407, "from_lon": 14.7193304, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Sob\u011bslav, Jiho\u010desk\u00fd, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Ursinus \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 51.2211097, "to_lon": 4.3997081, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Antwerp, Flanders, Belgium<br>1 letter<br>Kepler \u2192 Pisani"}], "1614": [{"from_lat": 49.259407, "from_lon": 14.7193304, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Sob\u011bslav, Jiho\u010desk\u00fd, Czech Republic \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Ursinus \u2192 Kepler<br>Gehler \u2192 Kepler"}, {"from_lat": 48.1565472, "from_lon": 14.0243752, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Wels, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 41.8933203, "from_lon": 12.4829321, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Rome, Latium, Italy \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Maelcote \u2192 Kepler"}, {"from_lat": 48.3690341, "from_lon": 10.8979522, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Augsburg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Welser \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>3 letters<br>M\u00e4stlin \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler<br>Lansius \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 47.0708678, "from_lon": 15.4382786, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Graz, Styria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Decker \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>2 letters<br>R\u00fcttel \u2192 Kepler<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 48.1565472, "from_lon": 14.0243752, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Wels, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Strahlendorf \u2192 Kepler<br>Polheim \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Valesius \u2192 Kepler"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Frankfurt am Main, Hesse, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Valesius \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Decker \u2192 Kepler<br>Taxis \u2192 Kepler"}, {"from_lat": 50.3652854, "from_lon": 18.8722567, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Bytom, Silesian Voivodeship, Poland \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Ursinus \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Rhodius \u2192 Kepler"}, {"from_lat": 51.5542053, "from_lon": 15.8260835, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Szprotawa, Lubusz Voivodeship, (Silesia) Poland \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Ursinus \u2192 Kepler"}, {"from_lat": 51.2211097, "from_lon": 4.3997081, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Antwerp, Flanders, Belgium \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Pisani \u2192 Kepler"}], "1615": [{"from_lat": 47.4744721, "from_lon": 11.1681018, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Wamberg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Zelking \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Lansius \u2192 Kepler<br>Lansius \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Strahlendorf \u2192 Kepler<br>Taxis \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 3, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>3 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 54.3482907, "to_lon": 18.6540233, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Gda\u0144sk, Pomeranian Voivodeship, Poland<br>1 letter<br>Kepler \u2192 Cr\u00fcger"}, {"from_lat": 48.7630165, "from_lon": 11.4250395, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Ingolstadt, Bavaria, Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Scheiner \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Hoffmann \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Hoffmann"}, {"from_lat": 54.7046485, "from_lon": 20.4565666, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Kaliningrad [K\u00f6nigsberg], Kaliningrad Oblast, Russia [Prussia] \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Pape \u2192 Kepler<br>Pape \u2192 Kepler"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Cr\u00fcger \u2192 Kepler"}, {"from_lat": 47.2654296, "from_lon": 11.3927685, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Innsbruck, Tyrol, Austria, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>St\u00f6ltzle \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 49.0040317, "from_lon": 14.7714476, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "T\u0159ebo\u0148, Jiho\u010desk\u00fd, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Gehler \u2192 Kepler"}, {"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bianchi \u2192 Kepler"}], "1616": [{"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.8012983, "to_lon": 9.0150026, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Leonberg, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Leonberg"}, {"from_lat": 49.259407, "from_lon": 14.7193304, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Sob\u011bslav, Jiho\u010desk\u00fd, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Gehler \u2192 Kepler"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Cr\u00fcger \u2192 Kepler<br>Cr\u00fcger \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 45.4046171, "to_lon": 12.3105232, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Venice, Veneto, Italy<br>1 letter<br>Kepler \u2192 Bianchi"}, {"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bianchi \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 47.2654296, "from_lon": 11.3927685, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Innsbruck, Tyrol, Austria, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>St\u00f6ltzle \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 3, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>3 letters<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 50.938361, "from_lon": 6.959974, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Cologne, North Rhine-Westphalia, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Ens \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 54.3482907, "to_lon": 18.6540233, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Gda\u0144sk, Pomeranian Voivodeship, Poland<br>1 letter<br>Kepler \u2192 Cr\u00fcger"}, {"from_lat": 48.3082607, "from_lon": 14.0203999, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Eferding, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Starhemberg \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Crusius \u2192 Kepler<br>Crusius \u2192 Kepler"}, {"from_lat": 52.7396681, "from_lon": 14.7014522, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "D\u0119bno, West Pomerania, Poland \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Pape \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 4, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>4 letters<br>M\u00e4stlin \u2192 Kepler<br>Strauss \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Enenkel \u2192 Kepler"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Frankfurt am Main, Hesse, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Beyer \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 53.5336832, "to_lon": 7.2642003, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Osteel, Lower Saxony, Germany<br>1 letter<br>Kepler \u2192 Fabricius"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>1 letter<br>Kepler \u2192 W\u00fcrttemberg"}], "1617": [{"from_lat": 48.1598261, "from_lon": 14.0758845, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "Castle Leombach, Leombach, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>3 letters<br>Schallenberg \u2192 Kepler<br>Schallenberg \u2192 Kepler<br>Schallenberg \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 3, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>3 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 41.8933203, "to_lon": 12.4829321, "count": 1, "colour": "#95a5a6", "label": "Prague, Czech Republic \u2192 Rome, Latium, Italy<br>1 letter<br>Scheiner \u2192 Guldin"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>2 letters<br>Kepler \u2192 Faber<br>Kepler \u2192 W\u00fcrttemberg"}, {"from_lat": 44.4938203, "from_lon": 11.3426327, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Bologna, Emilia-Romagna, Italy \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Roffeni \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Crusius \u2192 Kepler<br>Crusius \u2192 Kepler"}, {"from_lat": 48.3082607, "from_lon": 14.0203999, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Eferding, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Starhemberg \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 44.4938203, "to_lon": 11.3426327, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Bologna, Emilia-Romagna, Italy<br>1 letter<br>Kepler \u2192 Roffeni"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Frankfurt am Main, Hesse, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Beyer \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 4, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Linz, Upper Austria, Austria<br>4 letters<br>Vicke \u2192 Kepler<br>Mingonius \u2192 Kepler<br>Mingonius \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Strauss \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.8048828, "to_lon": 9.2146797, "count": 1, "colour": "#2980b9", "label": "Linz, Upper Austria, Austria \u2192 Bad Cannstatt, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Gringallet \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Linz, Upper Austria, Austria \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Gringallet \u2192 Kepler"}, {"from_lat": 48.6265854, "from_lon": 9.3365463, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "N\u00fcrtingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Schickard \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Mingonius"}], "1618": [{"from_lat": 51.2211097, "from_lon": 4.3997081, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Antwerp, Flanders, Belgium \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Pisani \u2192 Kepler<br>Pisani \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Crusius \u2192 Kepler"}, {"from_lat": 50.5862066, "from_lon": 8.6742306, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Giessen, Hesse, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Horst \u2192 Kepler"}, {"from_lat": 48.3082607, "from_lon": 14.0203999, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Eferding, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Starhemberg \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.6265854, "to_lon": 9.3365463, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 N\u00fcrtingen, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>Kepler \u2192 Schickard<br>Kepler \u2192 Schickard"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Graz, Styria, Austria<br>1 letter<br>Kepler \u2192 Guldin"}, {"from_lat": 48.6265854, "from_lon": 9.3365463, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "N\u00fcrtingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>3 letters<br>Schickard \u2192 Kepler<br>Schickard \u2192 Kepler<br>Schickard \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 51.2211097, "to_lon": 4.3997081, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Antwerp, Flanders, Belgium<br>1 letter<br>Kepler \u2192 Pisani"}, {"from_lat": 48.7432195, "from_lon": 15.1257542, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Hirschbach, Lower Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Gringallet \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 12, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>12 letters<br>Mingonius \u2192 Kepler<br>Mingonius \u2192 Kepler<br>Mingonius \u2192 Kepler"}, {"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bianchi \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>3 letters<br>Besold \u2192 Kepler<br>Besold \u2192 Kepler<br>Strauss \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>Kepler \u2192 Hafenreffer<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 45.4046171, "to_lon": 12.3105232, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Venice, Veneto, Italy<br>1 letter<br>Kepler \u2192 Bianchi"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>1 letter<br>Kepler \u2192 Quietanus"}, {"from_lat": 47.524226, "from_lon": 14.3585643, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#95a5a6", "label": "Rottenmann, Styria, Austria \u2192 Graz, Styria, Austria<br>1 letter<br>Quietanus \u2192 Guldin"}], "1619": [{"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 5, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>5 letters<br>Besold \u2192 Kepler<br>Hafenreffer \u2192 Kepler<br>Besold \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 7, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>7 letters<br>Mingonius \u2192 Kepler<br>Enenkel \u2192 Kepler<br>Quietanus \u2192 Kepler"}, {"from_lat": 48.5584726, "from_lon": 15.3235622, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Castle Rastenberg, Rastenfeld, Lower Austria, Austria \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Crusius \u2192 Kepler<br>Crusius \u2192 Kepler"}, {"from_lat": 48.0390046, "from_lon": 14.4191276, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Steyr, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Lehner \u2192 Kepler"}, {"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Linz, Upper Austria, Austria<br>3 letters<br>Bianchi \u2192 Kepler<br>Bianchi \u2192 Kepler<br>Bianchi \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 45.4046171, "to_lon": 12.3105232, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Venice, Veneto, Italy<br>2 letters<br>Kepler \u2192 Bianchi<br>Kepler \u2192 Bianchi"}, {"from_lat": 48.5300873, "from_lon": 15.2799777, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Loschberg, Waldhausen, Lower Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Crusius \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>3 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 54.3482907, "to_lon": 18.6540233, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Gda\u0144sk, Pomeranian Voivodeship, Poland<br>1 letter<br>Kepler \u2192 Cr\u00fcger"}, {"from_lat": 45.4641943, "from_lon": 9.1896346, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Milan, Lombardy, Italy \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Barbavara \u2192 Kepler<br>Barbavara \u2192 Kepler"}, {"from_lat": 47.2654296, "from_lon": 11.3927685, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Innsbruck, Tyrol, Austria, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Quietanus \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Hafenreffer"}, {"from_lat": 48.1371079, "from_lon": 11.5753822, "to_lat": 48.7630165, "to_lon": 11.4250395, "count": 2, "colour": "#95a5a6", "label": "Munich, Bavaria, Germany \u2192 Ingolstadt, Bavaria, Germany, (Holy Roman Empire)<br>2 letters<br>Lantz \u2192 Cysat<br>Lantz \u2192 Cysat"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Gr\u00fcninger \u2192 Osiander"}, {"from_lat": 48.6960311, "from_lon": 8.6779546, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Bad Teinach-Zavelstein, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Hafenreffer \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 3, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>3 letters<br>Kepler \u2192 Quietanus<br>Kepler \u2192 Quietanus<br>Kepler \u2192 Quietanus"}, {"from_lat": 48.1598261, "from_lon": 14.0758845, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Castle Leombach, Leombach, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Schallenberg \u2192 Kepler"}], "1620": [{"from_lat": 45.4046171, "from_lon": 12.3105232, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Venice, Veneto, Italy \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bianchi \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 45.4046171, "to_lon": 12.3105232, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Venice, Veneto, Italy<br>1 letter<br>Kepler \u2192 Bianchi"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 4, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>4 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 49.1922443, "from_lon": 16.6113382, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Brno, South Moravia, Czech Republic \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Gringallet \u2192 Kepler<br>Gringallet \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 6, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>6 letters<br>Schickard \u2192 Kepler<br>M\u00e4stlin \u2192 Kepler<br>Schickard \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Schickard \u2192 Bernegger"}, {"from_lat": 51.2077989, "from_lon": 5.9461436, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Horn, (West Frisia) Limburg, Netherlands \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Vicke \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>2 letters<br>Kepler \u2192 Tengnagel<br>Kepler \u2192 J\u00f6rger von Tollet"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#95a5a6", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Cr\u00fcger \u2192 M\u00fcller"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.3690341, "to_lon": 10.8979522, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Augsburg, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Augsburg"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Regensburg"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Tengnagel \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 M\u00e4stlin"}, {"from_lat": 49.453872, "from_lon": 11.077298, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Nuremberg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Nuremberg \u2192 Kepler"}, {"from_lat": 48.1598261, "from_lon": 14.0758845, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Castle Leombach, Leombach, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Schallenberg \u2192 Kepler"}, {"from_lat": 48.7419909, "from_lon": 7.3625953, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Saverne, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Quietanus \u2192 Kepler"}, {"from_lat": 48.45927, "from_lon": 13.80866, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Wesenufer, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Gringallet \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.7630165, "from_lon": 11.4250395, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Ingolstadt, Bavaria, Germany, (Holy Roman Empire) \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.3690341, "from_lon": 10.8979522, "to_lat": 48.7630165, "to_lon": 11.4250395, "count": 1, "colour": "#2980b9", "label": "Augsburg, Bavaria, Germany \u2192 Ingolstadt, Bavaria, Germany, (Holy Roman Empire)<br>1 letter<br>Gringallet \u2192 Kepler"}, {"from_lat": 48.7427584, "from_lon": 9.3071685, "to_lat": 49.0668087, "to_lon": 8.9999838, "count": 1, "colour": "#2980b9", "label": "Esslingen, Baden-W\u00fcrttemberg, Germany \u2192 G\u00fcglingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>1 letter<br>Schickard \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 49.0668087, "to_lon": 8.9999838, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 G\u00fcglingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Schickard \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 49.0668087, "to_lon": 8.9999838, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 G\u00fcglingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 49.453872, "to_lon": 11.077298, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Nuremberg, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Nuremberg"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.7784485, "to_lon": 9.1800132, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>1 letter<br>Kepler \u2192 W\u00fcrttemberg"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Graz, Styria, Austria<br>1 letter<br>Kepler \u2192 Guldin"}], "1621": [{"from_lat": 45.6348591, "from_lon": 11.4063543, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Vicenza, Veneto, Italy \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Pasino \u2192 Kepler"}, {"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Regensburg, Bavaria, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 3, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>3 letters<br>Schickard \u2192 Bernegger<br>Schickard \u2192 Bernegger<br>Schickard \u2192 Bernegger"}, {"from_lat": 46.2017559, "from_lon": 6.1466014, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Geneva, Geneva, Switzerland \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Crusius \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 52.3412273, "to_lon": 14.549452, "count": 1, "colour": "#e74c3c", "label": "Regensburg, Bavaria, Germany \u2192 Frankfurt (Oder), Brandenburg, Germany<br>1 letter<br>Kepler \u2192 Origanus"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Crusius \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>W\u00fcrttemberg \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.5748229, "to_lon": 13.4609744, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Passau, Lower Bavaria, Germany<br>1 letter<br>Kepler \u2192 Tengnagel"}], "1622": [{"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 6, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>6 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>2 letters<br>Kepler \u2192 Tengnagel<br>Kepler \u2192 Tengnagel"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Kepler \u2192 Oberndorffer"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 2, "colour": "#95a5a6", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Leipzig, Saxony, Germany<br>2 letters<br>Cr\u00fcger \u2192 M\u00fcller<br>Cr\u00fcger \u2192 M\u00fcller"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 51.0493286, "to_lon": 13.7381437, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Dresden, Saxony, Germany<br>1 letter<br>Kepler \u2192 Seussius"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Besold \u2192 Kepler<br>Besold \u2192 Kepler"}, {"from_lat": 51.3406321, "from_lon": 12.3747329, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Leipzig, Saxony, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>M\u00fcller \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Kepler \u2192 M\u00fcller"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>R\u00fcttel \u2192 Kepler"}], "1623": [{"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 5, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>5 letters<br>Schickard \u2192 Kepler<br>Besold \u2192 Kepler<br>Lansius \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#95a5a6", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Cr\u00fcger \u2192 M\u00fcller"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Cr\u00fcger \u2192 Kepler<br>Cr\u00fcger \u2192 Kepler"}, {"from_lat": 48.1565472, "from_lon": 14.0243752, "to_lat": 48.1598261, "to_lon": 14.0758845, "count": 1, "colour": "#e74c3c", "label": "Wels, Upper Austria, Austria \u2192 Castle Leombach, Leombach, Upper Austria, Austria<br>1 letter<br>Kepler \u2192 Widmar"}, {"from_lat": 50.41768, "from_lon": 8.63873, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Butzbach, Hesse, Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Hessen-Butzbach \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 54.3482907, "to_lon": 18.6540233, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Gda\u0144sk, Pomeranian Voivodeship, Poland<br>1 letter<br>Kepler \u2192 Cr\u00fcger"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>2 letters<br>R\u00fcttel \u2192 Kepler<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#2980b9", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Cr\u00fcger \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.5621964, "from_lon": 12.0859345, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Altdorf, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Odontius \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 51.5074456, "to_lon": -0.1277653, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 London, England, United Kingdom<br>1 letter<br>Kepler \u2192 Gunter"}, {"from_lat": 48.3331132, "from_lon": 13.8532739, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Schloss Weidenholz, Weidenholz, Upper Austria, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Hohenfelder \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Enenkel \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 47.0708678, "to_lon": 15.4382786, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Graz, Styria, Austria<br>1 letter<br>Kepler \u2192 Guldin"}], "1624": [{"from_lat": 52.503379, "from_lon": 13.3386522, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Berlin, Berlin, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Ursinus \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 4, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>4 letters<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 54.3482907, "to_lon": 18.6540233, "count": 3, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Gda\u0144sk, Pomeranian Voivodeship, Poland<br>3 letters<br>Kepler \u2192 Cr\u00fcger<br>Kepler \u2192 Cr\u00fcger<br>Kepler \u2192 Cr\u00fcger"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 6, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>6 letters<br>Schickard \u2192 Kepler<br>Falco \u2192 Kepler<br>Schickard \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>2 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>2 letters<br>Kepler \u2192 Guldin<br>Kepler \u2192 Guldin"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#95a5a6", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Cr\u00fcger \u2192 M\u00fcller"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 2, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>2 letters<br>R\u00fcttel \u2192 Kepler<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 54.3482907, "from_lon": 18.6540233, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Gda\u0144sk, Pomeranian Voivodeship, Poland \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Cr\u00fcger \u2192 Kepler"}, {"from_lat": 51.8666527, "from_lon": 12.646761, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Wittenberg, Saxony-Anhalt, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Rhodius \u2192 Kepler"}, {"from_lat": 50.41768, "from_lon": 8.63873, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Butzbach, Hesse, Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Hessen-Butzbach \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 1, "colour": "#2980b9", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>1 letter<br>Starhemberg \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Taxis \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.3331132, "to_lon": 13.8532739, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Schloss Weidenholz, Weidenholz, Upper Austria, Austria<br>1 letter<br>Kepler \u2192 Hohenfelder"}], "1625": [{"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Brahe"}, {"from_lat": 51.7520131, "from_lon": -1.2578499, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Oxford, Oxfordshire, England \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Briggs \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 50.41768, "from_lon": 8.63873, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Butzbach, Hesse, Germany, (Holy Roman Empire) \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Hessen-Butzbach \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bartsch \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Linz, Upper Austria, Austria<br>1 letter<br>H\u00f6ritzer von Steinbach \u2192 Kepler"}, {"from_lat": 48.7784485, "from_lon": 9.1800132, "to_lat": 48.6919419, "to_lon": 9.5027384, "count": 2, "colour": "#2980b9", "label": "Stuttgart, Baden-W\u00fcrttemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) \u2192 Rossw\u00e4lden, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>R\u00fcttel \u2192 Kepler<br>R\u00fcttel \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Schickard \u2192 Bernegger"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 49.0195333, "to_lon": 12.0974869, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Regensburg, Bavaria, Germany<br>1 letter<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Sch\u00f6rkl \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>2 letters<br>Kepler \u2192 Guldin<br>Kepler \u2192 Guldin"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Schickard \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 3, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>3 letters<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler<br>Hebenstreit \u2192 Kepler"}, {"from_lat": 50.4370452, "from_lon": 15.3516528, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Taxis \u2192 Kepler"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 50.4370452, "to_lon": 15.3516528, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic<br>1 letter<br>Kepler \u2192 Taxis"}, {"from_lat": 49.453872, "from_lon": 11.077298, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Nuremberg, Bavaria, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Eckebrecht \u2192 Kepler"}], "1626": [{"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Vienna, Wien, Austria<br>2 letters<br>Kepler \u2192 Guldin<br>Kepler \u2192 Guldin"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 2, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>Kepler \u2192 Schickard<br>Kepler \u2192 Schickard"}, {"from_lat": 48.3059078, "from_lon": 14.286198, "to_lat": 54.3482907, "to_lon": 18.6540233, "count": 1, "colour": "#e74c3c", "label": "Linz, Upper Austria, Austria \u2192 Gda\u0144sk, Pomeranian Voivodeship, Poland<br>1 letter<br>Kepler \u2192 Cr\u00fcger"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 46.2017559, "to_lon": 6.1466014, "count": 1, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Geneva, Geneva, Switzerland<br>1 letter<br>Schickard \u2192 Schickard"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#2980b9", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Besold \u2192 Kepler"}], "1627": [{"from_lat": 50.41768, "from_lon": 8.63873, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 1, "colour": "#2980b9", "label": "Butzbach, Hesse, Germany, (Holy Roman Empire) \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Hessen-Butzbach \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 8, "colour": "#e74c3c", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>8 letters<br>Kepler \u2192 Schickard<br>Kepler \u2192 Schickard<br>Kepler \u2192 Schickard"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 4, "colour": "#e74c3c", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>4 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 3, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>3 letters<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 1, "colour": "#2980b9", "label": "Prague, Czech Republic \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Brahe \u2192 Kepler"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Brahe"}, {"from_lat": 48.577185, "from_lon": 10.4943532, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 4, "colour": "#2980b9", "label": "Dillingen an der Donau, Bavaria, Germany \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>4 letters<br>Curtz \u2192 Kepler<br>Curtz \u2192 Kepler<br>Curtz \u2192 Kepler"}, {"from_lat": 50.41768, "from_lon": 8.63873, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Butzbach, Hesse, Germany, (Holy Roman Empire) \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>M\u00f6gling \u2192 Schickard"}, {"from_lat": 48.5620891, "from_lon": 9.6264045, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 1, "colour": "#2980b9", "label": "Wiesensteig, Baden-W\u00fcrttemberg, Germany \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Curtz \u2192 Kepler"}, {"from_lat": 43.9593626, "from_lon": 11.210085, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 1, "colour": "#2980b9", "label": "Bellosguardo , Florence, Tuscany, Italy \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Galilei \u2192 Kepler"}, {"from_lat": 50.1106444, "from_lon": 8.6820917, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Frankfurt am Main, Hesse, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 48.7427584, "to_lon": 9.3071685, "count": 1, "colour": "#e74c3c", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Esslingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Esslingen"}], "1628": [{"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Regensburg, Bavaria, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Auracher \u2192 Kepler"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Kepler \u2192 Upper Austria"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 3, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Prague, Czech Republic<br>3 letters<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.3984968, "to_lon": 9.9912458, "count": 1, "colour": "#95a5a6", "label": "Strasbourg, Grand Est, France \u2192 Ulm, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Bernegger \u2192 Hebenstreit"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.1857192, "to_lon": 16.4221587, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Vienna, Wien, Austria<br>2 letters<br>Kepler \u2192 Guldin<br>Kepler \u2192 Guldin"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Schickard"}, {"from_lat": 50.0874654, "from_lon": 14.4212535, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "Prague, Czech Republic \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 48.3984968, "from_lon": 9.9912458, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "Ulm, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Horst \u2192 Kepler"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 2, "colour": "#2980b9", "label": "Vienna, Wien, Austria \u2192 Prague, Czech Republic<br>2 letters<br>Guldin \u2192 Kepler<br>Bossius \u2192 Kepler"}, {"from_lat": 48.436836, "from_lon": 9.9404851, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#2980b9", "label": "M\u00e4hringen, Baden-W\u00fcrttemberg, Germany \u2192 Prague, Czech Republic<br>1 letter<br>Bachmayer \u2192 Kepler"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 50.0874654, "to_lon": 14.4212535, "count": 1, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Prague, Czech Republic<br>1 letter<br>Kepler \u2192 Brahe"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 2, "colour": "#95a5a6", "label": "Strasbourg, Grand Est, France \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>2 letters<br>Bernegger \u2192 Schickard<br>Bernegger \u2192 Schickard"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.5203263, "from_lon": 9.053596, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#95a5a6", "label": "T\u00fcbingen, Baden-W\u00fcrttemberg, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Schickard \u2192 Bernegger"}, {"from_lat": 47.9569146, "from_lon": 7.2994054, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "Rouffach, Grand Est, France \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Quietanus \u2192 Kepler"}], "1629": [{"from_lat": 53.793587, "from_lon": 12.1764906, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 2, "colour": "#2980b9", "label": "G\u00fcstrow, Mecklenburg-Vorpommern, Germany \u2192 Zaga\u0144, Lubusz, Poland<br>2 letters<br>Wallenstein \u2192 Kepler<br>Wallenstein \u2192 Kepler"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 4, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Zaga\u0144, Lubusz, Poland<br>4 letters<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 3, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Leipzig, Saxony, Germany<br>3 letters<br>Kepler \u2192 Avianus<br>Kepler \u2192 M\u00fcller<br>Kepler \u2192 M\u00fcller"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 53.793587, "to_lon": 12.1764906, "count": 1, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 G\u00fcstrow, Mecklenburg-Vorpommern, Germany<br>1 letter<br>Kepler \u2192 Wallenstein"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 3, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Strasbourg, Grand Est, France<br>3 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 47.9569146, "to_lon": 7.2994054, "count": 1, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Rouffach, Grand Est, France<br>1 letter<br>Kepler \u2192 Quietanus"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 51.1147105, "to_lon": 15.2811574, "count": 1, "colour": "#95a5a6", "label": "Strasbourg, Grand Est, France \u2192 Luba\u0144, Lower Silesia, Poland<br>1 letter<br>Bernegger \u2192 Bartsch"}, {"from_lat": 51.1563185, "from_lon": 14.991018, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "G\u00f6rlitz, Saxony, Germany \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 51.1147105, "from_lon": 15.2811574, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 2, "colour": "#95a5a6", "label": "Luba\u0144, Lower Silesia, Poland \u2192 Leipzig, Saxony, Germany<br>2 letters<br>Bartsch \u2192 M\u00fcller<br>Bartsch \u2192 M\u00fcller"}, {"from_lat": 51.1563185, "from_lon": 14.991018, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#e74c3c", "label": "G\u00f6rlitz, Saxony, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Kepler \u2192 Schickard"}, {"from_lat": 51.1563185, "from_lon": 14.991018, "to_lat": 50.4370452, "to_lon": 15.3516528, "count": 1, "colour": "#e74c3c", "label": "G\u00f6rlitz, Saxony, Germany \u2192 Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic<br>1 letter<br>Kepler \u2192 Taxis"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 50.4370452, "to_lon": 15.3516528, "count": 1, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic<br>1 letter<br>Kepler \u2192 Taxis"}, {"from_lat": 48.1857192, "from_lon": 16.4221587, "to_lat": 43.7697955, "to_lon": 11.2556404, "count": 1, "colour": "#95a5a6", "label": "Vienna, Wien, Austria \u2192 Florence, Tuscany, Italy<br>1 letter<br>Pieronius \u2192 Galilei"}], "1630": [{"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 5, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Leipzig, Saxony, Germany<br>5 letters<br>Kepler \u2192 M\u00fcller<br>Kepler \u2192 M\u00fcller<br>Kepler \u2192 M\u00fcller"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 2, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Zaga\u0144, Lubusz, Poland<br>2 letters<br>Bernegger \u2192 Kepler<br>Bernegger \u2192 Kepler"}, {"from_lat": 51.4205494, "from_lon": 9.9142574, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "Friedland, Lower Saxony, Germany \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Griessel \u2192 Kepler"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 2, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Strasbourg, Grand Est, France<br>2 letters<br>Kepler \u2192 Bernegger<br>Kepler \u2192 Bernegger"}, {"from_lat": 50.4370452, "from_lon": 15.3516528, "to_lat": 48.3059078, "to_lon": 14.286198, "count": 1, "colour": "#95a5a6", "label": "Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic \u2192 Linz, Upper Austria, Austria<br>1 letter<br>Wallenstein \u2192 Upper Austria"}, {"from_lat": 50.41768, "from_lon": 8.63873, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "Butzbach, Hesse, Germany, (Holy Roman Empire) \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Hessen-Butzbach \u2192 Kepler"}, {"from_lat": 50.4370452, "from_lon": 15.3516528, "to_lat": 51.8953514, "to_lon": 11.0520563, "count": 1, "colour": "#95a5a6", "label": "Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic \u2192 Halberstadt, Saxony-Anhalt, Germany<br>1 letter<br>Wallenstein \u2192 Becker"}, {"from_lat": 51.6153231, "from_lon": 15.3007662, "to_lat": 50.4370452, "to_lon": 15.3516528, "count": 1, "colour": "#e74c3c", "label": "Zaga\u0144, Lubusz, Poland \u2192 Ji\u010d\u00edn, Kr\u00e1lov\u00e9hradeck\u00fd kraj, Czech Republic<br>1 letter<br>Kepler \u2192 Wallenstein"}, {"from_lat": 51.8953514, "from_lon": 11.0520563, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "Halberstadt, Saxony-Anhalt, Germany \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Becker \u2192 Kepler"}, {"from_lat": 48.8534951, "from_lon": 2.3483915, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Paris, \u00cele-de-France, France \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Gassendi \u2192 Schickard"}, {"from_lat": 48.8534951, "from_lon": 2.3483915, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "Paris, \u00cele-de-France, France \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Gassendi \u2192 Kepler"}, {"from_lat": 51.1147105, "from_lon": 15.2811574, "to_lat": 51.3406321, "to_lon": 12.3747329, "count": 1, "colour": "#e74c3c", "label": "Luba\u0144, Lower Silesia, Poland \u2192 Leipzig, Saxony, Germany<br>1 letter<br>Kepler \u2192 M\u00fcller"}, {"from_lat": 46.2017559, "from_lon": 6.1466014, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Geneva, Geneva, Switzerland \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Diodati \u2192 Schickard"}, {"from_lat": 48.584614, "from_lon": 7.7507127, "to_lat": 50.1106444, "to_lon": 8.6820917, "count": 1, "colour": "#2980b9", "label": "Strasbourg, Grand Est, France \u2192 Frankfurt am Main, Hesse, Germany<br>1 letter<br>Bernegger \u2192 Kepler"}, {"from_lat": 48.436836, "from_lon": 9.9404851, "to_lat": 51.6153231, "to_lon": 15.3007662, "count": 1, "colour": "#2980b9", "label": "M\u00e4hringen, Baden-W\u00fcrttemberg, Germany \u2192 Zaga\u0144, Lubusz, Poland<br>1 letter<br>Bachmayer \u2192 Kepler"}, {"from_lat": 51.3406321, "from_lon": 12.3747329, "to_lat": 48.584614, "to_lon": 7.7507127, "count": 1, "colour": "#e74c3c", "label": "Leipzig, Saxony, Germany \u2192 Strasbourg, Grand Est, France<br>1 letter<br>Kepler \u2192 Bernegger"}], "1631": [{"from_lat": 49.0195333, "from_lon": 12.0974869, "to_lat": 48.5203263, "to_lon": 9.053596, "count": 1, "colour": "#95a5a6", "label": "Regensburg, Bavaria, Germany \u2192 T\u00fcbingen, Baden-W\u00fcrttemberg, Germany<br>1 letter<br>Lansius \u2192 Unknown"}]};
    // Keep years in ascending order so slider/play are predictable.
    const years = Object.keys(YEAR_DATA).map(Number).sort(function(a, b) {
        return a - b;
    });

    // --- State ---
    let currentYear = years[0];
    let playing = false;
    let playTimer = null;
    let drawnLines = [];        // currently visible lines in single-year mode
    let cumulativeLines = {};   // year -> array of lines drawn for that year

    // --- Find the Leaflet map created by Folium ---
    let leafletMap = null;
    function getMap() {
        if (window.__timelineLeafletMap) {
            leafletMap = window.__timelineLeafletMap;
            return leafletMap;
        }

        if (leafletMap) {
            return leafletMap;
        }

        for (const key in window) {
            try {
                const obj = window[key];
                if (
                    obj &&
                    typeof obj.addLayer === "function" &&
                    typeof obj.removeLayer === "function" &&
                    typeof obj.setView === "function"
                ) {
                    leafletMap = obj;
                    return leafletMap;
                }
            } catch (error) {
                // Ignore unrelated window objects.
            }
        }

        return null;
    }

    function getLineWeight(letterCount) {
        // Thin for small counts, thicker for large counts, capped for readability.
        return Math.min(1 + Math.sqrt(letterCount) * 0.9, 6);
    }

    function clearLines(lineArray) {
        const mapInstance = getMap();
        if (!mapInstance) {
            return;
        }

        lineArray.forEach(function(line) {
            mapInstance.removeLayer(line);
        });
        lineArray.length = 0;
    }

    function drawYear(year, targetArray) {
        const mapInstance = getMap();
        if (!mapInstance) {
            return;
        }

        const routes = YEAR_DATA[String(year)] || [];
        routes.forEach(function(route) {
            const line = L.polyline(
                [[route.from_lat, route.from_lon], [route.to_lat, route.to_lon]],
                {
                    color: route.colour,
                    weight: getLineWeight(route.count),
                    opacity: 0.75,
                }
            );
            line.bindPopup(route.label);
            line.addTo(mapInstance);
            targetArray.push(line);
        });
    }

    function updateCountLabel(year) {
        const count = (YEAR_DATA[String(year)] || []).reduce(function(sum, route) {
            return sum + route.count;
        }, 0);

        document.getElementById("count-label").textContent =
            count + " letter" + (count !== 1 ? "s" : "") + " this year";
    }

    function showYear(year) {
        const cumulativeEnabled = document.getElementById("cumulative-check").checked;
        if (!getMap()) {
            return;
        }

        if (cumulativeEnabled) {
            // Draw each year only once in cumulative mode.
            if (!cumulativeLines[year]) {
                cumulativeLines[year] = [];
                drawYear(year, cumulativeLines[year]);
            }
        } else {
            clearLines(drawnLines);
            drawYear(year, drawnLines);
        }

        updateCountLabel(year);
    }

    function clearAllCumulative() {
        if (!getMap()) {
            return;
        }

        Object.keys(cumulativeLines).forEach(function(year) {
            clearLines(cumulativeLines[year]);
        });
        cumulativeLines = {};
    }

    // --- UI wiring ---
    const slider = document.getElementById("year-slider");
    const yearLabel = document.getElementById("year-label");
    const playButton = document.getElementById("play-btn");

    slider.addEventListener("input", function() {
        currentYear = parseInt(this.value, 10);
        yearLabel.textContent = currentYear;
        showYear(currentYear);
    });

    document.getElementById("cumulative-check").addEventListener("change", function() {
        if (!this.checked) {
            clearAllCumulative();
            clearLines(drawnLines);
            showYear(currentYear);
        }
    });

    function stopPlayback() {
        playing = false;
        clearInterval(playTimer);
        playButton.innerHTML = "&#9654; Play";
    }

    function startPlayback() {
        playing = true;
        playButton.innerHTML = "&#9646;&#9646; Pause";

        if (currentYear >= years[years.length - 1]) {
            currentYear = years[0];
        }

        playTimer = setInterval(function() {
            currentYear += 1;

            if (currentYear > years[years.length - 1]) {
                currentYear = years[years.length - 1];
                stopPlayback();
            }

            slider.value = currentYear;
            yearLabel.textContent = currentYear;
            showYear(currentYear);
        }, 800);
    }

    playButton.addEventListener("click", function() {
        if (playing) {
            stopPlayback();
            return;
        }
        startPlayback();
    });

    // Give Leaflet a brief moment to initialize, then draw the first year.
    window.addEventListener("load", function() {
        setTimeout(function() {
            showYear(currentYear);
        }, 600);
    });
})();

let map_8aeecb9344fec32d7f74e3ed10ea56a5 = L.map(
                "map_8aeecb9344fec32d7f74e3ed10ea56a5",
                {
                    center: [48.5, 13.0],
                    crs: L.CRS.EPSG3857,
                    ...{
  "zoom": 5,
  "zoomControl": true,
  "preferCanvas": false,
}

                }
            );

            

        
    
            let tile_layer_f22e126bc2c5b2b16ca6d72bb36d41ee = L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                {
  "minZoom": 0,
  "maxZoom": 20,
  "maxNativeZoom": 20,
  "noWrap": false,
  "attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca href=\"https://carto.com/attributions\"\u003eCARTO\u003c/a\u003e",
  "subdomains": "abcd",
  "detectRetina": false,
  "tms": false,
  "opacity": 1,
}

            );
        
    
            tile_layer_f22e126bc2c5b2b16ca6d72bb36d41ee.addTo(map_8aeecb9344fec32d7f74e3ed10ea56a5);
        
    
            let feature_group_44cc54554b4491df45636d342a25f5e3 = L.featureGroup(
                {
}
            );
        
    
            let circle_marker_585542ae9d2fb269fa7ccf7405a0f7e0 = L.circleMarker(
                [48.7501041, 8.8707147],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_585542ae9d2fb269fa7ccf7405a0f7e0.bindTooltip(
                `<div>
                     Weil der Stadt, Baden-Württemberg, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_160dc8add72e677aa275ff3cd18c8c12 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_160dc8add72e677aa275ff3cd18c8c12.bindTooltip(
                `<div>
                     Tübingen, Baden-Württemberg, Germany — 184 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_36493973f1e63288a6817375b294682a = L.circleMarker(
                [49.3180932, 9.4217233],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_36493973f1e63288a6817375b294682a.bindTooltip(
                `<div>
                     Widdern, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_68cfb244a462b15e6369e9b4dccd89a7 = L.circleMarker(
                [48.4121233, 9.7847091],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_68cfb244a462b15e6369e9b4dccd89a7.bindTooltip(
                `<div>
                     Blaubeuren Abbey, Blaubeuren, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7f423e254a849fa8e75659ea835dcfbc = L.circleMarker(
                [48.8012983, 9.0150026],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7f423e254a849fa8e75659ea835dcfbc.bindTooltip(
                `<div>
                     Leonberg, Baden-Württemberg, Germany — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9c477d5b04bee935d899c99c06ab5749 = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9c477d5b04bee935d899c99c06ab5749.bindTooltip(
                `<div>
                     Graz, Styria, Austria — 153 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_72bd9b25f1394bc52e1f328c846a2fd0 = L.circleMarker(
                [47.2500001, 15.1666665],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_72bd9b25f1394bc52e1f328c846a2fd0.bindTooltip(
                `<div>
                     Styria, Austria — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9fc886a23793d3b9d5bbec9b7428a164 = L.circleMarker(
                [48.7142691, 8.7397624],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9fc886a23793d3b9d5bbec9b7428a164.bindTooltip(
                `<div>
                     Calw, Baden-Württemberg, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_be33cf1b1025d0a1a067d5e46889502b = L.circleMarker(
                [48.734346, 8.7352364],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_be33cf1b1025d0a1a067d5e46889502b.bindTooltip(
                `<div>
                     Hirsau, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7c3566ed506fab528f516c015ce8a02f = L.circleMarker(
                [48.2741408, 14.5817826],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7c3566ed506fab528f516c015ce8a02f.bindTooltip(
                `<div>
                     Schwertberg, Upper Austria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_87de3b50828aabdb0470cd6ea001ed00 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 21, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_87de3b50828aabdb0470cd6ea001ed00.bindTooltip(
                `<div>
                     Prague, Czech Republic — 513 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1b245d494fbeb487ee78c8852b52afcf = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_1b245d494fbeb487ee78c8852b52afcf.bindTooltip(
                `<div>
                     Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) — 60 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bc393099fc553dbf139b0946808f8f67 = L.circleMarker(
                [48.7031377, 9.6541116],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_bc393099fc553dbf139b0946808f8f67.bindTooltip(
                `<div>
                     Göppingen, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8aea81ab2ecbdcc6869e92f901efced3 = L.circleMarker(
                [48.8387397, 7.8318155],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8aea81ab2ecbdcc6869e92f901efced3.bindTooltip(
                `<div>
                     Haguenau, Grand Est, France — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8a7836df3baa548f0e8550732cd2a866 = L.circleMarker(
                [48.1371079, 11.5753822],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8a7836df3baa548f0e8550732cd2a866.bindTooltip(
                `<div>
                     Munich, Bavaria, Germany — 108 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_949f9edcd25a62496819081ac2af2c9a = L.circleMarker(
                [45.3984428, 11.8956829],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_949f9edcd25a62496819081ac2af2c9a.bindTooltip(
                `<div>
                     Padua, Veneto, Italy — 14 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7453fd159040cca770977c162b82bfa6 = L.circleMarker(
                [47.4121987, 15.2721668],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7453fd159040cca770977c162b82bfa6.bindTooltip(
                `<div>
                     Bruck an der Mur, Styria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3729e536150e238b5c150a28e7784acb = L.circleMarker(
                [53.5760029, 10.0755348],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_3729e536150e238b5c150a28e7784acb.bindTooltip(
                `<div>
                     Wandsbek, Hamburg, Germany — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e63b9ad1688cfd4d79cd637c709156f2 = L.circleMarker(
                [48.4283109, 9.2657297],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_e63b9ad1688cfd4d79cd637c709156f2.bindTooltip(
                `<div>
                     Burgstein, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_901667d13ea5cc6af142fc99f243313b = L.circleMarker(
                [48.5621964, 12.0859345],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_901667d13ea5cc6af142fc99f243313b.bindTooltip(
                `<div>
                     Altdorf, Bavaria, Germany — 8 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_aebfeacd04fbf002f0497063557a53c7 = L.circleMarker(
                [50.9281717, 11.5879359],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_aebfeacd04fbf002f0497063557a53c7.bindTooltip(
                `<div>
                     Jena, Thuringia, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_420c0894b8de5ecf29103185c7e1a745 = L.circleMarker(
                [47.2850667, 15.7110617],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_420c0894b8de5ecf29103185c7e1a745.bindTooltip(
                `<div>
                     Baierdorf bei Anger, Styria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9954c6826f050373dc94f144cca7cdf5 = L.circleMarker(
                [46.1456196, 15.0817358],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9954c6826f050373dc94f144cca7cdf5.bindTooltip(
                `<div>
                     Hrastnik, Hrastnik, Slovenia — 15 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_82101734f2f91a52489e7def68968930 = L.circleMarker(
                [51.8666527, 12.646761],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_82101734f2f91a52489e7def68968930.bindTooltip(
                `<div>
                     Wittenberg, Saxony-Anhalt, Germany — 23 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4b7d21edd40c37c6bc597a24087c23eb = L.circleMarker(
                [49.2888745, 10.5597693],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4b7d21edd40c37c6bc597a24087c23eb.bindTooltip(
                `<div>
                     Ansbach, Bavaria, Germany — 8 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b09a65c6956d71ae20ff7f8dec3ca7b2 = L.circleMarker(
                [50.8090106, 8.7704695],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b09a65c6956d71ae20ff7f8dec3ca7b2.bindTooltip(
                `<div>
                     Marburg, Hesse, Germany — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9de985c8e3b217bc916d1537dc293b1f = L.circleMarker(
                [50.291767, 14.8260014],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9de985c8e3b217bc916d1537dc293b1f.bindTooltip(
                `<div>
                     Benátky nad Jizerou, Central Bohemia, Czech Republic — 12 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a50e571e13dc18770babb325adcd3381 = L.circleMarker(
                [47.5242934, 14.3264883],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_a50e571e13dc18770babb325adcd3381.bindTooltip(
                `<div>
                     Strechau, Styria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_34fe1a42c4b97fe45ba11f102251c23d = L.circleMarker(
                [50.253211, 14.8409386],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_34fe1a42c4b97fe45ba11f102251c23d.bindTooltip(
                `<div>
                     Girsitz — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_38ddf431ef40bc6e2286bbbb279bd5a5 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_38ddf431ef40bc6e2286bbbb279bd5a5.bindTooltip(
                `<div>
                     Vienna, Wien, Austria — 59 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c406383f9c899cef68d3840d0e34b14e = L.circleMarker(
                [48.584614, 7.7507127],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c406383f9c899cef68d3840d0e34b14e.bindTooltip(
                `<div>
                     Strasbourg, Grand Est, France — 87 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b90ff44ae5e88647f45f760ee4672ccd = L.circleMarker(
                [49.7477415, 13.3775249],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b90ff44ae5e88647f45f760ee4672ccd.bindTooltip(
                `<div>
                     Plzeň, Plzeňský, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_cabbc50035185ba2c703a818bd7dab66 = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_cabbc50035185ba2c703a818bd7dab66.bindTooltip(
                `<div>
                     Dresden, Saxony, Germany — 11 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c757277a95fdcd1d19c6758ef2e6724c = L.circleMarker(
                [44.4938203, 11.3426327],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c757277a95fdcd1d19c6758ef2e6724c.bindTooltip(
                `<div>
                     Bologna, Emilia-Romagna, Italy — 22 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b131955c397891d558f501395f46bb80 = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 17, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b131955c397891d558f501395f46bb80.bindTooltip(
                `<div>
                     Linz, Upper Austria, Austria — 343 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_465ff5e3fd51b1c8e5adcd896413bfa4 = L.circleMarker(
                [52.2694897, 6.2364886],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_465ff5e3fd51b1c8e5adcd896413bfa4.bindTooltip(
                `<div>
                     Deventer, Overijssel, Netherlands — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bb264a9ea8a03ad231983e7e0b424846 = L.circleMarker(
                [52.1314783, 11.6400789],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_bb264a9ea8a03ad231983e7e0b424846.bindTooltip(
                `<div>
                     Magdeburg, Saxony-Anhalt, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8a936566788b068c82f758cacfa3ce9b = L.circleMarker(
                [53.6373063, 7.4341272],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8a936566788b068c82f758cacfa3ce9b.bindTooltip(
                `<div>
                     Resterhafe, Lower Saxony, Germany — 6 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8ca448f032eb0b795d4260ed55551809 = L.circleMarker(
                [52.503379, 13.3386522],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8ca448f032eb0b795d4260ed55551809.bindTooltip(
                `<div>
                     Berlin, Berlin, Germany — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_db6a2d3d220d3b7561163a608c20f0dd = L.circleMarker(
                [52.3412273, 14.549452],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_db6a2d3d220d3b7561163a608c20f0dd.bindTooltip(
                `<div>
                     Frankfurt (Oder), Brandenburg, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_49b6dbe636591c9948ab19b0e4949dfd = L.circleMarker(
                [43.7697955, 11.2556404],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_49b6dbe636591c9948ab19b0e4949dfd.bindTooltip(
                `<div>
                     Florence, Tuscany, Italy — 11 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_189827239ab226e102f594b55fa259cb = L.circleMarker(
                [53.5094623, 7.3583406],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_189827239ab226e102f594b55fa259cb.bindTooltip(
                `<div>
                     Aurich, Lower Saxony, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_050b264a7a47c3852ac4a03ba5189e50 = L.circleMarker(
                [53.6468107, 7.6118499],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_050b264a7a47c3852ac4a03ba5189e50.bindTooltip(
                `<div>
                     Esens, Lower Saxony, Germany — 17 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_31653d923a7caf140fd63930a92f05b6 = L.circleMarker(
                [53.0758196, 8.8071646],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_31653d923a7caf140fd63930a92f05b6.bindTooltip(
                `<div>
                     Bremen, Bremen, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2d3a8217f5af6317fe0e2407d9db11ac = L.circleMarker(
                [49.0681018, 17.4663899],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_2d3a8217f5af6317fe0e2407d9db11ac.bindTooltip(
                `<div>
                     Uherské Hradiště, Zlín, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_11de47aae9390786bc543868f5f8c831 = L.circleMarker(
                [49.3068037, 15.6766872],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_11de47aae9390786bc543868f5f8c831.bindTooltip(
                `<div>
                     Brtnice, Vysočina, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3035db5f0a7402adb55f101f4705660f = L.circleMarker(
                [47.2466319, 15.3092173],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_3035db5f0a7402adb55f101f4705660f.bindTooltip(
                `<div>
                     Schloss Rabenstein, Styria, Austria — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8372b4dd2ad61c69562868a0bd34964e = L.circleMarker(
                [45.4046171, 12.3105232],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8372b4dd2ad61c69562868a0bd34964e.bindTooltip(
                `<div>
                     Venice, Veneto, Italy — 15 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_77c3b610924b58f3a04ea5bfd7498ad3 = L.circleMarker(
                [48.7180364, 10.7807299],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_77c3b610924b58f3a04ea5bfd7498ad3.bindTooltip(
                `<div>
                     Donauwörth, Bavaria, Germany — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_038ee24f61c06ce4490dec3ec5a041cc = L.circleMarker(
                [54.7046485, 20.4565666],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_038ee24f61c06ce4490dec3ec5a041cc.bindTooltip(
                `<div>
                     Kaliningrad [Königsberg], Kaliningrad Oblast, Russia [Prussia] — 11 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b9154bcbf908e117f5d9dfbbc364c03b = L.circleMarker(
                [52.3730796, 4.8924534],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b9154bcbf908e117f5d9dfbbc364c03b.bindTooltip(
                `<div>
                     Amsterdam, North Holland, (United Provinces) Netherlands — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c648902d87d066c96927d90a29f5cfb9 = L.circleMarker(
                [51.2077989, 5.9461436],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c648902d87d066c96927d90a29f5cfb9.bindTooltip(
                `<div>
                     Horn, (West Frisia) Limburg, Netherlands — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_adc6cf629276fd320b1d72960ee2cbfd = L.circleMarker(
                [49.4093582, 8.694724],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_adc6cf629276fd320b1d72960ee2cbfd.bindTooltip(
                `<div>
                     Heidelberg, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_92e52976c3b67166dc0f635765bd48ae = L.circleMarker(
                [54.0886707, 12.1400211],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_92e52976c3b67166dc0f635765bd48ae.bindTooltip(
                `<div>
                     Rostock, Mecklenburg-Vorpommern, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_caefb91fa526d5582b60ac7bef739994 = L.circleMarker(
                [50.1106444, 8.6820917],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_caefb91fa526d5582b60ac7bef739994.bindTooltip(
                `<div>
                     Frankfurt am Main, Hesse, Germany — 8 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7021210c2aaad1df5da2caf797df8306 = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7021210c2aaad1df5da2caf797df8306.bindTooltip(
                `<div>
                     Regensburg, Bavaria, Germany — 21 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e227079b4f2eb698cb9b5ba19f25bc67 = L.circleMarker(
                [53.5336832, 7.2642003],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_e227079b4f2eb698cb9b5ba19f25bc67.bindTooltip(
                `<div>
                     Osteel, Lower Saxony, Germany — 24 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5efce98790bfcda3e679552399fdb55f = L.circleMarker(
                [47.2654296, 11.3927685],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_5efce98790bfcda3e679552399fdb55f.bindTooltip(
                `<div>
                     Innsbruck, Tyrol, Austria, (Holy Roman Empire) — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8476d052d09357c639144232eef8afc9 = L.circleMarker(
                [46.8370716, 13.3704357],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8476d052d09357c639144232eef8afc9.bindTooltip(
                `<div>
                     Möllbrücke, Carinthia, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bc2460647ad341625282f5e40b26fb29 = L.circleMarker(
                [47.8803788, 10.622246],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_bc2460647ad341625282f5e40b26fb29.bindTooltip(
                `<div>
                     Kaufbeuren, Bavaria, Germany — 9 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3789f0ddc3b3d0c5e81b919a336cb787 = L.circleMarker(
                [48.745628, 11.1879622],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_3789f0ddc3b3d0c5e81b919a336cb787.bindTooltip(
                `<div>
                     Neuburg an der Donau, Bavaria, Germany — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3ac1db370ed6899fc832b247a31dfa80 = L.circleMarker(
                [51.5074456, -0.1277653],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_3ac1db370ed6899fc832b247a31dfa80.bindTooltip(
                `<div>
                     London, England, United Kingdom — 8 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7953bbf4db550b5af4a93b013f882d3a = L.circleMarker(
                [51.1563185, 14.991018],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7953bbf4db550b5af4a93b013f882d3a.bindTooltip(
                `<div>
                     Görlitz, Saxony, Germany — 11 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c6387885fe3d245a47a75299673e6009 = L.circleMarker(
                [45.0677551, 7.6824892],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c6387885fe3d245a47a75299673e6009.bindTooltip(
                `<div>
                     Turin, Piedmont, Italy — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fdcf8846afd355695aa26f8db0c9cd8e = L.circleMarker(
                [50.5229864, 14.9741022],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_fdcf8846afd355695aa26f8db0c9cd8e.bindTooltip(
                `<div>
                     Mnichovo Hradiště, Central Bohemia, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_866d46cf5570797e90ddda04a2e6ad9a = L.circleMarker(
                [49.9995205, 8.2736253],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_866d46cf5570797e90ddda04a2e6ad9a.bindTooltip(
                `<div>
                     Mainz, Rhineland-Palatinate, Germany — 14 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9e480c181edebe3b29f8d1a9416e4c2e = L.circleMarker(
                [52.1594747, 4.4908843],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9e480c181edebe3b29f8d1a9416e4c2e.bindTooltip(
                `<div>
                     Leiden, South Holland, Netherlands — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_097301d444fc6799c3bde15f3672ac6e = L.circleMarker(
                [51.3406321, 12.3747329],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_097301d444fc6799c3bde15f3672ac6e.bindTooltip(
                `<div>
                     Leipzig, Saxony, Germany — 47 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_67c71df5db2d72c8e170bab09cf6e5ba = L.circleMarker(
                [50.039436, 15.5606989],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_67c71df5db2d72c8e170bab09cf6e5ba.bindTooltip(
                `<div>
                     Přelouč, Pardubický, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_face94df933e1fceaa86d4fbc4a7926e = L.circleMarker(
                [51.2211097, 4.3997081],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_face94df933e1fceaa86d4fbc4a7926e.bindTooltip(
                `<div>
                     Antwerp, Flanders, Belgium — 10 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4455c5691aac9314b220ed2ac6ba336d = L.circleMarker(
                [46.603354, 1.8883335],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4455c5691aac9314b220ed2ac6ba336d.bindTooltip(
                `<div>
                     France — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2afd49292b47ce88e5c5ce071de2e2ac = L.circleMarker(
                [41.8933203, 12.4829321],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_2afd49292b47ce88e5c5ce071de2e2ac.bindTooltip(
                `<div>
                     Rome, Latium, Italy — 5 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fff17b87ce54494cf2d53ac722c69a2b = L.circleMarker(
                [50.2136597, 14.4405574],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_fff17b87ce54494cf2d53ac722c69a2b.bindTooltip(
                `<div>
                     Panenské Břežany, Central Bohemia — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e8507f4a745265951c3a29eed2e57fca = L.circleMarker(
                [47.9960901, 7.8494005],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_e8507f4a745265951c3a29eed2e57fca.bindTooltip(
                `<div>
                     Freiburg, Baden-Württemberg, Germany — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4cd21c8b17de37ed6ff11315184af5ba = L.circleMarker(
                [50.9772092, 11.9863951],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4cd21c8b17de37ed6ff11315184af5ba.bindTooltip(
                `<div>
                     Crossen an der Elster, Thuringia, Germany — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e273097cb5a28d19b270de03eab11abe = L.circleMarker(
                [49.5940567, 17.251143],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_e273097cb5a28d19b270de03eab11abe.bindTooltip(
                `<div>
                     Olomouc, Moravia, Czech Republic — 7 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_65c60998b1640322e576c7820113f895 = L.circleMarker(
                [48.3082607, 14.0203999],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_65c60998b1640322e576c7820113f895.bindTooltip(
                `<div>
                     Eferding, Upper Austria, Austria — 5 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0e1a9c167bc24a7b1685c4f8cbd3621b = L.circleMarker(
                [49.9837884, 13.9359785],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_0e1a9c167bc24a7b1685c4f8cbd3621b.bindTooltip(
                `<div>
                     Nový Jáchymov, Central Bohemia, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d0f1d4903c8300cb8d24fa63e687b225 = L.circleMarker(
                [54.0703296, 9.9884451],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_d0f1d4903c8300cb8d24fa63e687b225.bindTooltip(
                `<div>
                     Neumünster, Schleswig-Holstein, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_74be34963f392601cb41a8afde650953 = L.circleMarker(
                [50.879202, 4.7011675],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_74be34963f392601cb41a8afde650953.bindTooltip(
                `<div>
                     Leuven, Flemish Brabant, Belgium — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_51f35dc6d487ba12a8235be72372e4ee = L.circleMarker(
                [51.6511561, 14.0342532],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_51f35dc6d487ba12a8235be72372e4ee.bindTooltip(
                `<div>
                     Altdöbern, Brandenburg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b939ec1b844c9e48779b7cc270f74e95 = L.circleMarker(
                [51.8953514, 11.0520563],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b939ec1b844c9e48779b7cc270f74e95.bindTooltip(
                `<div>
                     Halberstadt, Saxony-Anhalt, Germany — 7 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_da12bc26cef8579a80f3d80f3ba0841a = L.circleMarker(
                [52.1625283, 10.5348215],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_da12bc26cef8579a80f3d80f3ba0841a.bindTooltip(
                `<div>
                     Wolfenbüttel, Lower Saxony, Germany — 10 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_397163f9dc75a52c49221ecad96a2670 = L.circleMarker(
                [55.6867243, 12.5700724],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_397163f9dc75a52c49221ecad96a2670.bindTooltip(
                `<div>
                     Copenhagen, Capital Region, Denmark — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a9892a2dc8029b287f6d43a7f2727c35 = L.circleMarker(
                [50.698157, 17.3849804],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_a9892a2dc8029b287f6d43a7f2727c35.bindTooltip(
                `<div>
                     Grodków, Opole Voivodeship, Poland — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9583a7ebe042e489195d1c20ec506841 = L.circleMarker(
                [54.3482907, 18.6540233],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9583a7ebe042e489195d1c20ec506841.bindTooltip(
                `<div>
                     Gdańsk, Pomeranian Voivodeship, Poland — 21 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_115b0344c53cb3e1ce901035f636091a = L.circleMarker(
                [48.8534951, 2.3483915],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_115b0344c53cb3e1ce901035f636091a.bindTooltip(
                `<div>
                     Paris, Île-de-France, France — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d673685ac3a917e2fe938f65f9d989db = L.circleMarker(
                [52.2277037, 11.0104702],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_d673685ac3a917e2fe938f65f9d989db.bindTooltip(
                `<div>
                     Helmstedt, Lower Saxony, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f6396b2eb3a2ce3a66178bea835c5a6b = L.circleMarker(
                [49.8422832, 13.9665265],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_f6396b2eb3a2ce3a66178bea835c5a6b.bindTooltip(
                `<div>
                     Lochovice, Central Bohemia , Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4a386f45117f12599b6a2480dc4012a6 = L.circleMarker(
                [48.5296743, 11.5084954],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4a386f45117f12599b6a2480dc4012a6.bindTooltip(
                `<div>
                     Pfaffenhofen an der Ilm, Bavaria, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a8786e374dc00b5745097d2f2524f06f = L.circleMarker(
                [48.3690341, 10.8979522],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_a8786e374dc00b5745097d2f2524f06f.bindTooltip(
                `<div>
                     Augsburg, Bavaria, Germany — 5 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bb775207e8d88b75ea21827ebd7c89c4 = L.circleMarker(
                [50.8467372, 4.352493],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_bb775207e8d88b75ea21827ebd7c89c4.bindTooltip(
                `<div>
                     Brussels, Brussels Capital Region, Belgium — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f158c097c30c47a78db8baf3882d54f1 = L.circleMarker(
                [48.2858001, 14.3721605],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_f158c097c30c47a78db8baf3882d54f1.bindTooltip(
                `<div>
                     Steyregg, Upper Austria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2ca8d40a29ef1d6d293721d2bee5d1ad = L.circleMarker(
                [49.453872, 11.077298],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_2ca8d40a29ef1d6d293721d2bee5d1ad.bindTooltip(
                `<div>
                     Nuremberg, Bavaria, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_68e3e973e996173b11ddb4bb979fea6c = L.circleMarker(
                [49.259407, 14.7193304],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_68e3e973e996173b11ddb4bb979fea6c.bindTooltip(
                `<div>
                     Soběslav, Jihočeský, Czech Republic — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_40d18c362b1f7130e0e73fa15cb44652 = L.circleMarker(
                [48.1565472, 14.0243752],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_40d18c362b1f7130e0e73fa15cb44652.bindTooltip(
                `<div>
                     Wels, Upper Austria, Austria — 5 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dd5d924b03fade7ca959e1335021fc3a = L.circleMarker(
                [50.3652854, 18.8722567],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_dd5d924b03fade7ca959e1335021fc3a.bindTooltip(
                `<div>
                     Bytom, Silesian Voivodeship, Poland — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_850dce9bf1392b3e20d0936d565ba6a9 = L.circleMarker(
                [51.5542053, 15.8260835],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_850dce9bf1392b3e20d0936d565ba6a9.bindTooltip(
                `<div>
                     Szprotawa, Lubusz Voivodeship, (Silesia) Poland — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_49c3e835f6a9d1a9e2a0ec2c4bf9aab8 = L.circleMarker(
                [47.4744721, 11.1681018],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_49c3e835f6a9d1a9e2a0ec2c4bf9aab8.bindTooltip(
                `<div>
                     Wamberg, Bavaria, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_169a5b72e40b860fd345fc15604d6f16 = L.circleMarker(
                [48.7630165, 11.4250395],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_169a5b72e40b860fd345fc15604d6f16.bindTooltip(
                `<div>
                     Ingolstadt, Bavaria, Germany, (Holy Roman Empire) — 6 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7b16d55690fdcb82e15acc6c97c6b936 = L.circleMarker(
                [49.0040317, 14.7714476],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7b16d55690fdcb82e15acc6c97c6b936.bindTooltip(
                `<div>
                     Třeboň, Jihočeský, Czech Republic — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_eacf2decf03bd018ab9dd029babdb660 = L.circleMarker(
                [50.938361, 6.959974],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_eacf2decf03bd018ab9dd029babdb660.bindTooltip(
                `<div>
                     Cologne, North Rhine-Westphalia, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f0f6dda89a4d9b17023b8781682f1cf0 = L.circleMarker(
                [52.7396681, 14.7014522],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_f0f6dda89a4d9b17023b8781682f1cf0.bindTooltip(
                `<div>
                     Dębno, West Pomerania, Poland — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b43ace3f043a647badb3dc1e1aec3dbc = L.circleMarker(
                [48.1598261, 14.0758845],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b43ace3f043a647badb3dc1e1aec3dbc.bindTooltip(
                `<div>
                     Castle Leombach, Leombach, Upper Austria, Austria — 6 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_26b4f3ebfe3ce6e4055f66b03fa779e7 = L.circleMarker(
                [48.8048828, 9.2146797],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_26b4f3ebfe3ce6e4055f66b03fa779e7.bindTooltip(
                `<div>
                     Bad Cannstatt, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_836b5867cd1e372c8682dbbc9e6fc9fc = L.circleMarker(
                [48.3984968, 9.9912458],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_836b5867cd1e372c8682dbbc9e6fc9fc.bindTooltip(
                `<div>
                     Ulm, Baden-Württemberg, Germany — 65 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c02291d784a398899f1496f1be22e170 = L.circleMarker(
                [48.6265854, 9.3365463],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c02291d784a398899f1496f1be22e170.bindTooltip(
                `<div>
                     Nürtingen, Baden-Württemberg, Germany — 6 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a449ea3483cb35ce556f2e49aed8513a = L.circleMarker(
                [50.5862066, 8.6742306],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_a449ea3483cb35ce556f2e49aed8513a.bindTooltip(
                `<div>
                     Giessen, Hesse, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d2c62acadb4f04f191835cfe3a965071 = L.circleMarker(
                [48.7432195, 15.1257542],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_d2c62acadb4f04f191835cfe3a965071.bindTooltip(
                `<div>
                     Hirschbach, Lower Austria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8d3d0edbd152ebf7be2277ff3a1e45ae = L.circleMarker(
                [47.524226, 14.3585643],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8d3d0edbd152ebf7be2277ff3a1e45ae.bindTooltip(
                `<div>
                     Rottenmann, Styria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_25a551905245aff3e292a5249fa6197a = L.circleMarker(
                [48.5584726, 15.3235622],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_25a551905245aff3e292a5249fa6197a.bindTooltip(
                `<div>
                     Castle Rastenberg, Rastenfeld, Lower Austria, Austria — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9e88d6b98d11e8802fd8709d85ae6f63 = L.circleMarker(
                [48.0390046, 14.4191276],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_9e88d6b98d11e8802fd8709d85ae6f63.bindTooltip(
                `<div>
                     Steyr, Upper Austria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dee7b35793673d2451099958cabea3d5 = L.circleMarker(
                [48.5300873, 15.2799777],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_dee7b35793673d2451099958cabea3d5.bindTooltip(
                `<div>
                     Loschberg, Waldhausen, Lower Austria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ca20a1f9495329c8a52803aecc648848 = L.circleMarker(
                [45.4641943, 9.1896346],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_ca20a1f9495329c8a52803aecc648848.bindTooltip(
                `<div>
                     Milan, Lombardy, Italy — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3f576fbd758735712d64dfc63104b6b0 = L.circleMarker(
                [48.6960311, 8.6779546],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_3f576fbd758735712d64dfc63104b6b0.bindTooltip(
                `<div>
                     Bad Teinach-Zavelstein, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f89e7aa0dfc0b8ac3f58dbd8a596c664 = L.circleMarker(
                [49.1922443, 16.6113382],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_f89e7aa0dfc0b8ac3f58dbd8a596c664.bindTooltip(
                `<div>
                     Brno, South Moravia, Czech Republic — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b489db20bd2dbac2a5619072e81f6ea0 = L.circleMarker(
                [48.7419909, 7.3625953],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_b489db20bd2dbac2a5619072e81f6ea0.bindTooltip(
                `<div>
                     Saverne, Grand Est, France — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_22c53804a59ff089f86c84dc2abb5a5f = L.circleMarker(
                [48.45927, 13.80866],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_22c53804a59ff089f86c84dc2abb5a5f.bindTooltip(
                `<div>
                     Wesenufer, Upper Austria, Austria — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c91dab26e35224d5e9447e9598fe6a24 = L.circleMarker(
                [48.7427584, 9.3071685],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c91dab26e35224d5e9447e9598fe6a24.bindTooltip(
                `<div>
                     Esslingen, Baden-Württemberg, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4dd43ea9589a92151304a8e417aa9bc1 = L.circleMarker(
                [49.0668087, 8.9999838],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4dd43ea9589a92151304a8e417aa9bc1.bindTooltip(
                `<div>
                     Güglingen, Baden-Württemberg, Germany — 6 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fba6e7783972c631aecdac267b7cc7ea = L.circleMarker(
                [45.6348591, 11.4063543],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_fba6e7783972c631aecdac267b7cc7ea.bindTooltip(
                `<div>
                     Vicenza, Veneto, Italy — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c2600ebb26323a46552b5c6f06afb7c4 = L.circleMarker(
                [46.2017559, 6.1466014],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c2600ebb26323a46552b5c6f06afb7c4.bindTooltip(
                `<div>
                     Geneva, Geneva, Switzerland — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6f13eb46c42d91daebc526b62297100a = L.circleMarker(
                [48.5748229, 13.4609744],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_6f13eb46c42d91daebc526b62297100a.bindTooltip(
                `<div>
                     Passau, Lower Bavaria, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bf6c947d54af1f5c103592f1ea418ed8 = L.circleMarker(
                [50.41768, 8.63873],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_bf6c947d54af1f5c103592f1ea418ed8.bindTooltip(
                `<div>
                     Butzbach, Hesse, Germany, (Holy Roman Empire) — 6 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_869ef83e8c9b1b7e05253fbe98016166 = L.circleMarker(
                [48.3331132, 13.8532739],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_869ef83e8c9b1b7e05253fbe98016166.bindTooltip(
                `<div>
                     Schloss Weidenholz, Weidenholz, Upper Austria, Austria — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_755082a690dc38cbb0a526ea099db610 = L.circleMarker(
                [51.7520131, -1.2578499],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_755082a690dc38cbb0a526ea099db610.bindTooltip(
                `<div>
                     Oxford, Oxfordshire, England — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_056007c1f7311d0ccee5fcc2e8b6e6f6 = L.circleMarker(
                [48.6919419, 9.5027384],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_056007c1f7311d0ccee5fcc2e8b6e6f6.bindTooltip(
                `<div>
                     Rosswälden, Baden-Württemberg, Germany — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7454d12a7a83dfc6ef614389220dff33 = L.circleMarker(
                [50.4370452, 15.3516528],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_7454d12a7a83dfc6ef614389220dff33.bindTooltip(
                `<div>
                     Jičín, Královéhradecký kraj, Czech Republic — 9 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ffabe9dc335ba38d58608a6da085dfab = L.circleMarker(
                [48.577185, 10.4943532],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_ffabe9dc335ba38d58608a6da085dfab.bindTooltip(
                `<div>
                     Dillingen an der Donau, Bavaria, Germany — 4 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c396c1517ba8477cfb2a4b97ea8a40ca = L.circleMarker(
                [48.5620891, 9.6264045],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_c396c1517ba8477cfb2a4b97ea8a40ca.bindTooltip(
                `<div>
                     Wiesensteig, Baden-Württemberg, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fe546cdcd4438447e69998076bd2447d = L.circleMarker(
                [43.9593626, 11.210085],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_fe546cdcd4438447e69998076bd2447d.bindTooltip(
                `<div>
                     Bellosguardo , Florence, Tuscany, Italy — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d89f13ca28cd96088ac4098d7efc3492 = L.circleMarker(
                [48.436836, 9.9404851],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_d89f13ca28cd96088ac4098d7efc3492.bindTooltip(
                `<div>
                     Mähringen, Baden-Württemberg, Germany — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8fcd620896434bcad9126c52bad27a8d = L.circleMarker(
                [51.6153231, 15.3007662],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_8fcd620896434bcad9126c52bad27a8d.bindTooltip(
                `<div>
                     Zagań, Lubusz, Poland — 37 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4630a29f9f2bc142011b81c559bfffe7 = L.circleMarker(
                [51.1147105, 15.2811574],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4630a29f9f2bc142011b81c559bfffe7.bindTooltip(
                `<div>
                     Lubań, Lower Silesia, Poland — 5 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_064adf849bf20f7d46c44d7595fe1818 = L.circleMarker(
                [47.9569146, 7.2994054],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_064adf849bf20f7d46c44d7595fe1818.bindTooltip(
                `<div>
                     Rouffach, Grand Est, France — 2 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f1bac645b2c18ceed528dab5c44e10d7 = L.circleMarker(
                [53.793587, 12.1764906],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_f1bac645b2c18ceed528dab5c44e10d7.bindTooltip(
                `<div>
                     Güstrow, Mecklenburg-Vorpommern, Germany — 3 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4ca07cba768db412eb3ef5a6d3ebc9fd = L.circleMarker(
                [51.4205494, 9.9142574],
                {"bubblingMouseEvents": true, "color": "#7f8c8d", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bdc3c7", "fillOpacity": 0.5, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_44cc54554b4491df45636d342a25f5e3);
        
    
            circle_marker_4ca07cba768db412eb3ef5a6d3ebc9fd.bindTooltip(
                `<div>
                     Friedland, Lower Saxony, Germany — 1 letters total
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            feature_group_44cc54554b4491df45636d342a25f5e3.addTo(map_8aeecb9344fec32d7f74e3ed10ea56a5);
        
    
            let layer_control_65c223921669c3539f6d91134d7aeef0_layers = {
                base_layers : {
                    "cartodbpositron" : tile_layer_f22e126bc2c5b2b16ca6d72bb36d41ee,
                },
                overlays :  {
                    "Cities" : feature_group_44cc54554b4491df45636d342a25f5e3,
                },
            };
            let layer_control_65c223921669c3539f6d91134d7aeef0 = L.control.layers(
                layer_control_65c223921669c3539f6d91134d7aeef0_layers.base_layers,
                layer_control_65c223921669c3539f6d91134d7aeef0_layers.overlays,
                {
  "position": "topright",
  "collapsed": false,
  "autoZIndex": true,
}
            ).addTo(map_8aeecb9344fec32d7f74e3ed10ea56a5);
