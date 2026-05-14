/*
 * This file is mostly auto-generated Leaflet code from Python.
 * Practical reading order:
 * 1) map creation
 * 2) basemap tile layer
 * 3) feature groups (city/person layers)
 * 4) individual routes and markers
 */
L_NO_TOUCH = false;
                L_DISABLE_3D = false;

let map_e9bef1e91c69bbc6d3090e60f47ab50e = L.map(
                "map_e9bef1e91c69bbc6d3090e60f47ab50e",
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

            

        
    
            let tile_layer_7b3f55578a2e753573ed9a974defb2a6 = L.tileLayer(
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
        
    
            tile_layer_7b3f55578a2e753573ed9a974defb2a6.addTo(map_e9bef1e91c69bbc6d3090e60f47ab50e);
        
    
            let feature_group_793d4fe6ae23895abb72acf925fa27dd = L.featureGroup(
                {
}
            );
        
    
            let poly_line_f7898ae2fec6e95eefbb866b870c2cfe = L.polyline(
                [[48.1371079, 11.5753822], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 8.0}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f7898ae2fec6e95eefbb866b870c2cfe.bindTooltip(
                `<div>
                     City route: Munich, Bavaria, Germany -> Prague, Czech Republic (55)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7a22948d824eb921af0e72ca66783dbf = L.polyline(
                [[48.5203263, 9.053596], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 7.0}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7a22948d824eb921af0e72ca66783dbf.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Linz, Upper Austria, Austria (41)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_47a34d913860bfd7319bf6adf5fbf7d5 = L.polyline(
                [[48.1857192, 16.4221587], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 6.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_47a34d913860bfd7319bf6adf5fbf7d5.bindTooltip(
                `<div>
                     City route: Vienna, Wien, Austria -> Linz, Upper Austria, Austria (29)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_70609e02436b66a2720f2923ad24f8ec = L.polyline(
                [[48.3984968, 9.9912458], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.4}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_70609e02436b66a2720f2923ad24f8ec.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Linz, Upper Austria, Austria (22)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_307246aa3d5ccac7d1e51e0f4223e582 = L.polyline(
                [[48.3059078, 14.286198], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_307246aa3d5ccac7d1e51e0f4223e582.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Strasbourg, Grand Est, France (21)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3546877865ed4996e172be2d1cfad4a3 = L.polyline(
                [[51.8666527, 12.646761], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3546877865ed4996e172be2d1cfad4a3.bindTooltip(
                `<div>
                     City route: Wittenberg, Saxony-Anhalt, Germany -> Prague, Czech Republic (19)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_74b4df7429a13078684e19bc07f33317 = L.polyline(
                [[53.5336832, 7.2642003], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_74b4df7429a13078684e19bc07f33317.bindTooltip(
                `<div>
                     City route: Osteel, Lower Saxony, Germany -> Prague, Czech Republic (19)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_023d3292a562152f61d1fd861dba6291 = L.polyline(
                [[47.0708678, 15.4382786], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.0}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_023d3292a562152f61d1fd861dba6291.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Tübingen, Baden-Württemberg, Germany (18)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9980c6a5c291ed2580e1684644165a80 = L.polyline(
                [[48.5203263, 9.053596], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.0}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9980c6a5c291ed2580e1684644165a80.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Graz, Styria, Austria (18)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0aa12b7c79dee868dc2525f5a4b1b4cc = L.polyline(
                [[50.0874654, 14.4212535], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 5.0}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0aa12b7c79dee868dc2525f5a4b1b4cc.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Munich, Bavaria, Germany (18)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a316f4ab3959cecf411a2e5b7a4dd2c0 = L.polyline(
                [[51.3406321, 12.3747329], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a316f4ab3959cecf411a2e5b7a4dd2c0.bindTooltip(
                `<div>
                     City route: Leipzig, Saxony, Germany -> Prague, Czech Republic (17)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_649e754176bd63ce799970a298e76f0b = L.polyline(
                [[48.3059078, 14.286198], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.8}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_649e754176bd63ce799970a298e76f0b.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Vienna, Wien, Austria (16)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a8b488980a8e01188b0ca0b84d10c5ab = L.polyline(
                [[48.1371079, 11.5753822], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a8b488980a8e01188b0ca0b84d10c5ab.bindTooltip(
                `<div>
                     City route: Munich, Bavaria, Germany -> Graz, Styria, Austria (15)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ab95704c0545f2bc742c355daa0c98fe = L.polyline(
                [[46.1456196, 15.0817358], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ab95704c0545f2bc742c355daa0c98fe.bindTooltip(
                `<div>
                     City route: Hrastnik, Hrastnik, Slovenia -> Graz, Styria, Austria (15)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0b7b9a11db28f30298a759dc44a2b039 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0b7b9a11db28f30298a759dc44a2b039.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Tübingen, Baden-Württemberg, Germany (15)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_595ef7d78d89713c2fc43d58e9216c70 = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_595ef7d78d89713c2fc43d58e9216c70.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Prague, Czech Republic (14)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1b6114308e174160a23cc78e2189fe0e = L.polyline(
                [[53.6468107, 7.6118499], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_1b6114308e174160a23cc78e2189fe0e.bindTooltip(
                `<div>
                     City route: Esens, Lower Saxony, Germany -> Prague, Czech Republic (14)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c258a3c0bb7a358d5d80029f7c98cac6 = L.polyline(
                [[48.584614, 7.7507127], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c258a3c0bb7a358d5d80029f7c98cac6.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Linz, Upper Austria, Austria (14)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_12fcc5abd5d4952536e71904d38e0f8a = L.polyline(
                [[44.4938203, 11.3426327], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.4}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_12fcc5abd5d4952536e71904d38e0f8a.bindTooltip(
                `<div>
                     City route: Bologna, Emilia-Romagna, Italy -> Prague, Czech Republic (13)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f3ea53b988878453c0e7e2a5b5a115a0 = L.polyline(
                [[48.7784485, 9.1800132], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.4}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f3ea53b988878453c0e7e2a5b5a115a0.bindTooltip(
                `<div>
                     City route: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) -> Linz, Upper Austria, Austria (13)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cbf23275c80e29c1bf91054cce3c1b1a = L.polyline(
                [[47.0708678, 15.4382786], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_cbf23275c80e29c1bf91054cce3c1b1a.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Prague, Czech Republic (12)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5c957f9f626bde484035a1fa892a2252 = L.polyline(
                [[50.0874654, 14.4212535], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5c957f9f626bde484035a1fa892a2252.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Linz, Upper Austria, Austria (12)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3f62c14396c7c4dd2e97303d4b9978a7 = L.polyline(
                [[47.0708678, 15.4382786], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3f62c14396c7c4dd2e97303d4b9978a7.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Munich, Bavaria, Germany (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3f792f63211195dfc255150c1254e213 = L.polyline(
                [[49.9995205, 8.2736253], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3f792f63211195dfc255150c1254e213.bindTooltip(
                `<div>
                     City route: Mainz, Rhineland-Palatinate, Germany -> Prague, Czech Republic (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c22d8352fea53dd5a79597e03fcc96dd = L.polyline(
                [[48.3984968, 9.9912458], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 4.0}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c22d8352fea53dd5a79597e03fcc96dd.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Tübingen, Baden-Württemberg, Germany (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8b10e2a3529c57c3f2e2d035d685739d = L.polyline(
                [[48.7784485, 9.1800132], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.8}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_8b10e2a3529c57c3f2e2d035d685739d.bindTooltip(
                `<div>
                     City route: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) -> Tübingen, Baden-Württemberg, Germany (9)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6aa4fb2d67cf131bed835559566db85a = L.polyline(
                [[50.0874654, 14.4212535], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.8}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6aa4fb2d67cf131bed835559566db85a.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Leipzig, Saxony, Germany (9)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6095515581a3d6a5e19320c63da13d6c = L.polyline(
                [[48.3059078, 14.286198], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.8}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6095515581a3d6a5e19320c63da13d6c.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Tübingen, Baden-Württemberg, Germany (9)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_efc2bfe7a153d163b0d085ae45cb2e6c = L.polyline(
                [[48.5203263, 9.053596], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_efc2bfe7a153d163b0d085ae45cb2e6c.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0c012e02ea7d78b00589c25a34dd1883 = L.polyline(
                [[50.0874654, 14.4212535], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0c012e02ea7d78b00589c25a34dd1883.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Graz, Styria, Austria (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5de58f426dbcfb76c323a6e3d360c9cb = L.polyline(
                [[54.7046485, 20.4565666], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5de58f426dbcfb76c323a6e3d360c9cb.bindTooltip(
                `<div>
                     City route: Kaliningrad [Königsberg], Kaliningrad Oblast, Russia [Prussia] -> Prague, Czech Republic (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0921e36148887b8e36180b72f74ac61 = L.polyline(
                [[52.1625283, 10.5348215], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d0921e36148887b8e36180b72f74ac61.bindTooltip(
                `<div>
                     City route: Wolfenbüttel, Lower Saxony, Germany -> Prague, Czech Republic (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7d318a731b3d217e6f1f3438a453e3d6 = L.polyline(
                [[48.3059078, 14.286198], [54.3482907, 18.6540233]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7d318a731b3d217e6f1f3438a453e3d6.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Gdańsk, Pomeranian Voivodeship, Poland (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4a13e1963bde38a1cb0906ad31957e01 = L.polyline(
                [[48.5203263, 9.053596], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4a13e1963bde38a1cb0906ad31957e01.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Strasbourg, Grand Est, France (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_427b4400f4af6e0e4b0147bcada348dc = L.polyline(
                [[51.6153231, 15.3007662], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_427b4400f4af6e0e4b0147bcada348dc.bindTooltip(
                `<div>
                     City route: Zagań, Lubusz, Poland -> Leipzig, Saxony, Germany (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e6ae27fd000ce56ce97e22016c57f17c = L.polyline(
                [[50.0874654, 14.4212535], [45.3984428, 11.8956829]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e6ae27fd000ce56ce97e22016c57f17c.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Padua, Veneto, Italy (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_23fc96efa0cfc12aff17f3f5a8a114b2 = L.polyline(
                [[50.0874654, 14.4212535], [43.7697955, 11.2556404]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_23fc96efa0cfc12aff17f3f5a8a114b2.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Florence, Tuscany, Italy (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0b453ed7827aacee8f5bcdfad2a7ebb = L.polyline(
                [[45.4046171, 12.3105232], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d0b453ed7827aacee8f5bcdfad2a7ebb.bindTooltip(
                `<div>
                     City route: Venice, Veneto, Italy -> Linz, Upper Austria, Austria (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1fefbb320ed0d391f09e3be4b5ae996c = L.polyline(
                [[48.584614, 7.7507127], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.5}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_1fefbb320ed0d391f09e3be4b5ae996c.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Zagań, Lubusz, Poland (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7070c69874fcf7cd13f0b3968f22d079 = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7070c69874fcf7cd13f0b3968f22d079.bindTooltip(
                `<div>
                     City route: Dresden, Saxony, Germany -> Prague, Czech Republic (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6c0541445b944f6663c4cbf59fa2e3fc = L.polyline(
                [[48.3059078, 14.286198], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6c0541445b944f6663c4cbf59fa2e3fc.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Prague, Czech Republic (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_396c26ade52b8578fc102f76812d3f88 = L.polyline(
                [[50.0874654, 14.4212535], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_396c26ade52b8578fc102f76812d3f88.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Bologna, Emilia-Romagna, Italy (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9875bf42c190299f04c5753af63f3b89 = L.polyline(
                [[54.3482907, 18.6540233], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9875bf42c190299f04c5753af63f3b89.bindTooltip(
                `<div>
                     City route: Gdańsk, Pomeranian Voivodeship, Poland -> Linz, Upper Austria, Austria (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_48c86335ba9afeda90424376b723de2a = L.polyline(
                [[54.3482907, 18.6540233], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_48c86335ba9afeda90424376b723de2a.bindTooltip(
                `<div>
                     City route: Gdańsk, Pomeranian Voivodeship, Poland -> Leipzig, Saxony, Germany (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a65efbd3712e8982a1cd17022afdb13e = L.polyline(
                [[53.6373063, 7.4341272], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a65efbd3712e8982a1cd17022afdb13e.bindTooltip(
                `<div>
                     City route: Resterhafe, Lower Saxony, Germany -> Prague, Czech Republic (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d514875095ec57b1651fa3459f7166f1 = L.polyline(
                [[49.0195333, 12.0974869], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d514875095ec57b1651fa3459f7166f1.bindTooltip(
                `<div>
                     City route: Regensburg, Bavaria, Germany -> Prague, Czech Republic (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_89538a32a524663de98afc3986f424f7 = L.polyline(
                [[47.8803788, 10.622246], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_89538a32a524663de98afc3986f424f7.bindTooltip(
                `<div>
                     City route: Kaufbeuren, Bavaria, Germany -> Prague, Czech Republic (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b6ab1a5d8acadade6fd60fa8572a8745 = L.polyline(
                [[51.1563185, 14.991018], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b6ab1a5d8acadade6fd60fa8572a8745.bindTooltip(
                `<div>
                     City route: Görlitz, Saxony, Germany -> Prague, Czech Republic (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8750bce97271995d429a650ea45da4f2 = L.polyline(
                [[48.3059078, 14.286198], [45.4046171, 12.3105232]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_8750bce97271995d429a650ea45da4f2.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Venice, Veneto, Italy (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4535a524db99d151cea3634f5ec1aab0 = L.polyline(
                [[48.1598261, 14.0758845], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4535a524db99d151cea3634f5ec1aab0.bindTooltip(
                `<div>
                     City route: Castle Leombach, Leombach, Upper Austria, Austria -> Linz, Upper Austria, Austria (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1ab357045779b71902d379c6279af284 = L.polyline(
                [[51.6153231, 15.3007662], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_1ab357045779b71902d379c6279af284.bindTooltip(
                `<div>
                     City route: Zagań, Lubusz, Poland -> Strasbourg, Grand Est, France (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7ac32f8bc338bc3301c8bab91a03e5bd = L.polyline(
                [[50.291767, 14.8260014], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7ac32f8bc338bc3301c8bab91a03e5bd.bindTooltip(
                `<div>
                     City route: Benátky nad Jizerou, Central Bohemia, Czech Republic -> Prague, Czech Republic (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_51ccff57310669dd04f55bbd2a06793d = L.polyline(
                [[53.0758196, 8.8071646], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_51ccff57310669dd04f55bbd2a06793d.bindTooltip(
                `<div>
                     City route: Bremen, Bremen, Germany -> Prague, Czech Republic (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8bf08f154c9bda57bdcab6d41b5e13fb = L.polyline(
                [[50.0874654, 14.4212535], [53.5336832, 7.2642003]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_8bf08f154c9bda57bdcab6d41b5e13fb.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Osteel, Lower Saxony, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_59ea6604ab40e944bd37e81bc2d32407 = L.polyline(
                [[50.0874654, 14.4212535], [47.8803788, 10.622246]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_59ea6604ab40e944bd37e81bc2d32407.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Kaufbeuren, Bavaria, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ed50a02c6d7a063b092656b63139cc36 = L.polyline(
                [[50.0874654, 14.4212535], [51.5074456, -0.1277653]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ed50a02c6d7a063b092656b63139cc36.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> London, England, United Kingdom (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_71ed27685b558224e1d9eb7e65e4e79a = L.polyline(
                [[49.5940567, 17.251143], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_71ed27685b558224e1d9eb7e65e4e79a.bindTooltip(
                `<div>
                     City route: Olomouc, Moravia, Czech Republic -> Prague, Czech Republic (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c7bd0408cc36647f2e70716966e3ea79 = L.polyline(
                [[51.2211097, 4.3997081], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c7bd0408cc36647f2e70716966e3ea79.bindTooltip(
                `<div>
                     City route: Antwerp, Flanders, Belgium -> Linz, Upper Austria, Austria (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0f92ad2e43377a15bc8c6acc4ee7a164 = L.polyline(
                [[49.259407, 14.7193304], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0f92ad2e43377a15bc8c6acc4ee7a164.bindTooltip(
                `<div>
                     City route: Soběslav, Jihočeský, Czech Republic -> Linz, Upper Austria, Austria (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6c23a9639f4a86cd575f062b96bd79b5 = L.polyline(
                [[48.3059078, 14.286198], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6c23a9639f4a86cd575f062b96bd79b5.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_752e6b5ba7ea8c556c1ce794980d965b = L.polyline(
                [[48.6265854, 9.3365463], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_752e6b5ba7ea8c556c1ce794980d965b.bindTooltip(
                `<div>
                     City route: Nürtingen, Baden-Württemberg, Germany -> Linz, Upper Austria, Austria (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a8c01fb60cfe90533f824be5be7addc7 = L.polyline(
                [[48.3984968, 9.9912458], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a8c01fb60cfe90533f824be5be7addc7.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Strasbourg, Grand Est, France (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_56d7ee5a9f25bae9f0b51f5e862c8c88 = L.polyline(
                [[48.584614, 7.7507127], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_56d7ee5a9f25bae9f0b51f5e862c8c88.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Ulm, Baden-Württemberg, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_99273aa32dce259b039b04c5cd8e28a7 = L.polyline(
                [[48.577185, 10.4943532], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_99273aa32dce259b039b04c5cd8e28a7.bindTooltip(
                `<div>
                     City route: Dillingen an der Donau, Bavaria, Germany -> Ulm, Baden-Württemberg, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_43ec39fc8ef84f49c5b4578f19465851 = L.polyline(
                [[48.7142691, 8.7397624], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_43ec39fc8ef84f49c5b4578f19465851.bindTooltip(
                `<div>
                     City route: Calw, Baden-Württemberg, Germany -> Graz, Styria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_32ec449493de6b15a57372ec1504b1d4 = L.polyline(
                [[48.8387397, 7.8318155], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_32ec449493de6b15a57372ec1504b1d4.bindTooltip(
                `<div>
                     City route: Haguenau, Grand Est, France -> Munich, Bavaria, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a4fc3329d7e24706bbd06e585a5d5dff = L.polyline(
                [[48.5621964, 12.0859345], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a4fc3329d7e24706bbd06e585a5d5dff.bindTooltip(
                `<div>
                     City route: Altdorf, Bavaria, Germany -> Munich, Bavaria, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a6aa99f3fbef2d0556944ccfa9119b21 = L.polyline(
                [[49.2888745, 10.5597693], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a6aa99f3fbef2d0556944ccfa9119b21.bindTooltip(
                `<div>
                     City route: Ansbach, Bavaria, Germany -> Graz, Styria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5f1829e767509f9e0d450a03b6be7c00 = L.polyline(
                [[50.0874654, 14.4212535], [50.291767, 14.8260014]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5f1829e767509f9e0d450a03b6be7c00.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Benátky nad Jizerou, Central Bohemia, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_aed92b0711dc25cf768154f5387cbe30 = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_aed92b0711dc25cf768154f5387cbe30.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Vienna, Wien, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f922ecb2ea11a4941260d36ea7feea0a = L.polyline(
                [[52.3412273, 14.549452], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f922ecb2ea11a4941260d36ea7feea0a.bindTooltip(
                `<div>
                     City route: Frankfurt (Oder), Brandenburg, Germany -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0ec3545f20328177f1f730d901597328 = L.polyline(
                [[49.2888745, 10.5597693], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0ec3545f20328177f1f730d901597328.bindTooltip(
                `<div>
                     City route: Ansbach, Bavaria, Germany -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ea81f96d20b47e7ccca259467006b299 = L.polyline(
                [[50.0874654, 14.4212535], [53.6468107, 7.6118499]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ea81f96d20b47e7ccca259467006b299.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Esens, Lower Saxony, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_32d252cf9ce5f9878accd20a6e2da1a0 = L.polyline(
                [[47.2466319, 15.3092173], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_32d252cf9ce5f9878accd20a6e2da1a0.bindTooltip(
                `<div>
                     City route: Schloss Rabenstein, Styria, Austria -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cd700efcaaf7340bbfa71fb2017d61c7 = L.polyline(
                [[45.4046171, 12.3105232], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_cd700efcaaf7340bbfa71fb2017d61c7.bindTooltip(
                `<div>
                     City route: Venice, Veneto, Italy -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4509102f241f00eeff9568c3e6c19826 = L.polyline(
                [[50.1106444, 8.6820917], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4509102f241f00eeff9568c3e6c19826.bindTooltip(
                `<div>
                     City route: Frankfurt am Main, Hesse, Germany -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f635601315b1f248256bafff68a1a0b2 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f635601315b1f248256bafff68a1a0b2.bindTooltip(
                `<div>
                     City route: Vienna, Wien, Austria -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_43f224c3d8c82f570aed467a0d896bd6 = L.polyline(
                [[51.5074456, -0.1277653], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_43f224c3d8c82f570aed467a0d896bd6.bindTooltip(
                `<div>
                     City route: London, England, United Kingdom -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2d3fc0654dd16800a323a949c8c0b2ee = L.polyline(
                [[50.0874654, 14.4212535], [52.1594747, 4.4908843]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2d3fc0654dd16800a323a949c8c0b2ee.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Leiden, South Holland, Netherlands (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9fade2eaa491c55aa72be19623a62992 = L.polyline(
                [[50.0874654, 14.4212535], [49.9995205, 8.2736253]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9fade2eaa491c55aa72be19623a62992.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Mainz, Rhineland-Palatinate, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fa6bba22ffd4841579788b2cb9a2cc69 = L.polyline(
                [[50.0874654, 14.4212535], [49.5940567, 17.251143]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_fa6bba22ffd4841579788b2cb9a2cc69.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Olomouc, Moravia, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e1bcd898bae7c8cdb3b3d0979ba44e14 = L.polyline(
                [[51.8953514, 11.0520563], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e1bcd898bae7c8cdb3b3d0979ba44e14.bindTooltip(
                `<div>
                     City route: Halberstadt, Saxony-Anhalt, Germany -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1a287d9695958edc0f8233b6dee72d8a = L.polyline(
                [[50.1106444, 8.6820917], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_1a287d9695958edc0f8233b6dee72d8a.bindTooltip(
                `<div>
                     City route: Frankfurt am Main, Hesse, Germany -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_46ec87e6cb23247a42bff2493b0033fc = L.polyline(
                [[48.3690341, 10.8979522], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_46ec87e6cb23247a42bff2493b0033fc.bindTooltip(
                `<div>
                     City route: Augsburg, Bavaria, Germany -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3092da4550ac7a08ce5de6520e78dbae = L.polyline(
                [[54.7046485, 20.4565666], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3092da4550ac7a08ce5de6520e78dbae.bindTooltip(
                `<div>
                     City route: Kaliningrad [Königsberg], Kaliningrad Oblast, Russia [Prussia] -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e61a9add9625c424a9e264e7e7891ee3 = L.polyline(
                [[49.453872, 11.077298], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e61a9add9625c424a9e264e7e7891ee3.bindTooltip(
                `<div>
                     City route: Nuremberg, Bavaria, Germany -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7e5485fd6b7caca1bf6e9e87b34e236f = L.polyline(
                [[47.2654296, 11.3927685], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7e5485fd6b7caca1bf6e9e87b34e236f.bindTooltip(
                `<div>
                     City route: Innsbruck, Tyrol, Austria, (Holy Roman Empire) -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9b57f54f8a93267ddc4278c611789050 = L.polyline(
                [[48.3082607, 14.0203999], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9b57f54f8a93267ddc4278c611789050.bindTooltip(
                `<div>
                     City route: Eferding, Upper Austria, Austria -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_08a9fd72fe2d70a6174f20969327c06b = L.polyline(
                [[48.3059078, 14.286198], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_08a9fd72fe2d70a6174f20969327c06b.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Regensburg, Bavaria, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6beeb77aee3a5ba9f152b011899e4459 = L.polyline(
                [[48.3059078, 14.286198], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6beeb77aee3a5ba9f152b011899e4459.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Graz, Styria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_13b7299c0390e50779318bc530141dba = L.polyline(
                [[50.41768, 8.63873], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_13b7299c0390e50779318bc530141dba.bindTooltip(
                `<div>
                     City route: Butzbach, Hesse, Germany, (Holy Roman Empire) -> Linz, Upper Austria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e69b6822c1552463ce918012f08cdc68 = L.polyline(
                [[48.584614, 7.7507127], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e69b6822c1552463ce918012f08cdc68.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Tübingen, Baden-Württemberg, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3d7761fe8923cfd2e8bb04683bad46a3 = L.polyline(
                [[48.584614, 7.7507127], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3d7761fe8923cfd2e8bb04683bad46a3.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Prague, Czech Republic (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d802e76fe1aba35b54058b3cf6b45c39 = L.polyline(
                [[51.1147105, 15.2811574], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d802e76fe1aba35b54058b3cf6b45c39.bindTooltip(
                `<div>
                     City route: Lubań, Lower Silesia, Poland -> Leipzig, Saxony, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d730ba7896590513471d22bbd4e26f18 = L.polyline(
                [[48.7501041, 8.8707147], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d730ba7896590513471d22bbd4e26f18.bindTooltip(
                `<div>
                     City route: Weil der Stadt, Baden-Württemberg, Germany -> Tübingen, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_01f6f6913bbe6397328eefae73a7806c = L.polyline(
                [[47.0708678, 15.4382786], [45.3984428, 11.8956829]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_01f6f6913bbe6397328eefae73a7806c.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Padua, Veneto, Italy (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_002d6840544ff41ed2cb7fda5a9d20d1 = L.polyline(
                [[50.8090106, 8.7704695], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_002d6840544ff41ed2cb7fda5a9d20d1.bindTooltip(
                `<div>
                     City route: Marburg, Hesse, Germany -> Graz, Styria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f3e1ca6882adb88c7287d9d535da46be = L.polyline(
                [[50.291767, 14.8260014], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f3e1ca6882adb88c7287d9d535da46be.bindTooltip(
                `<div>
                     City route: Benátky nad Jizerou, Central Bohemia, Czech Republic -> Graz, Styria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_50afcfc503e959fb9f1f7be7a0349806 = L.polyline(
                [[52.2694897, 6.2364886], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_50afcfc503e959fb9f1f7be7a0349806.bindTooltip(
                `<div>
                     City route: Deventer, Overijssel, Netherlands -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_dfdb8467960991fa9fa7c3fbbc463761 = L.polyline(
                [[43.7697955, 11.2556404], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_dfdb8467960991fa9fa7c3fbbc463761.bindTooltip(
                `<div>
                     City route: Florence, Tuscany, Italy -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5b694d8172a77ba71f19fe7221709d57 = L.polyline(
                [[48.7784485, 9.1800132], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5b694d8172a77ba71f19fe7221709d57.bindTooltip(
                `<div>
                     City route: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9264e0367ebe299ce7fc09f9831410bf = L.polyline(
                [[45.3984428, 11.8956829], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9264e0367ebe299ce7fc09f9831410bf.bindTooltip(
                `<div>
                     City route: Padua, Veneto, Italy -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c49c2d1b0b988175adce2ee2c411e6fe = L.polyline(
                [[48.7180364, 10.7807299], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c49c2d1b0b988175adce2ee2c411e6fe.bindTooltip(
                `<div>
                     City route: Donauwörth, Bavaria, Germany -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_860cb7612f596cb832999853c545b445 = L.polyline(
                [[48.745628, 11.1879622], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_860cb7612f596cb832999853c545b445.bindTooltip(
                `<div>
                     City route: Neuburg an der Donau, Bavaria, Germany -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0bcc431ca4c922f046d50017354eef1 = L.polyline(
                [[50.0874654, 14.4212535], [51.1563185, 14.991018]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d0bcc431ca4c922f046d50017354eef1.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Görlitz, Saxony, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e802361a19ad70cb4125d9df9706c4d7 = L.polyline(
                [[51.2211097, 4.3997081], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e802361a19ad70cb4125d9df9706c4d7.bindTooltip(
                `<div>
                     City route: Antwerp, Flanders, Belgium -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_dc24d9355fa5081a32c5c6c3978ddbf8 = L.polyline(
                [[41.8933203, 12.4829321], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_dc24d9355fa5081a32c5c6c3978ddbf8.bindTooltip(
                `<div>
                     City route: Rome, Latium, Italy -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_529c11425a2937a6c9fd90bf2df66c71 = L.polyline(
                [[48.5621964, 12.0859345], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_529c11425a2937a6c9fd90bf2df66c71.bindTooltip(
                `<div>
                     City route: Altdorf, Bavaria, Germany -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bf24b97bb16a509b9ee900c707038f1c = L.polyline(
                [[47.9960901, 7.8494005], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bf24b97bb16a509b9ee900c707038f1c.bindTooltip(
                `<div>
                     City route: Freiburg, Baden-Württemberg, Germany -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c358ede0b2092ae6850e36de4f40bb42 = L.polyline(
                [[50.9772092, 11.9863951], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c358ede0b2092ae6850e36de4f40bb42.bindTooltip(
                `<div>
                     City route: Crossen an der Elster, Thuringia, Germany -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b536c05771947b47b06667c52fd39a68 = L.polyline(
                [[50.0874654, 14.4212535], [51.0493286, 13.7381437]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b536c05771947b47b06667c52fd39a68.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Dresden, Saxony, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f7dc976861d9d52a862231d1d2b2fd55 = L.polyline(
                [[50.0874654, 14.4212535], [51.8953514, 11.0520563]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f7dc976861d9d52a862231d1d2b2fd55.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Halberstadt, Saxony-Anhalt, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_217860f172a8f49aa739882475ffb453 = L.polyline(
                [[50.0874654, 14.4212535], [52.1625283, 10.5348215]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_217860f172a8f49aa739882475ffb453.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Wolfenbüttel, Lower Saxony, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9904adecc5de19645775c2311c2fd881 = L.polyline(
                [[50.0874654, 14.4212535], [41.8933203, 12.4829321]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9904adecc5de19645775c2311c2fd881.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Rome, Latium, Italy (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c28de38dfb9782d3d60d342883702a54 = L.polyline(
                [[49.0195333, 12.0974869], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c28de38dfb9782d3d60d342883702a54.bindTooltip(
                `<div>
                     City route: Regensburg, Bavaria, Germany -> Strasbourg, Grand Est, France (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_37212be7bd2536a441859f488fb964a8 = L.polyline(
                [[48.3059078, 14.286198], [51.2211097, 4.3997081]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_37212be7bd2536a441859f488fb964a8.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Antwerp, Flanders, Belgium (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_dfed73ebc86520fafe1a06f8bfb2901d = L.polyline(
                [[48.1565472, 14.0243752], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_dfed73ebc86520fafe1a06f8bfb2901d.bindTooltip(
                `<div>
                     City route: Wels, Upper Austria, Austria -> Linz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ea4d3b66e638fea7664b2e695742a6ab = L.polyline(
                [[51.8666527, 12.646761], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ea4d3b66e638fea7664b2e695742a6ab.bindTooltip(
                `<div>
                     City route: Wittenberg, Saxony-Anhalt, Germany -> Linz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0d7abb99a1cd08e7317d307a4d438930 = L.polyline(
                [[48.3059078, 14.286198], [48.6265854, 9.3365463]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0d7abb99a1cd08e7317d307a4d438930.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Nürtingen, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4ebeee822ccdd5b179196d9a3897b2fb = L.polyline(
                [[48.5584726, 15.3235622], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4ebeee822ccdd5b179196d9a3897b2fb.bindTooltip(
                `<div>
                     City route: Castle Rastenberg, Rastenfeld, Lower Austria, Austria -> Linz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4f37726a82bdcb8c2cefd0d2b93785b7 = L.polyline(
                [[45.4641943, 9.1896346], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4f37726a82bdcb8c2cefd0d2b93785b7.bindTooltip(
                `<div>
                     City route: Milan, Lombardy, Italy -> Linz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9c777d6824b9ab75a44a6d8025fbcd0f = L.polyline(
                [[48.1371079, 11.5753822], [48.7630165, 11.4250395]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9c777d6824b9ab75a44a6d8025fbcd0f.bindTooltip(
                `<div>
                     City route: Munich, Bavaria, Germany -> Ingolstadt, Bavaria, Germany, (Holy Roman Empire) (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_38f46ac05f515114ff2310abbbcd8240 = L.polyline(
                [[49.1922443, 16.6113382], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_38f46ac05f515114ff2310abbbcd8240.bindTooltip(
                `<div>
                     City route: Brno, South Moravia, Czech Republic -> Linz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cb2b9c36e54798c79ca4c6f98131f692 = L.polyline(
                [[48.3984968, 9.9912458], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_cb2b9c36e54798c79ca4c6f98131f692.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Regensburg, Bavaria, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0d2a3b3383cc8ff16204c0d08e220304 = L.polyline(
                [[48.7784485, 9.1800132], [48.6919419, 9.5027384]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0d2a3b3383cc8ff16204c0d08e220304.bindTooltip(
                `<div>
                     City route: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) -> Rosswälden, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2829e4471af012173e4fdf0244bf6fdf = L.polyline(
                [[50.4370452, 15.3516528], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2829e4471af012173e4fdf0244bf6fdf.bindTooltip(
                `<div>
                     City route: Jičín, Královéhradecký kraj, Czech Republic -> Linz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bc46ee49686ddda2cf103200c6ad31c8 = L.polyline(
                [[48.3984968, 9.9912458], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bc46ee49686ddda2cf103200c6ad31c8.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Prague, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_efcb40d9569eb8d7f5f0007ad97e4522 = L.polyline(
                [[50.0874654, 14.4212535], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_efcb40d9569eb8d7f5f0007ad97e4522.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Strasbourg, Grand Est, France (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6ffb0088dec68eeee146350f6233bf27 = L.polyline(
                [[53.793587, 12.1764906], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6ffb0088dec68eeee146350f6233bf27.bindTooltip(
                `<div>
                     City route: Güstrow, Mecklenburg-Vorpommern, Germany -> Zagań, Lubusz, Poland (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bc53a9a16579d2396639cba7a116bceb = L.polyline(
                [[51.1563185, 14.991018], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bc53a9a16579d2396639cba7a116bceb.bindTooltip(
                `<div>
                     City route: Görlitz, Saxony, Germany -> Strasbourg, Grand Est, France (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_459396825e921fc5ffcf1176dba75555 = L.polyline(
                [[51.6153231, 15.3007662], [50.4370452, 15.3516528]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_459396825e921fc5ffcf1176dba75555.bindTooltip(
                `<div>
                     City route: Zagań, Lubusz, Poland -> Jičín, Královéhradecký kraj, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_69074281daa4fcf2fb40ed5f8d784a29 = L.polyline(
                [[48.5203263, 9.053596], [48.7501041, 8.8707147]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_69074281daa4fcf2fb40ed5f8d784a29.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Weil der Stadt, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5de21b471ce18cc96bde0f48b32b09f0 = L.polyline(
                [[49.3180932, 9.4217233], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5de21b471ce18cc96bde0f48b32b09f0.bindTooltip(
                `<div>
                     City route: Widdern, Baden-Württemberg, Germany -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_babb6ca19296aceb8c83350eb576eeae = L.polyline(
                [[48.4121233, 9.7847091], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_babb6ca19296aceb8c83350eb576eeae.bindTooltip(
                `<div>
                     City route: Blaubeuren Abbey, Blaubeuren, Baden-Württemberg, Germany -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_aef2df3853c49e9885d36c7c8078a87c = L.polyline(
                [[48.8012983, 9.0150026], [48.7501041, 8.8707147]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_aef2df3853c49e9885d36c7c8078a87c.bindTooltip(
                `<div>
                     City route: Leonberg, Baden-Württemberg, Germany -> Weil der Stadt, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_920aec4c1d35fae6ba20ea7909cf5e5e = L.polyline(
                [[47.0708678, 15.4382786], [47.2500001, 15.1666665]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_920aec4c1d35fae6ba20ea7909cf5e5e.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_407adc1f5de3e4c1bf0eac929f7305cb = L.polyline(
                [[47.0708678, 15.4382786], [48.7142691, 8.7397624]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_407adc1f5de3e4c1bf0eac929f7305cb.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Calw, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_79d91db9294d47d410698f3a40d4cded = L.polyline(
                [[48.734346, 8.7352364], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_79d91db9294d47d410698f3a40d4cded.bindTooltip(
                `<div>
                     City route: Hirsau, Baden-Württemberg, Germany -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_99c40eb77ecff36c87de277d1c3b8aab = L.polyline(
                [[48.2741408, 14.5817826], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_99c40eb77ecff36c87de277d1c3b8aab.bindTooltip(
                `<div>
                     City route: Schwertberg, Upper Austria, Austria -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f340a400bdd1528962e4dab357ce80a1 = L.polyline(
                [[48.7031377, 9.6541116], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f340a400bdd1528962e4dab357ce80a1.bindTooltip(
                `<div>
                     City route: Göppingen, Baden-Württemberg, Germany -> Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0ae50023244db4e5b8696298f08e0a1b = L.polyline(
                [[45.3984428, 11.8956829], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0ae50023244db4e5b8696298f08e0a1b.bindTooltip(
                `<div>
                     City route: Padua, Veneto, Italy -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c8d5783319d83d9f4cba81d9f5b0654f = L.polyline(
                [[47.0708678, 15.4382786], [47.4121987, 15.2721668]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c8d5783319d83d9f4cba81d9f5b0654f.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Bruck an der Mur, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_20dcc2df5e8954d81417cdf5170aac5b = L.polyline(
                [[47.0708678, 15.4382786], [53.5760029, 10.0755348]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_20dcc2df5e8954d81417cdf5170aac5b.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Wandsbek, Hamburg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_43ccdad6520e7729355a3a7be94018dd = L.polyline(
                [[48.4283109, 9.2657297], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_43ccdad6520e7729355a3a7be94018dd.bindTooltip(
                `<div>
                     City route: Burgstein, Baden-Württemberg, Germany -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_536c41709495670f8f16c6bb67152b42 = L.polyline(
                [[48.7784485, 9.1800132], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_536c41709495670f8f16c6bb67152b42.bindTooltip(
                `<div>
                     City route: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ab376d0b1612d718d52841875f14486c = L.polyline(
                [[53.5760029, 10.0755348], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ab376d0b1612d718d52841875f14486c.bindTooltip(
                `<div>
                     City route: Wandsbek, Hamburg, Germany -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5197a43fcb97f52841a1e36443271d23 = L.polyline(
                [[53.5760029, 10.0755348], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5197a43fcb97f52841a1e36443271d23.bindTooltip(
                `<div>
                     City route: Wandsbek, Hamburg, Germany -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6f84e786832cfbd944f1bf7a6e42d59c = L.polyline(
                [[50.9281717, 11.5879359], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6f84e786832cfbd944f1bf7a6e42d59c.bindTooltip(
                `<div>
                     City route: Jena, Thuringia, Germany -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a1dc5b7be1c699143d518e939a2df3dd = L.polyline(
                [[47.2850667, 15.7110617], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a1dc5b7be1c699143d518e939a2df3dd.bindTooltip(
                `<div>
                     City route: Baierdorf bei Anger, Styria, Austria -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d81c625fed2b4b4e1101fdf13b0ee3c6 = L.polyline(
                [[47.0708678, 15.4382786], [51.8666527, 12.646761]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d81c625fed2b4b4e1101fdf13b0ee3c6.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Wittenberg, Saxony-Anhalt, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_223412e7f0a06544cc68d158517b4f24 = L.polyline(
                [[47.5242934, 14.3264883], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_223412e7f0a06544cc68d158517b4f24.bindTooltip(
                `<div>
                     City route: Strechau, Styria, Austria -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_25580a29926ef920205b73c5312a3d7e = L.polyline(
                [[50.253211, 14.8409386], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_25580a29926ef920205b73c5312a3d7e.bindTooltip(
                `<div>
                     City route: Girsitz -> Vienna, Wien, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d779bfb4d2928faf949997c64e4a0caf = L.polyline(
                [[50.253211, 14.8409386], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d779bfb4d2928faf949997c64e4a0caf.bindTooltip(
                `<div>
                     City route: Girsitz -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e14c36e9456967886424595de3858462 = L.polyline(
                [[48.584614, 7.7507127], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e14c36e9456967886424595de3858462.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0844d421c3c08ee79565b26c48e9fd62 = L.polyline(
                [[49.7477415, 13.3775249], [50.291767, 14.8260014]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0844d421c3c08ee79565b26c48e9fd62.bindTooltip(
                `<div>
                     City route: Plzeň, Plzeňský, Czech Republic -> Benátky nad Jizerou, Central Bohemia, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bb01f6b62e12c1ff9cdd86582d213378 = L.polyline(
                [[47.0708678, 15.4382786], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bb01f6b62e12c1ff9cdd86582d213378.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Bologna, Emilia-Romagna, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9411ee1e67952bcb26bbd8962fd1a6e0 = L.polyline(
                [[52.1314783, 11.6400789], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9411ee1e67952bcb26bbd8962fd1a6e0.bindTooltip(
                `<div>
                     City route: Magdeburg, Saxony-Anhalt, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_df231995f90092dd8884de450fc9f01f = L.polyline(
                [[52.503379, 13.3386522], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_df231995f90092dd8884de450fc9f01f.bindTooltip(
                `<div>
                     City route: Berlin, Berlin, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4b86900ac5489c2f4626b5c53025ebd9 = L.polyline(
                [[53.5094623, 7.3583406], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4b86900ac5489c2f4626b5c53025ebd9.bindTooltip(
                `<div>
                     City route: Aurich, Lower Saxony, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6153245c0932d58699f8e6736842bbe4 = L.polyline(
                [[50.0874654, 14.4212535], [53.6373063, 7.4341272]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6153245c0932d58699f8e6736842bbe4.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Resterhafe, Lower Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_924f31af0d584c328af7e029bab75945 = L.polyline(
                [[49.0681018, 17.4663899], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_924f31af0d584c328af7e029bab75945.bindTooltip(
                `<div>
                     City route: Uherské Hradiště, Zlín, Czech Republic -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_44208a3be3947cebfea4204894a9355b = L.polyline(
                [[49.3068037, 15.6766872], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_44208a3be3947cebfea4204894a9355b.bindTooltip(
                `<div>
                     City route: Brtnice, Vysočina, Czech Republic -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e7c027fdf2da6534f21d71c603fc9323 = L.polyline(
                [[50.0874654, 14.4212535], [52.3730796, 4.8924534]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e7c027fdf2da6534f21d71c603fc9323.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Amsterdam, North Holland, (United Provinces) Netherlands (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9c151803157c0ab37ecab9050454dbbf = L.polyline(
                [[51.2077989, 5.9461436], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9c151803157c0ab37ecab9050454dbbf.bindTooltip(
                `<div>
                     City route: Horn, (West Frisia) Limburg, Netherlands -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_92cbdc8839f0bc9bb5d47db0d594ec5a = L.polyline(
                [[49.4093582, 8.694724], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_92cbdc8839f0bc9bb5d47db0d594ec5a.bindTooltip(
                `<div>
                     City route: Heidelberg, Baden-Württemberg, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b7f7b5912f7c2dca0ae560c9674e6bc3 = L.polyline(
                [[54.0886707, 12.1400211], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b7f7b5912f7c2dca0ae560c9674e6bc3.bindTooltip(
                `<div>
                     City route: Rostock, Mecklenburg-Vorpommern, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_39095c44ae048935e3e7d95247d01519 = L.polyline(
                [[50.0874654, 14.4212535], [47.2654296, 11.3927685]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_39095c44ae048935e3e7d95247d01519.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Innsbruck, Tyrol, Austria, (Holy Roman Empire) (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_732e7822910121c5b05a9a876a00cc94 = L.polyline(
                [[46.8370716, 13.3704357], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_732e7822910121c5b05a9a876a00cc94.bindTooltip(
                `<div>
                     City route: Möllbrücke, Carinthia, Austria -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b409aaac66d21748a80873166581cef7 = L.polyline(
                [[50.0874654, 14.4212535], [48.745628, 11.1879622]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b409aaac66d21748a80873166581cef7.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Neuburg an der Donau, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_70c531efd4fd10efe906b57f3f76bf91 = L.polyline(
                [[48.5203263, 9.053596], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_70c531efd4fd10efe906b57f3f76bf91.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Munich, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bc9fbf76a296a8cb48e6e3739e3e76cc = L.polyline(
                [[48.5203263, 9.053596], [48.5621964, 12.0859345]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bc9fbf76a296a8cb48e6e3739e3e76cc.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Altdorf, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fb3c43e94af36cc9d8a7f6eea74d3267 = L.polyline(
                [[45.0677551, 7.6824892], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_fb3c43e94af36cc9d8a7f6eea74d3267.bindTooltip(
                `<div>
                     City route: Turin, Piedmont, Italy -> Bologna, Emilia-Romagna, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2176c041cd380f24a8ed659134d129ab = L.polyline(
                [[50.5229864, 14.9741022], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2176c041cd380f24a8ed659134d129ab.bindTooltip(
                `<div>
                     City route: Mnichovo Hradiště, Central Bohemia, Czech Republic -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d4b78586620b937bb1beec7f642505c1 = L.polyline(
                [[50.0874654, 14.4212535], [47.2500001, 15.1666665]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d4b78586620b937bb1beec7f642505c1.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ca94c810e727a3eade333f3f5b85e6ef = L.polyline(
                [[50.0874654, 14.4212535], [50.039436, 15.5606989]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ca94c810e727a3eade333f3f5b85e6ef.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Přelouč, Pardubický, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b49dd2f8eceea24749278711d9333626 = L.polyline(
                [[50.0874654, 14.4212535], [46.603354, 1.8883335]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b49dd2f8eceea24749278711d9333626.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ddfa18a42ed389709c6c6cd7dccd64e2 = L.polyline(
                [[50.0874654, 14.4212535], [48.5621964, 12.0859345]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ddfa18a42ed389709c6c6cd7dccd64e2.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Altdorf, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c63c6e7804497a6ad4c26d71e8b3d97b = L.polyline(
                [[50.2136597, 14.4405574], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c63c6e7804497a6ad4c26d71e8b3d97b.bindTooltip(
                `<div>
                     City route: Panenské Břežany, Central Bohemia -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9e195ff19e804a7b4fe7c0eec5fb8c8e = L.polyline(
                [[50.0874654, 14.4212535], [51.2211097, 4.3997081]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9e195ff19e804a7b4fe7c0eec5fb8c8e.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Antwerp, Flanders, Belgium (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cd416b6fc854049006c92441337f4145 = L.polyline(
                [[50.0874654, 14.4212535], [47.9960901, 7.8494005]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_cd416b6fc854049006c92441337f4145.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Freiburg, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_883d65192e7a849b121ffcd806db5a0b = L.polyline(
                [[50.0874654, 14.4212535], [50.9772092, 11.9863951]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_883d65192e7a849b121ffcd806db5a0b.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Crossen an der Elster, Thuringia, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_00a98f526edebbfae6b47d043b90401e = L.polyline(
                [[48.3082607, 14.0203999], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_00a98f526edebbfae6b47d043b90401e.bindTooltip(
                `<div>
                     City route: Eferding, Upper Austria, Austria -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_68f069b3c91d3b0595167ab9a4c1d02e = L.polyline(
                [[49.9837884, 13.9359785], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_68f069b3c91d3b0595167ab9a4c1d02e.bindTooltip(
                `<div>
                     City route: Nový Jáchymov, Central Bohemia, Czech Republic -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_46c930b0d8455ed6ca1e9e3c6f8f6307 = L.polyline(
                [[54.0703296, 9.9884451], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_46c930b0d8455ed6ca1e9e3c6f8f6307.bindTooltip(
                `<div>
                     City route: Neumünster, Schleswig-Holstein, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c9bd7fe5cba51ba39df86492f2cc6677 = L.polyline(
                [[50.0874654, 14.4212535], [51.8666527, 12.646761]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c9bd7fe5cba51ba39df86492f2cc6677.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Wittenberg, Saxony-Anhalt, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fd8039a830e65c53eb12a8ecfe648ab4 = L.polyline(
                [[50.879202, 4.7011675], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_fd8039a830e65c53eb12a8ecfe648ab4.bindTooltip(
                `<div>
                     City route: Leuven, Flemish Brabant, Belgium -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bb9c3791ba529258c340a234dc76586c = L.polyline(
                [[51.6511561, 14.0342532], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bb9c3791ba529258c340a234dc76586c.bindTooltip(
                `<div>
                     City route: Altdöbern, Brandenburg, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_745c2ab59109fb6a60ad673bf79de63b = L.polyline(
                [[55.6867243, 12.5700724], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_745c2ab59109fb6a60ad673bf79de63b.bindTooltip(
                `<div>
                     City route: Copenhagen, Capital Region, Denmark -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_25f7db7857ba5d95a6da03e5238dd1f2 = L.polyline(
                [[50.698157, 17.3849804], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_25f7db7857ba5d95a6da03e5238dd1f2.bindTooltip(
                `<div>
                     City route: Grodków, Opole Voivodeship, Poland -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9ef4512081e3bc5f03a7861f7a5f090a = L.polyline(
                [[54.3482907, 18.6540233], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9ef4512081e3bc5f03a7861f7a5f090a.bindTooltip(
                `<div>
                     City route: Gdańsk, Pomeranian Voivodeship, Poland -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a44a4e3e72f818b656470a3832c97ab2 = L.polyline(
                [[45.3984428, 11.8956829], [43.7697955, 11.2556404]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a44a4e3e72f818b656470a3832c97ab2.bindTooltip(
                `<div>
                     City route: Padua, Veneto, Italy -> Florence, Tuscany, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3fbbb952e6c6af5bc3d33f0e7b9fbcd5 = L.polyline(
                [[45.3984428, 11.8956829], [48.8534951, 2.3483915]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3fbbb952e6c6af5bc3d33f0e7b9fbcd5.bindTooltip(
                `<div>
                     City route: Padua, Veneto, Italy -> Paris, Île-de-France, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_328535c4f202ab9067e2e6566f0b12e5 = L.polyline(
                [[52.2277037, 11.0104702], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_328535c4f202ab9067e2e6566f0b12e5.bindTooltip(
                `<div>
                     City route: Helmstedt, Lower Saxony, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e386904cf1c975fa8440f51e99d573f9 = L.polyline(
                [[49.8422832, 13.9665265], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e386904cf1c975fa8440f51e99d573f9.bindTooltip(
                `<div>
                     City route: Lochovice, Central Bohemia , Czech Republic -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0b11a2d85f9585dc86c141b836702c46 = L.polyline(
                [[48.5296743, 11.5084954], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0b11a2d85f9585dc86c141b836702c46.bindTooltip(
                `<div>
                     City route: Pfaffenhofen an der Ilm, Bavaria, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_083a842b698eca2fdd114f89e75250d4 = L.polyline(
                [[50.0874654, 14.4212535], [49.2888745, 10.5597693]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_083a842b698eca2fdd114f89e75250d4.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Ansbach, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_aeb7d0d3e7f1b15aeb2dcc2f0722bca2 = L.polyline(
                [[50.8467372, 4.352493], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_aeb7d0d3e7f1b15aeb2dcc2f0722bca2.bindTooltip(
                `<div>
                     City route: Brussels, Brussels Capital Region, Belgium -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fc68750d8016fc318f8f84c19ec69bd5 = L.polyline(
                [[48.3059078, 14.286198], [50.8467372, 4.352493]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_fc68750d8016fc318f8f84c19ec69bd5.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Brussels, Brussels Capital Region, Belgium (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_eac4c0ed6a75f40692ab4ec79f488c3f = L.polyline(
                [[48.7784485, 9.1800132], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_eac4c0ed6a75f40692ab4ec79f488c3f.bindTooltip(
                `<div>
                     City route: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) -> Regensburg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_292aa2917e1cde7b732d8bcb495790cb = L.polyline(
                [[49.2888745, 10.5597693], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_292aa2917e1cde7b732d8bcb495790cb.bindTooltip(
                `<div>
                     City route: Ansbach, Bavaria, Germany -> Regensburg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_578ced38b36c7dfe1f0acbbdb3160734 = L.polyline(
                [[51.0493286, 13.7381437], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_578ced38b36c7dfe1f0acbbdb3160734.bindTooltip(
                `<div>
                     City route: Dresden, Saxony, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a94592dd931fa065de08ba027edc4f61 = L.polyline(
                [[51.2211097, 4.3997081], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a94592dd931fa065de08ba027edc4f61.bindTooltip(
                `<div>
                     City route: Antwerp, Flanders, Belgium -> Regensburg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_53f68afcf3222a412ce5829344c5b81c = L.polyline(
                [[48.1565472, 14.0243752], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_53f68afcf3222a412ce5829344c5b81c.bindTooltip(
                `<div>
                     City route: Wels, Upper Austria, Austria -> Strasbourg, Grand Est, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7424bfb4d0db70c695ec758721e9c80a = L.polyline(
                [[41.8933203, 12.4829321], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7424bfb4d0db70c695ec758721e9c80a.bindTooltip(
                `<div>
                     City route: Rome, Latium, Italy -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a8f0f86d013b5d6ff07d0b970b0afb2f = L.polyline(
                [[47.0708678, 15.4382786], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a8f0f86d013b5d6ff07d0b970b0afb2f.bindTooltip(
                `<div>
                     City route: Graz, Styria, Austria -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a410fbe97556662c9d51283ac33fc694 = L.polyline(
                [[50.3652854, 18.8722567], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a410fbe97556662c9d51283ac33fc694.bindTooltip(
                `<div>
                     City route: Bytom, Silesian Voivodeship, Poland -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_669019f50f258189e826196dab05432d = L.polyline(
                [[51.5542053, 15.8260835], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_669019f50f258189e826196dab05432d.bindTooltip(
                `<div>
                     City route: Szprotawa, Lubusz Voivodeship, (Silesia) Poland -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d515f42d807e3be80c9e5767608a5b35 = L.polyline(
                [[47.4744721, 11.1681018], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d515f42d807e3be80c9e5767608a5b35.bindTooltip(
                `<div>
                     City route: Wamberg, Bavaria, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2c7c3603eb0df26ac7fcb52baf567c13 = L.polyline(
                [[48.7630165, 11.4250395], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2c7c3603eb0df26ac7fcb52baf567c13.bindTooltip(
                `<div>
                     City route: Ingolstadt, Bavaria, Germany, (Holy Roman Empire) -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4a96b25aba6d4d6fa17bbeaf90690a04 = L.polyline(
                [[49.0040317, 14.7714476], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4a96b25aba6d4d6fa17bbeaf90690a04.bindTooltip(
                `<div>
                     City route: Třeboň, Jihočeský, Czech Republic -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f61bb2c028dba70cf4046dcb41ba284b = L.polyline(
                [[48.3059078, 14.286198], [48.8012983, 9.0150026]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f61bb2c028dba70cf4046dcb41ba284b.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Leonberg, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a372b4d3b5c831a38ba6bf1c7d95ade5 = L.polyline(
                [[50.938361, 6.959974], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a372b4d3b5c831a38ba6bf1c7d95ade5.bindTooltip(
                `<div>
                     City route: Cologne, North Rhine-Westphalia, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0ec94e7023bdfdc90d422c22c13bf8ed = L.polyline(
                [[52.7396681, 14.7014522], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_0ec94e7023bdfdc90d422c22c13bf8ed.bindTooltip(
                `<div>
                     City route: Dębno, West Pomerania, Poland -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_48af92bfdb9364eca8d234e70a57f502 = L.polyline(
                [[48.3059078, 14.286198], [53.5336832, 7.2642003]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_48af92bfdb9364eca8d234e70a57f502.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Osteel, Lower Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_418659f6e687e0d8e9bee39a677a7d58 = L.polyline(
                [[44.4938203, 11.3426327], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_418659f6e687e0d8e9bee39a677a7d58.bindTooltip(
                `<div>
                     City route: Bologna, Emilia-Romagna, Italy -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_192ba11750b1517c3c37d48501767809 = L.polyline(
                [[48.3059078, 14.286198], [48.8048828, 9.2146797]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_192ba11750b1517c3c37d48501767809.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Bad Cannstatt, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a94d65cada48ff1096956ff35104c8f3 = L.polyline(
                [[50.5862066, 8.6742306], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_a94d65cada48ff1096956ff35104c8f3.bindTooltip(
                `<div>
                     City route: Giessen, Hesse, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_57dc5ce94e91cb6ba8c33e8198438cdb = L.polyline(
                [[48.7432195, 15.1257542], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_57dc5ce94e91cb6ba8c33e8198438cdb.bindTooltip(
                `<div>
                     City route: Hirschbach, Lower Austria, Austria -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3d6f13dd6cb6da706846bd1ae682745b = L.polyline(
                [[47.524226, 14.3585643], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_3d6f13dd6cb6da706846bd1ae682745b.bindTooltip(
                `<div>
                     City route: Rottenmann, Styria, Austria -> Graz, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ae79f46148c39db5bf231c96dfc37cef = L.polyline(
                [[48.0390046, 14.4191276], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ae79f46148c39db5bf231c96dfc37cef.bindTooltip(
                `<div>
                     City route: Steyr, Upper Austria, Austria -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c6a2a12beada4bc362c24ebf88f80f0f = L.polyline(
                [[48.5300873, 15.2799777], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c6a2a12beada4bc362c24ebf88f80f0f.bindTooltip(
                `<div>
                     City route: Loschberg, Waldhausen, Lower Austria, Austria -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_03c595981feae1db6e426fe93b1d8704 = L.polyline(
                [[48.6960311, 8.6779546], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_03c595981feae1db6e426fe93b1d8704.bindTooltip(
                `<div>
                     City route: Bad Teinach-Zavelstein, Baden-Württemberg, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d41d41579e983cee9cbe70cd39704b10 = L.polyline(
                [[51.2077989, 5.9461436], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d41d41579e983cee9cbe70cd39704b10.bindTooltip(
                `<div>
                     City route: Horn, (West Frisia) Limburg, Netherlands -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8a36187815f88ceb2f96a5e24a1bced7 = L.polyline(
                [[48.3059078, 14.286198], [48.3690341, 10.8979522]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_8a36187815f88ceb2f96a5e24a1bced7.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Augsburg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_31677a4c6613328f4daa0b8f06d9e634 = L.polyline(
                [[48.7419909, 7.3625953], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_31677a4c6613328f4daa0b8f06d9e634.bindTooltip(
                `<div>
                     City route: Saverne, Grand Est, France -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fa07a1337bea45ebf19bf2036ee3ff88 = L.polyline(
                [[48.45927, 13.80866], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_fa07a1337bea45ebf19bf2036ee3ff88.bindTooltip(
                `<div>
                     City route: Wesenufer, Upper Austria, Austria -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ab1212a492d0a5d98a8a758a2a612d76 = L.polyline(
                [[48.7630165, 11.4250395], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ab1212a492d0a5d98a8a758a2a612d76.bindTooltip(
                `<div>
                     City route: Ingolstadt, Bavaria, Germany, (Holy Roman Empire) -> Strasbourg, Grand Est, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fb986e69d33697facae7b466bc5987e8 = L.polyline(
                [[48.3690341, 10.8979522], [48.7630165, 11.4250395]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_fb986e69d33697facae7b466bc5987e8.bindTooltip(
                `<div>
                     City route: Augsburg, Bavaria, Germany -> Ingolstadt, Bavaria, Germany, (Holy Roman Empire) (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ef8f0aee4e8616b8398e0a5e3ed1fd3e = L.polyline(
                [[48.7427584, 9.3071685], [49.0668087, 8.9999838]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ef8f0aee4e8616b8398e0a5e3ed1fd3e.bindTooltip(
                `<div>
                     City route: Esslingen, Baden-Württemberg, Germany -> Güglingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4139916c81cee422df4621835081ff04 = L.polyline(
                [[48.3984968, 9.9912458], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4139916c81cee422df4621835081ff04.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ed9a70977d75824abf1e044eb53baf4a = L.polyline(
                [[48.5203263, 9.053596], [49.0668087, 8.9999838]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ed9a70977d75824abf1e044eb53baf4a.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Güglingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_25f0df5f531c089b84efff82555c0d7e = L.polyline(
                [[48.3984968, 9.9912458], [49.0668087, 8.9999838]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_25f0df5f531c089b84efff82555c0d7e.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Güglingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_daa1bcd5b8460d48e70ca807aba21138 = L.polyline(
                [[48.3059078, 14.286198], [49.453872, 11.077298]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_daa1bcd5b8460d48e70ca807aba21138.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Nuremberg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_116f1e93352733e441bed100639a785f = L.polyline(
                [[45.6348591, 11.4063543], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_116f1e93352733e441bed100639a785f.bindTooltip(
                `<div>
                     City route: Vicenza, Veneto, Italy -> Regensburg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f610cd069ebb64f524eca1d49e1cf3b2 = L.polyline(
                [[46.2017559, 6.1466014], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_f610cd069ebb64f524eca1d49e1cf3b2.bindTooltip(
                `<div>
                     City route: Geneva, Geneva, Switzerland -> Regensburg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b27cb7263a00fc738df78134a183f106 = L.polyline(
                [[49.0195333, 12.0974869], [52.3412273, 14.549452]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b27cb7263a00fc738df78134a183f106.bindTooltip(
                `<div>
                     City route: Regensburg, Bavaria, Germany -> Frankfurt (Oder), Brandenburg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2607c7f7685cccdea5bf09f24c32339d = L.polyline(
                [[48.3059078, 14.286198], [48.5748229, 13.4609744]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2607c7f7685cccdea5bf09f24c32339d.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Passau, Lower Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bce02a1f99739576faecad6c09cdac68 = L.polyline(
                [[48.3059078, 14.286198], [51.0493286, 13.7381437]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bce02a1f99739576faecad6c09cdac68.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Dresden, Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_eca335303bff6bb2ee4783adf900eb9e = L.polyline(
                [[51.3406321, 12.3747329], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_eca335303bff6bb2ee4783adf900eb9e.bindTooltip(
                `<div>
                     City route: Leipzig, Saxony, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4adb955f5625b493e3c4e2770e8221b1 = L.polyline(
                [[48.3059078, 14.286198], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4adb955f5625b493e3c4e2770e8221b1.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Leipzig, Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_33d792fd13430860fd347af709647d24 = L.polyline(
                [[48.1565472, 14.0243752], [48.1598261, 14.0758845]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_33d792fd13430860fd347af709647d24.bindTooltip(
                `<div>
                     City route: Wels, Upper Austria, Austria -> Castle Leombach, Leombach, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2135564516ec90ebfd2c594f3a0ac81d = L.polyline(
                [[48.5621964, 12.0859345], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2135564516ec90ebfd2c594f3a0ac81d.bindTooltip(
                `<div>
                     City route: Altdorf, Bavaria, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bdbb13249f79ddc760ec74f6aacd2abb = L.polyline(
                [[48.3059078, 14.286198], [51.5074456, -0.1277653]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_bdbb13249f79ddc760ec74f6aacd2abb.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> London, England, United Kingdom (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_050d505d31a581c25c40392c67b3734d = L.polyline(
                [[48.3331132, 13.8532739], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_050d505d31a581c25c40392c67b3734d.bindTooltip(
                `<div>
                     City route: Schloss Weidenholz, Weidenholz, Upper Austria, Austria -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8ee13997c92fdb1f72d47787e4e107db = L.polyline(
                [[52.503379, 13.3386522], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_8ee13997c92fdb1f72d47787e4e107db.bindTooltip(
                `<div>
                     City route: Berlin, Berlin, Germany -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_93ed5ad37f855e836b68ef5c2827355c = L.polyline(
                [[48.3059078, 14.286198], [48.3331132, 13.8532739]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_93ed5ad37f855e836b68ef5c2827355c.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Schloss Weidenholz, Weidenholz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b2f5cc0690c13bb75914da823b70ef76 = L.polyline(
                [[51.7520131, -1.2578499], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b2f5cc0690c13bb75914da823b70ef76.bindTooltip(
                `<div>
                     City route: Oxford, Oxfordshire, England -> Linz, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b1420218590169c158a16a471975d139 = L.polyline(
                [[48.3059078, 14.286198], [50.4370452, 15.3516528]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b1420218590169c158a16a471975d139.bindTooltip(
                `<div>
                     City route: Linz, Upper Austria, Austria -> Jičín, Královéhradecký kraj, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4ab78d6d2f0536d667638fb8dc76914b = L.polyline(
                [[48.5203263, 9.053596], [46.2017559, 6.1466014]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4ab78d6d2f0536d667638fb8dc76914b.bindTooltip(
                `<div>
                     City route: Tübingen, Baden-Württemberg, Germany -> Geneva, Geneva, Switzerland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ca3f666710923a9748d356cffe0ad655 = L.polyline(
                [[50.41768, 8.63873], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ca3f666710923a9748d356cffe0ad655.bindTooltip(
                `<div>
                     City route: Butzbach, Hesse, Germany, (Holy Roman Empire) -> Ulm, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_61feb5c838878e8c9481f22388e22bb6 = L.polyline(
                [[50.0874654, 14.4212535], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_61feb5c838878e8c9481f22388e22bb6.bindTooltip(
                `<div>
                     City route: Prague, Czech Republic -> Ulm, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_178c97142057c50ccd9e823161f423b7 = L.polyline(
                [[50.41768, 8.63873], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_178c97142057c50ccd9e823161f423b7.bindTooltip(
                `<div>
                     City route: Butzbach, Hesse, Germany, (Holy Roman Empire) -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5f2eed4203f1146238de15f22101d708 = L.polyline(
                [[48.5620891, 9.6264045], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_5f2eed4203f1146238de15f22101d708.bindTooltip(
                `<div>
                     City route: Wiesensteig, Baden-Württemberg, Germany -> Ulm, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_baec48ec56dc024fe3a0e7ae517adddb = L.polyline(
                [[43.9593626, 11.210085], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_baec48ec56dc024fe3a0e7ae517adddb.bindTooltip(
                `<div>
                     City route: Bellosguardo , Florence, Tuscany, Italy -> Ulm, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c98e248eb6dd70895baa893799a3e404 = L.polyline(
                [[50.1106444, 8.6820917], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c98e248eb6dd70895baa893799a3e404.bindTooltip(
                `<div>
                     City route: Frankfurt am Main, Hesse, Germany -> Strasbourg, Grand Est, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4a1f26254db7ceb3fea96321145d3f69 = L.polyline(
                [[48.3984968, 9.9912458], [48.7427584, 9.3071685]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_4a1f26254db7ceb3fea96321145d3f69.bindTooltip(
                `<div>
                     City route: Ulm, Baden-Württemberg, Germany -> Esslingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_90bccb61a014db9b866a13aa515b0c53 = L.polyline(
                [[48.436836, 9.9404851], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_90bccb61a014db9b866a13aa515b0c53.bindTooltip(
                `<div>
                     City route: Mähringen, Baden-Württemberg, Germany -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_09e44801456cda37e5d7557fde32d173 = L.polyline(
                [[51.6153231, 15.3007662], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_09e44801456cda37e5d7557fde32d173.bindTooltip(
                `<div>
                     City route: Zagań, Lubusz, Poland -> Prague, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d2a8d9f851c1754bfe053badeb3469d8 = L.polyline(
                [[47.9569146, 7.2994054], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d2a8d9f851c1754bfe053badeb3469d8.bindTooltip(
                `<div>
                     City route: Rouffach, Grand Est, France -> Zagań, Lubusz, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e1897a8ed01d29172e3563ee6ff41f7e = L.polyline(
                [[51.6153231, 15.3007662], [53.793587, 12.1764906]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_e1897a8ed01d29172e3563ee6ff41f7e.bindTooltip(
                `<div>
                     City route: Zagań, Lubusz, Poland -> Güstrow, Mecklenburg-Vorpommern, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b20b0a87954dcb40de91381a711d9694 = L.polyline(
                [[51.6153231, 15.3007662], [47.9569146, 7.2994054]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b20b0a87954dcb40de91381a711d9694.bindTooltip(
                `<div>
                     City route: Zagań, Lubusz, Poland -> Rouffach, Grand Est, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d6de85ec0c9a92bac89d0a34d1ecc9fd = L.polyline(
                [[48.584614, 7.7507127], [51.1147105, 15.2811574]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d6de85ec0c9a92bac89d0a34d1ecc9fd.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Lubań, Lower Silesia, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ff95731db08352ee181f1042c083391f = L.polyline(
                [[51.1563185, 14.991018], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ff95731db08352ee181f1042c083391f.bindTooltip(
                `<div>
                     City route: Görlitz, Saxony, Germany -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_baf394a5ecee7442aec7ef5d3def1268 = L.polyline(
                [[51.1563185, 14.991018], [50.4370452, 15.3516528]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_baf394a5ecee7442aec7ef5d3def1268.bindTooltip(
                `<div>
                     City route: Görlitz, Saxony, Germany -> Jičín, Královéhradecký kraj, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c0d367a348361c65b4ea9690cde524a6 = L.polyline(
                [[48.1857192, 16.4221587], [43.7697955, 11.2556404]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c0d367a348361c65b4ea9690cde524a6.bindTooltip(
                `<div>
                     City route: Vienna, Wien, Austria -> Florence, Tuscany, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6905830d047494f38b50c6e2cd0fbf47 = L.polyline(
                [[51.4205494, 9.9142574], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_6905830d047494f38b50c6e2cd0fbf47.bindTooltip(
                `<div>
                     City route: Friedland, Lower Saxony, Germany -> Zagań, Lubusz, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ac5d288f3cb32d92c6b6fc8d5d727115 = L.polyline(
                [[50.41768, 8.63873], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_ac5d288f3cb32d92c6b6fc8d5d727115.bindTooltip(
                `<div>
                     City route: Butzbach, Hesse, Germany, (Holy Roman Empire) -> Zagań, Lubusz, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1dcd7aa3bb0eb72bccb1ce615f8bcb25 = L.polyline(
                [[50.4370452, 15.3516528], [51.8953514, 11.0520563]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_1dcd7aa3bb0eb72bccb1ce615f8bcb25.bindTooltip(
                `<div>
                     City route: Jičín, Královéhradecký kraj, Czech Republic -> Halberstadt, Saxony-Anhalt, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d34ed13e8f94b899bea9dc20c787fbf1 = L.polyline(
                [[51.8953514, 11.0520563], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_d34ed13e8f94b899bea9dc20c787fbf1.bindTooltip(
                `<div>
                     City route: Halberstadt, Saxony-Anhalt, Germany -> Zagań, Lubusz, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_809c30fd867d211eeeb2162b8d768018 = L.polyline(
                [[48.8534951, 2.3483915], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_809c30fd867d211eeeb2162b8d768018.bindTooltip(
                `<div>
                     City route: Paris, Île-de-France, France -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b6eab847803d0e65bd170ad57d2c256f = L.polyline(
                [[48.8534951, 2.3483915], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_b6eab847803d0e65bd170ad57d2c256f.bindTooltip(
                `<div>
                     City route: Paris, Île-de-France, France -> Zagań, Lubusz, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c0d4578e63efdb288f852bd88dcd1b57 = L.polyline(
                [[46.2017559, 6.1466014], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_c0d4578e63efdb288f852bd88dcd1b57.bindTooltip(
                `<div>
                     City route: Geneva, Geneva, Switzerland -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9bbd842d150ad7c9957c905a6ce9a6bf = L.polyline(
                [[48.584614, 7.7507127], [50.1106444, 8.6820917]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_9bbd842d150ad7c9957c905a6ce9a6bf.bindTooltip(
                `<div>
                     City route: Strasbourg, Grand Est, France -> Frankfurt am Main, Hesse, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7845253620880e28886224851523a748 = L.polyline(
                [[48.436836, 9.9404851], [51.6153231, 15.3007662]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_7845253620880e28886224851523a748.bindTooltip(
                `<div>
                     City route: Mähringen, Baden-Württemberg, Germany -> Zagań, Lubusz, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2492ad5ac0211672ad74497b3d448c8f = L.polyline(
                [[51.3406321, 12.3747329], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_2492ad5ac0211672ad74497b3d448c8f.bindTooltip(
                `<div>
                     City route: Leipzig, Saxony, Germany -> Strasbourg, Grand Est, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_de68cf16483b60fb8a82274873171c7c = L.polyline(
                [[49.0195333, 12.0974869], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#c0392b", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#c0392b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.55, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_793d4fe6ae23895abb72acf925fa27dd);
        
    
            poly_line_de68cf16483b60fb8a82274873171c7c.bindTooltip(
                `<div>
                     City route: Regensburg, Bavaria, Germany -> Tübingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            feature_group_793d4fe6ae23895abb72acf925fa27dd.addTo(map_e9bef1e91c69bbc6d3090e60f47ab50e);
        
    
            let feature_group_50088b14ff65d87258b2f84e6031adfc = L.featureGroup(
                {
}
            );
        
    
            let circle_marker_a20c2020c5058454adcd3d077085c679 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 30, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_fb813cd3c54c1995f795769a8dafb9dd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d26215eeb89174c64c5235ffb33d3d3f = $(`<div id="html_d26215eeb89174c64c5235ffb33d3d3f" style="width: 100.0%; height: 100.0%;"><b>Prague, Czech Republic</b><br>446 letters sent/received</div>`)[0];
                popup_fb813cd3c54c1995f795769a8dafb9dd.setContent(html_d26215eeb89174c64c5235ffb33d3d3f);
            
        

        circle_marker_a20c2020c5058454adcd3d077085c679.bindPopup(popup_fb813cd3c54c1995f795769a8dafb9dd)
        ;

        
    
    
            circle_marker_a20c2020c5058454adcd3d077085c679.bindTooltip(
                `<div>
                     City: Prague, Czech Republic (446)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_85ae0b8bfbf71d2d180207a45bb88fa0 = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 25, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_8508d1a181b6626bb661a72d3767f495 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_c9daa0350998bcbd97cc5f9cd462da5f = $(`<div id="html_c9daa0350998bcbd97cc5f9cd462da5f" style="width: 100.0%; height: 100.0%;"><b>Linz, Upper Austria, Austria</b><br>311 letters sent/received</div>`)[0];
                popup_8508d1a181b6626bb661a72d3767f495.setContent(html_c9daa0350998bcbd97cc5f9cd462da5f);
            
        

        circle_marker_85ae0b8bfbf71d2d180207a45bb88fa0.bindPopup(popup_8508d1a181b6626bb661a72d3767f495)
        ;

        
    
    
            circle_marker_85ae0b8bfbf71d2d180207a45bb88fa0.bindTooltip(
                `<div>
                     City: Linz, Upper Austria, Austria (311)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ee1ce4cca5c2d9beb23459a3281b288b = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 20, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_83ffb69d2bddd9f43d5bed4710bb4e37 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_77c843aecf00236b955090ac5252b6fe = $(`<div id="html_77c843aecf00236b955090ac5252b6fe" style="width: 100.0%; height: 100.0%;"><b>Tübingen, Baden-Württemberg, Germany</b><br>169 letters sent/received</div>`)[0];
                popup_83ffb69d2bddd9f43d5bed4710bb4e37.setContent(html_77c843aecf00236b955090ac5252b6fe);
            
        

        circle_marker_ee1ce4cca5c2d9beb23459a3281b288b.bindPopup(popup_83ffb69d2bddd9f43d5bed4710bb4e37)
        ;

        
    
    
            circle_marker_ee1ce4cca5c2d9beb23459a3281b288b.bindTooltip(
                `<div>
                     City: Tübingen, Baden-Württemberg, Germany (169)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8f0ad3203b2110de231a45f83eb45be9 = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 18, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_dc64592505e53b249669993d055fbab2 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_48723534de745b1eb4b104e9a6253c9e = $(`<div id="html_48723534de745b1eb4b104e9a6253c9e" style="width: 100.0%; height: 100.0%;"><b>Graz, Styria, Austria</b><br>130 letters sent/received</div>`)[0];
                popup_dc64592505e53b249669993d055fbab2.setContent(html_48723534de745b1eb4b104e9a6253c9e);
            
        

        circle_marker_8f0ad3203b2110de231a45f83eb45be9.bindPopup(popup_dc64592505e53b249669993d055fbab2)
        ;

        
    
    
            circle_marker_8f0ad3203b2110de231a45f83eb45be9.bindTooltip(
                `<div>
                     City: Graz, Styria, Austria (130)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3c4e0010835283987c76f2709ffd460d = L.circleMarker(
                [48.1371079, 11.5753822],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 16, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_7b6f7a73efaa24e10ca041f489bc2a5f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_dc9b6ed01186b80cc9c2ef48b557ccd8 = $(`<div id="html_dc9b6ed01186b80cc9c2ef48b557ccd8" style="width: 100.0%; height: 100.0%;"><b>Munich, Bavaria, Germany</b><br>108 letters sent/received</div>`)[0];
                popup_7b6f7a73efaa24e10ca041f489bc2a5f.setContent(html_dc9b6ed01186b80cc9c2ef48b557ccd8);
            
        

        circle_marker_3c4e0010835283987c76f2709ffd460d.bindPopup(popup_7b6f7a73efaa24e10ca041f489bc2a5f)
        ;

        
    
    
            circle_marker_3c4e0010835283987c76f2709ffd460d.bindTooltip(
                `<div>
                     City: Munich, Bavaria, Germany (108)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_081c28e28fb4ad83e51cea6e0226a99a = L.circleMarker(
                [48.584614, 7.7507127],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 15, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_a3c87c0faf6c511af34f949ca994795a = L.popup({
  "maxWidth": 280,
});

        
            
                let html_e9f183d056143f495ac90ab5f38a3afb = $(`<div id="html_e9f183d056143f495ac90ab5f38a3afb" style="width: 100.0%; height: 100.0%;"><b>Strasbourg, Grand Est, France</b><br>82 letters sent/received</div>`)[0];
                popup_a3c87c0faf6c511af34f949ca994795a.setContent(html_e9f183d056143f495ac90ab5f38a3afb);
            
        

        circle_marker_081c28e28fb4ad83e51cea6e0226a99a.bindPopup(popup_a3c87c0faf6c511af34f949ca994795a)
        ;

        
    
    
            circle_marker_081c28e28fb4ad83e51cea6e0226a99a.bindTooltip(
                `<div>
                     City: Strasbourg, Grand Est, France (82)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e58293d6d8e5fbd5919b084d7e145b3f = L.circleMarker(
                [48.3984968, 9.9912458],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 13, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_b5e7a09b3bd10cbb6244e839558bcadc = L.popup({
  "maxWidth": 280,
});

        
            
                let html_b1a592404f9e56adb471b6f2e7863ec2 = $(`<div id="html_b1a592404f9e56adb471b6f2e7863ec2" style="width: 100.0%; height: 100.0%;"><b>Ulm, Baden-Württemberg, Germany</b><br>55 letters sent/received</div>`)[0];
                popup_b5e7a09b3bd10cbb6244e839558bcadc.setContent(html_b1a592404f9e56adb471b6f2e7863ec2);
            
        

        circle_marker_e58293d6d8e5fbd5919b084d7e145b3f.bindPopup(popup_b5e7a09b3bd10cbb6244e839558bcadc)
        ;

        
    
    
            circle_marker_e58293d6d8e5fbd5919b084d7e145b3f.bindTooltip(
                `<div>
                     City: Ulm, Baden-Württemberg, Germany (55)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5b5740510831628558f57b2e845744f3 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_4de462aa3fa0b67586e126ca8684c3e8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_be1d4dc36726ecc297f48c33ecfdccb4 = $(`<div id="html_be1d4dc36726ecc297f48c33ecfdccb4" style="width: 100.0%; height: 100.0%;"><b>Vienna, Wien, Austria</b><br>53 letters sent/received</div>`)[0];
                popup_4de462aa3fa0b67586e126ca8684c3e8.setContent(html_be1d4dc36726ecc297f48c33ecfdccb4);
            
        

        circle_marker_5b5740510831628558f57b2e845744f3.bindPopup(popup_4de462aa3fa0b67586e126ca8684c3e8)
        ;

        
    
    
            circle_marker_5b5740510831628558f57b2e845744f3.bindTooltip(
                `<div>
                     City: Vienna, Wien, Austria (53)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_659ec546c64296c96ba4af8f28f4c661 = L.circleMarker(
                [51.3406321, 12.3747329],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 12, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_ece031ef3b444c3b2076270826a55356 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_99f89e6ac8a771ad3dedbe494a0bf81c = $(`<div id="html_99f89e6ac8a771ad3dedbe494a0bf81c" style="width: 100.0%; height: 100.0%;"><b>Leipzig, Saxony, Germany</b><br>46 letters sent/received</div>`)[0];
                popup_ece031ef3b444c3b2076270826a55356.setContent(html_99f89e6ac8a771ad3dedbe494a0bf81c);
            
        

        circle_marker_659ec546c64296c96ba4af8f28f4c661.bindPopup(popup_ece031ef3b444c3b2076270826a55356)
        ;

        
    
    
            circle_marker_659ec546c64296c96ba4af8f28f4c661.bindTooltip(
                `<div>
                     City: Leipzig, Saxony, Germany (46)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1444bbc1e017a87668ee37e981763249 = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_63aa7e2814e7328e86bea0402a5c87b7 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_e04a50a7487244d519ad5b8766e2c285 = $(`<div id="html_e04a50a7487244d519ad5b8766e2c285" style="width: 100.0%; height: 100.0%;"><b>Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)</b><br>42 letters sent/received</div>`)[0];
                popup_63aa7e2814e7328e86bea0402a5c87b7.setContent(html_e04a50a7487244d519ad5b8766e2c285);
            
        

        circle_marker_1444bbc1e017a87668ee37e981763249.bindPopup(popup_63aa7e2814e7328e86bea0402a5c87b7)
        ;

        
    
    
            circle_marker_1444bbc1e017a87668ee37e981763249.bindTooltip(
                `<div>
                     City: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire) (42)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3ef6f2e22344129f25898b388da1796c = L.circleMarker(
                [51.6153231, 15.3007662],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 11, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_aaac40b22d59b8f4a0a8f6b8f88ef8f4 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_2c69fb687d014d5040d5d9adbfc2cfe5 = $(`<div id="html_2c69fb687d014d5040d5d9adbfc2cfe5" style="width: 100.0%; height: 100.0%;"><b>Zagań, Lubusz, Poland</b><br>33 letters sent/received</div>`)[0];
                popup_aaac40b22d59b8f4a0a8f6b8f88ef8f4.setContent(html_2c69fb687d014d5040d5d9adbfc2cfe5);
            
        

        circle_marker_3ef6f2e22344129f25898b388da1796c.bindPopup(popup_aaac40b22d59b8f4a0a8f6b8f88ef8f4)
        ;

        
    
    
            circle_marker_3ef6f2e22344129f25898b388da1796c.bindTooltip(
                `<div>
                     City: Zagań, Lubusz, Poland (33)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4d255d4fe89b64185df67b15dfc60ffc = L.circleMarker(
                [53.5336832, 7.2642003],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_bec8b5e7b9243ac6294d8247c0cbe580 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_1dda94856f8577c096a8ee839fb65762 = $(`<div id="html_1dda94856f8577c096a8ee839fb65762" style="width: 100.0%; height: 100.0%;"><b>Osteel, Lower Saxony, Germany</b><br>24 letters sent/received</div>`)[0];
                popup_bec8b5e7b9243ac6294d8247c0cbe580.setContent(html_1dda94856f8577c096a8ee839fb65762);
            
        

        circle_marker_4d255d4fe89b64185df67b15dfc60ffc.bindPopup(popup_bec8b5e7b9243ac6294d8247c0cbe580)
        ;

        
    
    
            circle_marker_4d255d4fe89b64185df67b15dfc60ffc.bindTooltip(
                `<div>
                     City: Osteel, Lower Saxony, Germany (24)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_23f1424f816f07bd587f8da3469ec81e = L.circleMarker(
                [51.8666527, 12.646761],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_598a686b226ea8c645059dd9e8ae50aa = L.popup({
  "maxWidth": 280,
});

        
            
                let html_c8ce0d8e04fefe10f9c36fd76f7192e0 = $(`<div id="html_c8ce0d8e04fefe10f9c36fd76f7192e0" style="width: 100.0%; height: 100.0%;"><b>Wittenberg, Saxony-Anhalt, Germany</b><br>23 letters sent/received</div>`)[0];
                popup_598a686b226ea8c645059dd9e8ae50aa.setContent(html_c8ce0d8e04fefe10f9c36fd76f7192e0);
            
        

        circle_marker_23f1424f816f07bd587f8da3469ec81e.bindPopup(popup_598a686b226ea8c645059dd9e8ae50aa)
        ;

        
    
    
            circle_marker_23f1424f816f07bd587f8da3469ec81e.bindTooltip(
                `<div>
                     City: Wittenberg, Saxony-Anhalt, Germany (23)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3430f00c9d9eda5cc81116740a3b9fb0 = L.circleMarker(
                [44.4938203, 11.3426327],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_1a9cc024d91a7afa582952f23b95ec6a = L.popup({
  "maxWidth": 280,
});

        
            
                let html_017bda3c5305ece929b6d0be0e1ff44b = $(`<div id="html_017bda3c5305ece929b6d0be0e1ff44b" style="width: 100.0%; height: 100.0%;"><b>Bologna, Emilia-Romagna, Italy</b><br>22 letters sent/received</div>`)[0];
                popup_1a9cc024d91a7afa582952f23b95ec6a.setContent(html_017bda3c5305ece929b6d0be0e1ff44b);
            
        

        circle_marker_3430f00c9d9eda5cc81116740a3b9fb0.bindPopup(popup_1a9cc024d91a7afa582952f23b95ec6a)
        ;

        
    
    
            circle_marker_3430f00c9d9eda5cc81116740a3b9fb0.bindTooltip(
                `<div>
                     City: Bologna, Emilia-Romagna, Italy (22)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_cd31de57f16bc39549c998c49edbb097 = L.circleMarker(
                [54.3482907, 18.6540233],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_c87374c2b330735a5db469d48ffbe8f2 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_97c4271ec352d86bdd44a87e503e4e2b = $(`<div id="html_97c4271ec352d86bdd44a87e503e4e2b" style="width: 100.0%; height: 100.0%;"><b>Gdańsk, Pomeranian Voivodeship, Poland</b><br>21 letters sent/received</div>`)[0];
                popup_c87374c2b330735a5db469d48ffbe8f2.setContent(html_97c4271ec352d86bdd44a87e503e4e2b);
            
        

        circle_marker_cd31de57f16bc39549c998c49edbb097.bindPopup(popup_c87374c2b330735a5db469d48ffbe8f2)
        ;

        
    
    
            circle_marker_cd31de57f16bc39549c998c49edbb097.bindTooltip(
                `<div>
                     City: Gdańsk, Pomeranian Voivodeship, Poland (21)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c42056452cfe1e3b99ccdf15564b4591 = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_49ca0d05ab57dcc30e3c915294007d92 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_5e20d531af3bc9b33f570ef69a524314 = $(`<div id="html_5e20d531af3bc9b33f570ef69a524314" style="width: 100.0%; height: 100.0%;"><b>Regensburg, Bavaria, Germany</b><br>19 letters sent/received</div>`)[0];
                popup_49ca0d05ab57dcc30e3c915294007d92.setContent(html_5e20d531af3bc9b33f570ef69a524314);
            
        

        circle_marker_c42056452cfe1e3b99ccdf15564b4591.bindPopup(popup_49ca0d05ab57dcc30e3c915294007d92)
        ;

        
    
    
            circle_marker_c42056452cfe1e3b99ccdf15564b4591.bindTooltip(
                `<div>
                     City: Regensburg, Bavaria, Germany (19)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_479ff81e3e0247acb3a010897208f375 = L.circleMarker(
                [53.6468107, 7.6118499],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 9, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_cfcc31ef323143d8f248ee682511561b = L.popup({
  "maxWidth": 280,
});

        
            
                let html_e895d8838f162d19ef4258e14f66eded = $(`<div id="html_e895d8838f162d19ef4258e14f66eded" style="width: 100.0%; height: 100.0%;"><b>Esens, Lower Saxony, Germany</b><br>17 letters sent/received</div>`)[0];
                popup_cfcc31ef323143d8f248ee682511561b.setContent(html_e895d8838f162d19ef4258e14f66eded);
            
        

        circle_marker_479ff81e3e0247acb3a010897208f375.bindPopup(popup_cfcc31ef323143d8f248ee682511561b)
        ;

        
    
    
            circle_marker_479ff81e3e0247acb3a010897208f375.bindTooltip(
                `<div>
                     City: Esens, Lower Saxony, Germany (17)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_80b9c6af8396012eae046fc20de14288 = L.circleMarker(
                [46.1456196, 15.0817358],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_e143e0e3f208414ea6c033b059d2c665 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_1ebec25e42b1237aba4c558dab08e6de = $(`<div id="html_1ebec25e42b1237aba4c558dab08e6de" style="width: 100.0%; height: 100.0%;"><b>Hrastnik, Hrastnik, Slovenia</b><br>15 letters sent/received</div>`)[0];
                popup_e143e0e3f208414ea6c033b059d2c665.setContent(html_1ebec25e42b1237aba4c558dab08e6de);
            
        

        circle_marker_80b9c6af8396012eae046fc20de14288.bindPopup(popup_e143e0e3f208414ea6c033b059d2c665)
        ;

        
    
    
            circle_marker_80b9c6af8396012eae046fc20de14288.bindTooltip(
                `<div>
                     City: Hrastnik, Hrastnik, Slovenia (15)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_01879cd3845dad774ed84c88e5b198d9 = L.circleMarker(
                [45.4046171, 12.3105232],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_21573b5fba40a0f585b49b8a3c5ac911 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_9a53530db1e50c1bc6d3a66399c9dc6e = $(`<div id="html_9a53530db1e50c1bc6d3a66399c9dc6e" style="width: 100.0%; height: 100.0%;"><b>Venice, Veneto, Italy</b><br>15 letters sent/received</div>`)[0];
                popup_21573b5fba40a0f585b49b8a3c5ac911.setContent(html_9a53530db1e50c1bc6d3a66399c9dc6e);
            
        

        circle_marker_01879cd3845dad774ed84c88e5b198d9.bindPopup(popup_21573b5fba40a0f585b49b8a3c5ac911)
        ;

        
    
    
            circle_marker_01879cd3845dad774ed84c88e5b198d9.bindTooltip(
                `<div>
                     City: Venice, Veneto, Italy (15)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c79f660f7c5b5feeba983e3b868a7044 = L.circleMarker(
                [45.3984428, 11.8956829],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_a46ee3b0e5f5d4c76b265b79b12a0ba3 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_318e7ea5e989786ddc7807b70fb52e38 = $(`<div id="html_318e7ea5e989786ddc7807b70fb52e38" style="width: 100.0%; height: 100.0%;"><b>Padua, Veneto, Italy</b><br>14 letters sent/received</div>`)[0];
                popup_a46ee3b0e5f5d4c76b265b79b12a0ba3.setContent(html_318e7ea5e989786ddc7807b70fb52e38);
            
        

        circle_marker_c79f660f7c5b5feeba983e3b868a7044.bindPopup(popup_a46ee3b0e5f5d4c76b265b79b12a0ba3)
        ;

        
    
    
            circle_marker_c79f660f7c5b5feeba983e3b868a7044.bindTooltip(
                `<div>
                     City: Padua, Veneto, Italy (14)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_52485ec6dc0658fb5c51204cc1661c94 = L.circleMarker(
                [49.9995205, 8.2736253],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_0e8ea468f43ff126804728ed67b02b76 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cc5acbd8e73ed6122fe801e8568e64b1 = $(`<div id="html_cc5acbd8e73ed6122fe801e8568e64b1" style="width: 100.0%; height: 100.0%;"><b>Mainz, Rhineland-Palatinate, Germany</b><br>14 letters sent/received</div>`)[0];
                popup_0e8ea468f43ff126804728ed67b02b76.setContent(html_cc5acbd8e73ed6122fe801e8568e64b1);
            
        

        circle_marker_52485ec6dc0658fb5c51204cc1661c94.bindPopup(popup_0e8ea468f43ff126804728ed67b02b76)
        ;

        
    
    
            circle_marker_52485ec6dc0658fb5c51204cc1661c94.bindTooltip(
                `<div>
                     City: Mainz, Rhineland-Palatinate, Germany (14)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_af14cde59cd687192758032286f4b8fa = L.circleMarker(
                [43.7697955, 11.2556404],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_23140ba691a70190349023fc75598352 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_95d6e4a046be8371b6870c994f806c05 = $(`<div id="html_95d6e4a046be8371b6870c994f806c05" style="width: 100.0%; height: 100.0%;"><b>Florence, Tuscany, Italy</b><br>11 letters sent/received</div>`)[0];
                popup_23140ba691a70190349023fc75598352.setContent(html_95d6e4a046be8371b6870c994f806c05);
            
        

        circle_marker_af14cde59cd687192758032286f4b8fa.bindPopup(popup_23140ba691a70190349023fc75598352)
        ;

        
    
    
            circle_marker_af14cde59cd687192758032286f4b8fa.bindTooltip(
                `<div>
                     City: Florence, Tuscany, Italy (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_28fd14627f9a9439704e297507a7743f = L.circleMarker(
                [54.7046485, 20.4565666],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_b25b7dbd15564727eaafdd0bd3346d3a = L.popup({
  "maxWidth": 280,
});

        
            
                let html_159b5c2b5e78e58b3c6df615b5b23129 = $(`<div id="html_159b5c2b5e78e58b3c6df615b5b23129" style="width: 100.0%; height: 100.0%;"><b>Kaliningrad [Königsberg], Kaliningrad Oblast, Russia [Prussia]</b><br>11 letters sent/received</div>`)[0];
                popup_b25b7dbd15564727eaafdd0bd3346d3a.setContent(html_159b5c2b5e78e58b3c6df615b5b23129);
            
        

        circle_marker_28fd14627f9a9439704e297507a7743f.bindPopup(popup_b25b7dbd15564727eaafdd0bd3346d3a)
        ;

        
    
    
            circle_marker_28fd14627f9a9439704e297507a7743f.bindTooltip(
                `<div>
                     City: Kaliningrad [Königsberg], Kaliningrad Oblast, Russia [Prussia] (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e1270a04567e7506aca10110c651914b = L.circleMarker(
                [51.1563185, 14.991018],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 8, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_4f60c970ba6da8e68f8a68ee0684f8fd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_0a31a2af04d72907af1dd7dc26e74dc0 = $(`<div id="html_0a31a2af04d72907af1dd7dc26e74dc0" style="width: 100.0%; height: 100.0%;"><b>Görlitz, Saxony, Germany</b><br>11 letters sent/received</div>`)[0];
                popup_4f60c970ba6da8e68f8a68ee0684f8fd.setContent(html_0a31a2af04d72907af1dd7dc26e74dc0);
            
        

        circle_marker_e1270a04567e7506aca10110c651914b.bindPopup(popup_4f60c970ba6da8e68f8a68ee0684f8fd)
        ;

        
    
    
            circle_marker_e1270a04567e7506aca10110c651914b.bindTooltip(
                `<div>
                     City: Görlitz, Saxony, Germany (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e871e91aa7b37bb893413190acb70328 = L.circleMarker(
                [50.291767, 14.8260014],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_7ea5a1d355266a244673ab4539bee1b8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ab5f4756db176f976b97f624d9baec21 = $(`<div id="html_ab5f4756db176f976b97f624d9baec21" style="width: 100.0%; height: 100.0%;"><b>Benátky nad Jizerou, Central Bohemia, Czech Republic</b><br>10 letters sent/received</div>`)[0];
                popup_7ea5a1d355266a244673ab4539bee1b8.setContent(html_ab5f4756db176f976b97f624d9baec21);
            
        

        circle_marker_e871e91aa7b37bb893413190acb70328.bindPopup(popup_7ea5a1d355266a244673ab4539bee1b8)
        ;

        
    
    
            circle_marker_e871e91aa7b37bb893413190acb70328.bindTooltip(
                `<div>
                     City: Benátky nad Jizerou, Central Bohemia, Czech Republic (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_282ca70321a5560c16466a6aeef07934 = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_41c1c0ab7e764a394fa04ebe37d36ef6 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ed818706b9edbd9fd601ab3a6c8d54f4 = $(`<div id="html_ed818706b9edbd9fd601ab3a6c8d54f4" style="width: 100.0%; height: 100.0%;"><b>Dresden, Saxony, Germany</b><br>10 letters sent/received</div>`)[0];
                popup_41c1c0ab7e764a394fa04ebe37d36ef6.setContent(html_ed818706b9edbd9fd601ab3a6c8d54f4);
            
        

        circle_marker_282ca70321a5560c16466a6aeef07934.bindPopup(popup_41c1c0ab7e764a394fa04ebe37d36ef6)
        ;

        
    
    
            circle_marker_282ca70321a5560c16466a6aeef07934.bindTooltip(
                `<div>
                     City: Dresden, Saxony, Germany (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a15f3073bb12bcebb24a07f4d8356a13 = L.circleMarker(
                [51.2211097, 4.3997081],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_60f82eda2ea9d2150ddd3d38322766ff = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cc19edd97fd1882b4783ab440f9839cf = $(`<div id="html_cc19edd97fd1882b4783ab440f9839cf" style="width: 100.0%; height: 100.0%;"><b>Antwerp, Flanders, Belgium</b><br>10 letters sent/received</div>`)[0];
                popup_60f82eda2ea9d2150ddd3d38322766ff.setContent(html_cc19edd97fd1882b4783ab440f9839cf);
            
        

        circle_marker_a15f3073bb12bcebb24a07f4d8356a13.bindPopup(popup_60f82eda2ea9d2150ddd3d38322766ff)
        ;

        
    
    
            circle_marker_a15f3073bb12bcebb24a07f4d8356a13.bindTooltip(
                `<div>
                     City: Antwerp, Flanders, Belgium (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_acdab01690d101cb15418ec8eb15fc74 = L.circleMarker(
                [52.1625283, 10.5348215],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_525cf9a58ad165afd1eec7b0a7cfd136 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_bdee41c82d5912d31503fe81ce1e7371 = $(`<div id="html_bdee41c82d5912d31503fe81ce1e7371" style="width: 100.0%; height: 100.0%;"><b>Wolfenbüttel, Lower Saxony, Germany</b><br>10 letters sent/received</div>`)[0];
                popup_525cf9a58ad165afd1eec7b0a7cfd136.setContent(html_bdee41c82d5912d31503fe81ce1e7371);
            
        

        circle_marker_acdab01690d101cb15418ec8eb15fc74.bindPopup(popup_525cf9a58ad165afd1eec7b0a7cfd136)
        ;

        
    
    
            circle_marker_acdab01690d101cb15418ec8eb15fc74.bindTooltip(
                `<div>
                     City: Wolfenbüttel, Lower Saxony, Germany (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f6974be96d4ba81557387157cf526750 = L.circleMarker(
                [47.8803788, 10.622246],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_21a4ccc836a6d090858d207eb5d8b918 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_02ca29f758aa0e9f259e38df66d6a35a = $(`<div id="html_02ca29f758aa0e9f259e38df66d6a35a" style="width: 100.0%; height: 100.0%;"><b>Kaufbeuren, Bavaria, Germany</b><br>9 letters sent/received</div>`)[0];
                popup_21a4ccc836a6d090858d207eb5d8b918.setContent(html_02ca29f758aa0e9f259e38df66d6a35a);
            
        

        circle_marker_f6974be96d4ba81557387157cf526750.bindPopup(popup_21a4ccc836a6d090858d207eb5d8b918)
        ;

        
    
    
            circle_marker_f6974be96d4ba81557387157cf526750.bindTooltip(
                `<div>
                     City: Kaufbeuren, Bavaria, Germany (9)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1f6d011f1a386669969d202d28f6b030 = L.circleMarker(
                [48.5621964, 12.0859345],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_c0c0276f645a1bfc794cd40e479af18a = L.popup({
  "maxWidth": 280,
});

        
            
                let html_a8622dd3df6702bc3f1e3d5aa8e3899b = $(`<div id="html_a8622dd3df6702bc3f1e3d5aa8e3899b" style="width: 100.0%; height: 100.0%;"><b>Altdorf, Bavaria, Germany</b><br>8 letters sent/received</div>`)[0];
                popup_c0c0276f645a1bfc794cd40e479af18a.setContent(html_a8622dd3df6702bc3f1e3d5aa8e3899b);
            
        

        circle_marker_1f6d011f1a386669969d202d28f6b030.bindPopup(popup_c0c0276f645a1bfc794cd40e479af18a)
        ;

        
    
    
            circle_marker_1f6d011f1a386669969d202d28f6b030.bindTooltip(
                `<div>
                     City: Altdorf, Bavaria, Germany (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0815c24442929e80230d2b6a06e066cc = L.circleMarker(
                [49.2888745, 10.5597693],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_7f78b96b352a71e5bda1786559d8ba49 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_3c266b54b202aa3dbda2d75ee63a7e6f = $(`<div id="html_3c266b54b202aa3dbda2d75ee63a7e6f" style="width: 100.0%; height: 100.0%;"><b>Ansbach, Bavaria, Germany</b><br>8 letters sent/received</div>`)[0];
                popup_7f78b96b352a71e5bda1786559d8ba49.setContent(html_3c266b54b202aa3dbda2d75ee63a7e6f);
            
        

        circle_marker_0815c24442929e80230d2b6a06e066cc.bindPopup(popup_7f78b96b352a71e5bda1786559d8ba49)
        ;

        
    
    
            circle_marker_0815c24442929e80230d2b6a06e066cc.bindTooltip(
                `<div>
                     City: Ansbach, Bavaria, Germany (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d521ec99dc164b4041402cbc989d041c = L.circleMarker(
                [50.1106444, 8.6820917],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_c95d78a93640c1c5b6177f6886f25055 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_5fe15c5533e955554294f9578a0ea87b = $(`<div id="html_5fe15c5533e955554294f9578a0ea87b" style="width: 100.0%; height: 100.0%;"><b>Frankfurt am Main, Hesse, Germany</b><br>8 letters sent/received</div>`)[0];
                popup_c95d78a93640c1c5b6177f6886f25055.setContent(html_5fe15c5533e955554294f9578a0ea87b);
            
        

        circle_marker_d521ec99dc164b4041402cbc989d041c.bindPopup(popup_c95d78a93640c1c5b6177f6886f25055)
        ;

        
    
    
            circle_marker_d521ec99dc164b4041402cbc989d041c.bindTooltip(
                `<div>
                     City: Frankfurt am Main, Hesse, Germany (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ba38e8bd472f19ae224f72440a3fb5e1 = L.circleMarker(
                [51.5074456, -0.1277653],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_477048ca6e92be7327712f43b00b7de7 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_e288591659f9659990202258e5a5c15b = $(`<div id="html_e288591659f9659990202258e5a5c15b" style="width: 100.0%; height: 100.0%;"><b>London, England, United Kingdom</b><br>8 letters sent/received</div>`)[0];
                popup_477048ca6e92be7327712f43b00b7de7.setContent(html_e288591659f9659990202258e5a5c15b);
            
        

        circle_marker_ba38e8bd472f19ae224f72440a3fb5e1.bindPopup(popup_477048ca6e92be7327712f43b00b7de7)
        ;

        
    
    
            circle_marker_ba38e8bd472f19ae224f72440a3fb5e1.bindTooltip(
                `<div>
                     City: London, England, United Kingdom (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6f6ca14e91debe0bedda11ba38da907b = L.circleMarker(
                [49.5940567, 17.251143],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_60f23a475d2d714591406bd3e329a0a8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ad2b3d8574f2be56faf392a90429a214 = $(`<div id="html_ad2b3d8574f2be56faf392a90429a214" style="width: 100.0%; height: 100.0%;"><b>Olomouc, Moravia, Czech Republic</b><br>7 letters sent/received</div>`)[0];
                popup_60f23a475d2d714591406bd3e329a0a8.setContent(html_ad2b3d8574f2be56faf392a90429a214);
            
        

        circle_marker_6f6ca14e91debe0bedda11ba38da907b.bindPopup(popup_60f23a475d2d714591406bd3e329a0a8)
        ;

        
    
    
            circle_marker_6f6ca14e91debe0bedda11ba38da907b.bindTooltip(
                `<div>
                     City: Olomouc, Moravia, Czech Republic (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_02d166f80fc68041effe39b337af5b23 = L.circleMarker(
                [51.8953514, 11.0520563],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_59ac17a5215d1c6f2da6b1353ae58c60 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_60dedd68b10dc517ae28a1272c8222fa = $(`<div id="html_60dedd68b10dc517ae28a1272c8222fa" style="width: 100.0%; height: 100.0%;"><b>Halberstadt, Saxony-Anhalt, Germany</b><br>7 letters sent/received</div>`)[0];
                popup_59ac17a5215d1c6f2da6b1353ae58c60.setContent(html_60dedd68b10dc517ae28a1272c8222fa);
            
        

        circle_marker_02d166f80fc68041effe39b337af5b23.bindPopup(popup_59ac17a5215d1c6f2da6b1353ae58c60)
        ;

        
    
    
            circle_marker_02d166f80fc68041effe39b337af5b23.bindTooltip(
                `<div>
                     City: Halberstadt, Saxony-Anhalt, Germany (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_85aad86aa8bfcc939742db3d69fb3faf = L.circleMarker(
                [50.4370452, 15.3516528],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_e174ecd593487b0272996545a6962f23 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_b7feb110f689c95c0c28feafda49deea = $(`<div id="html_b7feb110f689c95c0c28feafda49deea" style="width: 100.0%; height: 100.0%;"><b>Jičín, Královéhradecký kraj, Czech Republic</b><br>7 letters sent/received</div>`)[0];
                popup_e174ecd593487b0272996545a6962f23.setContent(html_b7feb110f689c95c0c28feafda49deea);
            
        

        circle_marker_85aad86aa8bfcc939742db3d69fb3faf.bindPopup(popup_e174ecd593487b0272996545a6962f23)
        ;

        
    
    
            circle_marker_85aad86aa8bfcc939742db3d69fb3faf.bindTooltip(
                `<div>
                     City: Jičín, Královéhradecký kraj, Czech Republic (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bf3ea4cf2e0c1a63ac738fa55514c982 = L.circleMarker(
                [53.6373063, 7.4341272],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_72fed69ce85276546b7879a2bcb61e63 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d080c9ede08c141810ac4b3161f1be6f = $(`<div id="html_d080c9ede08c141810ac4b3161f1be6f" style="width: 100.0%; height: 100.0%;"><b>Resterhafe, Lower Saxony, Germany</b><br>6 letters sent/received</div>`)[0];
                popup_72fed69ce85276546b7879a2bcb61e63.setContent(html_d080c9ede08c141810ac4b3161f1be6f);
            
        

        circle_marker_bf3ea4cf2e0c1a63ac738fa55514c982.bindPopup(popup_72fed69ce85276546b7879a2bcb61e63)
        ;

        
    
    
            circle_marker_bf3ea4cf2e0c1a63ac738fa55514c982.bindTooltip(
                `<div>
                     City: Resterhafe, Lower Saxony, Germany (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_98a92b5081e727176743b3dcebf2a3ca = L.circleMarker(
                [48.1598261, 14.0758845],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_1a29bb7a890b2cce541dea7371867086 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_6aa756efa03463f3056e1f230fb51ecc = $(`<div id="html_6aa756efa03463f3056e1f230fb51ecc" style="width: 100.0%; height: 100.0%;"><b>Castle Leombach, Leombach, Upper Austria, Austria</b><br>6 letters sent/received</div>`)[0];
                popup_1a29bb7a890b2cce541dea7371867086.setContent(html_6aa756efa03463f3056e1f230fb51ecc);
            
        

        circle_marker_98a92b5081e727176743b3dcebf2a3ca.bindPopup(popup_1a29bb7a890b2cce541dea7371867086)
        ;

        
    
    
            circle_marker_98a92b5081e727176743b3dcebf2a3ca.bindTooltip(
                `<div>
                     City: Castle Leombach, Leombach, Upper Austria, Austria (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0c50d2d1a55faa60aea58716ef834d3c = L.circleMarker(
                [48.6265854, 9.3365463],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_abd96f472222de6905c7d3b2b12be53f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_177ee7f2c4169f0d100ac757856c0cf5 = $(`<div id="html_177ee7f2c4169f0d100ac757856c0cf5" style="width: 100.0%; height: 100.0%;"><b>Nürtingen, Baden-Württemberg, Germany</b><br>6 letters sent/received</div>`)[0];
                popup_abd96f472222de6905c7d3b2b12be53f.setContent(html_177ee7f2c4169f0d100ac757856c0cf5);
            
        

        circle_marker_0c50d2d1a55faa60aea58716ef834d3c.bindPopup(popup_abd96f472222de6905c7d3b2b12be53f)
        ;

        
    
    
            circle_marker_0c50d2d1a55faa60aea58716ef834d3c.bindTooltip(
                `<div>
                     City: Nürtingen, Baden-Württemberg, Germany (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4b34e74dbbb4f4bccdf686842d51e76f = L.circleMarker(
                [50.41768, 8.63873],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 7, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_8232049ff7fa85a70737bc61f1ca3ad0 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ac1fbcb95f8509b11bd1131766a4fc91 = $(`<div id="html_ac1fbcb95f8509b11bd1131766a4fc91" style="width: 100.0%; height: 100.0%;"><b>Butzbach, Hesse, Germany, (Holy Roman Empire)</b><br>6 letters sent/received</div>`)[0];
                popup_8232049ff7fa85a70737bc61f1ca3ad0.setContent(html_ac1fbcb95f8509b11bd1131766a4fc91);
            
        

        circle_marker_4b34e74dbbb4f4bccdf686842d51e76f.bindPopup(popup_8232049ff7fa85a70737bc61f1ca3ad0)
        ;

        
    
    
            circle_marker_4b34e74dbbb4f4bccdf686842d51e76f.bindTooltip(
                `<div>
                     City: Butzbach, Hesse, Germany, (Holy Roman Empire) (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d69dbf3ffb34803533d96ebf25c269fe = L.circleMarker(
                [41.8933203, 12.4829321],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_538a9b56002fa238d4efe7913d28aba7 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_f3e42beaee56aaeeb16ec1dc345a3b6b = $(`<div id="html_f3e42beaee56aaeeb16ec1dc345a3b6b" style="width: 100.0%; height: 100.0%;"><b>Rome, Latium, Italy</b><br>5 letters sent/received</div>`)[0];
                popup_538a9b56002fa238d4efe7913d28aba7.setContent(html_f3e42beaee56aaeeb16ec1dc345a3b6b);
            
        

        circle_marker_d69dbf3ffb34803533d96ebf25c269fe.bindPopup(popup_538a9b56002fa238d4efe7913d28aba7)
        ;

        
    
    
            circle_marker_d69dbf3ffb34803533d96ebf25c269fe.bindTooltip(
                `<div>
                     City: Rome, Latium, Italy (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e6b292646c8d274c3e90bf430d9ca7c6 = L.circleMarker(
                [48.3690341, 10.8979522],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_229b7ba6663de0ff724deb84ea67a03d = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d4809278ed9084d0c536ff1d48ea1863 = $(`<div id="html_d4809278ed9084d0c536ff1d48ea1863" style="width: 100.0%; height: 100.0%;"><b>Augsburg, Bavaria, Germany</b><br>5 letters sent/received</div>`)[0];
                popup_229b7ba6663de0ff724deb84ea67a03d.setContent(html_d4809278ed9084d0c536ff1d48ea1863);
            
        

        circle_marker_e6b292646c8d274c3e90bf430d9ca7c6.bindPopup(popup_229b7ba6663de0ff724deb84ea67a03d)
        ;

        
    
    
            circle_marker_e6b292646c8d274c3e90bf430d9ca7c6.bindTooltip(
                `<div>
                     City: Augsburg, Bavaria, Germany (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0d831285360198cd596755ea70b83fe8 = L.circleMarker(
                [48.7630165, 11.4250395],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_0e6c46916d744a2fb17c20bc9f22fe54 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_48dc36c43921c66a949c4b421b85ec70 = $(`<div id="html_48dc36c43921c66a949c4b421b85ec70" style="width: 100.0%; height: 100.0%;"><b>Ingolstadt, Bavaria, Germany, (Holy Roman Empire)</b><br>5 letters sent/received</div>`)[0];
                popup_0e6c46916d744a2fb17c20bc9f22fe54.setContent(html_48dc36c43921c66a949c4b421b85ec70);
            
        

        circle_marker_0d831285360198cd596755ea70b83fe8.bindPopup(popup_0e6c46916d744a2fb17c20bc9f22fe54)
        ;

        
    
    
            circle_marker_0d831285360198cd596755ea70b83fe8.bindTooltip(
                `<div>
                     City: Ingolstadt, Bavaria, Germany, (Holy Roman Empire) (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9488d1b4618caeba2ea3a17c57c5ad51 = L.circleMarker(
                [48.7501041, 8.8707147],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_2bffd821759dfd6cfc1072592b11b30e = L.popup({
  "maxWidth": 280,
});

        
            
                let html_92224e1bc8c29a82fb2a1cbdbb46e51d = $(`<div id="html_92224e1bc8c29a82fb2a1cbdbb46e51d" style="width: 100.0%; height: 100.0%;"><b>Weil der Stadt, Baden-Württemberg, Germany</b><br>4 letters sent/received</div>`)[0];
                popup_2bffd821759dfd6cfc1072592b11b30e.setContent(html_92224e1bc8c29a82fb2a1cbdbb46e51d);
            
        

        circle_marker_9488d1b4618caeba2ea3a17c57c5ad51.bindPopup(popup_2bffd821759dfd6cfc1072592b11b30e)
        ;

        
    
    
            circle_marker_9488d1b4618caeba2ea3a17c57c5ad51.bindTooltip(
                `<div>
                     City: Weil der Stadt, Baden-Württemberg, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_00b4d3277ae836f2181c2353de280d07 = L.circleMarker(
                [48.7142691, 8.7397624],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_198bfcfe21405fe119dcb5c0e5a99497 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_58d959d80e2cc49c3d829a7e9da3339f = $(`<div id="html_58d959d80e2cc49c3d829a7e9da3339f" style="width: 100.0%; height: 100.0%;"><b>Calw, Baden-Württemberg, Germany</b><br>4 letters sent/received</div>`)[0];
                popup_198bfcfe21405fe119dcb5c0e5a99497.setContent(html_58d959d80e2cc49c3d829a7e9da3339f);
            
        

        circle_marker_00b4d3277ae836f2181c2353de280d07.bindPopup(popup_198bfcfe21405fe119dcb5c0e5a99497)
        ;

        
    
    
            circle_marker_00b4d3277ae836f2181c2353de280d07.bindTooltip(
                `<div>
                     City: Calw, Baden-Württemberg, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c26a90095742f65523dedc2028eb29c4 = L.circleMarker(
                [52.3412273, 14.549452],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_e6ab525abfda8d4829d1f65fd1a7c654 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_c3980be808924214b141234b70620d5c = $(`<div id="html_c3980be808924214b141234b70620d5c" style="width: 100.0%; height: 100.0%;"><b>Frankfurt (Oder), Brandenburg, Germany</b><br>4 letters sent/received</div>`)[0];
                popup_e6ab525abfda8d4829d1f65fd1a7c654.setContent(html_c3980be808924214b141234b70620d5c);
            
        

        circle_marker_c26a90095742f65523dedc2028eb29c4.bindPopup(popup_e6ab525abfda8d4829d1f65fd1a7c654)
        ;

        
    
    
            circle_marker_c26a90095742f65523dedc2028eb29c4.bindTooltip(
                `<div>
                     City: Frankfurt (Oder), Brandenburg, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fee2e4000d1d62358dfbfe8005fe30a1 = L.circleMarker(
                [53.0758196, 8.8071646],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_1d4c1f6f0444e65b6490b567034170a8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_2607335715d49185b2822fc65f46724f = $(`<div id="html_2607335715d49185b2822fc65f46724f" style="width: 100.0%; height: 100.0%;"><b>Bremen, Bremen, Germany</b><br>4 letters sent/received</div>`)[0];
                popup_1d4c1f6f0444e65b6490b567034170a8.setContent(html_2607335715d49185b2822fc65f46724f);
            
        

        circle_marker_fee2e4000d1d62358dfbfe8005fe30a1.bindPopup(popup_1d4c1f6f0444e65b6490b567034170a8)
        ;

        
    
    
            circle_marker_fee2e4000d1d62358dfbfe8005fe30a1.bindTooltip(
                `<div>
                     City: Bremen, Bremen, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2d4b3352a83d31a221a694612a213aaf = L.circleMarker(
                [47.2654296, 11.3927685],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_71c5e675c1ff9dc04cddbfcfb6b79423 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_9e14c4fc6afe3d3ca7a39df221d7a788 = $(`<div id="html_9e14c4fc6afe3d3ca7a39df221d7a788" style="width: 100.0%; height: 100.0%;"><b>Innsbruck, Tyrol, Austria, (Holy Roman Empire)</b><br>4 letters sent/received</div>`)[0];
                popup_71c5e675c1ff9dc04cddbfcfb6b79423.setContent(html_9e14c4fc6afe3d3ca7a39df221d7a788);
            
        

        circle_marker_2d4b3352a83d31a221a694612a213aaf.bindPopup(popup_71c5e675c1ff9dc04cddbfcfb6b79423)
        ;

        
    
    
            circle_marker_2d4b3352a83d31a221a694612a213aaf.bindTooltip(
                `<div>
                     City: Innsbruck, Tyrol, Austria, (Holy Roman Empire) (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bada1c8968bdd07d6276516b6400ca4d = L.circleMarker(
                [48.3082607, 14.0203999],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_38cbb973290656422cacc8a82485b1db = L.popup({
  "maxWidth": 280,
});

        
            
                let html_bf242f3099d97bd3c65f53cd0e03401f = $(`<div id="html_bf242f3099d97bd3c65f53cd0e03401f" style="width: 100.0%; height: 100.0%;"><b>Eferding, Upper Austria, Austria</b><br>4 letters sent/received</div>`)[0];
                popup_38cbb973290656422cacc8a82485b1db.setContent(html_bf242f3099d97bd3c65f53cd0e03401f);
            
        

        circle_marker_bada1c8968bdd07d6276516b6400ca4d.bindPopup(popup_38cbb973290656422cacc8a82485b1db)
        ;

        
    
    
            circle_marker_bada1c8968bdd07d6276516b6400ca4d.bindTooltip(
                `<div>
                     City: Eferding, Upper Austria, Austria (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d9379b5c8c824f4723b00a885c1bc640 = L.circleMarker(
                [49.453872, 11.077298],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_3e8381654f309def10367809d0a67da5 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_81ae8080c3d40825d44eaa9e9e65d4ce = $(`<div id="html_81ae8080c3d40825d44eaa9e9e65d4ce" style="width: 100.0%; height: 100.0%;"><b>Nuremberg, Bavaria, Germany</b><br>4 letters sent/received</div>`)[0];
                popup_3e8381654f309def10367809d0a67da5.setContent(html_81ae8080c3d40825d44eaa9e9e65d4ce);
            
        

        circle_marker_d9379b5c8c824f4723b00a885c1bc640.bindPopup(popup_3e8381654f309def10367809d0a67da5)
        ;

        
    
    
            circle_marker_d9379b5c8c824f4723b00a885c1bc640.bindTooltip(
                `<div>
                     City: Nuremberg, Bavaria, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_05ca0a13015a3203c768edca6d5edfec = L.circleMarker(
                [49.259407, 14.7193304],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_af80a3a219a2eff79629d11efecd4070 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_67bb75784fc62f7b2260f996fc12541e = $(`<div id="html_67bb75784fc62f7b2260f996fc12541e" style="width: 100.0%; height: 100.0%;"><b>Soběslav, Jihočeský, Czech Republic</b><br>4 letters sent/received</div>`)[0];
                popup_af80a3a219a2eff79629d11efecd4070.setContent(html_67bb75784fc62f7b2260f996fc12541e);
            
        

        circle_marker_05ca0a13015a3203c768edca6d5edfec.bindPopup(popup_af80a3a219a2eff79629d11efecd4070)
        ;

        
    
    
            circle_marker_05ca0a13015a3203c768edca6d5edfec.bindTooltip(
                `<div>
                     City: Soběslav, Jihočeský, Czech Republic (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3c2a25b72ba6f9e0e394ee34fe7b9479 = L.circleMarker(
                [48.1565472, 14.0243752],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_1b95ed93e0c9405a1fa9ffb973c42f14 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_47c154d88fbc0118cebd443a1da52f35 = $(`<div id="html_47c154d88fbc0118cebd443a1da52f35" style="width: 100.0%; height: 100.0%;"><b>Wels, Upper Austria, Austria</b><br>4 letters sent/received</div>`)[0];
                popup_1b95ed93e0c9405a1fa9ffb973c42f14.setContent(html_47c154d88fbc0118cebd443a1da52f35);
            
        

        circle_marker_3c2a25b72ba6f9e0e394ee34fe7b9479.bindPopup(popup_1b95ed93e0c9405a1fa9ffb973c42f14)
        ;

        
    
    
            circle_marker_3c2a25b72ba6f9e0e394ee34fe7b9479.bindTooltip(
                `<div>
                     City: Wels, Upper Austria, Austria (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_277e03a86fc8133778e5c5732026b36d = L.circleMarker(
                [48.577185, 10.4943532],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_49d0b2fb0c3016593469f3ce307ab78c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ee49cc5520ba568e022c7b617eeeba0c = $(`<div id="html_ee49cc5520ba568e022c7b617eeeba0c" style="width: 100.0%; height: 100.0%;"><b>Dillingen an der Donau, Bavaria, Germany</b><br>4 letters sent/received</div>`)[0];
                popup_49d0b2fb0c3016593469f3ce307ab78c.setContent(html_ee49cc5520ba568e022c7b617eeeba0c);
            
        

        circle_marker_277e03a86fc8133778e5c5732026b36d.bindPopup(popup_49d0b2fb0c3016593469f3ce307ab78c)
        ;

        
    
    
            circle_marker_277e03a86fc8133778e5c5732026b36d.bindTooltip(
                `<div>
                     City: Dillingen an der Donau, Bavaria, Germany (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_537d81b878afcff84ed83f23a44fa7f0 = L.circleMarker(
                [51.1147105, 15.2811574],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_b09324bad472101de13926df06c7ff58 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_1f3332b1a55b4fc4656f6f8382331405 = $(`<div id="html_1f3332b1a55b4fc4656f6f8382331405" style="width: 100.0%; height: 100.0%;"><b>Lubań, Lower Silesia, Poland</b><br>4 letters sent/received</div>`)[0];
                popup_b09324bad472101de13926df06c7ff58.setContent(html_1f3332b1a55b4fc4656f6f8382331405);
            
        

        circle_marker_537d81b878afcff84ed83f23a44fa7f0.bindPopup(popup_b09324bad472101de13926df06c7ff58)
        ;

        
    
    
            circle_marker_537d81b878afcff84ed83f23a44fa7f0.bindTooltip(
                `<div>
                     City: Lubań, Lower Silesia, Poland (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_709452241c4b5d4dd7b3866f8714f0aa = L.circleMarker(
                [48.8387397, 7.8318155],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_85368c0d152fce8350fa750f6e51a525 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7d336de1504855b0510af97d450e5cfb = $(`<div id="html_7d336de1504855b0510af97d450e5cfb" style="width: 100.0%; height: 100.0%;"><b>Haguenau, Grand Est, France</b><br>3 letters sent/received</div>`)[0];
                popup_85368c0d152fce8350fa750f6e51a525.setContent(html_7d336de1504855b0510af97d450e5cfb);
            
        

        circle_marker_709452241c4b5d4dd7b3866f8714f0aa.bindPopup(popup_85368c0d152fce8350fa750f6e51a525)
        ;

        
    
    
            circle_marker_709452241c4b5d4dd7b3866f8714f0aa.bindTooltip(
                `<div>
                     City: Haguenau, Grand Est, France (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_78051ad2ee41252b0c53903b8ea58808 = L.circleMarker(
                [53.5760029, 10.0755348],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_8dae555e70a2b93ab580515aba590659 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ac14a0c5069aaf92ed2ea95406f8d85c = $(`<div id="html_ac14a0c5069aaf92ed2ea95406f8d85c" style="width: 100.0%; height: 100.0%;"><b>Wandsbek, Hamburg, Germany</b><br>3 letters sent/received</div>`)[0];
                popup_8dae555e70a2b93ab580515aba590659.setContent(html_ac14a0c5069aaf92ed2ea95406f8d85c);
            
        

        circle_marker_78051ad2ee41252b0c53903b8ea58808.bindPopup(popup_8dae555e70a2b93ab580515aba590659)
        ;

        
    
    
            circle_marker_78051ad2ee41252b0c53903b8ea58808.bindTooltip(
                `<div>
                     City: Wandsbek, Hamburg, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_54a8b718edb48291fab53face437ce8b = L.circleMarker(
                [47.2466319, 15.3092173],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_4d6ddcf5bbcd5c78853ed636b467246b = L.popup({
  "maxWidth": 280,
});

        
            
                let html_3f9f05638748d489723b48fe00c2696b = $(`<div id="html_3f9f05638748d489723b48fe00c2696b" style="width: 100.0%; height: 100.0%;"><b>Schloss Rabenstein, Styria, Austria</b><br>3 letters sent/received</div>`)[0];
                popup_4d6ddcf5bbcd5c78853ed636b467246b.setContent(html_3f9f05638748d489723b48fe00c2696b);
            
        

        circle_marker_54a8b718edb48291fab53face437ce8b.bindPopup(popup_4d6ddcf5bbcd5c78853ed636b467246b)
        ;

        
    
    
            circle_marker_54a8b718edb48291fab53face437ce8b.bindTooltip(
                `<div>
                     City: Schloss Rabenstein, Styria, Austria (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0ef9ed426fc83c853bb024c24b0806ae = L.circleMarker(
                [48.745628, 11.1879622],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_07df2552537e9d30f36add70839701bd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cd7ad341bb9d980888cba9c34555f964 = $(`<div id="html_cd7ad341bb9d980888cba9c34555f964" style="width: 100.0%; height: 100.0%;"><b>Neuburg an der Donau, Bavaria, Germany</b><br>3 letters sent/received</div>`)[0];
                popup_07df2552537e9d30f36add70839701bd.setContent(html_cd7ad341bb9d980888cba9c34555f964);
            
        

        circle_marker_0ef9ed426fc83c853bb024c24b0806ae.bindPopup(popup_07df2552537e9d30f36add70839701bd)
        ;

        
    
    
            circle_marker_0ef9ed426fc83c853bb024c24b0806ae.bindTooltip(
                `<div>
                     City: Neuburg an der Donau, Bavaria, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bed66c225f2af9bda19b2f60b109f427 = L.circleMarker(
                [52.1594747, 4.4908843],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_5dcc011f6cd9125976d3586cd7de8779 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_e30c31a40f36eeaab4e1935e1f694bad = $(`<div id="html_e30c31a40f36eeaab4e1935e1f694bad" style="width: 100.0%; height: 100.0%;"><b>Leiden, South Holland, Netherlands</b><br>3 letters sent/received</div>`)[0];
                popup_5dcc011f6cd9125976d3586cd7de8779.setContent(html_e30c31a40f36eeaab4e1935e1f694bad);
            
        

        circle_marker_bed66c225f2af9bda19b2f60b109f427.bindPopup(popup_5dcc011f6cd9125976d3586cd7de8779)
        ;

        
    
    
            circle_marker_bed66c225f2af9bda19b2f60b109f427.bindTooltip(
                `<div>
                     City: Leiden, South Holland, Netherlands (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_78157e579f9c4ea63c9dbba6b47ace92 = L.circleMarker(
                [47.9960901, 7.8494005],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_338b50f41ab6215173ca62cdb8bb0c18 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_600d7c8cee1da02270ac1bd09754166d = $(`<div id="html_600d7c8cee1da02270ac1bd09754166d" style="width: 100.0%; height: 100.0%;"><b>Freiburg, Baden-Württemberg, Germany</b><br>3 letters sent/received</div>`)[0];
                popup_338b50f41ab6215173ca62cdb8bb0c18.setContent(html_600d7c8cee1da02270ac1bd09754166d);
            
        

        circle_marker_78157e579f9c4ea63c9dbba6b47ace92.bindPopup(popup_338b50f41ab6215173ca62cdb8bb0c18)
        ;

        
    
    
            circle_marker_78157e579f9c4ea63c9dbba6b47ace92.bindTooltip(
                `<div>
                     City: Freiburg, Baden-Württemberg, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5792eace30c38a74a3bc46978a189011 = L.circleMarker(
                [50.9772092, 11.9863951],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_01cb65fa9b8a7d0af0a70751e743c706 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_1c446e34b9da8598beb5b73032eb170e = $(`<div id="html_1c446e34b9da8598beb5b73032eb170e" style="width: 100.0%; height: 100.0%;"><b>Crossen an der Elster, Thuringia, Germany</b><br>3 letters sent/received</div>`)[0];
                popup_01cb65fa9b8a7d0af0a70751e743c706.setContent(html_1c446e34b9da8598beb5b73032eb170e);
            
        

        circle_marker_5792eace30c38a74a3bc46978a189011.bindPopup(popup_01cb65fa9b8a7d0af0a70751e743c706)
        ;

        
    
    
            circle_marker_5792eace30c38a74a3bc46978a189011.bindTooltip(
                `<div>
                     City: Crossen an der Elster, Thuringia, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_08f1f0f4ca3d28b128d56dd76642bb72 = L.circleMarker(
                [48.8534951, 2.3483915],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_ee4013583a5cc3e50cce3dec0d8ae5fd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_66e90d5d3cb1fab6a7f84cc009ab9923 = $(`<div id="html_66e90d5d3cb1fab6a7f84cc009ab9923" style="width: 100.0%; height: 100.0%;"><b>Paris, Île-de-France, France</b><br>3 letters sent/received</div>`)[0];
                popup_ee4013583a5cc3e50cce3dec0d8ae5fd.setContent(html_66e90d5d3cb1fab6a7f84cc009ab9923);
            
        

        circle_marker_08f1f0f4ca3d28b128d56dd76642bb72.bindPopup(popup_ee4013583a5cc3e50cce3dec0d8ae5fd)
        ;

        
    
    
            circle_marker_08f1f0f4ca3d28b128d56dd76642bb72.bindTooltip(
                `<div>
                     City: Paris, Île-de-France, France (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8ee77432655d55b94a53119213810e8c = L.circleMarker(
                [49.0668087, 8.9999838],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_91710a3f4d0cbc593f841465a87c7c9c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_080e377ecb1cd085ebda2282bd97bd79 = $(`<div id="html_080e377ecb1cd085ebda2282bd97bd79" style="width: 100.0%; height: 100.0%;"><b>Güglingen, Baden-Württemberg, Germany</b><br>3 letters sent/received</div>`)[0];
                popup_91710a3f4d0cbc593f841465a87c7c9c.setContent(html_080e377ecb1cd085ebda2282bd97bd79);
            
        

        circle_marker_8ee77432655d55b94a53119213810e8c.bindPopup(popup_91710a3f4d0cbc593f841465a87c7c9c)
        ;

        
    
    
            circle_marker_8ee77432655d55b94a53119213810e8c.bindTooltip(
                `<div>
                     City: Güglingen, Baden-Württemberg, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ef0ac9367bdf3d9a811da6a94a2ca8f9 = L.circleMarker(
                [46.2017559, 6.1466014],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_bc00975f34953856b98f7fbc4720737f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_53e07462bc468ec55ec0bbb55d8aae84 = $(`<div id="html_53e07462bc468ec55ec0bbb55d8aae84" style="width: 100.0%; height: 100.0%;"><b>Geneva, Geneva, Switzerland</b><br>3 letters sent/received</div>`)[0];
                popup_bc00975f34953856b98f7fbc4720737f.setContent(html_53e07462bc468ec55ec0bbb55d8aae84);
            
        

        circle_marker_ef0ac9367bdf3d9a811da6a94a2ca8f9.bindPopup(popup_bc00975f34953856b98f7fbc4720737f)
        ;

        
    
    
            circle_marker_ef0ac9367bdf3d9a811da6a94a2ca8f9.bindTooltip(
                `<div>
                     City: Geneva, Geneva, Switzerland (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3762453ffbf89c4b2978614f149cf4f0 = L.circleMarker(
                [53.793587, 12.1764906],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 6, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_ba629bf60c0ed51c67f17451d965b216 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_4e1a512c948e115013d1a56c3719d2cd = $(`<div id="html_4e1a512c948e115013d1a56c3719d2cd" style="width: 100.0%; height: 100.0%;"><b>Güstrow, Mecklenburg-Vorpommern, Germany</b><br>3 letters sent/received</div>`)[0];
                popup_ba629bf60c0ed51c67f17451d965b216.setContent(html_4e1a512c948e115013d1a56c3719d2cd);
            
        

        circle_marker_3762453ffbf89c4b2978614f149cf4f0.bindPopup(popup_ba629bf60c0ed51c67f17451d965b216)
        ;

        
    
    
            circle_marker_3762453ffbf89c4b2978614f149cf4f0.bindTooltip(
                `<div>
                     City: Güstrow, Mecklenburg-Vorpommern, Germany (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8a47d53262b487542046652285cae40f = L.circleMarker(
                [48.8012983, 9.0150026],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_64ed791d511856d9de85a221bd164f06 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7701fdd59f3401e1095d2e397752d138 = $(`<div id="html_7701fdd59f3401e1095d2e397752d138" style="width: 100.0%; height: 100.0%;"><b>Leonberg, Baden-Württemberg, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_64ed791d511856d9de85a221bd164f06.setContent(html_7701fdd59f3401e1095d2e397752d138);
            
        

        circle_marker_8a47d53262b487542046652285cae40f.bindPopup(popup_64ed791d511856d9de85a221bd164f06)
        ;

        
    
    
            circle_marker_8a47d53262b487542046652285cae40f.bindTooltip(
                `<div>
                     City: Leonberg, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1d1f5245b742153b7d52de7b88d6af5e = L.circleMarker(
                [47.2500001, 15.1666665],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_d938d83202d3ba96d5b6d9783b189b9f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_3b75c1980d12acb7c2a9aa48d39842b1 = $(`<div id="html_3b75c1980d12acb7c2a9aa48d39842b1" style="width: 100.0%; height: 100.0%;"><b>Styria, Austria</b><br>2 letters sent/received</div>`)[0];
                popup_d938d83202d3ba96d5b6d9783b189b9f.setContent(html_3b75c1980d12acb7c2a9aa48d39842b1);
            
        

        circle_marker_1d1f5245b742153b7d52de7b88d6af5e.bindPopup(popup_d938d83202d3ba96d5b6d9783b189b9f)
        ;

        
    
    
            circle_marker_1d1f5245b742153b7d52de7b88d6af5e.bindTooltip(
                `<div>
                     City: Styria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8e4bcfd62f0352da8d059b8d0034cf49 = L.circleMarker(
                [50.8090106, 8.7704695],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_2ab55af1a088edd0b7b9326cafa32a87 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_656a5b6cb3bfee546854ffe050aacde9 = $(`<div id="html_656a5b6cb3bfee546854ffe050aacde9" style="width: 100.0%; height: 100.0%;"><b>Marburg, Hesse, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_2ab55af1a088edd0b7b9326cafa32a87.setContent(html_656a5b6cb3bfee546854ffe050aacde9);
            
        

        circle_marker_8e4bcfd62f0352da8d059b8d0034cf49.bindPopup(popup_2ab55af1a088edd0b7b9326cafa32a87)
        ;

        
    
    
            circle_marker_8e4bcfd62f0352da8d059b8d0034cf49.bindTooltip(
                `<div>
                     City: Marburg, Hesse, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_769070fc2e6b4dcfdcdfaa0b7b45eb0d = L.circleMarker(
                [50.253211, 14.8409386],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_536811742956058cf408db3365bfcf74 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cb7a9527236de143c509cad50091e4ba = $(`<div id="html_cb7a9527236de143c509cad50091e4ba" style="width: 100.0%; height: 100.0%;"><b>Girsitz</b><br>2 letters sent/received</div>`)[0];
                popup_536811742956058cf408db3365bfcf74.setContent(html_cb7a9527236de143c509cad50091e4ba);
            
        

        circle_marker_769070fc2e6b4dcfdcdfaa0b7b45eb0d.bindPopup(popup_536811742956058cf408db3365bfcf74)
        ;

        
    
    
            circle_marker_769070fc2e6b4dcfdcdfaa0b7b45eb0d.bindTooltip(
                `<div>
                     City: Girsitz (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dabbcb67926e4741dc60dc4cb100ba1c = L.circleMarker(
                [52.2694897, 6.2364886],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_3449593ba2f15316780034620dce69cf = L.popup({
  "maxWidth": 280,
});

        
            
                let html_dbe020adab7db5d0e51151c650e40187 = $(`<div id="html_dbe020adab7db5d0e51151c650e40187" style="width: 100.0%; height: 100.0%;"><b>Deventer, Overijssel, Netherlands</b><br>2 letters sent/received</div>`)[0];
                popup_3449593ba2f15316780034620dce69cf.setContent(html_dbe020adab7db5d0e51151c650e40187);
            
        

        circle_marker_dabbcb67926e4741dc60dc4cb100ba1c.bindPopup(popup_3449593ba2f15316780034620dce69cf)
        ;

        
    
    
            circle_marker_dabbcb67926e4741dc60dc4cb100ba1c.bindTooltip(
                `<div>
                     City: Deventer, Overijssel, Netherlands (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e044f3cf12d233f536877b83a5bb5d7d = L.circleMarker(
                [52.503379, 13.3386522],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_e3119ecf7b61bd19551c4d3ea5085dda = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d961c17a762041061b58b2a8fd8e6025 = $(`<div id="html_d961c17a762041061b58b2a8fd8e6025" style="width: 100.0%; height: 100.0%;"><b>Berlin, Berlin, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_e3119ecf7b61bd19551c4d3ea5085dda.setContent(html_d961c17a762041061b58b2a8fd8e6025);
            
        

        circle_marker_e044f3cf12d233f536877b83a5bb5d7d.bindPopup(popup_e3119ecf7b61bd19551c4d3ea5085dda)
        ;

        
    
    
            circle_marker_e044f3cf12d233f536877b83a5bb5d7d.bindTooltip(
                `<div>
                     City: Berlin, Berlin, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c89fb1864ff5a98727c1bc35cd1191dd = L.circleMarker(
                [48.7180364, 10.7807299],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_5c82e9474ebf13e40ff389462e0537a2 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_366ad63b4c4792ecb18c263f94fe049f = $(`<div id="html_366ad63b4c4792ecb18c263f94fe049f" style="width: 100.0%; height: 100.0%;"><b>Donauwörth, Bavaria, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_5c82e9474ebf13e40ff389462e0537a2.setContent(html_366ad63b4c4792ecb18c263f94fe049f);
            
        

        circle_marker_c89fb1864ff5a98727c1bc35cd1191dd.bindPopup(popup_5c82e9474ebf13e40ff389462e0537a2)
        ;

        
    
    
            circle_marker_c89fb1864ff5a98727c1bc35cd1191dd.bindTooltip(
                `<div>
                     City: Donauwörth, Bavaria, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5b7a540319f7fdd5ce44701fa6d88e05 = L.circleMarker(
                [51.2077989, 5.9461436],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_a949adcde9e3bbcf0977d26fc2de1cff = L.popup({
  "maxWidth": 280,
});

        
            
                let html_f0c92a9836cd073422954f70c1ffcbb4 = $(`<div id="html_f0c92a9836cd073422954f70c1ffcbb4" style="width: 100.0%; height: 100.0%;"><b>Horn, (West Frisia) Limburg, Netherlands</b><br>2 letters sent/received</div>`)[0];
                popup_a949adcde9e3bbcf0977d26fc2de1cff.setContent(html_f0c92a9836cd073422954f70c1ffcbb4);
            
        

        circle_marker_5b7a540319f7fdd5ce44701fa6d88e05.bindPopup(popup_a949adcde9e3bbcf0977d26fc2de1cff)
        ;

        
    
    
            circle_marker_5b7a540319f7fdd5ce44701fa6d88e05.bindTooltip(
                `<div>
                     City: Horn, (West Frisia) Limburg, Netherlands (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b994f8d078698d767b77859ef9fc21cc = L.circleMarker(
                [50.8467372, 4.352493],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_ad173660dc34be5f75a4b4a99af6b1f6 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_dc14ad19abdc1e06fd5395ea1a2ff627 = $(`<div id="html_dc14ad19abdc1e06fd5395ea1a2ff627" style="width: 100.0%; height: 100.0%;"><b>Brussels, Brussels Capital Region, Belgium</b><br>2 letters sent/received</div>`)[0];
                popup_ad173660dc34be5f75a4b4a99af6b1f6.setContent(html_dc14ad19abdc1e06fd5395ea1a2ff627);
            
        

        circle_marker_b994f8d078698d767b77859ef9fc21cc.bindPopup(popup_ad173660dc34be5f75a4b4a99af6b1f6)
        ;

        
    
    
            circle_marker_b994f8d078698d767b77859ef9fc21cc.bindTooltip(
                `<div>
                     City: Brussels, Brussels Capital Region, Belgium (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_557ccd26dca79f1466dec1b6c601cac4 = L.circleMarker(
                [48.5584726, 15.3235622],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_daa8a9dd10493d11a4b39b576d05be92 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_79159a2f5adc6ecdb87e7f30f69cbe58 = $(`<div id="html_79159a2f5adc6ecdb87e7f30f69cbe58" style="width: 100.0%; height: 100.0%;"><b>Castle Rastenberg, Rastenfeld, Lower Austria, Austria</b><br>2 letters sent/received</div>`)[0];
                popup_daa8a9dd10493d11a4b39b576d05be92.setContent(html_79159a2f5adc6ecdb87e7f30f69cbe58);
            
        

        circle_marker_557ccd26dca79f1466dec1b6c601cac4.bindPopup(popup_daa8a9dd10493d11a4b39b576d05be92)
        ;

        
    
    
            circle_marker_557ccd26dca79f1466dec1b6c601cac4.bindTooltip(
                `<div>
                     City: Castle Rastenberg, Rastenfeld, Lower Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8e5b841a1be90becb129a0932b778e7b = L.circleMarker(
                [45.4641943, 9.1896346],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_151fdb8dfb97485ef8f62fe9940823ac = L.popup({
  "maxWidth": 280,
});

        
            
                let html_2ad8cd114a3be94f7b1c8c4abd076493 = $(`<div id="html_2ad8cd114a3be94f7b1c8c4abd076493" style="width: 100.0%; height: 100.0%;"><b>Milan, Lombardy, Italy</b><br>2 letters sent/received</div>`)[0];
                popup_151fdb8dfb97485ef8f62fe9940823ac.setContent(html_2ad8cd114a3be94f7b1c8c4abd076493);
            
        

        circle_marker_8e5b841a1be90becb129a0932b778e7b.bindPopup(popup_151fdb8dfb97485ef8f62fe9940823ac)
        ;

        
    
    
            circle_marker_8e5b841a1be90becb129a0932b778e7b.bindTooltip(
                `<div>
                     City: Milan, Lombardy, Italy (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e2472a5d9ccffa1ba52862964f25fda4 = L.circleMarker(
                [49.1922443, 16.6113382],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_e914ae6b11c6f4c3bf8fa0e390088157 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_daa549a275a9f26647f652d283112377 = $(`<div id="html_daa549a275a9f26647f652d283112377" style="width: 100.0%; height: 100.0%;"><b>Brno, South Moravia, Czech Republic</b><br>2 letters sent/received</div>`)[0];
                popup_e914ae6b11c6f4c3bf8fa0e390088157.setContent(html_daa549a275a9f26647f652d283112377);
            
        

        circle_marker_e2472a5d9ccffa1ba52862964f25fda4.bindPopup(popup_e914ae6b11c6f4c3bf8fa0e390088157)
        ;

        
    
    
            circle_marker_e2472a5d9ccffa1ba52862964f25fda4.bindTooltip(
                `<div>
                     City: Brno, South Moravia, Czech Republic (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d2af0c02e407a23227baf09ba7fd064c = L.circleMarker(
                [48.7427584, 9.3071685],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_021a309d331b801412d22119728c4478 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_63696a9d7368be8f8e2718fbc54e643a = $(`<div id="html_63696a9d7368be8f8e2718fbc54e643a" style="width: 100.0%; height: 100.0%;"><b>Esslingen, Baden-Württemberg, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_021a309d331b801412d22119728c4478.setContent(html_63696a9d7368be8f8e2718fbc54e643a);
            
        

        circle_marker_d2af0c02e407a23227baf09ba7fd064c.bindPopup(popup_021a309d331b801412d22119728c4478)
        ;

        
    
    
            circle_marker_d2af0c02e407a23227baf09ba7fd064c.bindTooltip(
                `<div>
                     City: Esslingen, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4cb7d445f8af2c80de7caea6f5f137b1 = L.circleMarker(
                [48.3331132, 13.8532739],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_b4e38197a157c988a681584bcec155f6 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_ce30fdd669d601b235d9d675cc102c84 = $(`<div id="html_ce30fdd669d601b235d9d675cc102c84" style="width: 100.0%; height: 100.0%;"><b>Schloss Weidenholz, Weidenholz, Upper Austria, Austria</b><br>2 letters sent/received</div>`)[0];
                popup_b4e38197a157c988a681584bcec155f6.setContent(html_ce30fdd669d601b235d9d675cc102c84);
            
        

        circle_marker_4cb7d445f8af2c80de7caea6f5f137b1.bindPopup(popup_b4e38197a157c988a681584bcec155f6)
        ;

        
    
    
            circle_marker_4cb7d445f8af2c80de7caea6f5f137b1.bindTooltip(
                `<div>
                     City: Schloss Weidenholz, Weidenholz, Upper Austria, Austria (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b04a5cfeb3f0b65d16c988c41adf02ba = L.circleMarker(
                [48.6919419, 9.5027384],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_01fb240d077826cd40141a692c1eef18 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_fc7a05aee3af22474d6665b1a1eb5585 = $(`<div id="html_fc7a05aee3af22474d6665b1a1eb5585" style="width: 100.0%; height: 100.0%;"><b>Rosswälden, Baden-Württemberg, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_01fb240d077826cd40141a692c1eef18.setContent(html_fc7a05aee3af22474d6665b1a1eb5585);
            
        

        circle_marker_b04a5cfeb3f0b65d16c988c41adf02ba.bindPopup(popup_01fb240d077826cd40141a692c1eef18)
        ;

        
    
    
            circle_marker_b04a5cfeb3f0b65d16c988c41adf02ba.bindTooltip(
                `<div>
                     City: Rosswälden, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ab45a11bd52ceba2b228d7aad1b9fb9e = L.circleMarker(
                [48.436836, 9.9404851],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_67d69ebd83e590e9d9bc354c7a037cf7 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7abf42bcb3ea748616a5eafb369cf1fc = $(`<div id="html_7abf42bcb3ea748616a5eafb369cf1fc" style="width: 100.0%; height: 100.0%;"><b>Mähringen, Baden-Württemberg, Germany</b><br>2 letters sent/received</div>`)[0];
                popup_67d69ebd83e590e9d9bc354c7a037cf7.setContent(html_7abf42bcb3ea748616a5eafb369cf1fc);
            
        

        circle_marker_ab45a11bd52ceba2b228d7aad1b9fb9e.bindPopup(popup_67d69ebd83e590e9d9bc354c7a037cf7)
        ;

        
    
    
            circle_marker_ab45a11bd52ceba2b228d7aad1b9fb9e.bindTooltip(
                `<div>
                     City: Mähringen, Baden-Württemberg, Germany (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ed28ea8149f78bcc2e6f7724964420e8 = L.circleMarker(
                [47.9569146, 7.2994054],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_90c91e349d216ef68cfed9ac7b37a960 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_5a1b0fad5534c7138e9772b333819e06 = $(`<div id="html_5a1b0fad5534c7138e9772b333819e06" style="width: 100.0%; height: 100.0%;"><b>Rouffach, Grand Est, France</b><br>2 letters sent/received</div>`)[0];
                popup_90c91e349d216ef68cfed9ac7b37a960.setContent(html_5a1b0fad5534c7138e9772b333819e06);
            
        

        circle_marker_ed28ea8149f78bcc2e6f7724964420e8.bindPopup(popup_90c91e349d216ef68cfed9ac7b37a960)
        ;

        
    
    
            circle_marker_ed28ea8149f78bcc2e6f7724964420e8.bindTooltip(
                `<div>
                     City: Rouffach, Grand Est, France (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_20b478234d0d3fed1c0cc6defd3e73e9 = L.circleMarker(
                [49.3180932, 9.4217233],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_98b79f8e475380ec832f85b838d37465 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_9e1b42b9327049a1e57b705ee119023a = $(`<div id="html_9e1b42b9327049a1e57b705ee119023a" style="width: 100.0%; height: 100.0%;"><b>Widdern, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_98b79f8e475380ec832f85b838d37465.setContent(html_9e1b42b9327049a1e57b705ee119023a);
            
        

        circle_marker_20b478234d0d3fed1c0cc6defd3e73e9.bindPopup(popup_98b79f8e475380ec832f85b838d37465)
        ;

        
    
    
            circle_marker_20b478234d0d3fed1c0cc6defd3e73e9.bindTooltip(
                `<div>
                     City: Widdern, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fcadd73ac541c83164f8f7da3ec78c90 = L.circleMarker(
                [48.4121233, 9.7847091],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_eae0ed9a628a82fec01f664a92b117de = L.popup({
  "maxWidth": 280,
});

        
            
                let html_8b5697fe4402ee2b6fdec4ee28eca843 = $(`<div id="html_8b5697fe4402ee2b6fdec4ee28eca843" style="width: 100.0%; height: 100.0%;"><b>Blaubeuren Abbey, Blaubeuren, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_eae0ed9a628a82fec01f664a92b117de.setContent(html_8b5697fe4402ee2b6fdec4ee28eca843);
            
        

        circle_marker_fcadd73ac541c83164f8f7da3ec78c90.bindPopup(popup_eae0ed9a628a82fec01f664a92b117de)
        ;

        
    
    
            circle_marker_fcadd73ac541c83164f8f7da3ec78c90.bindTooltip(
                `<div>
                     City: Blaubeuren Abbey, Blaubeuren, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ac95d7dc125df91ada3f03be16dd0619 = L.circleMarker(
                [48.734346, 8.7352364],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_aad091e6ba2ca4d5f63fb6e4e350bde9 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_a757d2f7fd2a5bdbc79241e1b7d0cabc = $(`<div id="html_a757d2f7fd2a5bdbc79241e1b7d0cabc" style="width: 100.0%; height: 100.0%;"><b>Hirsau, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_aad091e6ba2ca4d5f63fb6e4e350bde9.setContent(html_a757d2f7fd2a5bdbc79241e1b7d0cabc);
            
        

        circle_marker_ac95d7dc125df91ada3f03be16dd0619.bindPopup(popup_aad091e6ba2ca4d5f63fb6e4e350bde9)
        ;

        
    
    
            circle_marker_ac95d7dc125df91ada3f03be16dd0619.bindTooltip(
                `<div>
                     City: Hirsau, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4cd710bffd0f87eb158a26ced2e9ae5e = L.circleMarker(
                [48.2741408, 14.5817826],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_25dce6c6d6763d00b7c629d7c69c837c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_b49eccb8b34462a5c18a1309a366994a = $(`<div id="html_b49eccb8b34462a5c18a1309a366994a" style="width: 100.0%; height: 100.0%;"><b>Schwertberg, Upper Austria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_25dce6c6d6763d00b7c629d7c69c837c.setContent(html_b49eccb8b34462a5c18a1309a366994a);
            
        

        circle_marker_4cd710bffd0f87eb158a26ced2e9ae5e.bindPopup(popup_25dce6c6d6763d00b7c629d7c69c837c)
        ;

        
    
    
            circle_marker_4cd710bffd0f87eb158a26ced2e9ae5e.bindTooltip(
                `<div>
                     City: Schwertberg, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_04f0a14e53c0ad575bf47324d8da9f33 = L.circleMarker(
                [48.7031377, 9.6541116],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_469a2185924bab060129cd5e4cd412ca = L.popup({
  "maxWidth": 280,
});

        
            
                let html_11ed69c347963494ed6a8ca6014c0121 = $(`<div id="html_11ed69c347963494ed6a8ca6014c0121" style="width: 100.0%; height: 100.0%;"><b>Göppingen, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_469a2185924bab060129cd5e4cd412ca.setContent(html_11ed69c347963494ed6a8ca6014c0121);
            
        

        circle_marker_04f0a14e53c0ad575bf47324d8da9f33.bindPopup(popup_469a2185924bab060129cd5e4cd412ca)
        ;

        
    
    
            circle_marker_04f0a14e53c0ad575bf47324d8da9f33.bindTooltip(
                `<div>
                     City: Göppingen, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1f38e7071f0f8f688d6addafd33f3f27 = L.circleMarker(
                [47.4121987, 15.2721668],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_8135e1aadc21b9e14327b271c6d53b6f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_5da201757bd7d23a94861dbe53b7d627 = $(`<div id="html_5da201757bd7d23a94861dbe53b7d627" style="width: 100.0%; height: 100.0%;"><b>Bruck an der Mur, Styria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_8135e1aadc21b9e14327b271c6d53b6f.setContent(html_5da201757bd7d23a94861dbe53b7d627);
            
        

        circle_marker_1f38e7071f0f8f688d6addafd33f3f27.bindPopup(popup_8135e1aadc21b9e14327b271c6d53b6f)
        ;

        
    
    
            circle_marker_1f38e7071f0f8f688d6addafd33f3f27.bindTooltip(
                `<div>
                     City: Bruck an der Mur, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3af87c3dc25c885f3f9c489d9c875cfd = L.circleMarker(
                [48.4283109, 9.2657297],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_be8f5fdd456f76c108063e9ba1675b4f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cb88cacd619c252e1842dd28f46f9e83 = $(`<div id="html_cb88cacd619c252e1842dd28f46f9e83" style="width: 100.0%; height: 100.0%;"><b>Burgstein, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_be8f5fdd456f76c108063e9ba1675b4f.setContent(html_cb88cacd619c252e1842dd28f46f9e83);
            
        

        circle_marker_3af87c3dc25c885f3f9c489d9c875cfd.bindPopup(popup_be8f5fdd456f76c108063e9ba1675b4f)
        ;

        
    
    
            circle_marker_3af87c3dc25c885f3f9c489d9c875cfd.bindTooltip(
                `<div>
                     City: Burgstein, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b9b0177b63f123c613ab508a6b342d73 = L.circleMarker(
                [50.9281717, 11.5879359],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_9ea9460d5b4a8bdaebfc98e918be55cd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_26c0f0ddb746cf04205567a77dbd3c3d = $(`<div id="html_26c0f0ddb746cf04205567a77dbd3c3d" style="width: 100.0%; height: 100.0%;"><b>Jena, Thuringia, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_9ea9460d5b4a8bdaebfc98e918be55cd.setContent(html_26c0f0ddb746cf04205567a77dbd3c3d);
            
        

        circle_marker_b9b0177b63f123c613ab508a6b342d73.bindPopup(popup_9ea9460d5b4a8bdaebfc98e918be55cd)
        ;

        
    
    
            circle_marker_b9b0177b63f123c613ab508a6b342d73.bindTooltip(
                `<div>
                     City: Jena, Thuringia, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d33bd2e10b49b24e9a1b3e8eb5cd439f = L.circleMarker(
                [47.2850667, 15.7110617],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_bc471287823d28b460077f29e3a30231 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_8c1d96cf0eccf548c70b3a9812a78ea5 = $(`<div id="html_8c1d96cf0eccf548c70b3a9812a78ea5" style="width: 100.0%; height: 100.0%;"><b>Baierdorf bei Anger, Styria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_bc471287823d28b460077f29e3a30231.setContent(html_8c1d96cf0eccf548c70b3a9812a78ea5);
            
        

        circle_marker_d33bd2e10b49b24e9a1b3e8eb5cd439f.bindPopup(popup_bc471287823d28b460077f29e3a30231)
        ;

        
    
    
            circle_marker_d33bd2e10b49b24e9a1b3e8eb5cd439f.bindTooltip(
                `<div>
                     City: Baierdorf bei Anger, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_61580e9473559df6559755aa444343a8 = L.circleMarker(
                [47.5242934, 14.3264883],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_d5cd380569253d00037d671e978c99ca = L.popup({
  "maxWidth": 280,
});

        
            
                let html_fd1c6609fde0e753e54bc15c77ac2817 = $(`<div id="html_fd1c6609fde0e753e54bc15c77ac2817" style="width: 100.0%; height: 100.0%;"><b>Strechau, Styria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_d5cd380569253d00037d671e978c99ca.setContent(html_fd1c6609fde0e753e54bc15c77ac2817);
            
        

        circle_marker_61580e9473559df6559755aa444343a8.bindPopup(popup_d5cd380569253d00037d671e978c99ca)
        ;

        
    
    
            circle_marker_61580e9473559df6559755aa444343a8.bindTooltip(
                `<div>
                     City: Strechau, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ee3c7ba6166a2d10e31e9f8f0be32fc9 = L.circleMarker(
                [49.7477415, 13.3775249],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_ec2e06e378cc973d747fc61f95e002e4 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d36e336031227d4556b46d5913828d16 = $(`<div id="html_d36e336031227d4556b46d5913828d16" style="width: 100.0%; height: 100.0%;"><b>Plzeň, Plzeňský, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_ec2e06e378cc973d747fc61f95e002e4.setContent(html_d36e336031227d4556b46d5913828d16);
            
        

        circle_marker_ee3c7ba6166a2d10e31e9f8f0be32fc9.bindPopup(popup_ec2e06e378cc973d747fc61f95e002e4)
        ;

        
    
    
            circle_marker_ee3c7ba6166a2d10e31e9f8f0be32fc9.bindTooltip(
                `<div>
                     City: Plzeň, Plzeňský, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e13a2ac5ca4f1f275479c6f32f1a9026 = L.circleMarker(
                [52.1314783, 11.6400789],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_e04b3c8496aad2b1d2830ffc2a8bb4eb = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7f70dedb06901658799acc0dea4bf495 = $(`<div id="html_7f70dedb06901658799acc0dea4bf495" style="width: 100.0%; height: 100.0%;"><b>Magdeburg, Saxony-Anhalt, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_e04b3c8496aad2b1d2830ffc2a8bb4eb.setContent(html_7f70dedb06901658799acc0dea4bf495);
            
        

        circle_marker_e13a2ac5ca4f1f275479c6f32f1a9026.bindPopup(popup_e04b3c8496aad2b1d2830ffc2a8bb4eb)
        ;

        
    
    
            circle_marker_e13a2ac5ca4f1f275479c6f32f1a9026.bindTooltip(
                `<div>
                     City: Magdeburg, Saxony-Anhalt, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8743ca84fde10489ef920d0a7924dc34 = L.circleMarker(
                [53.5094623, 7.3583406],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_fcf499f5d23adc1f585beee9e9cb686c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_c1c15ee8ef62df145e8d1f0c190a4135 = $(`<div id="html_c1c15ee8ef62df145e8d1f0c190a4135" style="width: 100.0%; height: 100.0%;"><b>Aurich, Lower Saxony, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_fcf499f5d23adc1f585beee9e9cb686c.setContent(html_c1c15ee8ef62df145e8d1f0c190a4135);
            
        

        circle_marker_8743ca84fde10489ef920d0a7924dc34.bindPopup(popup_fcf499f5d23adc1f585beee9e9cb686c)
        ;

        
    
    
            circle_marker_8743ca84fde10489ef920d0a7924dc34.bindTooltip(
                `<div>
                     City: Aurich, Lower Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_19cd76b3830fbf88f9e34ff2f127213c = L.circleMarker(
                [49.0681018, 17.4663899],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_908f7393b90daabacfc9a981484055ce = L.popup({
  "maxWidth": 280,
});

        
            
                let html_864714d76aa83ba63064c1f17388be53 = $(`<div id="html_864714d76aa83ba63064c1f17388be53" style="width: 100.0%; height: 100.0%;"><b>Uherské Hradiště, Zlín, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_908f7393b90daabacfc9a981484055ce.setContent(html_864714d76aa83ba63064c1f17388be53);
            
        

        circle_marker_19cd76b3830fbf88f9e34ff2f127213c.bindPopup(popup_908f7393b90daabacfc9a981484055ce)
        ;

        
    
    
            circle_marker_19cd76b3830fbf88f9e34ff2f127213c.bindTooltip(
                `<div>
                     City: Uherské Hradiště, Zlín, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8227e712653d4a93b34294783e366418 = L.circleMarker(
                [49.3068037, 15.6766872],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_a33f7f1bdf5e728f002b04dd171cfa66 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_23cba6fa679921dca2a91a208aea6b0c = $(`<div id="html_23cba6fa679921dca2a91a208aea6b0c" style="width: 100.0%; height: 100.0%;"><b>Brtnice, Vysočina, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_a33f7f1bdf5e728f002b04dd171cfa66.setContent(html_23cba6fa679921dca2a91a208aea6b0c);
            
        

        circle_marker_8227e712653d4a93b34294783e366418.bindPopup(popup_a33f7f1bdf5e728f002b04dd171cfa66)
        ;

        
    
    
            circle_marker_8227e712653d4a93b34294783e366418.bindTooltip(
                `<div>
                     City: Brtnice, Vysočina, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a555c7a01808848471034ba8bb780891 = L.circleMarker(
                [52.3730796, 4.8924534],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_3bc2bc0d8d51dedacf56915eb23b8c55 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_4675fdeaf8f4ae76b7df89328f9c6850 = $(`<div id="html_4675fdeaf8f4ae76b7df89328f9c6850" style="width: 100.0%; height: 100.0%;"><b>Amsterdam, North Holland, (United Provinces) Netherlands</b><br>1 letters sent/received</div>`)[0];
                popup_3bc2bc0d8d51dedacf56915eb23b8c55.setContent(html_4675fdeaf8f4ae76b7df89328f9c6850);
            
        

        circle_marker_a555c7a01808848471034ba8bb780891.bindPopup(popup_3bc2bc0d8d51dedacf56915eb23b8c55)
        ;

        
    
    
            circle_marker_a555c7a01808848471034ba8bb780891.bindTooltip(
                `<div>
                     City: Amsterdam, North Holland, (United Provinces) Netherlands (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_002f2a715f4434929fdb874afa65fc99 = L.circleMarker(
                [49.4093582, 8.694724],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_9a07a0f82537c420be2cc5fb2b860738 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7799b65cbc8d3a4d58b32b8000ed9e7b = $(`<div id="html_7799b65cbc8d3a4d58b32b8000ed9e7b" style="width: 100.0%; height: 100.0%;"><b>Heidelberg, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_9a07a0f82537c420be2cc5fb2b860738.setContent(html_7799b65cbc8d3a4d58b32b8000ed9e7b);
            
        

        circle_marker_002f2a715f4434929fdb874afa65fc99.bindPopup(popup_9a07a0f82537c420be2cc5fb2b860738)
        ;

        
    
    
            circle_marker_002f2a715f4434929fdb874afa65fc99.bindTooltip(
                `<div>
                     City: Heidelberg, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9e934d7532d7e7bfaf107af419079ff0 = L.circleMarker(
                [54.0886707, 12.1400211],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_ed6abdacd176f9e69cbedcdb3a51bac0 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_c69a03e98b0ce69d9e7b111765255a1b = $(`<div id="html_c69a03e98b0ce69d9e7b111765255a1b" style="width: 100.0%; height: 100.0%;"><b>Rostock, Mecklenburg-Vorpommern, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_ed6abdacd176f9e69cbedcdb3a51bac0.setContent(html_c69a03e98b0ce69d9e7b111765255a1b);
            
        

        circle_marker_9e934d7532d7e7bfaf107af419079ff0.bindPopup(popup_ed6abdacd176f9e69cbedcdb3a51bac0)
        ;

        
    
    
            circle_marker_9e934d7532d7e7bfaf107af419079ff0.bindTooltip(
                `<div>
                     City: Rostock, Mecklenburg-Vorpommern, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e8a6420a3b43f72c4d99e5c9996cbd9d = L.circleMarker(
                [46.8370716, 13.3704357],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_a66a49b3956d760b73012b9475f80e7c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_a841f22b4d96e178adbb81700c034214 = $(`<div id="html_a841f22b4d96e178adbb81700c034214" style="width: 100.0%; height: 100.0%;"><b>Möllbrücke, Carinthia, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_a66a49b3956d760b73012b9475f80e7c.setContent(html_a841f22b4d96e178adbb81700c034214);
            
        

        circle_marker_e8a6420a3b43f72c4d99e5c9996cbd9d.bindPopup(popup_a66a49b3956d760b73012b9475f80e7c)
        ;

        
    
    
            circle_marker_e8a6420a3b43f72c4d99e5c9996cbd9d.bindTooltip(
                `<div>
                     City: Möllbrücke, Carinthia, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_185be6c46e4dd5540ecf3ac53a3c7ad7 = L.circleMarker(
                [45.0677551, 7.6824892],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_0d402c28938bacddda705c6287549962 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_80e75100c39b806f2d22d3282d1fa459 = $(`<div id="html_80e75100c39b806f2d22d3282d1fa459" style="width: 100.0%; height: 100.0%;"><b>Turin, Piedmont, Italy</b><br>1 letters sent/received</div>`)[0];
                popup_0d402c28938bacddda705c6287549962.setContent(html_80e75100c39b806f2d22d3282d1fa459);
            
        

        circle_marker_185be6c46e4dd5540ecf3ac53a3c7ad7.bindPopup(popup_0d402c28938bacddda705c6287549962)
        ;

        
    
    
            circle_marker_185be6c46e4dd5540ecf3ac53a3c7ad7.bindTooltip(
                `<div>
                     City: Turin, Piedmont, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3f678bdd914c0231a4872364c2a7fbaf = L.circleMarker(
                [50.5229864, 14.9741022],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_fa2227f4586652434191d5cd2c8e135c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_285aef45c9f99a3f55af610b90c4fcff = $(`<div id="html_285aef45c9f99a3f55af610b90c4fcff" style="width: 100.0%; height: 100.0%;"><b>Mnichovo Hradiště, Central Bohemia, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_fa2227f4586652434191d5cd2c8e135c.setContent(html_285aef45c9f99a3f55af610b90c4fcff);
            
        

        circle_marker_3f678bdd914c0231a4872364c2a7fbaf.bindPopup(popup_fa2227f4586652434191d5cd2c8e135c)
        ;

        
    
    
            circle_marker_3f678bdd914c0231a4872364c2a7fbaf.bindTooltip(
                `<div>
                     City: Mnichovo Hradiště, Central Bohemia, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_49e155de33e7e6a142736c4a204847ab = L.circleMarker(
                [50.039436, 15.5606989],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_fb75c18818c4d187a6de6e9a494c8087 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_dad4e220df3736a50dba127f5904bda5 = $(`<div id="html_dad4e220df3736a50dba127f5904bda5" style="width: 100.0%; height: 100.0%;"><b>Přelouč, Pardubický, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_fb75c18818c4d187a6de6e9a494c8087.setContent(html_dad4e220df3736a50dba127f5904bda5);
            
        

        circle_marker_49e155de33e7e6a142736c4a204847ab.bindPopup(popup_fb75c18818c4d187a6de6e9a494c8087)
        ;

        
    
    
            circle_marker_49e155de33e7e6a142736c4a204847ab.bindTooltip(
                `<div>
                     City: Přelouč, Pardubický, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b953f8c87cf69e0dd81ebf41783202be = L.circleMarker(
                [46.603354, 1.8883335],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_84c04a0fd179913ed93901e9b3b7fca1 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_33845d370f22e04820f5c8afea4d0392 = $(`<div id="html_33845d370f22e04820f5c8afea4d0392" style="width: 100.0%; height: 100.0%;"><b>France</b><br>1 letters sent/received</div>`)[0];
                popup_84c04a0fd179913ed93901e9b3b7fca1.setContent(html_33845d370f22e04820f5c8afea4d0392);
            
        

        circle_marker_b953f8c87cf69e0dd81ebf41783202be.bindPopup(popup_84c04a0fd179913ed93901e9b3b7fca1)
        ;

        
    
    
            circle_marker_b953f8c87cf69e0dd81ebf41783202be.bindTooltip(
                `<div>
                     City: France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_965838e1cf57cdf9853b1a38f0cdae3a = L.circleMarker(
                [50.2136597, 14.4405574],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_297a641a7bb19276422782584230ae69 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_b49fb506eaef731f47782aafcedb8b5e = $(`<div id="html_b49fb506eaef731f47782aafcedb8b5e" style="width: 100.0%; height: 100.0%;"><b>Panenské Břežany, Central Bohemia</b><br>1 letters sent/received</div>`)[0];
                popup_297a641a7bb19276422782584230ae69.setContent(html_b49fb506eaef731f47782aafcedb8b5e);
            
        

        circle_marker_965838e1cf57cdf9853b1a38f0cdae3a.bindPopup(popup_297a641a7bb19276422782584230ae69)
        ;

        
    
    
            circle_marker_965838e1cf57cdf9853b1a38f0cdae3a.bindTooltip(
                `<div>
                     City: Panenské Břežany, Central Bohemia (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9fb33cb7a9516ecd2136fc4f03dc2a10 = L.circleMarker(
                [49.9837884, 13.9359785],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_5f979c70c7eefda0bffc962f9ba4071b = L.popup({
  "maxWidth": 280,
});

        
            
                let html_acef88ecd12f3097d6e6b87b6dedc802 = $(`<div id="html_acef88ecd12f3097d6e6b87b6dedc802" style="width: 100.0%; height: 100.0%;"><b>Nový Jáchymov, Central Bohemia, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_5f979c70c7eefda0bffc962f9ba4071b.setContent(html_acef88ecd12f3097d6e6b87b6dedc802);
            
        

        circle_marker_9fb33cb7a9516ecd2136fc4f03dc2a10.bindPopup(popup_5f979c70c7eefda0bffc962f9ba4071b)
        ;

        
    
    
            circle_marker_9fb33cb7a9516ecd2136fc4f03dc2a10.bindTooltip(
                `<div>
                     City: Nový Jáchymov, Central Bohemia, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2e94819988352d4b6f8b36dedf48dcee = L.circleMarker(
                [54.0703296, 9.9884451],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_5db1c148d11ce9277524f33bac26cde9 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_92b39ef2dd2bd87cc7751854f45be1db = $(`<div id="html_92b39ef2dd2bd87cc7751854f45be1db" style="width: 100.0%; height: 100.0%;"><b>Neumünster, Schleswig-Holstein, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_5db1c148d11ce9277524f33bac26cde9.setContent(html_92b39ef2dd2bd87cc7751854f45be1db);
            
        

        circle_marker_2e94819988352d4b6f8b36dedf48dcee.bindPopup(popup_5db1c148d11ce9277524f33bac26cde9)
        ;

        
    
    
            circle_marker_2e94819988352d4b6f8b36dedf48dcee.bindTooltip(
                `<div>
                     City: Neumünster, Schleswig-Holstein, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b883ca6e97c3871db56500d3ecfd9ad4 = L.circleMarker(
                [50.879202, 4.7011675],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_cd3cfe122743fab6e85c3c6de29b93b8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_1216fd65c14eacd84022aeae78df8fb9 = $(`<div id="html_1216fd65c14eacd84022aeae78df8fb9" style="width: 100.0%; height: 100.0%;"><b>Leuven, Flemish Brabant, Belgium</b><br>1 letters sent/received</div>`)[0];
                popup_cd3cfe122743fab6e85c3c6de29b93b8.setContent(html_1216fd65c14eacd84022aeae78df8fb9);
            
        

        circle_marker_b883ca6e97c3871db56500d3ecfd9ad4.bindPopup(popup_cd3cfe122743fab6e85c3c6de29b93b8)
        ;

        
    
    
            circle_marker_b883ca6e97c3871db56500d3ecfd9ad4.bindTooltip(
                `<div>
                     City: Leuven, Flemish Brabant, Belgium (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3b52666f749107e9c4fcee823021c225 = L.circleMarker(
                [51.6511561, 14.0342532],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_d44734930ed74b3fb62f5af641fb5b88 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cf8035890231e616f28a29244eb1b584 = $(`<div id="html_cf8035890231e616f28a29244eb1b584" style="width: 100.0%; height: 100.0%;"><b>Altdöbern, Brandenburg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_d44734930ed74b3fb62f5af641fb5b88.setContent(html_cf8035890231e616f28a29244eb1b584);
            
        

        circle_marker_3b52666f749107e9c4fcee823021c225.bindPopup(popup_d44734930ed74b3fb62f5af641fb5b88)
        ;

        
    
    
            circle_marker_3b52666f749107e9c4fcee823021c225.bindTooltip(
                `<div>
                     City: Altdöbern, Brandenburg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_21118e371b82a00132994eb451ee2f1f = L.circleMarker(
                [55.6867243, 12.5700724],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_20e47405061365eb06f2710eddbf3147 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_f27e00191ba502dd7534085b19a473cf = $(`<div id="html_f27e00191ba502dd7534085b19a473cf" style="width: 100.0%; height: 100.0%;"><b>Copenhagen, Capital Region, Denmark</b><br>1 letters sent/received</div>`)[0];
                popup_20e47405061365eb06f2710eddbf3147.setContent(html_f27e00191ba502dd7534085b19a473cf);
            
        

        circle_marker_21118e371b82a00132994eb451ee2f1f.bindPopup(popup_20e47405061365eb06f2710eddbf3147)
        ;

        
    
    
            circle_marker_21118e371b82a00132994eb451ee2f1f.bindTooltip(
                `<div>
                     City: Copenhagen, Capital Region, Denmark (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0e0894151c543aaefe6bd9d2a5b6976b = L.circleMarker(
                [50.698157, 17.3849804],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_d461662c906f4f8346fec680f32c2f00 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d6bfa6d373a9bce585b8987ccdf55993 = $(`<div id="html_d6bfa6d373a9bce585b8987ccdf55993" style="width: 100.0%; height: 100.0%;"><b>Grodków, Opole Voivodeship, Poland</b><br>1 letters sent/received</div>`)[0];
                popup_d461662c906f4f8346fec680f32c2f00.setContent(html_d6bfa6d373a9bce585b8987ccdf55993);
            
        

        circle_marker_0e0894151c543aaefe6bd9d2a5b6976b.bindPopup(popup_d461662c906f4f8346fec680f32c2f00)
        ;

        
    
    
            circle_marker_0e0894151c543aaefe6bd9d2a5b6976b.bindTooltip(
                `<div>
                     City: Grodków, Opole Voivodeship, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3a5d1bbe62a9242192df9fd044e6f7ed = L.circleMarker(
                [52.2277037, 11.0104702],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_74e469743e3f0537f167fdcad0a967c2 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7963283144eb21e806e4316bbe4a79bc = $(`<div id="html_7963283144eb21e806e4316bbe4a79bc" style="width: 100.0%; height: 100.0%;"><b>Helmstedt, Lower Saxony, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_74e469743e3f0537f167fdcad0a967c2.setContent(html_7963283144eb21e806e4316bbe4a79bc);
            
        

        circle_marker_3a5d1bbe62a9242192df9fd044e6f7ed.bindPopup(popup_74e469743e3f0537f167fdcad0a967c2)
        ;

        
    
    
            circle_marker_3a5d1bbe62a9242192df9fd044e6f7ed.bindTooltip(
                `<div>
                     City: Helmstedt, Lower Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_13c9f8c3ff4ea2d0e91f8a1d6b62689d = L.circleMarker(
                [49.8422832, 13.9665265],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_9103fe8c9e92e5b0d9fc9a7cc9fd135d = L.popup({
  "maxWidth": 280,
});

        
            
                let html_6c85dd9e24157492826f40ef592708cc = $(`<div id="html_6c85dd9e24157492826f40ef592708cc" style="width: 100.0%; height: 100.0%;"><b>Lochovice, Central Bohemia , Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_9103fe8c9e92e5b0d9fc9a7cc9fd135d.setContent(html_6c85dd9e24157492826f40ef592708cc);
            
        

        circle_marker_13c9f8c3ff4ea2d0e91f8a1d6b62689d.bindPopup(popup_9103fe8c9e92e5b0d9fc9a7cc9fd135d)
        ;

        
    
    
            circle_marker_13c9f8c3ff4ea2d0e91f8a1d6b62689d.bindTooltip(
                `<div>
                     City: Lochovice, Central Bohemia , Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_29f05e0e5e118c730f3fd5b6be650339 = L.circleMarker(
                [48.5296743, 11.5084954],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_576bb2b1262107f85c84b0561030561c = L.popup({
  "maxWidth": 280,
});

        
            
                let html_62960d5c6f6f9397ab8e77b39a487760 = $(`<div id="html_62960d5c6f6f9397ab8e77b39a487760" style="width: 100.0%; height: 100.0%;"><b>Pfaffenhofen an der Ilm, Bavaria, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_576bb2b1262107f85c84b0561030561c.setContent(html_62960d5c6f6f9397ab8e77b39a487760);
            
        

        circle_marker_29f05e0e5e118c730f3fd5b6be650339.bindPopup(popup_576bb2b1262107f85c84b0561030561c)
        ;

        
    
    
            circle_marker_29f05e0e5e118c730f3fd5b6be650339.bindTooltip(
                `<div>
                     City: Pfaffenhofen an der Ilm, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2abfb1bf05cdfc36347e7f274a8d5d2c = L.circleMarker(
                [50.3652854, 18.8722567],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_3b627b3029620b86f494a6bb14fe20b0 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_faf3545dcf12d5bd7674a33fe3c22b0f = $(`<div id="html_faf3545dcf12d5bd7674a33fe3c22b0f" style="width: 100.0%; height: 100.0%;"><b>Bytom, Silesian Voivodeship, Poland</b><br>1 letters sent/received</div>`)[0];
                popup_3b627b3029620b86f494a6bb14fe20b0.setContent(html_faf3545dcf12d5bd7674a33fe3c22b0f);
            
        

        circle_marker_2abfb1bf05cdfc36347e7f274a8d5d2c.bindPopup(popup_3b627b3029620b86f494a6bb14fe20b0)
        ;

        
    
    
            circle_marker_2abfb1bf05cdfc36347e7f274a8d5d2c.bindTooltip(
                `<div>
                     City: Bytom, Silesian Voivodeship, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4b3d315d13f518073cd09df228b28368 = L.circleMarker(
                [51.5542053, 15.8260835],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_94298065c0eef4ae03e4aa2d698d840a = L.popup({
  "maxWidth": 280,
});

        
            
                let html_a4cf2b0b2b42e3ecf81c1746634ee325 = $(`<div id="html_a4cf2b0b2b42e3ecf81c1746634ee325" style="width: 100.0%; height: 100.0%;"><b>Szprotawa, Lubusz Voivodeship, (Silesia) Poland</b><br>1 letters sent/received</div>`)[0];
                popup_94298065c0eef4ae03e4aa2d698d840a.setContent(html_a4cf2b0b2b42e3ecf81c1746634ee325);
            
        

        circle_marker_4b3d315d13f518073cd09df228b28368.bindPopup(popup_94298065c0eef4ae03e4aa2d698d840a)
        ;

        
    
    
            circle_marker_4b3d315d13f518073cd09df228b28368.bindTooltip(
                `<div>
                     City: Szprotawa, Lubusz Voivodeship, (Silesia) Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_deabe6b8f5b1b8e0c5eee16309495a6c = L.circleMarker(
                [47.4744721, 11.1681018],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_afa65c461d413dd1b59a4cf8d730fe42 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_909bcaeffbc5c7e5aaf371ebf08799e1 = $(`<div id="html_909bcaeffbc5c7e5aaf371ebf08799e1" style="width: 100.0%; height: 100.0%;"><b>Wamberg, Bavaria, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_afa65c461d413dd1b59a4cf8d730fe42.setContent(html_909bcaeffbc5c7e5aaf371ebf08799e1);
            
        

        circle_marker_deabe6b8f5b1b8e0c5eee16309495a6c.bindPopup(popup_afa65c461d413dd1b59a4cf8d730fe42)
        ;

        
    
    
            circle_marker_deabe6b8f5b1b8e0c5eee16309495a6c.bindTooltip(
                `<div>
                     City: Wamberg, Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3787d73bd44aa693069cf71961b89735 = L.circleMarker(
                [49.0040317, 14.7714476],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_aedf7479636a8c27b1487c09e0da9df8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_af5662296ebcd771418a8209213c5544 = $(`<div id="html_af5662296ebcd771418a8209213c5544" style="width: 100.0%; height: 100.0%;"><b>Třeboň, Jihočeský, Czech Republic</b><br>1 letters sent/received</div>`)[0];
                popup_aedf7479636a8c27b1487c09e0da9df8.setContent(html_af5662296ebcd771418a8209213c5544);
            
        

        circle_marker_3787d73bd44aa693069cf71961b89735.bindPopup(popup_aedf7479636a8c27b1487c09e0da9df8)
        ;

        
    
    
            circle_marker_3787d73bd44aa693069cf71961b89735.bindTooltip(
                `<div>
                     City: Třeboň, Jihočeský, Czech Republic (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5d8aa3662eb551c3c4cda86067028813 = L.circleMarker(
                [50.938361, 6.959974],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_99c179416e28ead6292c34fe908a47fd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_646b549c5a2fb7ac53fbcf384a20c831 = $(`<div id="html_646b549c5a2fb7ac53fbcf384a20c831" style="width: 100.0%; height: 100.0%;"><b>Cologne, North Rhine-Westphalia, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_99c179416e28ead6292c34fe908a47fd.setContent(html_646b549c5a2fb7ac53fbcf384a20c831);
            
        

        circle_marker_5d8aa3662eb551c3c4cda86067028813.bindPopup(popup_99c179416e28ead6292c34fe908a47fd)
        ;

        
    
    
            circle_marker_5d8aa3662eb551c3c4cda86067028813.bindTooltip(
                `<div>
                     City: Cologne, North Rhine-Westphalia, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b0bea100bcc26e3cab47e1ca3e42a910 = L.circleMarker(
                [52.7396681, 14.7014522],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_82c0a97126ecda84938f17358a012433 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_4f3b3b84dbca54195de09cfe85bc7299 = $(`<div id="html_4f3b3b84dbca54195de09cfe85bc7299" style="width: 100.0%; height: 100.0%;"><b>Dębno, West Pomerania, Poland</b><br>1 letters sent/received</div>`)[0];
                popup_82c0a97126ecda84938f17358a012433.setContent(html_4f3b3b84dbca54195de09cfe85bc7299);
            
        

        circle_marker_b0bea100bcc26e3cab47e1ca3e42a910.bindPopup(popup_82c0a97126ecda84938f17358a012433)
        ;

        
    
    
            circle_marker_b0bea100bcc26e3cab47e1ca3e42a910.bindTooltip(
                `<div>
                     City: Dębno, West Pomerania, Poland (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fdc7cab4b9b2970741cb24c12d010d3c = L.circleMarker(
                [48.8048828, 9.2146797],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_725f2e086f22ffca7fb323844fbd8278 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_22a2214cf53d0a86bedf5e543b6dc0d2 = $(`<div id="html_22a2214cf53d0a86bedf5e543b6dc0d2" style="width: 100.0%; height: 100.0%;"><b>Bad Cannstatt, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_725f2e086f22ffca7fb323844fbd8278.setContent(html_22a2214cf53d0a86bedf5e543b6dc0d2);
            
        

        circle_marker_fdc7cab4b9b2970741cb24c12d010d3c.bindPopup(popup_725f2e086f22ffca7fb323844fbd8278)
        ;

        
    
    
            circle_marker_fdc7cab4b9b2970741cb24c12d010d3c.bindTooltip(
                `<div>
                     City: Bad Cannstatt, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8c67e71543c938fc754c629a90845801 = L.circleMarker(
                [50.5862066, 8.6742306],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_21250b10241c9ee3182d4695226888e0 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_c251143a1e471a6df029f2e20cc1b5b5 = $(`<div id="html_c251143a1e471a6df029f2e20cc1b5b5" style="width: 100.0%; height: 100.0%;"><b>Giessen, Hesse, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_21250b10241c9ee3182d4695226888e0.setContent(html_c251143a1e471a6df029f2e20cc1b5b5);
            
        

        circle_marker_8c67e71543c938fc754c629a90845801.bindPopup(popup_21250b10241c9ee3182d4695226888e0)
        ;

        
    
    
            circle_marker_8c67e71543c938fc754c629a90845801.bindTooltip(
                `<div>
                     City: Giessen, Hesse, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f61e1de4d4e3bf42336cd945051d5424 = L.circleMarker(
                [48.7432195, 15.1257542],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_c681c8602ea8d243269aa43dec5aaadf = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7a773aa8a3a7548366578a871de8d990 = $(`<div id="html_7a773aa8a3a7548366578a871de8d990" style="width: 100.0%; height: 100.0%;"><b>Hirschbach, Lower Austria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_c681c8602ea8d243269aa43dec5aaadf.setContent(html_7a773aa8a3a7548366578a871de8d990);
            
        

        circle_marker_f61e1de4d4e3bf42336cd945051d5424.bindPopup(popup_c681c8602ea8d243269aa43dec5aaadf)
        ;

        
    
    
            circle_marker_f61e1de4d4e3bf42336cd945051d5424.bindTooltip(
                `<div>
                     City: Hirschbach, Lower Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9e6cf87c068e625d299cd0b7d5e33c23 = L.circleMarker(
                [47.524226, 14.3585643],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_9763bbd272ea20fb75aff9e5923d7ddd = L.popup({
  "maxWidth": 280,
});

        
            
                let html_5c5c362a23f87b5ac5ac4e9a31586b72 = $(`<div id="html_5c5c362a23f87b5ac5ac4e9a31586b72" style="width: 100.0%; height: 100.0%;"><b>Rottenmann, Styria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_9763bbd272ea20fb75aff9e5923d7ddd.setContent(html_5c5c362a23f87b5ac5ac4e9a31586b72);
            
        

        circle_marker_9e6cf87c068e625d299cd0b7d5e33c23.bindPopup(popup_9763bbd272ea20fb75aff9e5923d7ddd)
        ;

        
    
    
            circle_marker_9e6cf87c068e625d299cd0b7d5e33c23.bindTooltip(
                `<div>
                     City: Rottenmann, Styria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_525ba428833a6a2b187f512a629be6e5 = L.circleMarker(
                [48.0390046, 14.4191276],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_d7f839144d237f14165274f639b4fea8 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_d5a87a445e53352c98d0708fd8b82d79 = $(`<div id="html_d5a87a445e53352c98d0708fd8b82d79" style="width: 100.0%; height: 100.0%;"><b>Steyr, Upper Austria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_d7f839144d237f14165274f639b4fea8.setContent(html_d5a87a445e53352c98d0708fd8b82d79);
            
        

        circle_marker_525ba428833a6a2b187f512a629be6e5.bindPopup(popup_d7f839144d237f14165274f639b4fea8)
        ;

        
    
    
            circle_marker_525ba428833a6a2b187f512a629be6e5.bindTooltip(
                `<div>
                     City: Steyr, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_13a1930e8fa79cf09579ecc522a19db3 = L.circleMarker(
                [48.5300873, 15.2799777],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_6ac3ffb89a43a3431221a81ee3440510 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_dad297bfdbcd5c1189e35d8e0c82f672 = $(`<div id="html_dad297bfdbcd5c1189e35d8e0c82f672" style="width: 100.0%; height: 100.0%;"><b>Loschberg, Waldhausen, Lower Austria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_6ac3ffb89a43a3431221a81ee3440510.setContent(html_dad297bfdbcd5c1189e35d8e0c82f672);
            
        

        circle_marker_13a1930e8fa79cf09579ecc522a19db3.bindPopup(popup_6ac3ffb89a43a3431221a81ee3440510)
        ;

        
    
    
            circle_marker_13a1930e8fa79cf09579ecc522a19db3.bindTooltip(
                `<div>
                     City: Loschberg, Waldhausen, Lower Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1593b274ad33f022b7218cc88336bcda = L.circleMarker(
                [48.6960311, 8.6779546],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_97f49515a19e4d6b8bcef40a4d51d33a = L.popup({
  "maxWidth": 280,
});

        
            
                let html_3bb81aaeca5c5c478b827784aa896f28 = $(`<div id="html_3bb81aaeca5c5c478b827784aa896f28" style="width: 100.0%; height: 100.0%;"><b>Bad Teinach-Zavelstein, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_97f49515a19e4d6b8bcef40a4d51d33a.setContent(html_3bb81aaeca5c5c478b827784aa896f28);
            
        

        circle_marker_1593b274ad33f022b7218cc88336bcda.bindPopup(popup_97f49515a19e4d6b8bcef40a4d51d33a)
        ;

        
    
    
            circle_marker_1593b274ad33f022b7218cc88336bcda.bindTooltip(
                `<div>
                     City: Bad Teinach-Zavelstein, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_01ca02b8832ac4e6a90c80b5caf9ef4e = L.circleMarker(
                [48.7419909, 7.3625953],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_fb9641b1b3861ec7da7ab00ceb0376f2 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_87ca312c74118cbad4115d7fa0cfa362 = $(`<div id="html_87ca312c74118cbad4115d7fa0cfa362" style="width: 100.0%; height: 100.0%;"><b>Saverne, Grand Est, France</b><br>1 letters sent/received</div>`)[0];
                popup_fb9641b1b3861ec7da7ab00ceb0376f2.setContent(html_87ca312c74118cbad4115d7fa0cfa362);
            
        

        circle_marker_01ca02b8832ac4e6a90c80b5caf9ef4e.bindPopup(popup_fb9641b1b3861ec7da7ab00ceb0376f2)
        ;

        
    
    
            circle_marker_01ca02b8832ac4e6a90c80b5caf9ef4e.bindTooltip(
                `<div>
                     City: Saverne, Grand Est, France (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c450082f213812f395432dd3dc9cc7ea = L.circleMarker(
                [48.45927, 13.80866],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_6b0eef15bc7965f9e652172662005441 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_cf8f89da98e4fd663e192904c8556fec = $(`<div id="html_cf8f89da98e4fd663e192904c8556fec" style="width: 100.0%; height: 100.0%;"><b>Wesenufer, Upper Austria, Austria</b><br>1 letters sent/received</div>`)[0];
                popup_6b0eef15bc7965f9e652172662005441.setContent(html_cf8f89da98e4fd663e192904c8556fec);
            
        

        circle_marker_c450082f213812f395432dd3dc9cc7ea.bindPopup(popup_6b0eef15bc7965f9e652172662005441)
        ;

        
    
    
            circle_marker_c450082f213812f395432dd3dc9cc7ea.bindTooltip(
                `<div>
                     City: Wesenufer, Upper Austria, Austria (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_83fad3d10c8d51aa21e83907fd1684fb = L.circleMarker(
                [45.6348591, 11.4063543],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_53b04e08461496dd0af14071df08358f = L.popup({
  "maxWidth": 280,
});

        
            
                let html_037f408546adaf93bc84b414fd5fc07e = $(`<div id="html_037f408546adaf93bc84b414fd5fc07e" style="width: 100.0%; height: 100.0%;"><b>Vicenza, Veneto, Italy</b><br>1 letters sent/received</div>`)[0];
                popup_53b04e08461496dd0af14071df08358f.setContent(html_037f408546adaf93bc84b414fd5fc07e);
            
        

        circle_marker_83fad3d10c8d51aa21e83907fd1684fb.bindPopup(popup_53b04e08461496dd0af14071df08358f)
        ;

        
    
    
            circle_marker_83fad3d10c8d51aa21e83907fd1684fb.bindTooltip(
                `<div>
                     City: Vicenza, Veneto, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d05c51e946257f177a3f702f166bb002 = L.circleMarker(
                [48.5748229, 13.4609744],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_6679c002d27afbf727747e101c2809aa = L.popup({
  "maxWidth": 280,
});

        
            
                let html_b70cb8aa5f7d6d75b3e8ee0472e26e5d = $(`<div id="html_b70cb8aa5f7d6d75b3e8ee0472e26e5d" style="width: 100.0%; height: 100.0%;"><b>Passau, Lower Bavaria, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_6679c002d27afbf727747e101c2809aa.setContent(html_b70cb8aa5f7d6d75b3e8ee0472e26e5d);
            
        

        circle_marker_d05c51e946257f177a3f702f166bb002.bindPopup(popup_6679c002d27afbf727747e101c2809aa)
        ;

        
    
    
            circle_marker_d05c51e946257f177a3f702f166bb002.bindTooltip(
                `<div>
                     City: Passau, Lower Bavaria, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dcb996f40e40991d3caa12a4c2070c1c = L.circleMarker(
                [51.7520131, -1.2578499],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_5fc713ea781b0e9fd77f65d654b3aaae = L.popup({
  "maxWidth": 280,
});

        
            
                let html_7757d5a91922d477edb2c59d5e6afc00 = $(`<div id="html_7757d5a91922d477edb2c59d5e6afc00" style="width: 100.0%; height: 100.0%;"><b>Oxford, Oxfordshire, England</b><br>1 letters sent/received</div>`)[0];
                popup_5fc713ea781b0e9fd77f65d654b3aaae.setContent(html_7757d5a91922d477edb2c59d5e6afc00);
            
        

        circle_marker_dcb996f40e40991d3caa12a4c2070c1c.bindPopup(popup_5fc713ea781b0e9fd77f65d654b3aaae)
        ;

        
    
    
            circle_marker_dcb996f40e40991d3caa12a4c2070c1c.bindTooltip(
                `<div>
                     City: Oxford, Oxfordshire, England (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_11e025b687e32479065a731b89a4d35a = L.circleMarker(
                [48.5620891, 9.6264045],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_6c8c085a118d5e02a7600282f54d7a86 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_e984c28797f3f63073682a47cb2b16c3 = $(`<div id="html_e984c28797f3f63073682a47cb2b16c3" style="width: 100.0%; height: 100.0%;"><b>Wiesensteig, Baden-Württemberg, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_6c8c085a118d5e02a7600282f54d7a86.setContent(html_e984c28797f3f63073682a47cb2b16c3);
            
        

        circle_marker_11e025b687e32479065a731b89a4d35a.bindPopup(popup_6c8c085a118d5e02a7600282f54d7a86)
        ;

        
    
    
            circle_marker_11e025b687e32479065a731b89a4d35a.bindTooltip(
                `<div>
                     City: Wiesensteig, Baden-Württemberg, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a5cdf8d9d65257e1a4415931657a2402 = L.circleMarker(
                [43.9593626, 11.210085],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_f6f3e56b936798d4a81c337729864193 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_a7f7513b3cf0ed6a83fdaacbbcf88f0a = $(`<div id="html_a7f7513b3cf0ed6a83fdaacbbcf88f0a" style="width: 100.0%; height: 100.0%;"><b>Bellosguardo , Florence, Tuscany, Italy</b><br>1 letters sent/received</div>`)[0];
                popup_f6f3e56b936798d4a81c337729864193.setContent(html_a7f7513b3cf0ed6a83fdaacbbcf88f0a);
            
        

        circle_marker_a5cdf8d9d65257e1a4415931657a2402.bindPopup(popup_f6f3e56b936798d4a81c337729864193)
        ;

        
    
    
            circle_marker_a5cdf8d9d65257e1a4415931657a2402.bindTooltip(
                `<div>
                     City: Bellosguardo , Florence, Tuscany, Italy (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_17b0691c17ed2238b82de2ac10e87cee = L.circleMarker(
                [51.4205494, 9.9142574],
                {"bubblingMouseEvents": true, "color": "#2c3e50", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2980b9", "fillOpacity": 0.65, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 5, "stroke": true, "weight": 3}
            ).addTo(feature_group_50088b14ff65d87258b2f84e6031adfc);
        
    
        let popup_0e24894e91280d37d812f532dd0e2fa0 = L.popup({
  "maxWidth": 280,
});

        
            
                let html_bf2ffc118294e3c30f946c31699ca7d4 = $(`<div id="html_bf2ffc118294e3c30f946c31699ca7d4" style="width: 100.0%; height: 100.0%;"><b>Friedland, Lower Saxony, Germany</b><br>1 letters sent/received</div>`)[0];
                popup_0e24894e91280d37d812f532dd0e2fa0.setContent(html_bf2ffc118294e3c30f946c31699ca7d4);
            
        

        circle_marker_17b0691c17ed2238b82de2ac10e87cee.bindPopup(popup_0e24894e91280d37d812f532dd0e2fa0)
        ;

        
    
    
            circle_marker_17b0691c17ed2238b82de2ac10e87cee.bindTooltip(
                `<div>
                     City: Friedland, Lower Saxony, Germany (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            feature_group_50088b14ff65d87258b2f84e6031adfc.addTo(map_e9bef1e91c69bbc6d3090e60f47ab50e);
        
    
            let feature_group_c1ba1d99c8157cd267ee15928d1b1cd4 = L.featureGroup(
                {
}
            );
        
    
            let poly_line_f0bc2a683d4b80b92bfc7121a51f412e = L.polyline(
                [[48.1371079, 11.5753822], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 4.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f0bc2a683d4b80b92bfc7121a51f412e.bindTooltip(
                `<div>
                     People: Herwart von Hohenburg, Hans Georg, 1553-1622 -> Kepler, Johannes, 1571-1630 (66)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8d160e2951206715f8966aa104905678 = L.polyline(
                [[50.0874654, 14.4212535], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 3.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8d160e2951206715f8966aa104905678.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Bernegger, Matthias, 1582-1640 (43)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ec16adef93cfdfa5f2e8bdf7d26fa7ff = L.polyline(
                [[53.5336832, 7.2642003], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 3.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ec16adef93cfdfa5f2e8bdf7d26fa7ff.bindTooltip(
                `<div>
                     People: Fabricius, David, 1564-1617 -> Kepler, Johannes, 1571-1630 (40)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_709d91f38f0af3dc93213ab3232ab7e6 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 3.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_709d91f38f0af3dc93213ab3232ab7e6.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Mästlin, Michael, 1550-1631 (39)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_19c0bd39b2a196feb46977214f2aff56 = L.polyline(
                [[50.0874654, 14.4212535], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 3.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_19c0bd39b2a196feb46977214f2aff56.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Herwart von Hohenburg, Hans Georg, 1553-1622 (30)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fc80c2dcfed117a73341f1a4971e2ca3 = L.polyline(
                [[48.3984968, 9.9912458], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 3.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_fc80c2dcfed117a73341f1a4971e2ca3.bindTooltip(
                `<div>
                     People: Hebenstreit, Johann Baptist, 1580-1638 -> Kepler, Johannes, 1571-1630 (30)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_168d49e5bef86cc26ebc7c3508a9025c = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 3.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_168d49e5bef86cc26ebc7c3508a9025c.bindTooltip(
                `<div>
                     People: Mästlin, Michael, 1550-1631 -> Kepler, Johannes, 1571-1630 (28)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4214e3c99715afe49b4f25e947a3184b = L.polyline(
                [[54.7046485, 20.4565666], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.8}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4214e3c99715afe49b4f25e947a3184b.bindTooltip(
                `<div>
                     People: Pape, Johann, 1558-1622 -> Kepler, Johannes, 1571-1630 (21)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cb9da9b2fa3fe3e952c9fec19b6e6b24 = L.polyline(
                [[48.584614, 7.7507127], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.8}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_cb9da9b2fa3fe3e952c9fec19b6e6b24.bindTooltip(
                `<div>
                     People: Bernegger, Matthias, 1582-1640 -> Kepler, Johannes, 1571-1630 (21)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6586404dbfcbb63b11a101b06d87f4e2 = L.polyline(
                [[46.1456196, 15.0817358], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_6586404dbfcbb63b11a101b06d87f4e2.bindTooltip(
                `<div>
                     People: Zehentmair, Colmann, fl. 1593-1600 -> Kepler, Johannes, 1571-1630 (18)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_259dcc7bde67e0072cfc5d38aa9f07ff = L.polyline(
                [[51.8666527, 12.646761], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_259dcc7bde67e0072cfc5d38aa9f07ff.bindTooltip(
                `<div>
                     People: Rhodius, Ambrosius, 1577-1633 -> Kepler, Johannes, 1571-1630 (18)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d768ad857bb2d9f84d75afc46239ec89 = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d768ad857bb2d9f84d75afc46239ec89.bindTooltip(
                `<div>
                     People: Schickard, Wilhelm, 1592-1635 -> Kepler, Johannes, 1571-1630 (18)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_dbeb227dbf4bc4cb3af676f40a36e291 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_dbeb227dbf4bc4cb3af676f40a36e291.bindTooltip(
                `<div>
                     People: Ursinus, Benjamin, 1587-1633 -> Kepler, Johannes, 1571-1630 (17)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_32c04f000c69ecb6b9179f53f540f148 = L.polyline(
                [[48.7784485, 9.1800132], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_32c04f000c69ecb6b9179f53f540f148.bindTooltip(
                `<div>
                     People: Rüttel, Friedrich, 1579-1634 -> Kepler, Johannes, 1571-1630 (14)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_052df15219ab1fcba5c90e2c5f6e6f3b = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_052df15219ab1fcba5c90e2c5f6e6f3b.bindTooltip(
                `<div>
                     People: Besold, Christoph, 1577-1638 -> Kepler, Johannes, 1571-1630 (13)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_efed5fe43606b558bfe6c31f027ff3d7 = L.polyline(
                [[52.1625283, 10.5348215], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_efed5fe43606b558bfe6c31f027ff3d7.bindTooltip(
                `<div>
                     People: Vicke, Nikolaus, fl. 1605 -> Kepler, Johannes, 1571-1630 (13)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5ebdc4f3370a19a745815f0b54c7ec01 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.3}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5ebdc4f3370a19a745815f0b54c7ec01.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Schickard, Wilhelm, 1592-1635 (13)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_07c8996f2f152787528145bf79729d3c = L.polyline(
                [[50.0874654, 14.4212535], [51.0493286, 13.7381437]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_07c8996f2f152787528145bf79729d3c.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Unknown (12)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_184274af81b40ce894570f1a24c5f555 = L.polyline(
                [[50.0874654, 14.4212535], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_184274af81b40ce894570f1a24c5f555.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Württemberg, Johann Friedrich von, 1582-1628 (12)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_773c31e055567ec53b183180af072880 = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_773c31e055567ec53b183180af072880.bindTooltip(
                `<div>
                     People: Hafenreffer, Matthias, 1561-1619 -> Kepler, Johannes, 1571-1630 (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8b4453edc9b74095151c49249707f5f0 = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8b4453edc9b74095151c49249707f5f0.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Guldin, Paul, 1577-1643 (11)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_090b2c2d9db7f1820bbcf788695fe191 = L.polyline(
                [[47.0708678, 15.4382786], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_090b2c2d9db7f1820bbcf788695fe191.bindTooltip(
                `<div>
                     People: Dietrichstein, Ludwig von, 1533-1615 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_93d6dd052bedf4c0ea1bfd32111e34a1 = L.polyline(
                [[51.3406321, 12.3747329], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_93d6dd052bedf4c0ea1bfd32111e34a1.bindTooltip(
                `<div>
                     People: Tanckius, Joachim, 1557-1609 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5feed6dc7c04bbadb38f81c335f5317a = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5feed6dc7c04bbadb38f81c335f5317a.bindTooltip(
                `<div>
                     People: Mingonius, Thomas, fl. 1608 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0d3010a8313c8b7d6e0cbe0e9004bafc = L.polyline(
                [[44.4938203, 11.3426327], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0d3010a8313c8b7d6e0cbe0e9004bafc.bindTooltip(
                `<div>
                     People: Horký, Martin, fl. 1610 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_da5e72b5d70e20eb44cfe30865430ca2 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_da5e72b5d70e20eb44cfe30865430ca2.bindTooltip(
                `<div>
                     People: Quietanus, Johannes Remus, 1588-1654 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6f8bac214560bcd60b7e08fe5df89d22 = L.polyline(
                [[48.584614, 7.7507127], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_6f8bac214560bcd60b7e08fe5df89d22.bindTooltip(
                `<div>
                     People: Crusius, Florian, fl. 1609-1650 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_54f522437150f63c479d4f6a47840ed6 = L.polyline(
                [[48.1598261, 14.0758845], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.1}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_54f522437150f63c479d4f6a47840ed6.bindTooltip(
                `<div>
                     People: Schallenberg, Georg Christoph von, fl. 1638 -> Kepler, Johannes, 1571-1630 (10)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4fb32ed8c56143daec5cdc3d4d6cb920 = L.polyline(
                [[50.0874654, 14.4212535], [53.5336832, 7.2642003]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4fb32ed8c56143daec5cdc3d4d6cb920.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Fabricius, David, 1564-1617 (9)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_04af52b578a9642cce6d10070fb75c94 = L.polyline(
                [[50.0874654, 14.4212535], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 2.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_04af52b578a9642cce6d10070fb75c94.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Müller, Philip, 1585-1659 (9)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f17b8da981c20fb4b4dfa19acdf0983d = L.polyline(
                [[50.0874654, 14.4212535], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f17b8da981c20fb4b4dfa19acdf0983d.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Württemberg, Friedrich I von, 1557-1608 (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_28769834ef5e6aa7c31f7773f95c5ea6 = L.polyline(
                [[50.0874654, 14.4212535], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_28769834ef5e6aa7c31f7773f95c5ea6.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Calvisius, Sethus, 1556-1615 (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fe2fcd417e9e2271aa05bfb7f67d27b2 = L.polyline(
                [[48.3082607, 14.0203999], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_fe2fcd417e9e2271aa05bfb7f67d27b2.bindTooltip(
                `<div>
                     People: Starhemberg, Erasmus von, 1575-1648 -> Kepler, Johannes, 1571-1630 (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_21831a3d1c9947433e1ce2284f917237 = L.polyline(
                [[54.3482907, 18.6540233], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_21831a3d1c9947433e1ce2284f917237.bindTooltip(
                `<div>
                     People: Crüger, Peter, 1580-1639 -> Kepler, Johannes, 1571-1630 (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_51d153bcb640eef3129b750944286b53 = L.polyline(
                [[50.0874654, 14.4212535], [54.3482907, 18.6540233]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_51d153bcb640eef3129b750944286b53.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Crüger, Peter, 1580-1639 (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4cf88fc5c6b5f9c5c872cfae7e462467 = L.polyline(
                [[48.3059078, 14.286198], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.9}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4cf88fc5c6b5f9c5c872cfae7e462467.bindTooltip(
                `<div>
                     People: Gringallet, Janus, 1591-1622 -> Kepler, Johannes, 1571-1630 (8)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_99e6242f55b18c98452519d5520caf22 = L.polyline(
                [[50.0874654, 14.4212535], [45.3984428, 11.8956829]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.8}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_99e6242f55b18c98452519d5520caf22.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Galilei, Galileo, 1564-1642 (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_32a77d56e6f3126114f9676dc96ffde2 = L.polyline(
                [[45.4046171, 12.3105232], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.8}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_32a77d56e6f3126114f9676dc96ffde2.bindTooltip(
                `<div>
                     People: Bianchi, Vincenzo, 1583-1637 -> Kepler, Johannes, 1571-1630 (7)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_db62cb9768b39b38403d63276d77b193 = L.polyline(
                [[49.9995205, 8.2736253], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_db62cb9768b39b38403d63276d77b193.bindTooltip(
                `<div>
                     People: Ziegler, Johannes Reinhard, 1569-1636 -> Kepler, Johannes, 1571-1630 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bf13101d565d7664a749bf35c1c49902 = L.polyline(
                [[51.3406321, 12.3747329], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bf13101d565d7664a749bf35c1c49902.bindTooltip(
                `<div>
                     People: Calvisius, Sethus, 1556-1615 -> Kepler, Johannes, 1571-1630 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b6a92f6c646d3386b317eb7353282e1e = L.polyline(
                [[49.5940567, 17.251143], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b6a92f6c646d3386b317eb7353282e1e.bindTooltip(
                `<div>
                     People: Decker, Joannes, fl. 1605 -> Kepler, Johannes, 1571-1630 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_369bb2f30b8936c51ce5b849757fef8f = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_369bb2f30b8936c51ce5b849757fef8f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Quietanus, Johannes Remus, 1588-1654 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b5122c945f049511f80cdca7d521ddcc = L.polyline(
                [[51.2211097, 4.3997081], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b5122c945f049511f80cdca7d521ddcc.bindTooltip(
                `<div>
                     People: Pisani, Ottavio, b.1575 -> Kepler, Johannes, 1571-1630 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c679f9ca75809ef61b59c27afdcfc516 = L.polyline(
                [[48.5203263, 9.053596], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c679f9ca75809ef61b59c27afdcfc516.bindTooltip(
                `<div>
                     People: Schickard, Wilhelm, 1592-1635 -> Bernegger, Matthias, 1582-1640 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5246e0f55ac2344a94aa040fba7455c9 = L.polyline(
                [[48.577185, 10.4943532], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5246e0f55ac2344a94aa040fba7455c9.bindTooltip(
                `<div>
                     People: Curtz, Albert, 1600-1671 -> Kepler, Johannes, 1571-1630 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_528af2ec59f3bfb7878cd6453d9370d0 = L.polyline(
                [[50.0874654, 14.4212535], [53.793587, 12.1764906]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.7}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_528af2ec59f3bfb7878cd6453d9370d0.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634 (6)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c950d7466220d2fae05c26e951573692 = L.polyline(
                [[47.8803788, 10.622246], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c950d7466220d2fae05c26e951573692.bindTooltip(
                `<div>
                     People: Brengger, Johann Georg, 1559-1637 or after -> Kepler, Johannes, 1571-1630 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_84e55de84e09901adae80df4dff433e4 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_84e55de84e09901adae80df4dff433e4.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Rudolf II, 1552-1612 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3633090ac1d332824ee0f69b5bd661aa = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3633090ac1d332824ee0f69b5bd661aa.bindTooltip(
                `<div>
                     People: Lansius, Thomas, 1577-1657 -> Kepler, Johannes, 1571-1630 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_20a7f848c81fa0bab402ed88ff6aaa9b = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_20a7f848c81fa0bab402ed88ff6aaa9b.bindTooltip(
                `<div>
                     People: Taxis, Gerhard von, 1578-1654 -> Kepler, Johannes, 1571-1630 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0b8dc6ae8f77d2886e50b72f3664c4ad = L.polyline(
                [[50.0874654, 14.4212535], [45.4046171, 12.3105232]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0b8dc6ae8f77d2886e50b72f3664c4ad.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Bianchi, Vincenzo, 1583-1637 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1023c8c580d31e0810ff58fa66aa5c01 = L.polyline(
                [[54.3482907, 18.6540233], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1023c8c580d31e0810ff58fa66aa5c01.bindTooltip(
                `<div>
                     People: Crüger, Peter, 1580-1639 -> Müller, Philip, 1585-1659 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_775e76e1ca485be0e92ac30365f3f155 = L.polyline(
                [[50.41768, 8.63873], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.6}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_775e76e1ca485be0e92ac30365f3f155.bindTooltip(
                `<div>
                     People: Hessen-Butzbach, Philipp III von, 1581-1643 -> Kepler, Johannes, 1571-1630 (5)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5e0f2dd4a1ae990273fc8e997f88f48a = L.polyline(
                [[50.0874654, 14.4212535], [50.291767, 14.8260014]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5e0f2dd4a1ae990273fc8e997f88f48a.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Brahe, Tycho, 1546-1601 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_63d12a7d2b34e90e68f9c23976eff121 = L.polyline(
                [[50.291767, 14.8260014], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_63d12a7d2b34e90e68f9c23976eff121.bindTooltip(
                `<div>
                     People: Brahe, Tycho, 1546-1601 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_24d56c60d11b284e7b113d99703fafd2 = L.polyline(
                [[51.8666527, 12.646761], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_24d56c60d11b284e7b113d99703fafd2.bindTooltip(
                `<div>
                     People: Jöstel, Melchior, 1559-1611 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1c495a0dcb68879919b7d976a7bf5a3d = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1c495a0dcb68879919b7d976a7bf5a3d.bindTooltip(
                `<div>
                     People: Eriksen, Johannes, fl. 1599-1601 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7b8e3fb800714b47b23ed7c125b10ec5 = L.polyline(
                [[50.0874654, 14.4212535], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7b8e3fb800714b47b23ed7c125b10ec5.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Magini, Giovanni Antonio, 1555-1617 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_64f8a0bf14a59f5d85f2564de42c25f8 = L.polyline(
                [[50.0874654, 14.4212535], [47.8803788, 10.622246]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_64f8a0bf14a59f5d85f2564de42c25f8.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Brengger, Johann Georg, 1559-1637 or after (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_81b4288edc499f00fb2e665d1e9cb401 = L.polyline(
                [[49.9995205, 8.2736253], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_81b4288edc499f00fb2e665d1e9cb401.bindTooltip(
                `<div>
                     People: Serarius, Nicolaus, 1555-1609 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_48a346bfddd8da3f0fe93da3cafd47db = L.polyline(
                [[48.5621964, 12.0859345], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_48a346bfddd8da3f0fe93da3cafd47db.bindTooltip(
                `<div>
                     People: Odontius, Johann Caspar, 1580-1626 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0f99b9a8f705d79af7664fb3c7dd701a = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0f99b9a8f705d79af7664fb3c7dd701a.bindTooltip(
                `<div>
                     People: Hafenreffer, Samuel, 1587-1660 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c43a5a8f86a79e0657c2e8a7e1603b9c = L.polyline(
                [[44.4938203, 11.3426327], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c43a5a8f86a79e0657c2e8a7e1603b9c.bindTooltip(
                `<div>
                     People: Magini, Giovanni Antonio, 1555-1617 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_844651f4efc3908efb0b071ae67a99fd = L.polyline(
                [[50.0874654, 14.4212535], [52.1625283, 10.5348215]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_844651f4efc3908efb0b071ae67a99fd.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Vicke, Nikolaus, fl. 1605 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8bfbe0935c84dc5671d956983903b3fe = L.polyline(
                [[50.0874654, 14.4212535], [45.3984428, 11.8956829]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8bfbe0935c84dc5671d956983903b3fe.bindTooltip(
                `<div>
                     People: Hasdale, Martin, fl. 1610 -> Galilei, Galileo, 1564-1642 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e737cff5c88e1984dc0a56c38ad0d96b = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.5}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e737cff5c88e1984dc0a56c38ad0d96b.bindTooltip(
                `<div>
                     People: Strauss, Johannes, fl. 1620 -> Kepler, Johannes, 1571-1630 (4)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0e16c4ee479257967949b45f6bf80b2 = L.polyline(
                [[50.0874654, 14.4212535], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d0e16c4ee479257967949b45f6bf80b2.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Styria, the Government of, fl. 1597 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b833a0aab5b835e3c52ff1e2da9fce45 = L.polyline(
                [[48.8387397, 7.8318155], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b833a0aab5b835e3c52ff1e2da9fce45.bindTooltip(
                `<div>
                     People: Röslin, Helisaeus, 1545-1616 -> Herwart von Hohenburg, Hans Georg, 1553-1622 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e6f4f6e2c2f0c2063e27a269a46eee08 = L.polyline(
                [[45.3984428, 11.8956829], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e6f4f6e2c2f0c2063e27a269a46eee08.bindTooltip(
                `<div>
                     People: Galilei, Galileo, 1564-1642 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5eecccbccda1619baa079f309b95617d = L.polyline(
                [[48.5621964, 12.0859345], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5eecccbccda1619baa079f309b95617d.bindTooltip(
                `<div>
                     People: Praetorius, Johannes, 1537-1616 -> Herwart von Hohenburg, Hans Georg, 1553-1622 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_04cc504e9e1ea703a808609da5280cbf = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_04cc504e9e1ea703a808609da5280cbf.bindTooltip(
                `<div>
                     People: Hoffmann, Johannes Fridericus, fl. 1600 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_eb8145437af5d5e19985b202224eabfb = L.polyline(
                [[50.291767, 14.8260014], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_eb8145437af5d5e19985b202224eabfb.bindTooltip(
                `<div>
                     People: Brahe, Tycho, 1546-1601 -> Hoffmann, Johannes Fridericus, fl. 1600 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a36f887ce4be206a596943c2a76af62a = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_a36f887ce4be206a596943c2a76af62a.bindTooltip(
                `<div>
                     People: Longomontanus, Christian Sørensen, 1562-1647 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3929ce369be667209eae4f51d9410f5a = L.polyline(
                [[52.503379, 13.3386522], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3929ce369be667209eae4f51d9410f5a.bindTooltip(
                `<div>
                     People: Müller, Johannes, fl. 1596-1602 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3f5f3e2d642cfa7a3997997c96ff2c23 = L.polyline(
                [[52.3412273, 14.549452], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3f5f3e2d642cfa7a3997997c96ff2c23.bindTooltip(
                `<div>
                     People: Origanus, David, 1558-1629 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_71f2335623fb0cc22d8e827fc61c6ca1 = L.polyline(
                [[43.7697955, 11.2556404], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_71f2335623fb0cc22d8e827fc61c6ca1.bindTooltip(
                `<div>
                     People: Bruce, Edmund, fl. 1597-1605 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4cdd2f0609471dfef59a6aed6b2f59bc = L.polyline(
                [[48.7180364, 10.7807299], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4cdd2f0609471dfef59a6aed6b2f59bc.bindTooltip(
                `<div>
                     People: Gerhard, Johann Konrad, b.1567 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a46f5838f1001c3bcaf79cff166300f0 = L.polyline(
                [[49.3068037, 15.6766872], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_a46f5838f1001c3bcaf79cff166300f0.bindTooltip(
                `<div>
                     People: Virdung, Paul, fl. 1603-1605 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_30260794a7f595259032be7a704e84bc = L.polyline(
                [[53.0758196, 8.8071646], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_30260794a7f595259032be7a704e84bc.bindTooltip(
                `<div>
                     People: Riddershusius, Ludolph, fl. 1594-1603 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_36fc656e8d549f11998859915d81af1c = L.polyline(
                [[50.0874654, 14.4212535], [52.1594747, 4.4908843]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_36fc656e8d549f11998859915d81af1c.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Scaliger, Joseph Justus, 1540-1609 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5edbc6e9383d82ba8974a31729b95acf = L.polyline(
                [[50.0874654, 14.4212535], [49.9995205, 8.2736253]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5edbc6e9383d82ba8974a31729b95acf.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Ziegler, Johannes Reinhard, 1569-1636 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_75d19f9d2d27a22b69b23be208ab1284 = L.polyline(
                [[50.0874654, 14.4212535], [51.5074456, -0.1277653]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_75d19f9d2d27a22b69b23be208ab1284.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Harriot, Thomas, 1560-1621 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_646b0ba3e6dca7b68a70e5ba4cbf288f = L.polyline(
                [[51.1563185, 14.991018], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_646b0ba3e6dca7b68a70e5ba4cbf288f.bindTooltip(
                `<div>
                     People: Eichler, Gregor, 1562-1611 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4b2b984ae0a2ab407e2c61ddde5d2cfe = L.polyline(
                [[50.0874654, 14.4212535], [49.5940567, 17.251143]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4b2b984ae0a2ab407e2c61ddde5d2cfe.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Decker, Joannes, fl. 1605 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cc2ac2d69036c903fb804416bc232262 = L.polyline(
                [[51.1563185, 14.991018], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_cc2ac2d69036c903fb804416bc232262.bindTooltip(
                `<div>
                     People: Dornau, Caspar, 1577-1631 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_02182041aa646df5043d0a45e71bb04b = L.polyline(
                [[50.1106444, 8.6820917], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_02182041aa646df5043d0a45e71bb04b.bindTooltip(
                `<div>
                     People: Beyer, Johann Hartmann, 1563-1625 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_56c45252e99c68bd5e6332a40c137f9c = L.polyline(
                [[50.0874654, 14.4212535], [45.3984428, 11.8956829]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_56c45252e99c68bd5e6332a40c137f9c.bindTooltip(
                `<div>
                     People: Medici, Giuliano de', fl. 1610-1611 -> Galilei, Galileo, 1564-1642 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_94a4ee6cfdc84c377554b08c3db50c39 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_94a4ee6cfdc84c377554b08c3db50c39.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Hafenreffer, Matthias, 1561-1619 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ed4810b5d5f968692dd65f3fc1ed80af = L.polyline(
                [[48.3690341, 10.8979522], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ed4810b5d5f968692dd65f3fc1ed80af.bindTooltip(
                `<div>
                     People: Welser, Markus, 1558-1614 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bdf596fa7447342f914879329af613ed = L.polyline(
                [[49.259407, 14.7193304], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bdf596fa7447342f914879329af613ed.bindTooltip(
                `<div>
                     People: Gehler, Michael, fl. 1600-1620 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1c23b807eddd6fba4dda339a21d835f3 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1c23b807eddd6fba4dda339a21d835f3.bindTooltip(
                `<div>
                     People: Enenkel, Job Hartmann von, 1576-1627 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_49288da71b22b26959937be7ef9b9dbc = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_49288da71b22b26959937be7ef9b9dbc.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Tengnagel, Sebastian, 1573-1636 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f1de44edc4aa66b91ea3eafb084cf732 = L.polyline(
                [[48.7427584, 9.3071685], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f1de44edc4aa66b91ea3eafb084cf732.bindTooltip(
                `<div>
                     People: Hebenstreit, Georg, fl. 1620 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_70caeb698e40a21f1937f910fe479ef8 = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_70caeb698e40a21f1937f910fe479ef8.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Taxis, Gerhard von, 1578-1654 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_afea0a2440323066faf4031010cd111c = L.polyline(
                [[53.793587, 12.1764906], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.4}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_afea0a2440323066faf4031010cd111c.bindTooltip(
                `<div>
                     People: Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634 -> Kepler, Johannes, 1571-1630 (3)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_73128cfd4371e1c7a93eb0ac71491c13 = L.polyline(
                [[48.7501041, 8.8707147], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_73128cfd4371e1c7a93eb0ac71491c13.bindTooltip(
                `<div>
                     People: Burgermeister and Council, Weil der Stadt, fl. 1590-1591 -> Tübingen University, formed 1477 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_79d1cbecf05480de8734d3a73c932148 = L.polyline(
                [[50.0874654, 14.4212535], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_79d1cbecf05480de8734d3a73c932148.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> School Inspectors, Graz (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1f8366beb691003b224a84d2883f3342 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1f8366beb691003b224a84d2883f3342.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Gerlach, Stephan, 1546-1612 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d4d096a88441ebd3c8347d2e26c4645d = L.polyline(
                [[48.5203263, 9.053596], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d4d096a88441ebd3c8347d2e26c4645d.bindTooltip(
                `<div>
                     People: Mästlin, Michael, 1550-1631 -> Württemberg, Friedrich I von, 1557-1608 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_044c7f56275ade6c6aa761be05bb336f = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_044c7f56275ade6c6aa761be05bb336f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Tübingen University, formed 1477 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3c64b8978a6b4efcafd39b26cbf3f934 = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3c64b8978a6b4efcafd39b26cbf3f934.bindTooltip(
                `<div>
                     People: Crusius, Martin, 1526-1607 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_77217e991f5757ff5ec73903b4a32ed3 = L.polyline(
                [[48.5203263, 9.053596], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_77217e991f5757ff5ec73903b4a32ed3.bindTooltip(
                `<div>
                     People: Leibfrid, Christoph, 1566-1635 -> Mästlin, Michael, 1550-1631 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b224765590cbd3ead929e9d5863f6b51 = L.polyline(
                [[48.7784485, 9.1800132], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b224765590cbd3ead929e9d5863f6b51.bindTooltip(
                `<div>
                     People: Württemberg, Friedrich I von, 1557-1608 -> Mästlin, Michael, 1550-1631 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b1d60c53070df95114cf34972529d36d = L.polyline(
                [[50.0874654, 14.4212535], [43.7697955, 11.2556404]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b1d60c53070df95114cf34972529d36d.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Bruce, Edmund, fl. 1597-1605 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_48b3f40136f8fc6627102a51b0977426 = L.polyline(
                [[50.8090106, 8.7704695], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_48b3f40136f8fc6627102a51b0977426.bindTooltip(
                `<div>
                     People: Homelius, Johannes, d.1600 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_584d2f045839330cc82ad1393e6d36b8 = L.polyline(
                [[48.1371079, 11.5753822], [50.291767, 14.8260014]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_584d2f045839330cc82ad1393e6d36b8.bindTooltip(
                `<div>
                     People: Herwart von Hohenburg, Hans Georg, 1553-1622 -> Brahe, Tycho, 1546-1601 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c03efdfcd05a68181d2657a4bc458f32 = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c03efdfcd05a68181d2657a4bc458f32.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Blotius, Hugo, 1553-1608 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c13dd27b8d04c9a5b50dc2268f9f189d = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c13dd27b8d04c9a5b50dc2268f9f189d.bindTooltip(
                `<div>
                     People: Kepler, Barbara, 1572-1611 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0ccce5169f97bcda57540e8beb072bec = L.polyline(
                [[49.0681018, 17.4663899], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0ccce5169f97bcda57540e8beb072bec.bindTooltip(
                `<div>
                     People: Budovec z Budova, Václav, 1547-1621 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_24dd0767a7a45a2cddc4f231a35bef6e = L.polyline(
                [[50.0874654, 14.4212535], [47.2654296, 11.3927685]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_24dd0767a7a45a2cddc4f231a35bef6e.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Maximilian Ernest of Austria, 1583-1616 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c85c22d4d7ad57120cf1a4009d4dcbf7 = L.polyline(
                [[48.745628, 11.1879622], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c85c22d4d7ad57120cf1a4009d4dcbf7.bindTooltip(
                `<div>
                     People: Pfalz-Neuberg, Wolfgang Wilhelm von, 1578-1653 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_28f0e3a1253eb1dbfd3354e6997da05e = L.polyline(
                [[50.0874654, 14.4212535], [48.745628, 11.1879622]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_28f0e3a1253eb1dbfd3354e6997da05e.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Pfalz-Neuberg, Wolfgang Wilhelm von, 1578-1653 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_046edbc9a4388cd5583f5a92dd8b100f = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_046edbc9a4388cd5583f5a92dd8b100f.bindTooltip(
                `<div>
                     People: Tübingen University, formed 1477 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8c50708c29d70abbe23acc840d13d5b8 = L.polyline(
                [[50.0874654, 14.4212535], [48.5621964, 12.0859345]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8c50708c29d70abbe23acc840d13d5b8.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Odontius, Johann Caspar, 1580-1626 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4e70ffb5bf4fdd2325dcb104de33622c = L.polyline(
                [[50.2136597, 14.4405574], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4e70ffb5bf4fdd2325dcb104de33622c.bindTooltip(
                `<div>
                     People: Jessen, Johannes, 1566-1621 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3aee0abb29a0bc86cf824406cada08b9 = L.polyline(
                [[51.5074456, -0.1277653], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3aee0abb29a0bc86cf824406cada08b9.bindTooltip(
                `<div>
                     People: Harriot, Thomas, 1560-1621 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a1dd94690d8e605b0f2e96950743cecd = L.polyline(
                [[47.9960901, 7.8494005], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_a1dd94690d8e605b0f2e96950743cecd.bindTooltip(
                `<div>
                     People: Pistorius, Johann, 1546-1608 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_044e0a61b20de10430070333f4ced8cc = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_044e0a61b20de10430070333f4ced8cc.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Besold, Christoph, 1577-1638 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_439d7961f25e87a5987109c4e74ae5c4 = L.polyline(
                [[50.9772092, 11.9863951], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_439d7961f25e87a5987109c4e74ae5c4.bindTooltip(
                `<div>
                     People: Anhalt-Plötzkau, August von, 1575-1653 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_11eb81d49122d42e1eb35177c478cba2 = L.polyline(
                [[50.0874654, 14.4212535], [51.0493286, 13.7381437]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_11eb81d49122d42e1eb35177c478cba2.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Seussius, Johannes, fl. 1608 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_949b971269b349f2547dfa76ece10fa1 = L.polyline(
                [[52.1625283, 10.5348215], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_949b971269b349f2547dfa76ece10fa1.bindTooltip(
                `<div>
                     People: Krabbe, Johannes, 1553-1616 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5b1682ae17856943b0a2f99cff7d9205 = L.polyline(
                [[45.4046171, 12.3105232], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5b1682ae17856943b0a2f99cff7d9205.bindTooltip(
                `<div>
                     People: Fugger, Georg, fl. 1610 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bbb0c3f6ef356308d7023684002f036f = L.polyline(
                [[50.0874654, 14.4212535], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bbb0c3f6ef356308d7023684002f036f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Horký, Martin, fl. 1610 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3410eb1dba5c11ba3209d76a4f1dcb99 = L.polyline(
                [[49.0195333, 12.0974869], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3410eb1dba5c11ba3209d76a4f1dcb99.bindTooltip(
                `<div>
                     People: Donauer, Christoph, 1564-1611 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e553d428843f8c2c026a31b49a8179f9 = L.polyline(
                [[48.3059078, 14.286198], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e553d428843f8c2c026a31b49a8179f9.bindTooltip(
                `<div>
                     People: Jörger von Tollet, Helmhard, 1572-1631 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6cdf6b5439271f42c46bc89582a17fea = L.polyline(
                [[50.0874654, 14.4212535], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_6cdf6b5439271f42c46bc89582a17fea.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Upper Austria, Government of (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8d648c671666ebab73c924338710f7fd = L.polyline(
                [[50.8467372, 4.352493], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8d648c671666ebab73c924338710f7fd.bindTooltip(
                `<div>
                     People: Maelcote, Oddo van, 1572-1615 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_65ba6707c9a2dde725f8a98ba0f1e10d = L.polyline(
                [[48.3059078, 14.286198], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_65ba6707c9a2dde725f8a98ba0f1e10d.bindTooltip(
                `<div>
                     People: Upper Austria, Estates of -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_390345841f59be40aed7731a6559175b = L.polyline(
                [[50.0874654, 14.4212535], [51.2211097, 4.3997081]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_390345841f59be40aed7731a6559175b.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Pisani, Ottavio, b.1575 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2be0af4da607834e3675ee544fddbdc4 = L.polyline(
                [[48.1565472, 14.0243752], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_2be0af4da607834e3675ee544fddbdc4.bindTooltip(
                `<div>
                     People: Strahlendorf, Peter Heinrich von, 1580-1637 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1393b329fa6c0accf839acab5e50babe = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1393b329fa6c0accf839acab5e50babe.bindTooltip(
                `<div>
                     People: Valesius, Jakob, fl. 1614 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_69f21db8005ff2a8c49ac820f049ba08 = L.polyline(
                [[47.2654296, 11.3927685], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_69f21db8005ff2a8c49ac820f049ba08.bindTooltip(
                `<div>
                     People: Stöltzle, Melchior, fl. 1615 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_666a173816e598f682be00b7d4e178b0 = L.polyline(
                [[50.5862066, 8.6742306], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_666a173816e598f682be00b7d4e178b0.bindTooltip(
                `<div>
                     People: Horst, Gregor, 1578-1636 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0c69995733f7ffce4aae4eb7273c04b = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d0c69995733f7ffce4aae4eb7273c04b.bindTooltip(
                `<div>
                     People: Medici, Giuliano de', fl. 1610-1611 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b76ab081b26f81d86827db62867c58c9 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b76ab081b26f81d86827db62867c58c9.bindTooltip(
                `<div>
                     People: Schleiffer, Ludwig, fl. 1619 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_43d7251f956d46e1be5985bd878bf0ca = L.polyline(
                [[45.4641943, 9.1896346], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_43d7251f956d46e1be5985bd878bf0ca.bindTooltip(
                `<div>
                     People: Barbavara, Ludovico, b.1575 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a78a2b2d16060ecbffd430e317079ee1 = L.polyline(
                [[48.1371079, 11.5753822], [48.7630165, 11.4250395]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_a78a2b2d16060ecbffd430e317079ee1.bindTooltip(
                `<div>
                     People: Lantz, Johann, 1564-1638 -> Cysat, Johann Baptist, 1587-1657 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d16c63722052cbe52c9fa3af3beec6ec = L.polyline(
                [[48.1857192, 16.4221587], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d16c63722052cbe52c9fa3af3beec6ec.bindTooltip(
                `<div>
                     People: Taxis, Gerhard von, 1578-1654 -> Hochkircher, Christoph von, fl. 1624 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7a4bb89b6597bc061833eeb66eda397a = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7a4bb89b6597bc061833eeb66eda397a.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Brahe, Georg, b.1583 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_aa0f2a2f1b0752443ee051650f6369c0 = L.polyline(
                [[51.1147105, 15.2811574], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_aa0f2a2f1b0752443ee051650f6369c0.bindTooltip(
                `<div>
                     People: Bartsch, Jakob, 1600-1633 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2b97b0196e7307b91d5bbe504f95941f = L.polyline(
                [[50.0874654, 14.4212535], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_2b97b0196e7307b91d5bbe504f95941f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Upper Austria, Estates of (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0e0b2082ce91b8d09d68d069961583a7 = L.polyline(
                [[50.41768, 8.63873], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0e0b2082ce91b8d09d68d069961583a7.bindTooltip(
                `<div>
                     People: Mögling, Daniel, 1596-1635 -> Schickard, Wilhelm, 1592-1635 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0954d7f547bf133b035e50f3056d698 = L.polyline(
                [[48.436836, 9.9404851], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d0954d7f547bf133b035e50f3056d698.bindTooltip(
                `<div>
                     People: Bachmayer, Wolfgang, 1597-1685 -> Kepler, Johannes, 1571-1630 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f6508218062ec3b5bab16cde0cdd065c = L.polyline(
                [[48.584614, 7.7507127], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f6508218062ec3b5bab16cde0cdd065c.bindTooltip(
                `<div>
                     People: Bernegger, Matthias, 1582-1640 -> Schickard, Wilhelm, 1592-1635 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1054a1eb4546acfa8b21f8506487dd92 = L.polyline(
                [[51.1147105, 15.2811574], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.2}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1054a1eb4546acfa8b21f8506487dd92.bindTooltip(
                `<div>
                     People: Bartsch, Jakob, 1600-1633 -> Müller, Philip, 1585-1659 (2)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_15bbf68c3b0d8235a6c58639f9b4c4e9 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_15bbf68c3b0d8235a6c58639f9b4c4e9.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Hochmann, Johann, 1528-1603 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_efd9a427f74b8e550b2a8df39c7fea01 = L.polyline(
                [[48.5203263, 9.053596], [48.7501041, 8.8707147]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_efd9a427f74b8e550b2a8df39c7fea01.bindTooltip(
                `<div>
                     People: Tübingen University, formed 1477 -> Burgermeister and Council, Weil der Stadt, fl. 1590-1591 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0ea203d7ccd1c50ae65089585a036d84 = L.polyline(
                [[49.3180932, 9.4217233], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0ea203d7ccd1c50ae65089585a036d84.bindTooltip(
                `<div>
                     People: Schärer, Melchior, 1563-1624 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_037c2d8d4afe22bac253181dbbde67a5 = L.polyline(
                [[48.4121233, 9.7847091], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_037c2d8d4afe22bac253181dbbde67a5.bindTooltip(
                `<div>
                     People: Köllin, Matthias, 1570-1612 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8a350d9eaefa77a037f71c492db95d0f = L.polyline(
                [[50.0874654, 14.4212535], [48.7501041, 8.8707147]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8a350d9eaefa77a037f71c492db95d0f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Kepler, Sebald, fl. 1530-1593 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b3b63146c4728e0c6a23b461707bcfbe = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b3b63146c4728e0c6a23b461707bcfbe.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Faculty of Theological , University of Tübingen, fl. 1594 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e7ddc332274f4bf533f71c58b21f901a = L.polyline(
                [[50.0874654, 14.4212535], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e7ddc332274f4bf533f71c58b21f901a.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Court Council of War, Styria, fl. 1594 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_304c61fd63019f1ce983011de45cb642 = L.polyline(
                [[48.734346, 8.7352364], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_304c61fd63019f1ce983011de45cb642.bindTooltip(
                `<div>
                     People: Ortholph, Christoph, b.1573 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f7715242363851286750cd0b0c9afb5c = L.polyline(
                [[48.2741408, 14.5817826], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f7715242363851286750cd0b0c9afb5c.bindTooltip(
                `<div>
                     People: Tschernembl, Georg Erasmus von, 1567-1626 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9c388955c92f45f117a62424521c5ca2 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_9c388955c92f45f117a62424521c5ca2.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Reimers, Nicolaus, 1551-1660 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_18cb9fab9b3d43a34546820f963c848f = L.polyline(
                [[50.0874654, 14.4212535], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_18cb9fab9b3d43a34546820f963c848f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Styria, Councillors of, fl. 1595 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_51cc66ece11b75400fee8812a8dfc82b = L.polyline(
                [[48.7031377, 9.6541116], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_51cc66ece11b75400fee8812a8dfc82b.bindTooltip(
                `<div>
                     People: Osiander, Lucas II, 1571-1638 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_46c985d49bc8567cd17588f0660f0c53 = L.polyline(
                [[48.5203263, 9.053596], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_46c985d49bc8567cd17588f0660f0c53.bindTooltip(
                `<div>
                     People: Mästlin, Michael, 1550-1631 -> Hafenreffer, Matthias, 1561-1619 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f6fd6b80a21e847baa45a273f1eeee42 = L.polyline(
                [[50.0874654, 14.4212535], [47.0708678, 15.4382786]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f6fd6b80a21e847baa45a273f1eeee42.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Church Minister, Graz, fl. 1597 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_dcb77f2ef08d95b99830c80f4896a55d = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_dcb77f2ef08d95b99830c80f4896a55d.bindTooltip(
                `<div>
                     People: Reimers, Nicolaus, 1551-1660 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ffb9d2b801f2363cff1d7f78610f1975 = L.polyline(
                [[48.1371079, 11.5753822], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ffb9d2b801f2363cff1d7f78610f1975.bindTooltip(
                `<div>
                     People: Fickler, Johann Baptist, 1533-1610 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3a699ad9ed6279db621d56c03e160f92 = L.polyline(
                [[50.0874654, 14.4212535], [47.4121987, 15.2721668]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3a699ad9ed6279db621d56c03e160f92.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Vochtmann, Matthias, fl. 1597 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bdc94fcb0a84759c6df6d83c1e86d3aa = L.polyline(
                [[48.4283109, 9.2657297], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bdc94fcb0a84759c6df6d83c1e86d3aa.bindTooltip(
                `<div>
                     People: Pleuring, Johannes, fl. 1597 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b7d431782fc3e7b9bd7c4c6a3c08ae59 = L.polyline(
                [[48.7784485, 9.1800132], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b7d431782fc3e7b9bd7c4c6a3c08ae59.bindTooltip(
                `<div>
                     People: Württemberg, Friedrich I von, 1557-1608 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_83f839d2c1f3ac2c2770079226f8a62b = L.polyline(
                [[50.291767, 14.8260014], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_83f839d2c1f3ac2c2770079226f8a62b.bindTooltip(
                `<div>
                     People: Brahe, Tycho, 1546-1601 -> Mästlin, Michael, 1550-1631 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7ddf173747356a3f95e7aed2e6a48a2b = L.polyline(
                [[50.9281717, 11.5879359], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7ddf173747356a3f95e7aed2e6a48a2b.bindTooltip(
                `<div>
                     People: Limnäus, Georg, 1554-1611 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ec3788afe6edc3c1e5f3c2a6fb930f62 = L.polyline(
                [[50.291767, 14.8260014], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ec3788afe6edc3c1e5f3c2a6fb930f62.bindTooltip(
                `<div>
                     People: Brahe, Tycho, 1546-1601 -> Blotius, Hugo, 1553-1608 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1c60c8e1c537e71983d65422ec91d341 = L.polyline(
                [[50.253211, 14.8409386], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1c60c8e1c537e71983d65422ec91d341.bindTooltip(
                `<div>
                     People: Meherentius, Rudolph, fl. 1599 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_754d11271770df670b63fe86088dc5bb = L.polyline(
                [[48.584614, 7.7507127], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_754d11271770df670b63fe86088dc5bb.bindTooltip(
                `<div>
                     People: Dasypodius, Conrad, 1532-1601 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_03f07bdabe9326684e0f4a5be10be981 = L.polyline(
                [[50.0874654, 14.4212535], [50.291767, 14.8260014]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_03f07bdabe9326684e0f4a5be10be981.bindTooltip(
                `<div>
                     People: Hoffmann, Johannes Fridericus, fl. 1600 -> Brahe, Tycho, 1546-1601 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fd909fc956ffae58be346e84fb888831 = L.polyline(
                [[49.7477415, 13.3775249], [50.291767, 14.8260014]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_fd909fc956ffae58be346e84fb888831.bindTooltip(
                `<div>
                     People: Tengnagel, Frans Gansneb, 1576-1622 -> Brahe, Tycho, 1546-1601 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f4a63534c32f6e2aaf2f9c4b64083980 = L.polyline(
                [[50.291767, 14.8260014], [50.2136597, 14.4405574]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f4a63534c32f6e2aaf2f9c4b64083980.bindTooltip(
                `<div>
                     People: Brahe, Tycho, 1546-1601 -> Jessen, Johannes, 1566-1621 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_61c5a9495587d7fca22faaef5ec7b465 = L.polyline(
                [[50.291767, 14.8260014], [48.1371079, 11.5753822]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_61c5a9495587d7fca22faaef5ec7b465.bindTooltip(
                `<div>
                     People: Brahe, Tycho, 1546-1601 -> Herwart von Hohenburg, Hans Georg, 1553-1622 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_818bc475be2f52eb538f351c4f216b2b = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_818bc475be2f52eb538f351c4f216b2b.bindTooltip(
                `<div>
                     People: Leyser, Polycarp, 1586-1633 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c63a2042b7eed74546b6efe18c97ec0e = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c63a2042b7eed74546b6efe18c97ec0e.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Kepler, Barbara, 1572-1611 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1f4d49f24fa0406e673744c6f5fdaf29 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1f4d49f24fa0406e673744c6f5fdaf29.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Maximilian II, Holy Roman Emperor, 1527-1576 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_12c8e7b76d2e63f98030afbe4adffa5b = L.polyline(
                [[48.3059078, 14.286198], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_12c8e7b76d2e63f98030afbe4adffa5b.bindTooltip(
                `<div>
                     People: Memhard, Johann, fl. 1602 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_04faa423d60881174abad242e0ff845b = L.polyline(
                [[52.1314783, 11.6400789], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_04faa423d60881174abad242e0ff845b.bindTooltip(
                `<div>
                     People: Rollenhagius, Georgius, 1542-1609 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1bd42042d2c796f070fbcec7887bb66d = L.polyline(
                [[48.1371079, 11.5753822], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1bd42042d2c796f070fbcec7887bb66d.bindTooltip(
                `<div>
                     People: Herwart von Hohenburg, Hans Georg, 1553-1622 -> Barvitius, Johann Anton, 1555-1620 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8fa2f419280813f22b9a3dde345d48c8 = L.polyline(
                [[48.1371079, 11.5753822], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8fa2f419280813f22b9a3dde345d48c8.bindTooltip(
                `<div>
                     People: Herwart von Hohenburg, Hans Georg, 1553-1622 -> Memhard, Johann, fl. 1602 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7f58126bf46cf6354f4868f99d34726e = L.polyline(
                [[53.0758196, 8.8071646], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7f58126bf46cf6354f4868f99d34726e.bindTooltip(
                `<div>
                     People: Riddershusius, Ludolph, fl. 1594-1603 -> Schulten, Otto, d.1624 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7768f288235f1d0d9647004760431bd8 = L.polyline(
                [[50.0874654, 14.4212535], [52.3730796, 4.8924534]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7768f288235f1d0d9647004760431bd8.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Blaeu, Willem Janszoon, 1571-1638 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c649df608a73f9d4f603fb8c68c94203 = L.polyline(
                [[49.4093582, 8.694724], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c649df608a73f9d4f603fb8c68c94203.bindTooltip(
                `<div>
                     People: Christmann, Jacob, 1554-1613 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_53e03a404d46ef2788f7f46a01a3984e = L.polyline(
                [[50.1106444, 8.6820917], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_53e03a404d46ef2788f7f46a01a3984e.bindTooltip(
                `<div>
                     People: Marne, Claude, d.1610 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c2c27d729e4ba417e4368845662c5196 = L.polyline(
                [[49.0195333, 12.0974869], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c2c27d729e4ba417e4368845662c5196.bindTooltip(
                `<div>
                     People: Hagenloch, Anselm, fl. 1604 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c9dab2081d3af306f7b7a9071d41ba24 = L.polyline(
                [[49.7477415, 13.3775249], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c9dab2081d3af306f7b7a9071d41ba24.bindTooltip(
                `<div>
                     People: Tengnagel, Frans Gansneb, 1576-1622 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_af1befa507068c53a2ccbcf963ecdae9 = L.polyline(
                [[51.5074456, -0.1277653], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_af1befa507068c53a2ccbcf963ecdae9.bindTooltip(
                `<div>
                     People: Heydon, Christopher (Sir), 1561-1623 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_be42811ee40038ed01a7cb84ac2452e1 = L.polyline(
                [[50.0874654, 14.4212535], [48.5621964, 12.0859345]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_be42811ee40038ed01a7cb84ac2452e1.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Szenci Molnár, Albert, 1574-1634 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0cde77fefb1c3303610564a22bc55683 = L.polyline(
                [[50.0874654, 14.4212535], [51.1563185, 14.991018]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0cde77fefb1c3303610564a22bc55683.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Scultetus, Bartholomäus, 1540-1614 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c416c394db22de13587010437882f987 = L.polyline(
                [[45.0677551, 7.6824892], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c416c394db22de13587010437882f987.bindTooltip(
                `<div>
                     People: Cristini, Bartolomeo, b.1547 -> Magini, Giovanni Antonio, 1555-1617 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b7ab9a910b0f386d6f2666bbe85f3413 = L.polyline(
                [[50.0874654, 14.4212535], [51.5074456, -0.1277653]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b7ab9a910b0f386d6f2666bbe85f3413.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Heydon, Christopher (Sir), 1561-1623 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b3d5c82d4d8e538362a538d05c938857 = L.polyline(
                [[53.5336832, 7.2642003], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b3d5c82d4d8e538362a538d05c938857.bindTooltip(
                `<div>
                     People: Schele, Eberartus, fl. 1601-1605 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_88eb81cdfc37a32aad159378b0ac202b = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_88eb81cdfc37a32aad159378b0ac202b.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Longomontanus, Christian Sørensen, 1562-1647 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1ee2041d1f04ccbba6988cf7e70004c6 = L.polyline(
                [[50.0874654, 14.4212535], [50.039436, 15.5606989]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1ee2041d1f04ccbba6988cf7e70004c6.bindTooltip(
                `<div>
                     People: Bachacius, Martinus, 1539-1612 -> von Mies, Matthias, fl. 1605 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_8aa37efeadd98d528e5cb5e8ef3cd470 = L.polyline(
                [[51.2211097, 4.3997081], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_8aa37efeadd98d528e5cb5e8ef3cd470.bindTooltip(
                `<div>
                     People: Martinius, Aegidius, fl. 1603 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_056c9d15f7cc0396e6f9acc31ebc6720 = L.polyline(
                [[49.9995205, 8.2736253], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_056c9d15f7cc0396e6f9acc31ebc6720.bindTooltip(
                `<div>
                     People: Krzistanowicz, Stanisław, fl. 1605 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ce51a4970717fcc92ede6eb686a1508c = L.polyline(
                [[50.0874654, 14.4212535], [46.603354, 1.8883335]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ce51a4970717fcc92ede6eb686a1508c.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Nautonier, Guillaume de, 1557-1620 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_15c0fd060e8f7780ccef182123b77b1b = L.polyline(
                [[41.8933203, 12.4829321], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_15c0fd060e8f7780ccef182123b77b1b.bindTooltip(
                `<div>
                     People: Heck, Johannes, 1579-1616 or after -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e26465629789d0c70946310eaa7376ba = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e26465629789d0c70946310eaa7376ba.bindTooltip(
                `<div>
                     People: Bachacius, Martinus, 1539-1612 -> Vlaveryn, Wenzel, fl. 1606 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9f0cb8d2d394ef214f4cf51a91ea9cfb = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_9f0cb8d2d394ef214f4cf51a91ea9cfb.bindTooltip(
                `<div>
                     People: Unknown -> Albert (Herr), fl. 1606 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ea9be83effb2ebfbcc62c65aa3648b72 = L.polyline(
                [[47.0708678, 15.4382786], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ea9be83effb2ebfbcc62c65aa3648b72.bindTooltip(
                `<div>
                     People: Casal, Peter, fl. 1606 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c6c93b0a6ceed6223fdb8cae9e638063 = L.polyline(
                [[50.0874654, 14.4212535], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c6c93b0a6ceed6223fdb8cae9e638063.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Hafenreffer, Samuel, 1587-1660 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_20b00c2fb91745d31f750c5428fd4885 = L.polyline(
                [[50.0874654, 14.4212535], [51.2211097, 4.3997081]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_20b00c2fb91745d31f750c5428fd4885.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Coignet, Michiel, 1549-1623 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c600f5f62672bef22adb8a8056d9b418 = L.polyline(
                [[49.0195333, 12.0974869], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c600f5f62672bef22adb8a8056d9b418.bindTooltip(
                `<div>
                     People: Ruland, Martin, 1569-1611 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c8ebbe95f656bddbb8a78385e7bf1843 = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c8ebbe95f656bddbb8a78385e7bf1843.bindTooltip(
                `<div>
                     People: Zeidler, Hans, fl. 1607 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cbd3c05ed1931429ec040354f9aea380 = L.polyline(
                [[50.0874654, 14.4212535], [47.9960901, 7.8494005]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_cbd3c05ed1931429ec040354f9aea380.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Pistorius, Johann, 1546-1608 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e5b47f5c2b79b85b9c71fe353c32877f = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e5b47f5c2b79b85b9c71fe353c32877f.bindTooltip(
                `<div>
                     People: Fersius, Johannes, fl. 1607-1608 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9b400f988bc08dc4c73cd5bce97fa50b = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_9b400f988bc08dc4c73cd5bce97fa50b.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> De Cavalli, Marin, 1561-1611 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9a9c8d619dc4c3670e94651a2e97c8d6 = L.polyline(
                [[50.0874654, 14.4212535], [51.0493286, 13.7381437]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_9a9c8d619dc4c3670e94651a2e97c8d6.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Fersius, Johannes, fl. 1607-1608 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5ac1a0ac1179242b89e36dcaa039ec86 = L.polyline(
                [[50.0874654, 14.4212535], [50.9772092, 11.9863951]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5ac1a0ac1179242b89e36dcaa039ec86.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Anhalt-Plötzkau, August von, 1575-1653 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e87f4cffefe66e4d86883ae36ca28201 = L.polyline(
                [[50.0874654, 14.4212535], [51.1563185, 14.991018]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e87f4cffefe66e4d86883ae36ca28201.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Eichler, Gregor, 1562-1611 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6f261c21677b250e155e9787dd13d09a = L.polyline(
                [[51.8666527, 12.646761], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_6f261c21677b250e155e9787dd13d09a.bindTooltip(
                `<div>
                     People: Fabricius, Johannes, 1587-1616 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f1071e875d99a600529b0169136f1d15 = L.polyline(
                [[47.0708678, 15.4382786], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f1071e875d99a600529b0169136f1d15.bindTooltip(
                `<div>
                     People: School Inspectors, Graz -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7a0aab3a80f4f471812d0caa64c0ffde = L.polyline(
                [[50.0874654, 14.4212535], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7a0aab3a80f4f471812d0caa64c0ffde.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Tanckius, Joachim, 1557-1609 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_237d042f0bff601cccdf86e9d1d4f95d = L.polyline(
                [[54.0703296, 9.9884451], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_237d042f0bff601cccdf86e9d1d4f95d.bindTooltip(
                `<div>
                     People: Forst, Detlef, fl. 1608 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_086a25fbf11dcd9fa4c1ff5f3e955421 = L.polyline(
                [[50.0874654, 14.4212535], [51.8666527, 12.646761]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_086a25fbf11dcd9fa4c1ff5f3e955421.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Fabricius, Johannes, 1587-1616 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7f36e4b803c0e69dc919811d036f4515 = L.polyline(
                [[50.879202, 4.7011675], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7f36e4b803c0e69dc919811d036f4515.bindTooltip(
                `<div>
                     People: Roomen, Adriaan van, 1561-1615 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_11f0024aaa9869bf8055636f212a49c1 = L.polyline(
                [[51.6511561, 14.0342532], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_11f0024aaa9869bf8055636f212a49c1.bindTooltip(
                `<div>
                     People: Moller, Albin, fl. 1609 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0c2fc959afa81788ef165f00a1be9dc5 = L.polyline(
                [[48.5621964, 12.0859345], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0c2fc959afa81788ef165f00a1be9dc5.bindTooltip(
                `<div>
                     People: Szenci Molnár, Albert, 1574-1634 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d0881a8c6cbdd199e310a44b2e819754 = L.polyline(
                [[50.698157, 17.3849804], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d0881a8c6cbdd199e310a44b2e819754.bindTooltip(
                `<div>
                     People: Hannke, Valentin, fl. 1610 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c76e323ea3857f45baf755df35c6b513 = L.polyline(
                [[45.3984428, 11.8956829], [43.7697955, 11.2556404]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c76e323ea3857f45baf755df35c6b513.bindTooltip(
                `<div>
                     People: Galilei, Galileo, 1564-1642 -> Vinta, Belisario, 1542-1613 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e8299786b7f879397a6ae2014d2e0c86 = L.polyline(
                [[45.3984428, 11.8956829], [48.8534951, 2.3483915]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e8299786b7f879397a6ae2014d2e0c86.bindTooltip(
                `<div>
                     People: Galilei, Galileo, 1564-1642 -> Carosio, Matteo, fl. 1610 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_80e2d119afe5e4ec34f6f34e31471cc6 = L.polyline(
                [[52.2277037, 11.0104702], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_80e2d119afe5e4ec34f6f34e31471cc6.bindTooltip(
                `<div>
                     People: Caselius, Johannes, 1533-1613 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7ff38cad9e875124b50a81e446018f34 = L.polyline(
                [[48.7784485, 9.1800132], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7ff38cad9e875124b50a81e446018f34.bindTooltip(
                `<div>
                     People: Lotter, Tobias, 1568-1631 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d23cce2e476415ab77e6c38117adf123 = L.polyline(
                [[45.3984428, 11.8956829], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d23cce2e476415ab77e6c38117adf123.bindTooltip(
                `<div>
                     People: Galilei, Galileo, 1564-1642 -> Medici, Giuliano de', fl. 1610-1611 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7b7883d7cf1054a62af66c0a59f63c33 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7b7883d7cf1054a62af66c0a59f63c33.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Medici, Giuliano de', fl. 1610-1611 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_55ac22c203cc989ac3329b1cac49a2b7 = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_55ac22c203cc989ac3329b1cac49a2b7.bindTooltip(
                `<div>
                     People: Gödelmann, Johann Georg, 1559-1611 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_23c828e8a451655abfc69e1072f25d56 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_23c828e8a451655abfc69e1072f25d56.bindTooltip(
                `<div>
                     People: Bachacius, Martinus, 1539-1612 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9d52591e12ea2042b82f9a6cf50a3b14 = L.polyline(
                [[48.584614, 7.7507127], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_9d52591e12ea2042b82f9a6cf50a3b14.bindTooltip(
                `<div>
                     People: Bernegger, Matthias, 1582-1640 -> Memhard, Johann, fl. 1602 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_05f55ee0f268167c3fd4ec3cad7fed0d = L.polyline(
                [[48.5296743, 11.5084954], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_05f55ee0f268167c3fd4ec3cad7fed0d.bindTooltip(
                `<div>
                     People: Lorenz, Regina, 1590-1617 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ba37d745316449355c1cfef16132e7a5 = L.polyline(
                [[48.7784485, 9.1800132], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ba37d745316449355c1cfef16132e7a5.bindTooltip(
                `<div>
                     People: Stuttgart, Consistory of -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_28fb37e2f2db22c5cd04be16fc78726c = L.polyline(
                [[50.1106444, 8.6820917], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_28fb37e2f2db22c5cd04be16fc78726c.bindTooltip(
                `<div>
                     People: Freher, Marquard Friedrich, 1565-1614 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_db16101d840de65fb4773e410cb61a84 = L.polyline(
                [[50.0874654, 14.4212535], [49.2888745, 10.5597693]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_db16101d840de65fb4773e410cb61a84.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Marius, Simon, 1570-1624 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b76272f9edcd0f1321c133f49566022e = L.polyline(
                [[49.453872, 11.077298], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b76272f9edcd0f1321c133f49566022e.bindTooltip(
                `<div>
                     People: Brunn, Lukas, 1572-1628 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5c96ea921e77ce82059fa23e754c9805 = L.polyline(
                [[50.0874654, 14.4212535], [50.8467372, 4.352493]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5c96ea921e77ce82059fa23e754c9805.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Maelcote, Oddo van, 1572-1615 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_b3b12a21fce8f5cfb0324949f5e5d60c = L.polyline(
                [[49.2888745, 10.5597693], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_b3b12a21fce8f5cfb0324949f5e5d60c.bindTooltip(
                `<div>
                     People: Marius, Simon, 1570-1624 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_465b9075e7326a6a593cb2ec4548e732 = L.polyline(
                [[51.0493286, 13.7381437], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_465b9075e7326a6a593cb2ec4548e732.bindTooltip(
                `<div>
                     People: Seussius, Johannes, fl. 1608 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c9124cc1ed56ff55ebc83fa4d747dc58 = L.polyline(
                [[48.3059078, 14.286198], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c9124cc1ed56ff55ebc83fa4d747dc58.bindTooltip(
                `<div>
                     People: Poltzhügel, Johann Georg Poltz von, d.1645 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6bd029368f100a8a824b88f3bf07dd25 = L.polyline(
                [[48.1565472, 14.0243752], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_6bd029368f100a8a824b88f3bf07dd25.bindTooltip(
                `<div>
                     People: Polheim, Gundacker von, 1575-1644 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_0301aa28ed3586796b5265f78e5f16ea = L.polyline(
                [[47.4744721, 11.1681018], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_0301aa28ed3586796b5265f78e5f16ea.bindTooltip(
                `<div>
                     People: Zelking, Hans Wilhelm von, 1589-1627 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_1fceca5f9dca924ab15dd4eba6db01e2 = L.polyline(
                [[48.7630165, 11.4250395], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_1fceca5f9dca924ab15dd4eba6db01e2.bindTooltip(
                `<div>
                     People: Scheiner, Christoph, 1573-1650 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5ddc675c21bce89ad90b78a13261425e = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5ddc675c21bce89ad90b78a13261425e.bindTooltip(
                `<div>
                     People: Hoffmann, Peter, fl. 1615 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_247afbf761c2acf0c50f71197065fb82 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_247afbf761c2acf0c50f71197065fb82.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Hoffmann, Peter, fl. 1615 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_af2c184c9aebb63fe68a3938409c4dbe = L.polyline(
                [[50.0874654, 14.4212535], [48.8012983, 9.0150026]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_af2c184c9aebb63fe68a3938409c4dbe.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Leonberg, Senate of (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d6d069e98970b6e7b9a3de2726bb9c15 = L.polyline(
                [[50.938361, 6.959974], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d6d069e98970b6e7b9a3de2726bb9c15.bindTooltip(
                `<div>
                     People: Ens, Caspar, 1570-1650 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_afedf123d2c327aec420484dc9ef592b = L.polyline(
                [[48.7630165, 11.4250395], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_afedf123d2c327aec420484dc9ef592b.bindTooltip(
                `<div>
                     People: Scheiner, Christoph, 1573-1650 -> Guldin, Paul, 1577-1643 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_5e551b3798c8f1700b99cb5204543339 = L.polyline(
                [[50.0874654, 14.4212535], [48.7784485, 9.1800132]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_5e551b3798c8f1700b99cb5204543339.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Faber, Sebastian, 1564-1625 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_181fdf44ceac5e13e1c6ad54aec5d371 = L.polyline(
                [[44.4938203, 11.3426327], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_181fdf44ceac5e13e1c6ad54aec5d371.bindTooltip(
                `<div>
                     People: Roffeni, Giovanni Antonio, 1580-1643 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c5c9f7c49eb63b7f5b153b6ed35b2f67 = L.polyline(
                [[50.0874654, 14.4212535], [44.4938203, 11.3426327]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c5c9f7c49eb63b7f5b153b6ed35b2f67.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Roffeni, Giovanni Antonio, 1580-1643 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_255b709cec361c4a1d0fc6c04960bb7a = L.polyline(
                [[50.0874654, 14.4212535], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_255b709cec361c4a1d0fc6c04960bb7a.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Mingonius, Thomas, fl. 1608 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d81caa51e7b6da48288e0717857cd580 = L.polyline(
                [[48.1857192, 16.4221587], [48.1857192, 16.4221587]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d81caa51e7b6da48288e0717857cd580.bindTooltip(
                `<div>
                     People: Quietanus, Johannes Remus, 1588-1654 -> Guldin, Paul, 1577-1643 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4685c977f097530dd94d1dbbe94d58fe = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4685c977f097530dd94d1dbbe94d58fe.bindTooltip(
                `<div>
                     People: Rechberger, Wilhelm, b.1593 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d497259488108931093c8651a52d5346 = L.polyline(
                [[48.0390046, 14.4191276], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d497259488108931093c8651a52d5346.bindTooltip(
                `<div>
                     People: Lehner, Johannes, fl. 1619 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_19cfe16370bf9af65972cce04b3aec5b = L.polyline(
                [[48.7784485, 9.1800132], [48.7031377, 9.6541116]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_19cfe16370bf9af65972cce04b3aec5b.bindTooltip(
                `<div>
                     People: Grüninger, Erasmus, 1566-1631 -> Osiander, Lucas II, 1571-1638 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_84a46f488da5427619176f49e7fcf488 = L.polyline(
                [[50.0874654, 14.4212535], [48.3690341, 10.8979522]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_84a46f488da5427619176f49e7fcf488.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Augsburg, Senate of (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_51df2863e654a04da7b4e36784090671 = L.polyline(
                [[50.0874654, 14.4212535], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_51df2863e654a04da7b4e36784090671.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Regensburg, Senate of, fl. 1620 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f3d0690520771ee958ca9e93ea7de0e6 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f3d0690520771ee958ca9e93ea7de0e6.bindTooltip(
                `<div>
                     People: Tengnagel, Sebastian, 1573-1636 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e006c442c047afb0f0bec57fc274dc01 = L.polyline(
                [[49.453872, 11.077298], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e006c442c047afb0f0bec57fc274dc01.bindTooltip(
                `<div>
                     People: Nuremberg, Senate of, fl. 1655 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f81f73cf97eb196cdd53898085686840 = L.polyline(
                [[50.0874654, 14.4212535], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f81f73cf97eb196cdd53898085686840.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Jörger von Tollet, Helmhard, 1572-1631 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_4b2c6169cdb4e98ece21867036cc3729 = L.polyline(
                [[50.0874654, 14.4212535], [49.453872, 11.077298]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_4b2c6169cdb4e98ece21867036cc3729.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Nuremberg, Senate of, fl. 1655 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_61618a20f81f3663a2730eafd74e3d6c = L.polyline(
                [[45.6348591, 11.4063543], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_61618a20f81f3663a2730eafd74e3d6c.bindTooltip(
                `<div>
                     People: Pasino, Pacius, fl. 1621 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bf14321715040a053a56ce8e5c600d63 = L.polyline(
                [[48.7630165, 11.4250395], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bf14321715040a053a56ce8e5c600d63.bindTooltip(
                `<div>
                     People: Cysat, Johann Baptist, 1587-1657 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_67625e1a767f86506c6e58f43f2cc408 = L.polyline(
                [[50.0874654, 14.4212535], [52.3412273, 14.549452]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_67625e1a767f86506c6e58f43f2cc408.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Origanus, David, 1558-1629 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_63d44427090b8bd1482ae2047b7352c3 = L.polyline(
                [[48.7784485, 9.1800132], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_63d44427090b8bd1482ae2047b7352c3.bindTooltip(
                `<div>
                     People: Württemberg, Johann Friedrich von, 1582-1628 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3c5a4a01721d4e99549cd6622b63024a = L.polyline(
                [[50.0874654, 14.4212535], [49.7477415, 13.3775249]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3c5a4a01721d4e99549cd6622b63024a.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Tengnagel, Frans Gansneb, 1576-1622 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_2ce193874d23360d58f5a93e939c9650 = L.polyline(
                [[50.0874654, 14.4212535], [49.0195333, 12.0974869]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_2ce193874d23360d58f5a93e939c9650.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Oberndorffer, Johann, 1549-1625 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_02313c5186d3c26055667ab79bed510b = L.polyline(
                [[51.3406321, 12.3747329], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_02313c5186d3c26055667ab79bed510b.bindTooltip(
                `<div>
                     People: Müller, Philip, 1585-1659 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_6eb47dfddbd20c43e59392a1dacefb31 = L.polyline(
                [[50.0874654, 14.4212535], [48.1598261, 14.0758845]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_6eb47dfddbd20c43e59392a1dacefb31.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Widmar, Wolf, fl. 1623 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ab92767b22aca2616a738f31d30a8fe3 = L.polyline(
                [[50.0874654, 14.4212535], [51.5074456, -0.1277653]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ab92767b22aca2616a738f31d30a8fe3.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Gunter, Edmund, 1581-1626 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_08b80672f4f52b8e10c3cfed0c7a8f90 = L.polyline(
                [[48.3331132, 13.8532739], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_08b80672f4f52b8e10c3cfed0c7a8f90.bindTooltip(
                `<div>
                     People: Hohenfelder, Ludwig von, 1576-1644 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cde9698fec5a3601bf6fb3049d22f887 = L.polyline(
                [[48.1598261, 14.0758845], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_cde9698fec5a3601bf6fb3049d22f887.bindTooltip(
                `<div>
                     People: Widmar, Wolf, fl. 1623 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e238fac9531fe4505268641df98eff4f = L.polyline(
                [[50.0874654, 14.4212535], [50.41768, 8.63873]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e238fac9531fe4505268641df98eff4f.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Hessen-Butzbach, Philipp III von, 1581-1643 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bc023bbf7a8c8ac472eec4121843c4e3 = L.polyline(
                [[48.5203263, 9.053596], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bc023bbf7a8c8ac472eec4121843c4e3.bindTooltip(
                `<div>
                     People: Falco, Johannes, 1599-1634 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c7a8a3f89983d29e1c5b5ef7425718e5 = L.polyline(
                [[50.0874654, 14.4212535], [48.3331132, 13.8532739]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c7a8a3f89983d29e1c5b5ef7425718e5.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Hohenfelder, Ludwig von, 1576-1644 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_84877c54b454f8d27b942ee965e9f1f1 = L.polyline(
                [[51.7520131, -1.2578499], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_84877c54b454f8d27b942ee965e9f1f1.bindTooltip(
                `<div>
                     People: Briggs, Henry, 1561-1631 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_cb3464595e65e2b27c6bc3f23fb0eeb7 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_cb3464595e65e2b27c6bc3f23fb0eeb7.bindTooltip(
                `<div>
                     People: Höritzer von Steinbach, Hans Wolf, fl. 1625 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_fa92923fe603beecfd5e8829c520e0a1 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_fa92923fe603beecfd5e8829c520e0a1.bindTooltip(
                `<div>
                     People: Schörkl, Martin, fl. 1625 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_83734e88109c54ba44f20bf922c365b2 = L.polyline(
                [[49.453872, 11.077298], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_83734e88109c54ba44f20bf922c365b2.bindTooltip(
                `<div>
                     People: Eckebrecht, Phillip, 1594-1667 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_589b96447720a5de10af220396d0f109 = L.polyline(
                [[48.5203263, 9.053596], [46.2017559, 6.1466014]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_589b96447720a5de10af220396d0f109.bindTooltip(
                `<div>
                     People: Schickard, Wilhelm, 1592-1635 -> Schickard, Lukas, fl. 1638 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_54dbeba57301ac09301b43636b69660a = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_54dbeba57301ac09301b43636b69660a.bindTooltip(
                `<div>
                     People: Brahe, Georg, b.1583 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_f4e6ec9aa0df42cf9a81080085e065ff = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_f4e6ec9aa0df42cf9a81080085e065ff.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Brahe, Georg, b.1583; Brahe, Tycho, b.1581 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_88e9db67e781a5dfce0fc9c76cb06d4b = L.polyline(
                [[50.0874654, 14.4212535], [48.7427584, 9.3071685]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_88e9db67e781a5dfce0fc9c76cb06d4b.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Esslingen, City Council of, fl. 1627 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_022851b792b679aebc1f52bb166474cd = L.polyline(
                [[48.3984968, 9.9912458], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_022851b792b679aebc1f52bb166474cd.bindTooltip(
                `<div>
                     People: Schleicher, Sigmund, fl. 1627 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_9183e8c2edf952e3200343d4f4c4fd1a = L.polyline(
                [[50.0874654, 14.4212535], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_9183e8c2edf952e3200343d4f4c4fd1a.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Schleicher, Sigmund, fl. 1627 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_649c12051103671a94a3463cb60fd9e7 = L.polyline(
                [[50.0874654, 14.4212535], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_649c12051103671a94a3463cb60fd9e7.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Ulm, City Council of (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_c45b4eb8a9909444bd09ac583ea3dd77 = L.polyline(
                [[49.0195333, 12.0974869], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_c45b4eb8a9909444bd09ac583ea3dd77.bindTooltip(
                `<div>
                     People: Auracher, Wolf, fl. 1628 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_03748440cc7cc993f9f48c22d5f995ba = L.polyline(
                [[48.584614, 7.7507127], [48.584614, 7.7507127]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_03748440cc7cc993f9f48c22d5f995ba.bindTooltip(
                `<div>
                     People: Bernegger, Matthias, 1582-1640 -> Clutenius, Joachim, fl. 1628 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ffd2518fbcc07aaeb1accd6393bdb0c1 = L.polyline(
                [[48.584614, 7.7507127], [48.3984968, 9.9912458]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ffd2518fbcc07aaeb1accd6393bdb0c1.bindTooltip(
                `<div>
                     People: Bernegger, Matthias, 1582-1640 -> Hebenstreit, Johann Baptist, 1580-1638 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d61a0b241a840a3579c620cdc84c818e = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d61a0b241a840a3579c620cdc84c818e.bindTooltip(
                `<div>
                     People: Guldin, Paul, 1577-1643 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_95b1fdadd45701e50cc51f0eb2b16592 = L.polyline(
                [[48.1857192, 16.4221587], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_95b1fdadd45701e50cc51f0eb2b16592.bindTooltip(
                `<div>
                     People: Bossius, Stephan, fl. 1628 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3f1bb42b3e72db8a0003421f8b27e335 = L.polyline(
                [[50.0874654, 14.4212535], [51.1147105, 15.2811574]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3f1bb42b3e72db8a0003421f8b27e335.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Bartsch, Jakob, 1600-1633 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a22c61b37c2c368de09e45bb05c57b50 = L.polyline(
                [[50.0874654, 14.4212535], [51.3406321, 12.3747329]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_a22c61b37c2c368de09e45bb05c57b50.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Avianus, Wilhelm, d.1636 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_265c73e2352926d3a42ba5e05f097e93 = L.polyline(
                [[48.584614, 7.7507127], [51.1147105, 15.2811574]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_265c73e2352926d3a42ba5e05f097e93.bindTooltip(
                `<div>
                     People: Bernegger, Matthias, 1582-1640 -> Bartsch, Jakob, 1600-1633 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_ab555a93d31a39237fa46779e936cd98 = L.polyline(
                [[48.1857192, 16.4221587], [45.3984428, 11.8956829]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_ab555a93d31a39237fa46779e936cd98.bindTooltip(
                `<div>
                     People: Pieronius, Johannes, fl. 1629 -> Galilei, Galileo, 1564-1642 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_3c4f4fcf584a6ecd8d88a2c8fe482140 = L.polyline(
                [[51.4205494, 9.9142574], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_3c4f4fcf584a6ecd8d88a2c8fe482140.bindTooltip(
                `<div>
                     People: Griessel, Heinrich von, fl. 1630 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_09aebfeb468b00f63af1e51c828be15b = L.polyline(
                [[53.793587, 12.1764906], [48.3059078, 14.286198]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_09aebfeb468b00f63af1e51c828be15b.bindTooltip(
                `<div>
                     People: Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634 -> Upper Austria, Estates of (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_db2916522ffe495f52a45b4f4218678d = L.polyline(
                [[53.793587, 12.1764906], [51.8953514, 11.0520563]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_db2916522ffe495f52a45b4f4218678d.bindTooltip(
                `<div>
                     People: Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634 -> Becker, David, fl. 1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_939828a4d597dc618a6bd43771f72a66 = L.polyline(
                [[50.0874654, 14.4212535], [50.4370452, 15.3516528]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_939828a4d597dc618a6bd43771f72a66.bindTooltip(
                `<div>
                     People: Kepler, Johannes, 1571-1630 -> Chamberates of Albrecht von Wallenstein, fl. 1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_74e3949c5ebff585dd2ef0750471b763 = L.polyline(
                [[51.8953514, 11.0520563], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_74e3949c5ebff585dd2ef0750471b763.bindTooltip(
                `<div>
                     People: Becker, David, fl. 1630 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_bb6035f6bf4e9014d6e64be3023e8679 = L.polyline(
                [[48.8534951, 2.3483915], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_bb6035f6bf4e9014d6e64be3023e8679.bindTooltip(
                `<div>
                     People: Gassendi, Pierre, 1592-1655 -> Schickard, Wilhelm, 1592-1635 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_d4443c8edbd7f75a7775a796158301b3 = L.polyline(
                [[48.8534951, 2.3483915], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_d4443c8edbd7f75a7775a796158301b3.bindTooltip(
                `<div>
                     People: Gassendi, Pierre, 1592-1655 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_a0f7118b8852b99d4ca287c228202945 = L.polyline(
                [[46.2017559, 6.1466014], [48.5203263, 9.053596]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_a0f7118b8852b99d4ca287c228202945.bindTooltip(
                `<div>
                     People: Diodati, Elia, 1576-1661 -> Schickard, Wilhelm, 1592-1635 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_7b42b66f75db271d18c7d7fd1a54ddae = L.polyline(
                [[49.0195333, 12.0974869], [51.0493286, 13.7381437]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_7b42b66f75db271d18c7d7fd1a54ddae.bindTooltip(
                `<div>
                     People: Lansius, S., fl. 1631 -> Unknown (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let poly_line_e83338182ab9458fb712eae345a270e5 = L.polyline(
                [[50.0874654, 14.4212535], [50.0874654, 14.4212535]],
                {"bubblingMouseEvents": true, "color": "#8e44ad", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#8e44ad", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 0.45, "smoothFactor": 1.0, "stroke": true, "weight": 1.0}
            ).addTo(feature_group_c1ba1d99c8157cd267ee15928d1b1cd4);
        
    
            poly_line_e83338182ab9458fb712eae345a270e5.bindTooltip(
                `<div>
                     People: Krupsky, Jakob, fl. until 1630 -> Kepler, Johannes, 1571-1630 (1)
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            feature_group_c1ba1d99c8157cd267ee15928d1b1cd4.addTo(map_e9bef1e91c69bbc6d3090e60f47ab50e);
        
    
            let feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd = L.featureGroup(
                {
}
            );
        
    
            let circle_marker_674af4acab88c90d7efe8dda003e2c1f = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_41e9635e29995c9ec0e659aa20180566 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f1328c50edacbdd955734d70e0263b0e = $(`<div id="html_f1328c50edacbdd955734d70e0263b0e" style="width: 100.0%; height: 100.0%;"><b>Kepler, Johannes, 1571-1630</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1040</div>`)[0];
                popup_41e9635e29995c9ec0e659aa20180566.setContent(html_f1328c50edacbdd955734d70e0263b0e);
            
        

        circle_marker_674af4acab88c90d7efe8dda003e2c1f.bindPopup(popup_41e9635e29995c9ec0e659aa20180566)
        ;

        
    
    
            circle_marker_674af4acab88c90d7efe8dda003e2c1f.bindTooltip(
                `<div>
                     Person: Kepler, Johannes, 1571-1630
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a3be02600a8d13bf6b12afb733f7e3b7 = L.circleMarker(
                [48.1371079, 11.5753822],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b607a3bb5305ef1cb9d0cff40b49bc2a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_3a06d0ea7c26b773ed11a66b8b5bc978 = $(`<div id="html_3a06d0ea7c26b773ed11a66b8b5bc978" style="width: 100.0%; height: 100.0%;"><b>Herwart von Hohenburg, Hans Georg, 1553-1622</b><br>Home city: Munich, Bavaria, Germany<br>Letters in drawable network: 107</div>`)[0];
                popup_b607a3bb5305ef1cb9d0cff40b49bc2a.setContent(html_3a06d0ea7c26b773ed11a66b8b5bc978);
            
        

        circle_marker_a3be02600a8d13bf6b12afb733f7e3b7.bindPopup(popup_b607a3bb5305ef1cb9d0cff40b49bc2a)
        ;

        
    
    
            circle_marker_a3be02600a8d13bf6b12afb733f7e3b7.bindTooltip(
                `<div>
                     Person: Herwart von Hohenburg, Hans Georg, 1553-1622
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5c0e37ae54135a10f23b8275c328d699 = L.circleMarker(
                [48.584614, 7.7507127],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_d6da2e7800b8ff424910ad4bfe7b1209 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_021697ca509f958fb44d1f2a055005ca = $(`<div id="html_021697ca509f958fb44d1f2a055005ca" style="width: 100.0%; height: 100.0%;"><b>Bernegger, Matthias, 1582-1640</b><br>Home city: Strasbourg, Grand Est, France<br>Letters in drawable network: 76</div>`)[0];
                popup_d6da2e7800b8ff424910ad4bfe7b1209.setContent(html_021697ca509f958fb44d1f2a055005ca);
            
        

        circle_marker_5c0e37ae54135a10f23b8275c328d699.bindPopup(popup_d6da2e7800b8ff424910ad4bfe7b1209)
        ;

        
    
    
            circle_marker_5c0e37ae54135a10f23b8275c328d699.bindTooltip(
                `<div>
                     Person: Bernegger, Matthias, 1582-1640
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b645ade941dc0200461b6208aa60d890 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 4, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_31b14eb34341a7304dcdd570a96330fc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_b9b45be284b5dc8c81b6c83de65b7cc5 = $(`<div id="html_b9b45be284b5dc8c81b6c83de65b7cc5" style="width: 100.0%; height: 100.0%;"><b>Mästlin, Michael, 1550-1631</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 75</div>`)[0];
                popup_31b14eb34341a7304dcdd570a96330fc.setContent(html_b9b45be284b5dc8c81b6c83de65b7cc5);
            
        

        circle_marker_b645ade941dc0200461b6208aa60d890.bindPopup(popup_31b14eb34341a7304dcdd570a96330fc)
        ;

        
    
    
            circle_marker_b645ade941dc0200461b6208aa60d890.bindTooltip(
                `<div>
                     Person: Mästlin, Michael, 1550-1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e3225cc7cc476424578c306b3079bee2 = L.circleMarker(
                [53.5336832, 7.2642003],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a6c1a52d08a656755c06a0fc152314e8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9f5e97419940e4606bb487bf4fa81f61 = $(`<div id="html_9f5e97419940e4606bb487bf4fa81f61" style="width: 100.0%; height: 100.0%;"><b>Fabricius, David, 1564-1617</b><br>Home city: Osteel, Lower Saxony, Germany<br>Letters in drawable network: 49</div>`)[0];
                popup_a6c1a52d08a656755c06a0fc152314e8.setContent(html_9f5e97419940e4606bb487bf4fa81f61);
            
        

        circle_marker_e3225cc7cc476424578c306b3079bee2.bindPopup(popup_a6c1a52d08a656755c06a0fc152314e8)
        ;

        
    
    
            circle_marker_e3225cc7cc476424578c306b3079bee2.bindTooltip(
                `<div>
                     Person: Fabricius, David, 1564-1617
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6670defc4e59ad4733ee03859d259ebb = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_487e92d8b3d173f49ba2a295176fff23 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ffb58ff86c01eaed25f2ef4c342778ea = $(`<div id="html_ffb58ff86c01eaed25f2ef4c342778ea" style="width: 100.0%; height: 100.0%;"><b>Schickard, Wilhelm, 1592-1635</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 44</div>`)[0];
                popup_487e92d8b3d173f49ba2a295176fff23.setContent(html_ffb58ff86c01eaed25f2ef4c342778ea);
            
        

        circle_marker_6670defc4e59ad4733ee03859d259ebb.bindPopup(popup_487e92d8b3d173f49ba2a295176fff23)
        ;

        
    
    
            circle_marker_6670defc4e59ad4733ee03859d259ebb.bindTooltip(
                `<div>
                     Person: Schickard, Wilhelm, 1592-1635
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_db4700a0ebca9c765531428369e4f4fe = L.circleMarker(
                [48.3984968, 9.9912458],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5e45a55f5bb7038756a1b6063274bf5c = L.popup({
  "maxWidth": 320,
});

        
            
                let html_6cb9ea7ed1178c0e975d5c0117abc192 = $(`<div id="html_6cb9ea7ed1178c0e975d5c0117abc192" style="width: 100.0%; height: 100.0%;"><b>Hebenstreit, Johann Baptist, 1580-1638</b><br>Home city: Ulm, Baden-Württemberg, Germany<br>Letters in drawable network: 31</div>`)[0];
                popup_5e45a55f5bb7038756a1b6063274bf5c.setContent(html_6cb9ea7ed1178c0e975d5c0117abc192);
            
        

        circle_marker_db4700a0ebca9c765531428369e4f4fe.bindPopup(popup_5e45a55f5bb7038756a1b6063274bf5c)
        ;

        
    
    
            circle_marker_db4700a0ebca9c765531428369e4f4fe.bindTooltip(
                `<div>
                     Person: Hebenstreit, Johann Baptist, 1580-1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dc9937a04d751af6742079b6a45751e1 = L.circleMarker(
                [54.7046485, 20.4565666],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_386cc48193e86718cf1a47d52651af4a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c55c3cff427949164b36012d99910d22 = $(`<div id="html_c55c3cff427949164b36012d99910d22" style="width: 100.0%; height: 100.0%;"><b>Pape, Johann, 1558-1622</b><br>Home city: Kaliningrad [Königsberg], Kaliningrad Oblast, Russia [Prussia]<br>Letters in drawable network: 21</div>`)[0];
                popup_386cc48193e86718cf1a47d52651af4a.setContent(html_c55c3cff427949164b36012d99910d22);
            
        

        circle_marker_dc9937a04d751af6742079b6a45751e1.bindPopup(popup_386cc48193e86718cf1a47d52651af4a)
        ;

        
    
    
            circle_marker_dc9937a04d751af6742079b6a45751e1.bindTooltip(
                `<div>
                     Person: Pape, Johann, 1558-1622
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f080a0f752f2ed8c0914f7558bf0e1e2 = L.circleMarker(
                [45.3984428, 11.8956829],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_54cacede1a11592981c77faef0ad2d53 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_4868a084dad443c0b4e9e5ce57a01a25 = $(`<div id="html_4868a084dad443c0b4e9e5ce57a01a25" style="width: 100.0%; height: 100.0%;"><b>Galilei, Galileo, 1564-1642</b><br>Home city: Padua, Veneto, Italy<br>Letters in drawable network: 21</div>`)[0];
                popup_54cacede1a11592981c77faef0ad2d53.setContent(html_4868a084dad443c0b4e9e5ce57a01a25);
            
        

        circle_marker_f080a0f752f2ed8c0914f7558bf0e1e2.bindPopup(popup_54cacede1a11592981c77faef0ad2d53)
        ;

        
    
    
            circle_marker_f080a0f752f2ed8c0914f7558bf0e1e2.bindTooltip(
                `<div>
                     Person: Galilei, Galileo, 1564-1642
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_128c4cfaf632080c2bc4b230a886b259 = L.circleMarker(
                [54.3482907, 18.6540233],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b1febb233de0ca2cc7008efc7844840c = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e67fccc7153bab119b99f4b1ba2821dc = $(`<div id="html_e67fccc7153bab119b99f4b1ba2821dc" style="width: 100.0%; height: 100.0%;"><b>Crüger, Peter, 1580-1639</b><br>Home city: Gdańsk, Pomeranian Voivodeship, Poland<br>Letters in drawable network: 21</div>`)[0];
                popup_b1febb233de0ca2cc7008efc7844840c.setContent(html_e67fccc7153bab119b99f4b1ba2821dc);
            
        

        circle_marker_128c4cfaf632080c2bc4b230a886b259.bindPopup(popup_b1febb233de0ca2cc7008efc7844840c)
        ;

        
    
    
            circle_marker_128c4cfaf632080c2bc4b230a886b259.bindTooltip(
                `<div>
                     Person: Crüger, Peter, 1580-1639
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_427f347e7fcd0e78de9900cbb3cb5d46 = L.circleMarker(
                [50.291767, 14.8260014],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_065ebb3e14de45d53cb9157cc71413f8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e300e5deca7a1cd62618d53ee40d2946 = $(`<div id="html_e300e5deca7a1cd62618d53ee40d2946" style="width: 100.0%; height: 100.0%;"><b>Brahe, Tycho, 1546-1601</b><br>Home city: Benátky nad Jizerou, Central Bohemia, Czech Republic<br>Letters in drawable network: 19</div>`)[0];
                popup_065ebb3e14de45d53cb9157cc71413f8.setContent(html_e300e5deca7a1cd62618d53ee40d2946);
            
        

        circle_marker_427f347e7fcd0e78de9900cbb3cb5d46.bindPopup(popup_065ebb3e14de45d53cb9157cc71413f8)
        ;

        
    
    
            circle_marker_427f347e7fcd0e78de9900cbb3cb5d46.bindTooltip(
                `<div>
                     Person: Brahe, Tycho, 1546-1601
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_85f1ad59dcf7a64c7e1626832cd294c4 = L.circleMarker(
                [46.1456196, 15.0817358],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e1f958c1373e9253add36eb171c8a91a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2b663ec561a668b13d286f45f46249ea = $(`<div id="html_2b663ec561a668b13d286f45f46249ea" style="width: 100.0%; height: 100.0%;"><b>Zehentmair, Colmann, fl. 1593-1600</b><br>Home city: Hrastnik, Hrastnik, Slovenia<br>Letters in drawable network: 18</div>`)[0];
                popup_e1f958c1373e9253add36eb171c8a91a.setContent(html_2b663ec561a668b13d286f45f46249ea);
            
        

        circle_marker_85f1ad59dcf7a64c7e1626832cd294c4.bindPopup(popup_e1f958c1373e9253add36eb171c8a91a)
        ;

        
    
    
            circle_marker_85f1ad59dcf7a64c7e1626832cd294c4.bindTooltip(
                `<div>
                     Person: Zehentmair, Colmann, fl. 1593-1600
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_482c8da98452707f78cc32cb0c28ca21 = L.circleMarker(
                [51.8666527, 12.646761],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_91e33de22370e3defc5641fb01c8b957 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_be2f6583ba47c65de4910abe2c21d154 = $(`<div id="html_be2f6583ba47c65de4910abe2c21d154" style="width: 100.0%; height: 100.0%;"><b>Rhodius, Ambrosius, 1577-1633</b><br>Home city: Wittenberg, Saxony-Anhalt, Germany<br>Letters in drawable network: 18</div>`)[0];
                popup_91e33de22370e3defc5641fb01c8b957.setContent(html_be2f6583ba47c65de4910abe2c21d154);
            
        

        circle_marker_482c8da98452707f78cc32cb0c28ca21.bindPopup(popup_91e33de22370e3defc5641fb01c8b957)
        ;

        
    
    
            circle_marker_482c8da98452707f78cc32cb0c28ca21.bindTooltip(
                `<div>
                     Person: Rhodius, Ambrosius, 1577-1633
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_491f53d27b25a6c5d3fe6d65fbc24df4 = L.circleMarker(
                [52.1625283, 10.5348215],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_595d0f0ba365a593dc426c49b5e6ed51 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_26e257204df253a9dd8b9376e4b6b8f3 = $(`<div id="html_26e257204df253a9dd8b9376e4b6b8f3" style="width: 100.0%; height: 100.0%;"><b>Vicke, Nikolaus, fl. 1605</b><br>Home city: Wolfenbüttel, Lower Saxony, Germany<br>Letters in drawable network: 17</div>`)[0];
                popup_595d0f0ba365a593dc426c49b5e6ed51.setContent(html_26e257204df253a9dd8b9376e4b6b8f3);
            
        

        circle_marker_491f53d27b25a6c5d3fe6d65fbc24df4.bindPopup(popup_595d0f0ba365a593dc426c49b5e6ed51)
        ;

        
    
    
            circle_marker_491f53d27b25a6c5d3fe6d65fbc24df4.bindTooltip(
                `<div>
                     Person: Vicke, Nikolaus, fl. 1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2acf307e10944d359e8a91113c36877c = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_ace494208e6ac7d7d38a81145fc2efa6 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_276f32a4fc5b15c9ee9947aa3855de68 = $(`<div id="html_276f32a4fc5b15c9ee9947aa3855de68" style="width: 100.0%; height: 100.0%;"><b>Ursinus, Benjamin, 1587-1633</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 17</div>`)[0];
                popup_ace494208e6ac7d7d38a81145fc2efa6.setContent(html_276f32a4fc5b15c9ee9947aa3855de68);
            
        

        circle_marker_2acf307e10944d359e8a91113c36877c.bindPopup(popup_ace494208e6ac7d7d38a81145fc2efa6)
        ;

        
    
    
            circle_marker_2acf307e10944d359e8a91113c36877c.bindTooltip(
                `<div>
                     Person: Ursinus, Benjamin, 1587-1633
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5d3bc9e3d88c3c793abce1c4a34a725f = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_eb2e365bf495fc5fd90439bb0cf38af9 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_1ed80a579de90a5db03905cb6bd17c95 = $(`<div id="html_1ed80a579de90a5db03905cb6bd17c95" style="width: 100.0%; height: 100.0%;"><b>Quietanus, Johannes Remus, 1588-1654</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 17</div>`)[0];
                popup_eb2e365bf495fc5fd90439bb0cf38af9.setContent(html_1ed80a579de90a5db03905cb6bd17c95);
            
        

        circle_marker_5d3bc9e3d88c3c793abce1c4a34a725f.bindPopup(popup_eb2e365bf495fc5fd90439bb0cf38af9)
        ;

        
    
    
            circle_marker_5d3bc9e3d88c3c793abce1c4a34a725f.bindTooltip(
                `<div>
                     Person: Quietanus, Johannes Remus, 1588-1654
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8697d13c3a7404a3bee20acb6a2f8223 = L.circleMarker(
                [51.3406321, 12.3747329],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 3, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_36ba497ea9b23aeb90c4bdc1b637d85d = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a7d4c28c3a25dcefada9c58f8b18f5fd = $(`<div id="html_a7d4c28c3a25dcefada9c58f8b18f5fd" style="width: 100.0%; height: 100.0%;"><b>Müller, Philip, 1585-1659</b><br>Home city: Leipzig, Saxony, Germany<br>Letters in drawable network: 17</div>`)[0];
                popup_36ba497ea9b23aeb90c4bdc1b637d85d.setContent(html_a7d4c28c3a25dcefada9c58f8b18f5fd);
            
        

        circle_marker_8697d13c3a7404a3bee20acb6a2f8223.bindPopup(popup_36ba497ea9b23aeb90c4bdc1b637d85d)
        ;

        
    
    
            circle_marker_8697d13c3a7404a3bee20acb6a2f8223.bindTooltip(
                `<div>
                     Person: Müller, Philip, 1585-1659
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5704a5f825e9eccd11fa1dba38922b43 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0d547d0d77448744acdd2c965106921c = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e5581ec0c56200332c2df0c1e28febf4 = $(`<div id="html_e5581ec0c56200332c2df0c1e28febf4" style="width: 100.0%; height: 100.0%;"><b>Hafenreffer, Matthias, 1561-1619</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 15</div>`)[0];
                popup_0d547d0d77448744acdd2c965106921c.setContent(html_e5581ec0c56200332c2df0c1e28febf4);
            
        

        circle_marker_5704a5f825e9eccd11fa1dba38922b43.bindPopup(popup_0d547d0d77448744acdd2c965106921c)
        ;

        
    
    
            circle_marker_5704a5f825e9eccd11fa1dba38922b43.bindTooltip(
                `<div>
                     Person: Hafenreffer, Matthias, 1561-1619
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_cbdf8b9c9a69373ec67b1708925ecd1a = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a39ae6a3ed565c52ce2984a044210b67 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_386d2470de3fa63cef7ec898dc559920 = $(`<div id="html_386d2470de3fa63cef7ec898dc559920" style="width: 100.0%; height: 100.0%;"><b>Besold, Christoph, 1577-1638</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 15</div>`)[0];
                popup_a39ae6a3ed565c52ce2984a044210b67.setContent(html_386d2470de3fa63cef7ec898dc559920);
            
        

        circle_marker_cbdf8b9c9a69373ec67b1708925ecd1a.bindPopup(popup_a39ae6a3ed565c52ce2984a044210b67)
        ;

        
    
    
            circle_marker_cbdf8b9c9a69373ec67b1708925ecd1a.bindTooltip(
                `<div>
                     Person: Besold, Christoph, 1577-1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a2c203f8caa5b1500add4172d0d2c6a4 = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5f8ffa9384be7be778d7ec186d7649ee = L.popup({
  "maxWidth": 320,
});

        
            
                let html_15936c0c5f6ff81f54507e0e54c21a75 = $(`<div id="html_15936c0c5f6ff81f54507e0e54c21a75" style="width: 100.0%; height: 100.0%;"><b>Unknown</b><br>Home city: Dresden, Saxony, Germany<br>Letters in drawable network: 14</div>`)[0];
                popup_5f8ffa9384be7be778d7ec186d7649ee.setContent(html_15936c0c5f6ff81f54507e0e54c21a75);
            
        

        circle_marker_a2c203f8caa5b1500add4172d0d2c6a4.bindPopup(popup_5f8ffa9384be7be778d7ec186d7649ee)
        ;

        
    
    
            circle_marker_a2c203f8caa5b1500add4172d0d2c6a4.bindTooltip(
                `<div>
                     Person: Unknown
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_20f8eff079143e6197b4beb66bd1e446 = L.circleMarker(
                [51.3406321, 12.3747329],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_83be2a0567bb47b7fd0c3bdd05de3a61 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_09562cba7759d2958761626d0f4bfb54 = $(`<div id="html_09562cba7759d2958761626d0f4bfb54" style="width: 100.0%; height: 100.0%;"><b>Calvisius, Sethus, 1556-1615</b><br>Home city: Leipzig, Saxony, Germany<br>Letters in drawable network: 14</div>`)[0];
                popup_83be2a0567bb47b7fd0c3bdd05de3a61.setContent(html_09562cba7759d2958761626d0f4bfb54);
            
        

        circle_marker_20f8eff079143e6197b4beb66bd1e446.bindPopup(popup_83be2a0567bb47b7fd0c3bdd05de3a61)
        ;

        
    
    
            circle_marker_20f8eff079143e6197b4beb66bd1e446.bindTooltip(
                `<div>
                     Person: Calvisius, Sethus, 1556-1615
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2750e4f13a6bcac7ae13ef6874866c29 = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_fe10f35a06a47f86d51b3590967f51c1 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c88e8042928f70e812ef9afadadb3ec4 = $(`<div id="html_c88e8042928f70e812ef9afadadb3ec4" style="width: 100.0%; height: 100.0%;"><b>Rüttel, Friedrich, 1579-1634</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 14</div>`)[0];
                popup_fe10f35a06a47f86d51b3590967f51c1.setContent(html_c88e8042928f70e812ef9afadadb3ec4);
            
        

        circle_marker_2750e4f13a6bcac7ae13ef6874866c29.bindPopup(popup_fe10f35a06a47f86d51b3590967f51c1)
        ;

        
    
    
            circle_marker_2750e4f13a6bcac7ae13ef6874866c29.bindTooltip(
                `<div>
                     Person: Rüttel, Friedrich, 1579-1634
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_da8b319ce2b8376f90a8807f5c80a343 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_12ff43495e459bfa08f0bd22a89c7f9c = L.popup({
  "maxWidth": 320,
});

        
            
                let html_450a67a64828cadacf4c8111a1932376 = $(`<div id="html_450a67a64828cadacf4c8111a1932376" style="width: 100.0%; height: 100.0%;"><b>Guldin, Paul, 1577-1643</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 14</div>`)[0];
                popup_12ff43495e459bfa08f0bd22a89c7f9c.setContent(html_450a67a64828cadacf4c8111a1932376);
            
        

        circle_marker_da8b319ce2b8376f90a8807f5c80a343.bindPopup(popup_12ff43495e459bfa08f0bd22a89c7f9c)
        ;

        
    
    
            circle_marker_da8b319ce2b8376f90a8807f5c80a343.bindTooltip(
                `<div>
                     Person: Guldin, Paul, 1577-1643
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_386207c1a3ce32c6f2d2ce9936f1bdf8 = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_83ba45d111fccf76ecf709513d96ed86 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_5a58c2807ba864bdb1d95800ee8d13fb = $(`<div id="html_5a58c2807ba864bdb1d95800ee8d13fb" style="width: 100.0%; height: 100.0%;"><b>Württemberg, Friedrich I von, 1557-1608</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 13</div>`)[0];
                popup_83ba45d111fccf76ecf709513d96ed86.setContent(html_5a58c2807ba864bdb1d95800ee8d13fb);
            
        

        circle_marker_386207c1a3ce32c6f2d2ce9936f1bdf8.bindPopup(popup_83ba45d111fccf76ecf709513d96ed86)
        ;

        
    
    
            circle_marker_386207c1a3ce32c6f2d2ce9936f1bdf8.bindTooltip(
                `<div>
                     Person: Württemberg, Friedrich I von, 1557-1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7712fd91b8d1b6ee29142b831355391b = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5ee188d00b993e415847dbd58892f595 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_862e069acf65115907bec650020648f8 = $(`<div id="html_862e069acf65115907bec650020648f8" style="width: 100.0%; height: 100.0%;"><b>Württemberg, Johann Friedrich von, 1582-1628</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 13</div>`)[0];
                popup_5ee188d00b993e415847dbd58892f595.setContent(html_862e069acf65115907bec650020648f8);
            
        

        circle_marker_7712fd91b8d1b6ee29142b831355391b.bindPopup(popup_5ee188d00b993e415847dbd58892f595)
        ;

        
    
    
            circle_marker_7712fd91b8d1b6ee29142b831355391b.bindTooltip(
                `<div>
                     Person: Württemberg, Johann Friedrich von, 1582-1628
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5cd6f2ac952489a1cca11ff336530977 = L.circleMarker(
                [44.4938203, 11.3426327],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b6be75e3b864be72b9aaac13a19c9858 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f192f63645dbeb93430a1645dce984fd = $(`<div id="html_f192f63645dbeb93430a1645dce984fd" style="width: 100.0%; height: 100.0%;"><b>Horký, Martin, fl. 1610</b><br>Home city: Bologna, Emilia-Romagna, Italy<br>Letters in drawable network: 12</div>`)[0];
                popup_b6be75e3b864be72b9aaac13a19c9858.setContent(html_f192f63645dbeb93430a1645dce984fd);
            
        

        circle_marker_5cd6f2ac952489a1cca11ff336530977.bindPopup(popup_b6be75e3b864be72b9aaac13a19c9858)
        ;

        
    
    
            circle_marker_5cd6f2ac952489a1cca11ff336530977.bindTooltip(
                `<div>
                     Person: Horký, Martin, fl. 1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ddc8409cfd146854ab77388daa62cb58 = L.circleMarker(
                [45.4046171, 12.3105232],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0ec652166d2021106b1162807ce4b49a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_3d310ee710ccf72c1f10c2a34d0ba285 = $(`<div id="html_3d310ee710ccf72c1f10c2a34d0ba285" style="width: 100.0%; height: 100.0%;"><b>Bianchi, Vincenzo, 1583-1637</b><br>Home city: Venice, Veneto, Italy<br>Letters in drawable network: 12</div>`)[0];
                popup_0ec652166d2021106b1162807ce4b49a.setContent(html_3d310ee710ccf72c1f10c2a34d0ba285);
            
        

        circle_marker_ddc8409cfd146854ab77388daa62cb58.bindPopup(popup_0ec652166d2021106b1162807ce4b49a)
        ;

        
    
    
            circle_marker_ddc8409cfd146854ab77388daa62cb58.bindTooltip(
                `<div>
                     Person: Bianchi, Vincenzo, 1583-1637
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_89dfbf9f7ab27cd4c083b840a2b4d4f5 = L.circleMarker(
                [51.3406321, 12.3747329],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_00d4d377fd08fea005dcd4b1cebdec83 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2184d43f2faf91c7c09a05b8abbc2289 = $(`<div id="html_2184d43f2faf91c7c09a05b8abbc2289" style="width: 100.0%; height: 100.0%;"><b>Tanckius, Joachim, 1557-1609</b><br>Home city: Leipzig, Saxony, Germany<br>Letters in drawable network: 11</div>`)[0];
                popup_00d4d377fd08fea005dcd4b1cebdec83.setContent(html_2184d43f2faf91c7c09a05b8abbc2289);
            
        

        circle_marker_89dfbf9f7ab27cd4c083b840a2b4d4f5.bindPopup(popup_00d4d377fd08fea005dcd4b1cebdec83)
        ;

        
    
    
            circle_marker_89dfbf9f7ab27cd4c083b840a2b4d4f5.bindTooltip(
                `<div>
                     Person: Tanckius, Joachim, 1557-1609
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4b615698d8cd33a304d9850b512b7fc1 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_556c07f13e560f111289c99adfcbf3a4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ea26870c6be31b7535b1542077461f91 = $(`<div id="html_ea26870c6be31b7535b1542077461f91" style="width: 100.0%; height: 100.0%;"><b>Mingonius, Thomas, fl. 1608</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 11</div>`)[0];
                popup_556c07f13e560f111289c99adfcbf3a4.setContent(html_ea26870c6be31b7535b1542077461f91);
            
        

        circle_marker_4b615698d8cd33a304d9850b512b7fc1.bindPopup(popup_556c07f13e560f111289c99adfcbf3a4)
        ;

        
    
    
            circle_marker_4b615698d8cd33a304d9850b512b7fc1.bindTooltip(
                `<div>
                     Person: Mingonius, Thomas, fl. 1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_769fba7ebc68b7bece965a777d5e26ca = L.circleMarker(
                [53.793587, 12.1764906],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_45410862dfb043d8511400e724cc44e1 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a9f15e07c49aeb93d338817bf5509fa3 = $(`<div id="html_a9f15e07c49aeb93d338817bf5509fa3" style="width: 100.0%; height: 100.0%;"><b>Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634</b><br>Home city: Güstrow, Mecklenburg-Vorpommern, Germany<br>Letters in drawable network: 11</div>`)[0];
                popup_45410862dfb043d8511400e724cc44e1.setContent(html_a9f15e07c49aeb93d338817bf5509fa3);
            
        

        circle_marker_769fba7ebc68b7bece965a777d5e26ca.bindPopup(popup_45410862dfb043d8511400e724cc44e1)
        ;

        
    
    
            circle_marker_769fba7ebc68b7bece965a777d5e26ca.bindTooltip(
                `<div>
                     Person: Wallenstein, Albrecht Wenzel Eusebius von, 1583-1634
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ca99eb57f501f883b1576409d76d57eb = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1663efd0de85d4f3cd3631cd30389a7f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_322ef8e38c5abd489572a6df4fc20e1e = $(`<div id="html_322ef8e38c5abd489572a6df4fc20e1e" style="width: 100.0%; height: 100.0%;"><b>Dietrichstein, Ludwig von, 1533-1615</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 10</div>`)[0];
                popup_1663efd0de85d4f3cd3631cd30389a7f.setContent(html_322ef8e38c5abd489572a6df4fc20e1e);
            
        

        circle_marker_ca99eb57f501f883b1576409d76d57eb.bindPopup(popup_1663efd0de85d4f3cd3631cd30389a7f)
        ;

        
    
    
            circle_marker_ca99eb57f501f883b1576409d76d57eb.bindTooltip(
                `<div>
                     Person: Dietrichstein, Ludwig von, 1533-1615
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_860b1588d78970714fca39ac48544a69 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1bef4e4606e6f5cf17e6628fd1a5b672 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_26859f3a80965d7f54c06b1b21e2b628 = $(`<div id="html_26859f3a80965d7f54c06b1b21e2b628" style="width: 100.0%; height: 100.0%;"><b>Taxis, Gerhard von, 1578-1654</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 10</div>`)[0];
                popup_1bef4e4606e6f5cf17e6628fd1a5b672.setContent(html_26859f3a80965d7f54c06b1b21e2b628);
            
        

        circle_marker_860b1588d78970714fca39ac48544a69.bindPopup(popup_1bef4e4606e6f5cf17e6628fd1a5b672)
        ;

        
    
    
            circle_marker_860b1588d78970714fca39ac48544a69.bindTooltip(
                `<div>
                     Person: Taxis, Gerhard von, 1578-1654
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e1366ba3eea7b55143f4b700f5f6975d = L.circleMarker(
                [48.584614, 7.7507127],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6c3d17c3e42be85b557129b816d8ac0e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_09f9aac3d96704bfe8e83dbb59c75065 = $(`<div id="html_09f9aac3d96704bfe8e83dbb59c75065" style="width: 100.0%; height: 100.0%;"><b>Crusius, Florian, fl. 1609-1650</b><br>Home city: Strasbourg, Grand Est, France<br>Letters in drawable network: 10</div>`)[0];
                popup_6c3d17c3e42be85b557129b816d8ac0e.setContent(html_09f9aac3d96704bfe8e83dbb59c75065);
            
        

        circle_marker_e1366ba3eea7b55143f4b700f5f6975d.bindPopup(popup_6c3d17c3e42be85b557129b816d8ac0e)
        ;

        
    
    
            circle_marker_e1366ba3eea7b55143f4b700f5f6975d.bindTooltip(
                `<div>
                     Person: Crusius, Florian, fl. 1609-1650
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_da32db869c329b3f2e44e1ec52e00e3a = L.circleMarker(
                [48.1598261, 14.0758845],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b6f8a385c5ae17a60e7319ddca7d7c73 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_acb797fa6ec7e4a3dcd5f4a8c465546b = $(`<div id="html_acb797fa6ec7e4a3dcd5f4a8c465546b" style="width: 100.0%; height: 100.0%;"><b>Schallenberg, Georg Christoph von, fl. 1638</b><br>Home city: Castle Leombach, Leombach, Upper Austria, Austria<br>Letters in drawable network: 10</div>`)[0];
                popup_b6f8a385c5ae17a60e7319ddca7d7c73.setContent(html_acb797fa6ec7e4a3dcd5f4a8c465546b);
            
        

        circle_marker_da32db869c329b3f2e44e1ec52e00e3a.bindPopup(popup_b6f8a385c5ae17a60e7319ddca7d7c73)
        ;

        
    
    
            circle_marker_da32db869c329b3f2e44e1ec52e00e3a.bindTooltip(
                `<div>
                     Person: Schallenberg, Georg Christoph von, fl. 1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bee77907971a8d017c79051f3febb1f1 = L.circleMarker(
                [44.4938203, 11.3426327],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_45c1428554a144c59794d16e108c5ae9 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e746f44a2e585b40966e06c99200b801 = $(`<div id="html_e746f44a2e585b40966e06c99200b801" style="width: 100.0%; height: 100.0%;"><b>Magini, Giovanni Antonio, 1555-1617</b><br>Home city: Bologna, Emilia-Romagna, Italy<br>Letters in drawable network: 9</div>`)[0];
                popup_45c1428554a144c59794d16e108c5ae9.setContent(html_e746f44a2e585b40966e06c99200b801);
            
        

        circle_marker_bee77907971a8d017c79051f3febb1f1.bindPopup(popup_45c1428554a144c59794d16e108c5ae9)
        ;

        
    
    
            circle_marker_bee77907971a8d017c79051f3febb1f1.bindTooltip(
                `<div>
                     Person: Magini, Giovanni Antonio, 1555-1617
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_86eb4e66d97c28bf4e6f5c55b6dbdbd4 = L.circleMarker(
                [47.8803788, 10.622246],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_492e47d535bea20746c5b9e5c9f4cf8f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_36d80f47e7a0aad22b1edb38d2e504ed = $(`<div id="html_36d80f47e7a0aad22b1edb38d2e504ed" style="width: 100.0%; height: 100.0%;"><b>Brengger, Johann Georg, 1559-1637 or after</b><br>Home city: Kaufbeuren, Bavaria, Germany<br>Letters in drawable network: 9</div>`)[0];
                popup_492e47d535bea20746c5b9e5c9f4cf8f.setContent(html_36d80f47e7a0aad22b1edb38d2e504ed);
            
        

        circle_marker_86eb4e66d97c28bf4e6f5c55b6dbdbd4.bindPopup(popup_492e47d535bea20746c5b9e5c9f4cf8f)
        ;

        
    
    
            circle_marker_86eb4e66d97c28bf4e6f5c55b6dbdbd4.bindTooltip(
                `<div>
                     Person: Brengger, Johann Georg, 1559-1637 or after
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_126c01955a109ec6d3004595f57ccc85 = L.circleMarker(
                [49.9995205, 8.2736253],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6c8ce34d1316e1d5e79efd4189cd9bb5 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_76fcf3b1163a69e371267f013c016803 = $(`<div id="html_76fcf3b1163a69e371267f013c016803" style="width: 100.0%; height: 100.0%;"><b>Ziegler, Johannes Reinhard, 1569-1636</b><br>Home city: Mainz, Rhineland-Palatinate, Germany<br>Letters in drawable network: 9</div>`)[0];
                popup_6c8ce34d1316e1d5e79efd4189cd9bb5.setContent(html_76fcf3b1163a69e371267f013c016803);
            
        

        circle_marker_126c01955a109ec6d3004595f57ccc85.bindPopup(popup_6c8ce34d1316e1d5e79efd4189cd9bb5)
        ;

        
    
    
            circle_marker_126c01955a109ec6d3004595f57ccc85.bindTooltip(
                `<div>
                     Person: Ziegler, Johannes Reinhard, 1569-1636
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0a114fe24b9161a6f4ad14f11bd20fcb = L.circleMarker(
                [49.5940567, 17.251143],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_218717a8399122966b366b60d2437a16 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_39dd9798db42f30b27c349bce854de50 = $(`<div id="html_39dd9798db42f30b27c349bce854de50" style="width: 100.0%; height: 100.0%;"><b>Decker, Joannes, fl. 1605</b><br>Home city: Olomouc, Moravia, Czech Republic<br>Letters in drawable network: 9</div>`)[0];
                popup_218717a8399122966b366b60d2437a16.setContent(html_39dd9798db42f30b27c349bce854de50);
            
        

        circle_marker_0a114fe24b9161a6f4ad14f11bd20fcb.bindPopup(popup_218717a8399122966b366b60d2437a16)
        ;

        
    
    
            circle_marker_0a114fe24b9161a6f4ad14f11bd20fcb.bindTooltip(
                `<div>
                     Person: Decker, Joannes, fl. 1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b6914ca50d503a770defe5a441b4ffaa = L.circleMarker(
                [48.3082607, 14.0203999],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_fc3003168bd19403ee9b3d27f5fcbf3b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9fe797cda6eaa26c84ac36d60e0ec4f0 = $(`<div id="html_9fe797cda6eaa26c84ac36d60e0ec4f0" style="width: 100.0%; height: 100.0%;"><b>Starhemberg, Erasmus von, 1575-1648</b><br>Home city: Eferding, Upper Austria, Austria<br>Letters in drawable network: 8</div>`)[0];
                popup_fc3003168bd19403ee9b3d27f5fcbf3b.setContent(html_9fe797cda6eaa26c84ac36d60e0ec4f0);
            
        

        circle_marker_b6914ca50d503a770defe5a441b4ffaa.bindPopup(popup_fc3003168bd19403ee9b3d27f5fcbf3b)
        ;

        
    
    
            circle_marker_b6914ca50d503a770defe5a441b4ffaa.bindTooltip(
                `<div>
                     Person: Starhemberg, Erasmus von, 1575-1648
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_718cefa992cf95fec7a5eb32c9cbf802 = L.circleMarker(
                [51.2211097, 4.3997081],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0b86b7ad6b0653ffe2fb222c79f86063 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_90ae54dc93269d0f9694cd7756656c86 = $(`<div id="html_90ae54dc93269d0f9694cd7756656c86" style="width: 100.0%; height: 100.0%;"><b>Pisani, Ottavio, b.1575</b><br>Home city: Antwerp, Flanders, Belgium<br>Letters in drawable network: 8</div>`)[0];
                popup_0b86b7ad6b0653ffe2fb222c79f86063.setContent(html_90ae54dc93269d0f9694cd7756656c86);
            
        

        circle_marker_718cefa992cf95fec7a5eb32c9cbf802.bindPopup(popup_0b86b7ad6b0653ffe2fb222c79f86063)
        ;

        
    
    
            circle_marker_718cefa992cf95fec7a5eb32c9cbf802.bindTooltip(
                `<div>
                     Person: Pisani, Ottavio, b.1575
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_39c1c170f8b874b9f001d5416a67d31d = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_188d716c99168563beff20cddc33b69f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_aaa4ef7346552a255c680ad349a56046 = $(`<div id="html_aaa4ef7346552a255c680ad349a56046" style="width: 100.0%; height: 100.0%;"><b>Gringallet, Janus, 1591-1622</b><br>Home city: Linz, Upper Austria, Austria<br>Letters in drawable network: 8</div>`)[0];
                popup_188d716c99168563beff20cddc33b69f.setContent(html_aaa4ef7346552a255c680ad349a56046);
            
        

        circle_marker_39c1c170f8b874b9f001d5416a67d31d.bindPopup(popup_188d716c99168563beff20cddc33b69f)
        ;

        
    
    
            circle_marker_39c1c170f8b874b9f001d5416a67d31d.bindTooltip(
                `<div>
                     Person: Gringallet, Janus, 1591-1622
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_672cede1d5b328a10cc8fac752e462a0 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_66aeae4f8d3da607b78df5a72aa39601 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_41c86823f04c1acbf96b3ee08d1bba3b = $(`<div id="html_41c86823f04c1acbf96b3ee08d1bba3b" style="width: 100.0%; height: 100.0%;"><b>Tübingen University, formed 1477</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 7</div>`)[0];
                popup_66aeae4f8d3da607b78df5a72aa39601.setContent(html_41c86823f04c1acbf96b3ee08d1bba3b);
            
        

        circle_marker_672cede1d5b328a10cc8fac752e462a0.bindPopup(popup_66aeae4f8d3da607b78df5a72aa39601)
        ;

        
    
    
            circle_marker_672cede1d5b328a10cc8fac752e462a0.bindTooltip(
                `<div>
                     Person: Tübingen University, formed 1477
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c117833e423e1a997641e638af8fd2bc = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_533549c31e1d22e1f0df65c5e83c13b2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_b69b7d14a0fa2ef74ce2335d26761a32 = $(`<div id="html_b69b7d14a0fa2ef74ce2335d26761a32" style="width: 100.0%; height: 100.0%;"><b>Hoffmann, Johannes Fridericus, fl. 1600</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 7</div>`)[0];
                popup_533549c31e1d22e1f0df65c5e83c13b2.setContent(html_b69b7d14a0fa2ef74ce2335d26761a32);
            
        

        circle_marker_c117833e423e1a997641e638af8fd2bc.bindPopup(popup_533549c31e1d22e1f0df65c5e83c13b2)
        ;

        
    
    
            circle_marker_c117833e423e1a997641e638af8fd2bc.bindTooltip(
                `<div>
                     Person: Hoffmann, Johannes Fridericus, fl. 1600
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3bac1275d44af082c4b0facb256d2ddc = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4235bf863a085af45841db38155d9d12 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_1140fecdf2d5768a2a2e8a6d7763cf53 = $(`<div id="html_1140fecdf2d5768a2a2e8a6d7763cf53" style="width: 100.0%; height: 100.0%;"><b>Medici, Giuliano de', fl. 1610-1611</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 7</div>`)[0];
                popup_4235bf863a085af45841db38155d9d12.setContent(html_1140fecdf2d5768a2a2e8a6d7763cf53);
            
        

        circle_marker_3bac1275d44af082c4b0facb256d2ddc.bindPopup(popup_4235bf863a085af45841db38155d9d12)
        ;

        
    
    
            circle_marker_3bac1275d44af082c4b0facb256d2ddc.bindTooltip(
                `<div>
                     Person: Medici, Giuliano de', fl. 1610-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_073440935fd86120d3b4e632864976db = L.circleMarker(
                [48.5621964, 12.0859345],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_53116e46677096ef210c41cfed6a330c = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a81e2259526c02e354f9630b5bc45953 = $(`<div id="html_a81e2259526c02e354f9630b5bc45953" style="width: 100.0%; height: 100.0%;"><b>Odontius, Johann Caspar, 1580-1626</b><br>Home city: Altdorf, Bavaria, Germany<br>Letters in drawable network: 6</div>`)[0];
                popup_53116e46677096ef210c41cfed6a330c.setContent(html_a81e2259526c02e354f9630b5bc45953);
            
        

        circle_marker_073440935fd86120d3b4e632864976db.bindPopup(popup_53116e46677096ef210c41cfed6a330c)
        ;

        
    
    
            circle_marker_073440935fd86120d3b4e632864976db.bindTooltip(
                `<div>
                     Person: Odontius, Johann Caspar, 1580-1626
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_16466c2222534077e5a4473df28f46b8 = L.circleMarker(
                [50.41768, 8.63873],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_95619fd0eae5baed5e424d7dbc7547f3 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_3d5a2df317eef37216fb04086e51ffbc = $(`<div id="html_3d5a2df317eef37216fb04086e51ffbc" style="width: 100.0%; height: 100.0%;"><b>Hessen-Butzbach, Philipp III von, 1581-1643</b><br>Home city: Butzbach, Hesse, Germany, (Holy Roman Empire)<br>Letters in drawable network: 6</div>`)[0];
                popup_95619fd0eae5baed5e424d7dbc7547f3.setContent(html_3d5a2df317eef37216fb04086e51ffbc);
            
        

        circle_marker_16466c2222534077e5a4473df28f46b8.bindPopup(popup_95619fd0eae5baed5e424d7dbc7547f3)
        ;

        
    
    
            circle_marker_16466c2222534077e5a4473df28f46b8.bindTooltip(
                `<div>
                     Person: Hessen-Butzbach, Philipp III von, 1581-1643
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_295644c5de3a14ff13235464cce763b9 = L.circleMarker(
                [51.1147105, 15.2811574],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3f8f4019ee31c15cf4d74cb345f3984e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_08610b872fdd3704c6a0f3c49449405d = $(`<div id="html_08610b872fdd3704c6a0f3c49449405d" style="width: 100.0%; height: 100.0%;"><b>Bartsch, Jakob, 1600-1633</b><br>Home city: Lubań, Lower Silesia, Poland<br>Letters in drawable network: 6</div>`)[0];
                popup_3f8f4019ee31c15cf4d74cb345f3984e.setContent(html_08610b872fdd3704c6a0f3c49449405d);
            
        

        circle_marker_295644c5de3a14ff13235464cce763b9.bindPopup(popup_3f8f4019ee31c15cf4d74cb345f3984e)
        ;

        
    
    
            circle_marker_295644c5de3a14ff13235464cce763b9.bindTooltip(
                `<div>
                     Person: Bartsch, Jakob, 1600-1633
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_73e72f6f2d18ea2c546dcacc1d94377b = L.circleMarker(
                [48.577185, 10.4943532],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_36c277de8078f9cdaeb86882c020b9ab = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f3c59304315d35e09213ecac28a98685 = $(`<div id="html_f3c59304315d35e09213ecac28a98685" style="width: 100.0%; height: 100.0%;"><b>Curtz, Albert, 1600-1671</b><br>Home city: Dillingen an der Donau, Bavaria, Germany<br>Letters in drawable network: 6</div>`)[0];
                popup_36c277de8078f9cdaeb86882c020b9ab.setContent(html_f3c59304315d35e09213ecac28a98685);
            
        

        circle_marker_73e72f6f2d18ea2c546dcacc1d94377b.bindPopup(popup_36c277de8078f9cdaeb86882c020b9ab)
        ;

        
    
    
            circle_marker_73e72f6f2d18ea2c546dcacc1d94377b.bindTooltip(
                `<div>
                     Person: Curtz, Albert, 1600-1671
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_03e1365337f101123d2db8e9e30238cc = L.circleMarker(
                [43.7697955, 11.2556404],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a66c0c4b09407bbc7091a408d6ec5001 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a7dd7824028a5cbb659d6046ebe19a81 = $(`<div id="html_a7dd7824028a5cbb659d6046ebe19a81" style="width: 100.0%; height: 100.0%;"><b>Bruce, Edmund, fl. 1597-1605</b><br>Home city: Florence, Tuscany, Italy<br>Letters in drawable network: 5</div>`)[0];
                popup_a66c0c4b09407bbc7091a408d6ec5001.setContent(html_a7dd7824028a5cbb659d6046ebe19a81);
            
        

        circle_marker_03e1365337f101123d2db8e9e30238cc.bindPopup(popup_a66c0c4b09407bbc7091a408d6ec5001)
        ;

        
    
    
            circle_marker_03e1365337f101123d2db8e9e30238cc.bindTooltip(
                `<div>
                     Person: Bruce, Edmund, fl. 1597-1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_066e967269ec78c7b20f180e2acb837c = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_ddd3af7245d5c665353677aaef7fe807 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_fa510e5d2158ed64bf6882ed21712853 = $(`<div id="html_fa510e5d2158ed64bf6882ed21712853" style="width: 100.0%; height: 100.0%;"><b>Rudolf II, 1552-1612</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 5</div>`)[0];
                popup_ddd3af7245d5c665353677aaef7fe807.setContent(html_fa510e5d2158ed64bf6882ed21712853);
            
        

        circle_marker_066e967269ec78c7b20f180e2acb837c.bindPopup(popup_ddd3af7245d5c665353677aaef7fe807)
        ;

        
    
    
            circle_marker_066e967269ec78c7b20f180e2acb837c.bindTooltip(
                `<div>
                     Person: Rudolf II, 1552-1612
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c4a0282e5f25cc9fa235c47d2e775c9e = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_eb2fe2e81491a4eb1d35e5d738c78be3 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e51771eeccd81d398f025edbfd19b454 = $(`<div id="html_e51771eeccd81d398f025edbfd19b454" style="width: 100.0%; height: 100.0%;"><b>Hafenreffer, Samuel, 1587-1660</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 5</div>`)[0];
                popup_eb2fe2e81491a4eb1d35e5d738c78be3.setContent(html_e51771eeccd81d398f025edbfd19b454);
            
        

        circle_marker_c4a0282e5f25cc9fa235c47d2e775c9e.bindPopup(popup_eb2fe2e81491a4eb1d35e5d738c78be3)
        ;

        
    
    
            circle_marker_c4a0282e5f25cc9fa235c47d2e775c9e.bindTooltip(
                `<div>
                     Person: Hafenreffer, Samuel, 1587-1660
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c476b95ea66f9e7de0e4b650c9e7abdb = L.circleMarker(
                [51.5074456, -0.1277653],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4e082dca70ab6f4bba1e8e53b3435a3d = L.popup({
  "maxWidth": 320,
});

        
            
                let html_fd449ef25a1283bff27fcc743bb5df68 = $(`<div id="html_fd449ef25a1283bff27fcc743bb5df68" style="width: 100.0%; height: 100.0%;"><b>Harriot, Thomas, 1560-1621</b><br>Home city: London, England, United Kingdom<br>Letters in drawable network: 5</div>`)[0];
                popup_4e082dca70ab6f4bba1e8e53b3435a3d.setContent(html_fd449ef25a1283bff27fcc743bb5df68);
            
        

        circle_marker_c476b95ea66f9e7de0e4b650c9e7abdb.bindPopup(popup_4e082dca70ab6f4bba1e8e53b3435a3d)
        ;

        
    
    
            circle_marker_c476b95ea66f9e7de0e4b650c9e7abdb.bindTooltip(
                `<div>
                     Person: Harriot, Thomas, 1560-1621
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6dcb707bb87d2c10d5c788f13d3734ec = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_728346b8461ff550c463b3dbb7fe222e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2857e7b0e1dbe855a6ec8ee87da0c359 = $(`<div id="html_2857e7b0e1dbe855a6ec8ee87da0c359" style="width: 100.0%; height: 100.0%;"><b>Upper Austria, Estates of</b><br>Home city: Linz, Upper Austria, Austria<br>Letters in drawable network: 5</div>`)[0];
                popup_728346b8461ff550c463b3dbb7fe222e.setContent(html_2857e7b0e1dbe855a6ec8ee87da0c359);
            
        

        circle_marker_6dcb707bb87d2c10d5c788f13d3734ec.bindPopup(popup_728346b8461ff550c463b3dbb7fe222e)
        ;

        
    
    
            circle_marker_6dcb707bb87d2c10d5c788f13d3734ec.bindTooltip(
                `<div>
                     Person: Upper Austria, Estates of
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4cef82bc1519a8047b7489c93a712d04 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b1412a6e0271445f57158541e8ac0b5b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d0ee0f3c64497f12913e41fcbffdf6a4 = $(`<div id="html_d0ee0f3c64497f12913e41fcbffdf6a4" style="width: 100.0%; height: 100.0%;"><b>Lansius, Thomas, 1577-1657</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 5</div>`)[0];
                popup_b1412a6e0271445f57158541e8ac0b5b.setContent(html_d0ee0f3c64497f12913e41fcbffdf6a4);
            
        

        circle_marker_4cef82bc1519a8047b7489c93a712d04.bindPopup(popup_b1412a6e0271445f57158541e8ac0b5b)
        ;

        
    
    
            circle_marker_4cef82bc1519a8047b7489c93a712d04.bindTooltip(
                `<div>
                     Person: Lansius, Thomas, 1577-1657
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6b7a44d6fd88e31c35249a544dbb5583 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_ace176b084c4c2e5a0793e62ab40e543 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_5c7e71432facf9337c54861e7b8884f7 = $(`<div id="html_5c7e71432facf9337c54861e7b8884f7" style="width: 100.0%; height: 100.0%;"><b>Longomontanus, Christian Sørensen, 1562-1647</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 4</div>`)[0];
                popup_ace176b084c4c2e5a0793e62ab40e543.setContent(html_5c7e71432facf9337c54861e7b8884f7);
            
        

        circle_marker_6b7a44d6fd88e31c35249a544dbb5583.bindPopup(popup_ace176b084c4c2e5a0793e62ab40e543)
        ;

        
    
    
            circle_marker_6b7a44d6fd88e31c35249a544dbb5583.bindTooltip(
                `<div>
                     Person: Longomontanus, Christian Sørensen, 1562-1647
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e3da302b15159b4e7d4919e02fdff114 = L.circleMarker(
                [51.8666527, 12.646761],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c6ef798f7b6e669c11a4608d76f8b457 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d732fa0499875ceb1868445dfe620334 = $(`<div id="html_d732fa0499875ceb1868445dfe620334" style="width: 100.0%; height: 100.0%;"><b>Jöstel, Melchior, 1559-1611</b><br>Home city: Wittenberg, Saxony-Anhalt, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_c6ef798f7b6e669c11a4608d76f8b457.setContent(html_d732fa0499875ceb1868445dfe620334);
            
        

        circle_marker_e3da302b15159b4e7d4919e02fdff114.bindPopup(popup_c6ef798f7b6e669c11a4608d76f8b457)
        ;

        
    
    
            circle_marker_e3da302b15159b4e7d4919e02fdff114.bindTooltip(
                `<div>
                     Person: Jöstel, Melchior, 1559-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d3db18b8971b3bc7970d1ee4d28794a8 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3b86634a83bbfb016ca17033b8d44fb2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f9985de1b952886ea13530c5a843059e = $(`<div id="html_f9985de1b952886ea13530c5a843059e" style="width: 100.0%; height: 100.0%;"><b>Eriksen, Johannes, fl. 1599-1601</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 4</div>`)[0];
                popup_3b86634a83bbfb016ca17033b8d44fb2.setContent(html_f9985de1b952886ea13530c5a843059e);
            
        

        circle_marker_d3db18b8971b3bc7970d1ee4d28794a8.bindPopup(popup_3b86634a83bbfb016ca17033b8d44fb2)
        ;

        
    
    
            circle_marker_d3db18b8971b3bc7970d1ee4d28794a8.bindTooltip(
                `<div>
                     Person: Eriksen, Johannes, fl. 1599-1601
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_17a232ae13b98d8fa85acb2c00dd8e92 = L.circleMarker(
                [52.3412273, 14.549452],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_de410704741bffb56f0bb3cfb79c50bd = L.popup({
  "maxWidth": 320,
});

        
            
                let html_3c3d2daa068b2fccc41c512619a78005 = $(`<div id="html_3c3d2daa068b2fccc41c512619a78005" style="width: 100.0%; height: 100.0%;"><b>Origanus, David, 1558-1629</b><br>Home city: Frankfurt (Oder), Brandenburg, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_de410704741bffb56f0bb3cfb79c50bd.setContent(html_3c3d2daa068b2fccc41c512619a78005);
            
        

        circle_marker_17a232ae13b98d8fa85acb2c00dd8e92.bindPopup(popup_de410704741bffb56f0bb3cfb79c50bd)
        ;

        
    
    
            circle_marker_17a232ae13b98d8fa85acb2c00dd8e92.bindTooltip(
                `<div>
                     Person: Origanus, David, 1558-1629
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f5e8e5279cad967d4e5eedb52394c98c = L.circleMarker(
                [53.0758196, 8.8071646],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_bfa27ab96b3be644f063ae730da5e112 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_634b6c328eed6029387981c5d505c76d = $(`<div id="html_634b6c328eed6029387981c5d505c76d" style="width: 100.0%; height: 100.0%;"><b>Riddershusius, Ludolph, fl. 1594-1603</b><br>Home city: Bremen, Bremen, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_bfa27ab96b3be644f063ae730da5e112.setContent(html_634b6c328eed6029387981c5d505c76d);
            
        

        circle_marker_f5e8e5279cad967d4e5eedb52394c98c.bindPopup(popup_bfa27ab96b3be644f063ae730da5e112)
        ;

        
    
    
            circle_marker_f5e8e5279cad967d4e5eedb52394c98c.bindTooltip(
                `<div>
                     Person: Riddershusius, Ludolph, fl. 1594-1603
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_39006fe75edc8c02875c38366fd86ee9 = L.circleMarker(
                [48.745628, 11.1879622],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_48f917074ea7277e96e17dc261668a15 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_45b23c0374aa5b859b1c555c1bfaecfc = $(`<div id="html_45b23c0374aa5b859b1c555c1bfaecfc" style="width: 100.0%; height: 100.0%;"><b>Pfalz-Neuberg, Wolfgang Wilhelm von, 1578-1653</b><br>Home city: Neuburg an der Donau, Bavaria, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_48f917074ea7277e96e17dc261668a15.setContent(html_45b23c0374aa5b859b1c555c1bfaecfc);
            
        

        circle_marker_39006fe75edc8c02875c38366fd86ee9.bindPopup(popup_48f917074ea7277e96e17dc261668a15)
        ;

        
    
    
            circle_marker_39006fe75edc8c02875c38366fd86ee9.bindTooltip(
                `<div>
                     Person: Pfalz-Neuberg, Wolfgang Wilhelm von, 1578-1653
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0b9849b437155d131358d6a1da9a896d = L.circleMarker(
                [49.9995205, 8.2736253],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e1b8452ca701f9bb93080cc2e0ccf240 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a357db849825534d87f6efc59a86788c = $(`<div id="html_a357db849825534d87f6efc59a86788c" style="width: 100.0%; height: 100.0%;"><b>Serarius, Nicolaus, 1555-1609</b><br>Home city: Mainz, Rhineland-Palatinate, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_e1b8452ca701f9bb93080cc2e0ccf240.setContent(html_a357db849825534d87f6efc59a86788c);
            
        

        circle_marker_0b9849b437155d131358d6a1da9a896d.bindPopup(popup_e1b8452ca701f9bb93080cc2e0ccf240)
        ;

        
    
    
            circle_marker_0b9849b437155d131358d6a1da9a896d.bindTooltip(
                `<div>
                     Person: Serarius, Nicolaus, 1555-1609
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e7751b6b2b99241ef433386ad91db3da = L.circleMarker(
                [51.1563185, 14.991018],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3575344eab7917ebb4cb7524ed6e3765 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_22d6133d59543f09d29df8ebc2a65866 = $(`<div id="html_22d6133d59543f09d29df8ebc2a65866" style="width: 100.0%; height: 100.0%;"><b>Eichler, Gregor, 1562-1611</b><br>Home city: Görlitz, Saxony, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_3575344eab7917ebb4cb7524ed6e3765.setContent(html_22d6133d59543f09d29df8ebc2a65866);
            
        

        circle_marker_e7751b6b2b99241ef433386ad91db3da.bindPopup(popup_3575344eab7917ebb4cb7524ed6e3765)
        ;

        
    
    
            circle_marker_e7751b6b2b99241ef433386ad91db3da.bindTooltip(
                `<div>
                     Person: Eichler, Gregor, 1562-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_356647f44b925330e5c0d89847684f4e = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_edaf9eae6517a5aae5b1498c4237b33e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_325c2420f81c225a831376b3834dd3f6 = $(`<div id="html_325c2420f81c225a831376b3834dd3f6" style="width: 100.0%; height: 100.0%;"><b>Hasdale, Martin, fl. 1610</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 4</div>`)[0];
                popup_edaf9eae6517a5aae5b1498c4237b33e.setContent(html_325c2420f81c225a831376b3834dd3f6);
            
        

        circle_marker_356647f44b925330e5c0d89847684f4e.bindPopup(popup_edaf9eae6517a5aae5b1498c4237b33e)
        ;

        
    
    
            circle_marker_356647f44b925330e5c0d89847684f4e.bindTooltip(
                `<div>
                     Person: Hasdale, Martin, fl. 1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6f15107e16f6f78feff914a94545aeec = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_05246dad470afd8725b4704187fd4f6f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ffa0923c3e2e5d693fc8f4946acd4823 = $(`<div id="html_ffa0923c3e2e5d693fc8f4946acd4823" style="width: 100.0%; height: 100.0%;"><b>Strauss, Johannes, fl. 1620</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 4</div>`)[0];
                popup_05246dad470afd8725b4704187fd4f6f.setContent(html_ffa0923c3e2e5d693fc8f4946acd4823);
            
        

        circle_marker_6f15107e16f6f78feff914a94545aeec.bindPopup(popup_05246dad470afd8725b4704187fd4f6f)
        ;

        
    
    
            circle_marker_6f15107e16f6f78feff914a94545aeec.bindTooltip(
                `<div>
                     Person: Strauss, Johannes, fl. 1620
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_33a46809515bc10d0537c6fecbae2fde = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_02101e60f2a5b0c90da5cd697377cdc2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ad5e072d0a75e8f9f8e7d37679371f7c = $(`<div id="html_ad5e072d0a75e8f9f8e7d37679371f7c" style="width: 100.0%; height: 100.0%;"><b>Tengnagel, Sebastian, 1573-1636</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 4</div>`)[0];
                popup_02101e60f2a5b0c90da5cd697377cdc2.setContent(html_ad5e072d0a75e8f9f8e7d37679371f7c);
            
        

        circle_marker_33a46809515bc10d0537c6fecbae2fde.bindPopup(popup_02101e60f2a5b0c90da5cd697377cdc2)
        ;

        
    
    
            circle_marker_33a46809515bc10d0537c6fecbae2fde.bindTooltip(
                `<div>
                     Person: Tengnagel, Sebastian, 1573-1636
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4e2c60bd05d47780c1a99a9ad9310369 = L.circleMarker(
                [48.7501041, 8.8707147],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_392d84a37ded17d0868ff9e1da2e60e1 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_39dac48fa7b71a07edba36b6f75b5b96 = $(`<div id="html_39dac48fa7b71a07edba36b6f75b5b96" style="width: 100.0%; height: 100.0%;"><b>Burgermeister and Council, Weil der Stadt, fl. 1590-1591</b><br>Home city: Weil der Stadt, Baden-Württemberg, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_392d84a37ded17d0868ff9e1da2e60e1.setContent(html_39dac48fa7b71a07edba36b6f75b5b96);
            
        

        circle_marker_4e2c60bd05d47780c1a99a9ad9310369.bindPopup(popup_392d84a37ded17d0868ff9e1da2e60e1)
        ;

        
    
    
            circle_marker_4e2c60bd05d47780c1a99a9ad9310369.bindTooltip(
                `<div>
                     Person: Burgermeister and Council, Weil der Stadt, fl. 1590-1591
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e6696f03d4b458418895cb0b1d02a7ec = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c5c827a2b3488423e75f15f4a42e25da = L.popup({
  "maxWidth": 320,
});

        
            
                let html_56adff3d395c929bd28e1e3420a1297c = $(`<div id="html_56adff3d395c929bd28e1e3420a1297c" style="width: 100.0%; height: 100.0%;"><b>School Inspectors, Graz</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 3</div>`)[0];
                popup_c5c827a2b3488423e75f15f4a42e25da.setContent(html_56adff3d395c929bd28e1e3420a1297c);
            
        

        circle_marker_e6696f03d4b458418895cb0b1d02a7ec.bindPopup(popup_c5c827a2b3488423e75f15f4a42e25da)
        ;

        
    
    
            circle_marker_e6696f03d4b458418895cb0b1d02a7ec.bindTooltip(
                `<div>
                     Person: School Inspectors, Graz
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c729f48e089102202d629cc52aa2f765 = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_f3e17386b56eb87b497994ae7874020a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2bc348e31b81b153d316bca33952849e = $(`<div id="html_2bc348e31b81b153d316bca33952849e" style="width: 100.0%; height: 100.0%;"><b>Styria, the Government of, fl. 1597</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 3</div>`)[0];
                popup_f3e17386b56eb87b497994ae7874020a.setContent(html_2bc348e31b81b153d316bca33952849e);
            
        

        circle_marker_c729f48e089102202d629cc52aa2f765.bindPopup(popup_f3e17386b56eb87b497994ae7874020a)
        ;

        
    
    
            circle_marker_c729f48e089102202d629cc52aa2f765.bindTooltip(
                `<div>
                     Person: Styria, the Government of, fl. 1597
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_032780e2249920a3f992ac092990084d = L.circleMarker(
                [48.8387397, 7.8318155],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_d3306e445542d073c505e5a51799ffb1 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_6094c86127d6d97d457e18f94f21640b = $(`<div id="html_6094c86127d6d97d457e18f94f21640b" style="width: 100.0%; height: 100.0%;"><b>Röslin, Helisaeus, 1545-1616</b><br>Home city: Haguenau, Grand Est, France<br>Letters in drawable network: 3</div>`)[0];
                popup_d3306e445542d073c505e5a51799ffb1.setContent(html_6094c86127d6d97d457e18f94f21640b);
            
        

        circle_marker_032780e2249920a3f992ac092990084d.bindPopup(popup_d3306e445542d073c505e5a51799ffb1)
        ;

        
    
    
            circle_marker_032780e2249920a3f992ac092990084d.bindTooltip(
                `<div>
                     Person: Röslin, Helisaeus, 1545-1616
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_50ec5106e9b4f303dd48162baa0b57fd = L.circleMarker(
                [48.5621964, 12.0859345],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2aa0fcf078fe3c0de65ddaae1b0a400a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_49589ebdd503811d1de1df5221f78285 = $(`<div id="html_49589ebdd503811d1de1df5221f78285" style="width: 100.0%; height: 100.0%;"><b>Praetorius, Johannes, 1537-1616</b><br>Home city: Altdorf, Bavaria, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_2aa0fcf078fe3c0de65ddaae1b0a400a.setContent(html_49589ebdd503811d1de1df5221f78285);
            
        

        circle_marker_50ec5106e9b4f303dd48162baa0b57fd.bindPopup(popup_2aa0fcf078fe3c0de65ddaae1b0a400a)
        ;

        
    
    
            circle_marker_50ec5106e9b4f303dd48162baa0b57fd.bindTooltip(
                `<div>
                     Person: Praetorius, Johannes, 1537-1616
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4fe48add40a54f2678f81cb7861f4f02 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_95ff0c6bebee4e5fba47fabba9869459 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ebf73e3922f273d81e10b9e1286ba709 = $(`<div id="html_ebf73e3922f273d81e10b9e1286ba709" style="width: 100.0%; height: 100.0%;"><b>Blotius, Hugo, 1553-1608</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 3</div>`)[0];
                popup_95ff0c6bebee4e5fba47fabba9869459.setContent(html_ebf73e3922f273d81e10b9e1286ba709);
            
        

        circle_marker_4fe48add40a54f2678f81cb7861f4f02.bindPopup(popup_95ff0c6bebee4e5fba47fabba9869459)
        ;

        
    
    
            circle_marker_4fe48add40a54f2678f81cb7861f4f02.bindTooltip(
                `<div>
                     Person: Blotius, Hugo, 1553-1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e8de3488972e87a5b22ffe549bfca9b5 = L.circleMarker(
                [49.7477415, 13.3775249],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1816543a45be874ea36bf4c2eaf979af = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f1a0f952614883028910e730b2a462f5 = $(`<div id="html_f1a0f952614883028910e730b2a462f5" style="width: 100.0%; height: 100.0%;"><b>Tengnagel, Frans Gansneb, 1576-1622</b><br>Home city: Plzeň, Plzeňský, Czech Republic<br>Letters in drawable network: 3</div>`)[0];
                popup_1816543a45be874ea36bf4c2eaf979af.setContent(html_f1a0f952614883028910e730b2a462f5);
            
        

        circle_marker_e8de3488972e87a5b22ffe549bfca9b5.bindPopup(popup_1816543a45be874ea36bf4c2eaf979af)
        ;

        
    
    
            circle_marker_e8de3488972e87a5b22ffe549bfca9b5.bindTooltip(
                `<div>
                     Person: Tengnagel, Frans Gansneb, 1576-1622
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b1c8bce80e4adb629e76c841dfd579c6 = L.circleMarker(
                [50.2136597, 14.4405574],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_98c9405d73cd94758465ae8c32d15c0e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c48c90a932fbd01db91512f03791bcb0 = $(`<div id="html_c48c90a932fbd01db91512f03791bcb0" style="width: 100.0%; height: 100.0%;"><b>Jessen, Johannes, 1566-1621</b><br>Home city: Panenské Břežany, Central Bohemia<br>Letters in drawable network: 3</div>`)[0];
                popup_98c9405d73cd94758465ae8c32d15c0e.setContent(html_c48c90a932fbd01db91512f03791bcb0);
            
        

        circle_marker_b1c8bce80e4adb629e76c841dfd579c6.bindPopup(popup_98c9405d73cd94758465ae8c32d15c0e)
        ;

        
    
    
            circle_marker_b1c8bce80e4adb629e76c841dfd579c6.bindTooltip(
                `<div>
                     Person: Jessen, Johannes, 1566-1621
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dbbd64ca8018510001b610f50e2e174f = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_96577411d809821d137e82e38c0fd82a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_cfb1490c82b3029289f8c003c9b39ce9 = $(`<div id="html_cfb1490c82b3029289f8c003c9b39ce9" style="width: 100.0%; height: 100.0%;"><b>Kepler, Barbara, 1572-1611</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 3</div>`)[0];
                popup_96577411d809821d137e82e38c0fd82a.setContent(html_cfb1490c82b3029289f8c003c9b39ce9);
            
        

        circle_marker_dbbd64ca8018510001b610f50e2e174f.bindPopup(popup_96577411d809821d137e82e38c0fd82a)
        ;

        
    
    
            circle_marker_dbbd64ca8018510001b610f50e2e174f.bindTooltip(
                `<div>
                     Person: Kepler, Barbara, 1572-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6ab7b99bdf432a2bbd6215a304777675 = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0dae51ae07d7a18bc730fa76d28f08c6 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_67318593773a5c23125277c070f543b9 = $(`<div id="html_67318593773a5c23125277c070f543b9" style="width: 100.0%; height: 100.0%;"><b>Memhard, Johann, fl. 1602</b><br>Home city: Linz, Upper Austria, Austria<br>Letters in drawable network: 3</div>`)[0];
                popup_0dae51ae07d7a18bc730fa76d28f08c6.setContent(html_67318593773a5c23125277c070f543b9);
            
        

        circle_marker_6ab7b99bdf432a2bbd6215a304777675.bindPopup(popup_0dae51ae07d7a18bc730fa76d28f08c6)
        ;

        
    
    
            circle_marker_6ab7b99bdf432a2bbd6215a304777675.bindTooltip(
                `<div>
                     Person: Memhard, Johann, fl. 1602
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_52c8a2fcb340a9cb02a7deeb1e5578d9 = L.circleMarker(
                [52.503379, 13.3386522],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2f9b7c914b93450e5abecb8aea33a87f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_1558fa95b1a54ee7ca0493009b378358 = $(`<div id="html_1558fa95b1a54ee7ca0493009b378358" style="width: 100.0%; height: 100.0%;"><b>Müller, Johannes, fl. 1596-1602</b><br>Home city: Berlin, Berlin, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_2f9b7c914b93450e5abecb8aea33a87f.setContent(html_1558fa95b1a54ee7ca0493009b378358);
            
        

        circle_marker_52c8a2fcb340a9cb02a7deeb1e5578d9.bindPopup(popup_2f9b7c914b93450e5abecb8aea33a87f)
        ;

        
    
    
            circle_marker_52c8a2fcb340a9cb02a7deeb1e5578d9.bindTooltip(
                `<div>
                     Person: Müller, Johannes, fl. 1596-1602
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5a525c5ab976fe3496731fa576118a32 = L.circleMarker(
                [48.7180364, 10.7807299],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_565f57975e4f46b524332a339bf88b20 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_aa4953b95dd93486df57e36240a0af85 = $(`<div id="html_aa4953b95dd93486df57e36240a0af85" style="width: 100.0%; height: 100.0%;"><b>Gerhard, Johann Konrad, b.1567</b><br>Home city: Donauwörth, Bavaria, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_565f57975e4f46b524332a339bf88b20.setContent(html_aa4953b95dd93486df57e36240a0af85);
            
        

        circle_marker_5a525c5ab976fe3496731fa576118a32.bindPopup(popup_565f57975e4f46b524332a339bf88b20)
        ;

        
    
    
            circle_marker_5a525c5ab976fe3496731fa576118a32.bindTooltip(
                `<div>
                     Person: Gerhard, Johann Konrad, b.1567
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9f7c8dc454e87437c51b82edec11f923 = L.circleMarker(
                [49.3068037, 15.6766872],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_402d2eb95bf4079f6c3ea391d5292073 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ab38c1a4b14fec890d47dbde8ae9093e = $(`<div id="html_ab38c1a4b14fec890d47dbde8ae9093e" style="width: 100.0%; height: 100.0%;"><b>Virdung, Paul, fl. 1603-1605</b><br>Home city: Brtnice, Vysočina, Czech Republic<br>Letters in drawable network: 3</div>`)[0];
                popup_402d2eb95bf4079f6c3ea391d5292073.setContent(html_ab38c1a4b14fec890d47dbde8ae9093e);
            
        

        circle_marker_9f7c8dc454e87437c51b82edec11f923.bindPopup(popup_402d2eb95bf4079f6c3ea391d5292073)
        ;

        
    
    
            circle_marker_9f7c8dc454e87437c51b82edec11f923.bindTooltip(
                `<div>
                     Person: Virdung, Paul, fl. 1603-1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_839b5a2acb6ac80d578a11805d343b68 = L.circleMarker(
                [52.1594747, 4.4908843],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_203cb03239e9c19148c18c97843a246b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_86a591104621010e9a54085636ce7bbc = $(`<div id="html_86a591104621010e9a54085636ce7bbc" style="width: 100.0%; height: 100.0%;"><b>Scaliger, Joseph Justus, 1540-1609</b><br>Home city: Leiden, South Holland, Netherlands<br>Letters in drawable network: 3</div>`)[0];
                popup_203cb03239e9c19148c18c97843a246b.setContent(html_86a591104621010e9a54085636ce7bbc);
            
        

        circle_marker_839b5a2acb6ac80d578a11805d343b68.bindPopup(popup_203cb03239e9c19148c18c97843a246b)
        ;

        
    
    
            circle_marker_839b5a2acb6ac80d578a11805d343b68.bindTooltip(
                `<div>
                     Person: Scaliger, Joseph Justus, 1540-1609
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_515d8de1f44fc130527471b13c53c63d = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1be5ed0402368c08d5b28f66a3cf8b38 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c836bde5b351c346da8f3dabba2f184d = $(`<div id="html_c836bde5b351c346da8f3dabba2f184d" style="width: 100.0%; height: 100.0%;"><b>Bachacius, Martinus, 1539-1612</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 3</div>`)[0];
                popup_1be5ed0402368c08d5b28f66a3cf8b38.setContent(html_c836bde5b351c346da8f3dabba2f184d);
            
        

        circle_marker_515d8de1f44fc130527471b13c53c63d.bindPopup(popup_1be5ed0402368c08d5b28f66a3cf8b38)
        ;

        
    
    
            circle_marker_515d8de1f44fc130527471b13c53c63d.bindTooltip(
                `<div>
                     Person: Bachacius, Martinus, 1539-1612
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_88f72abfef007843c68834c344112b7e = L.circleMarker(
                [47.9960901, 7.8494005],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b04f005f879e0e7cdb6ecd3fcab3f9a9 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d19e369f6a579073b00c016d09d33f9c = $(`<div id="html_d19e369f6a579073b00c016d09d33f9c" style="width: 100.0%; height: 100.0%;"><b>Pistorius, Johann, 1546-1608</b><br>Home city: Freiburg, Baden-Württemberg, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_b04f005f879e0e7cdb6ecd3fcab3f9a9.setContent(html_d19e369f6a579073b00c016d09d33f9c);
            
        

        circle_marker_88f72abfef007843c68834c344112b7e.bindPopup(popup_b04f005f879e0e7cdb6ecd3fcab3f9a9)
        ;

        
    
    
            circle_marker_88f72abfef007843c68834c344112b7e.bindTooltip(
                `<div>
                     Person: Pistorius, Johann, 1546-1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_289aabe6a7fb7d91aa8b8efa9d313d23 = L.circleMarker(
                [50.9772092, 11.9863951],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6842c8c1b9a9dbfbb1da3fc2fd981879 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2bfc45da4ea4841314fd684b468b4217 = $(`<div id="html_2bfc45da4ea4841314fd684b468b4217" style="width: 100.0%; height: 100.0%;"><b>Anhalt-Plötzkau, August von, 1575-1653</b><br>Home city: Crossen an der Elster, Thuringia, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_6842c8c1b9a9dbfbb1da3fc2fd981879.setContent(html_2bfc45da4ea4841314fd684b468b4217);
            
        

        circle_marker_289aabe6a7fb7d91aa8b8efa9d313d23.bindPopup(popup_6842c8c1b9a9dbfbb1da3fc2fd981879)
        ;

        
    
    
            circle_marker_289aabe6a7fb7d91aa8b8efa9d313d23.bindTooltip(
                `<div>
                     Person: Anhalt-Plötzkau, August von, 1575-1653
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9452068682b75e5fff0079eaf8e30242 = L.circleMarker(
                [51.1563185, 14.991018],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_580d5405ca44cd46b68ca933e0ae128b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_23c5c78c06d24762cea341921018a546 = $(`<div id="html_23c5c78c06d24762cea341921018a546" style="width: 100.0%; height: 100.0%;"><b>Dornau, Caspar, 1577-1631</b><br>Home city: Görlitz, Saxony, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_580d5405ca44cd46b68ca933e0ae128b.setContent(html_23c5c78c06d24762cea341921018a546);
            
        

        circle_marker_9452068682b75e5fff0079eaf8e30242.bindPopup(popup_580d5405ca44cd46b68ca933e0ae128b)
        ;

        
    
    
            circle_marker_9452068682b75e5fff0079eaf8e30242.bindTooltip(
                `<div>
                     Person: Dornau, Caspar, 1577-1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b6e3c6982028400695065aaaa2401f5a = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3480e82e79132a1e7d9941fa798f8bc0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a4b9ddf6ea7f6d5bfacbc336b402822c = $(`<div id="html_a4b9ddf6ea7f6d5bfacbc336b402822c" style="width: 100.0%; height: 100.0%;"><b>Seussius, Johannes, fl. 1608</b><br>Home city: Dresden, Saxony, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_3480e82e79132a1e7d9941fa798f8bc0.setContent(html_a4b9ddf6ea7f6d5bfacbc336b402822c);
            
        

        circle_marker_b6e3c6982028400695065aaaa2401f5a.bindPopup(popup_3480e82e79132a1e7d9941fa798f8bc0)
        ;

        
    
    
            circle_marker_b6e3c6982028400695065aaaa2401f5a.bindTooltip(
                `<div>
                     Person: Seussius, Johannes, fl. 1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_799955cb5f919b944e39698a70715c27 = L.circleMarker(
                [50.1106444, 8.6820917],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a159df1be54893bcc2c4998a75a0027f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_827299355c9d1f4491ecc417cbf43997 = $(`<div id="html_827299355c9d1f4491ecc417cbf43997" style="width: 100.0%; height: 100.0%;"><b>Beyer, Johann Hartmann, 1563-1625</b><br>Home city: Frankfurt am Main, Hesse, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_a159df1be54893bcc2c4998a75a0027f.setContent(html_827299355c9d1f4491ecc417cbf43997);
            
        

        circle_marker_799955cb5f919b944e39698a70715c27.bindPopup(popup_a159df1be54893bcc2c4998a75a0027f)
        ;

        
    
    
            circle_marker_799955cb5f919b944e39698a70715c27.bindTooltip(
                `<div>
                     Person: Beyer, Johann Hartmann, 1563-1625
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3bee1e3b16df237d0eb1b900dd91b55f = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9ba4759c2e2ff7d0d69777828fb81ecc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_337af634dbb6b7e4477b2cb521e9665b = $(`<div id="html_337af634dbb6b7e4477b2cb521e9665b" style="width: 100.0%; height: 100.0%;"><b>Jörger von Tollet, Helmhard, 1572-1631</b><br>Home city: Linz, Upper Austria, Austria<br>Letters in drawable network: 3</div>`)[0];
                popup_9ba4759c2e2ff7d0d69777828fb81ecc.setContent(html_337af634dbb6b7e4477b2cb521e9665b);
            
        

        circle_marker_3bee1e3b16df237d0eb1b900dd91b55f.bindPopup(popup_9ba4759c2e2ff7d0d69777828fb81ecc)
        ;

        
    
    
            circle_marker_3bee1e3b16df237d0eb1b900dd91b55f.bindTooltip(
                `<div>
                     Person: Jörger von Tollet, Helmhard, 1572-1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_248dffad4b2b808ef1d19e044f18c537 = L.circleMarker(
                [48.3690341, 10.8979522],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_d77e72373ec07767e16a4d41586e90be = L.popup({
  "maxWidth": 320,
});

        
            
                let html_6c1fde99c7832f4f2aa01bfab12999bb = $(`<div id="html_6c1fde99c7832f4f2aa01bfab12999bb" style="width: 100.0%; height: 100.0%;"><b>Welser, Markus, 1558-1614</b><br>Home city: Augsburg, Bavaria, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_d77e72373ec07767e16a4d41586e90be.setContent(html_6c1fde99c7832f4f2aa01bfab12999bb);
            
        

        circle_marker_248dffad4b2b808ef1d19e044f18c537.bindPopup(popup_d77e72373ec07767e16a4d41586e90be)
        ;

        
    
    
            circle_marker_248dffad4b2b808ef1d19e044f18c537.bindTooltip(
                `<div>
                     Person: Welser, Markus, 1558-1614
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d403344d44c2aa70170c944446744805 = L.circleMarker(
                [50.8467372, 4.352493],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1951a1032ee56f51eae269037679e2ea = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e1b76a56c62dba00cbf09f4d5886eb30 = $(`<div id="html_e1b76a56c62dba00cbf09f4d5886eb30" style="width: 100.0%; height: 100.0%;"><b>Maelcote, Oddo van, 1572-1615</b><br>Home city: Brussels, Brussels Capital Region, Belgium<br>Letters in drawable network: 3</div>`)[0];
                popup_1951a1032ee56f51eae269037679e2ea.setContent(html_e1b76a56c62dba00cbf09f4d5886eb30);
            
        

        circle_marker_d403344d44c2aa70170c944446744805.bindPopup(popup_1951a1032ee56f51eae269037679e2ea)
        ;

        
    
    
            circle_marker_d403344d44c2aa70170c944446744805.bindTooltip(
                `<div>
                     Person: Maelcote, Oddo van, 1572-1615
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a8ac4b14598ddf2616a01dc29f0b841e = L.circleMarker(
                [49.259407, 14.7193304],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_faf3bfb445cd3b9ebcfb2d6cd4b99772 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_555eb16f4b085294485f92bd78231f4c = $(`<div id="html_555eb16f4b085294485f92bd78231f4c" style="width: 100.0%; height: 100.0%;"><b>Gehler, Michael, fl. 1600-1620</b><br>Home city: Soběslav, Jihočeský, Czech Republic<br>Letters in drawable network: 3</div>`)[0];
                popup_faf3bfb445cd3b9ebcfb2d6cd4b99772.setContent(html_555eb16f4b085294485f92bd78231f4c);
            
        

        circle_marker_a8ac4b14598ddf2616a01dc29f0b841e.bindPopup(popup_faf3bfb445cd3b9ebcfb2d6cd4b99772)
        ;

        
    
    
            circle_marker_a8ac4b14598ddf2616a01dc29f0b841e.bindTooltip(
                `<div>
                     Person: Gehler, Michael, fl. 1600-1620
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_cab3a0e77f688c82d06c7d32c496e289 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2fda8630d6478726d2903a7a4a19869f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_1ff02ba085d9931a11961a567ebe06fd = $(`<div id="html_1ff02ba085d9931a11961a567ebe06fd" style="width: 100.0%; height: 100.0%;"><b>Enenkel, Job Hartmann von, 1576-1627</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 3</div>`)[0];
                popup_2fda8630d6478726d2903a7a4a19869f.setContent(html_1ff02ba085d9931a11961a567ebe06fd);
            
        

        circle_marker_cab3a0e77f688c82d06c7d32c496e289.bindPopup(popup_2fda8630d6478726d2903a7a4a19869f)
        ;

        
    
    
            circle_marker_cab3a0e77f688c82d06c7d32c496e289.bindTooltip(
                `<div>
                     Person: Enenkel, Job Hartmann von, 1576-1627
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e36fdb0b022437de9ad64af9fb5c1a4e = L.circleMarker(
                [48.7630165, 11.4250395],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_7a34735e9f373e6dfe9eb49bc18cfb89 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9f13a1359e69bec67bc44c8b7978c6b0 = $(`<div id="html_9f13a1359e69bec67bc44c8b7978c6b0" style="width: 100.0%; height: 100.0%;"><b>Cysat, Johann Baptist, 1587-1657</b><br>Home city: Ingolstadt, Bavaria, Germany, (Holy Roman Empire)<br>Letters in drawable network: 3</div>`)[0];
                popup_7a34735e9f373e6dfe9eb49bc18cfb89.setContent(html_9f13a1359e69bec67bc44c8b7978c6b0);
            
        

        circle_marker_e36fdb0b022437de9ad64af9fb5c1a4e.bindPopup(popup_7a34735e9f373e6dfe9eb49bc18cfb89)
        ;

        
    
    
            circle_marker_e36fdb0b022437de9ad64af9fb5c1a4e.bindTooltip(
                `<div>
                     Person: Cysat, Johann Baptist, 1587-1657
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d28f0102b35ea42f29a3787fbcae1731 = L.circleMarker(
                [48.7427584, 9.3071685],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a654b90c6222eb4c7c458174beeac2d6 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_373337d2b37f09d2dce06bc835a00cbb = $(`<div id="html_373337d2b37f09d2dce06bc835a00cbb" style="width: 100.0%; height: 100.0%;"><b>Hebenstreit, Georg, fl. 1620</b><br>Home city: Esslingen, Baden-Württemberg, Germany<br>Letters in drawable network: 3</div>`)[0];
                popup_a654b90c6222eb4c7c458174beeac2d6.setContent(html_373337d2b37f09d2dce06bc835a00cbb);
            
        

        circle_marker_d28f0102b35ea42f29a3787fbcae1731.bindPopup(popup_a654b90c6222eb4c7c458174beeac2d6)
        ;

        
    
    
            circle_marker_d28f0102b35ea42f29a3787fbcae1731.bindTooltip(
                `<div>
                     Person: Hebenstreit, Georg, fl. 1620
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_2b38e37c35973e87893613bfbc21a436 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_cae12aefab40351afb24762f9da5d0d2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f74a882e356e4646fa75a14c0ada8ae9 = $(`<div id="html_f74a882e356e4646fa75a14c0ada8ae9" style="width: 100.0%; height: 100.0%;"><b>Brahe, Georg, b.1583</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 3</div>`)[0];
                popup_cae12aefab40351afb24762f9da5d0d2.setContent(html_f74a882e356e4646fa75a14c0ada8ae9);
            
        

        circle_marker_2b38e37c35973e87893613bfbc21a436.bindPopup(popup_cae12aefab40351afb24762f9da5d0d2)
        ;

        
    
    
            circle_marker_2b38e37c35973e87893613bfbc21a436.bindTooltip(
                `<div>
                     Person: Brahe, Georg, b.1583
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_78d19e8287e286770dfcfddbc30cb980 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_48158607323b353cb2fe54508fd4ee58 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_48edccfedda4879c045958b7da494b7b = $(`<div id="html_48edccfedda4879c045958b7da494b7b" style="width: 100.0%; height: 100.0%;"><b>Gerlach, Stephan, 1546-1612</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_48158607323b353cb2fe54508fd4ee58.setContent(html_48edccfedda4879c045958b7da494b7b);
            
        

        circle_marker_78d19e8287e286770dfcfddbc30cb980.bindPopup(popup_48158607323b353cb2fe54508fd4ee58)
        ;

        
    
    
            circle_marker_78d19e8287e286770dfcfddbc30cb980.bindTooltip(
                `<div>
                     Person: Gerlach, Stephan, 1546-1612
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5aa73be83bc7b05d9e97d59516eae104 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b4ffed34f7f43d4d1170541e055a7bfb = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c7226c968b4db0a316b72e6a52c8d466 = $(`<div id="html_c7226c968b4db0a316b72e6a52c8d466" style="width: 100.0%; height: 100.0%;"><b>Reimers, Nicolaus, 1551-1660</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 2</div>`)[0];
                popup_b4ffed34f7f43d4d1170541e055a7bfb.setContent(html_c7226c968b4db0a316b72e6a52c8d466);
            
        

        circle_marker_5aa73be83bc7b05d9e97d59516eae104.bindPopup(popup_b4ffed34f7f43d4d1170541e055a7bfb)
        ;

        
    
    
            circle_marker_5aa73be83bc7b05d9e97d59516eae104.bindTooltip(
                `<div>
                     Person: Reimers, Nicolaus, 1551-1660
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8ddd15de319884161e1af79fa312fd4d = L.circleMarker(
                [48.7031377, 9.6541116],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a6472f93cf5f02ba4e149459810f050d = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0c998ff22b91a706b4d5e2464cbc1ecc = $(`<div id="html_0c998ff22b91a706b4d5e2464cbc1ecc" style="width: 100.0%; height: 100.0%;"><b>Osiander, Lucas II, 1571-1638</b><br>Home city: Göppingen, Baden-Württemberg, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_a6472f93cf5f02ba4e149459810f050d.setContent(html_0c998ff22b91a706b4d5e2464cbc1ecc);
            
        

        circle_marker_8ddd15de319884161e1af79fa312fd4d.bindPopup(popup_a6472f93cf5f02ba4e149459810f050d)
        ;

        
    
    
            circle_marker_8ddd15de319884161e1af79fa312fd4d.bindTooltip(
                `<div>
                     Person: Osiander, Lucas II, 1571-1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bd22a1bf71354560ed94d7e9bf58dad0 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_03bed4217f574096802adbc3f077a45b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2c7bf16beda7c03671a4f82d91df6ff9 = $(`<div id="html_2c7bf16beda7c03671a4f82d91df6ff9" style="width: 100.0%; height: 100.0%;"><b>Crusius, Martin, 1526-1607</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_03bed4217f574096802adbc3f077a45b.setContent(html_2c7bf16beda7c03671a4f82d91df6ff9);
            
        

        circle_marker_bd22a1bf71354560ed94d7e9bf58dad0.bindPopup(popup_03bed4217f574096802adbc3f077a45b)
        ;

        
    
    
            circle_marker_bd22a1bf71354560ed94d7e9bf58dad0.bindTooltip(
                `<div>
                     Person: Crusius, Martin, 1526-1607
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b801836cd78543d210a3639ad9b9c6f1 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9d60374ce0750dc87803972429c05afc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e5475d4e85e9a1599ad8857af9a5e8b1 = $(`<div id="html_e5475d4e85e9a1599ad8857af9a5e8b1" style="width: 100.0%; height: 100.0%;"><b>Leibfrid, Christoph, 1566-1635</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_9d60374ce0750dc87803972429c05afc.setContent(html_e5475d4e85e9a1599ad8857af9a5e8b1);
            
        

        circle_marker_b801836cd78543d210a3639ad9b9c6f1.bindPopup(popup_9d60374ce0750dc87803972429c05afc)
        ;

        
    
    
            circle_marker_b801836cd78543d210a3639ad9b9c6f1.bindTooltip(
                `<div>
                     Person: Leibfrid, Christoph, 1566-1635
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3cda4901dc019639d97b5be831e2bce1 = L.circleMarker(
                [50.8090106, 8.7704695],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b0bc9f150b2f67cb8b788edbaa3dfd92 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_680b17d5f1ff36546792ddee2c04f5f6 = $(`<div id="html_680b17d5f1ff36546792ddee2c04f5f6" style="width: 100.0%; height: 100.0%;"><b>Homelius, Johannes, d.1600</b><br>Home city: Marburg, Hesse, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_b0bc9f150b2f67cb8b788edbaa3dfd92.setContent(html_680b17d5f1ff36546792ddee2c04f5f6);
            
        

        circle_marker_3cda4901dc019639d97b5be831e2bce1.bindPopup(popup_b0bc9f150b2f67cb8b788edbaa3dfd92)
        ;

        
    
    
            circle_marker_3cda4901dc019639d97b5be831e2bce1.bindTooltip(
                `<div>
                     Person: Homelius, Johannes, d.1600
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_60c291bb2cfc6f03a067c8fd50903366 = L.circleMarker(
                [49.0681018, 17.4663899],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_bcc0ff25f28be247e644c2bd63a08fc5 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d3ca554410143bfa0b7d4d019c1914dc = $(`<div id="html_d3ca554410143bfa0b7d4d019c1914dc" style="width: 100.0%; height: 100.0%;"><b>Budovec z Budova, Václav, 1547-1621</b><br>Home city: Uherské Hradiště, Zlín, Czech Republic<br>Letters in drawable network: 2</div>`)[0];
                popup_bcc0ff25f28be247e644c2bd63a08fc5.setContent(html_d3ca554410143bfa0b7d4d019c1914dc);
            
        

        circle_marker_60c291bb2cfc6f03a067c8fd50903366.bindPopup(popup_bcc0ff25f28be247e644c2bd63a08fc5)
        ;

        
    
    
            circle_marker_60c291bb2cfc6f03a067c8fd50903366.bindTooltip(
                `<div>
                     Person: Budovec z Budova, Václav, 1547-1621
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0798f82a74605774e275858fc0ce194a = L.circleMarker(
                [47.2654296, 11.3927685],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b5aef8be9551cac6d6f763ebbf77ef55 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0afc0b9e8d94773e245aa0c1d7016a78 = $(`<div id="html_0afc0b9e8d94773e245aa0c1d7016a78" style="width: 100.0%; height: 100.0%;"><b>Maximilian Ernest of Austria, 1583-1616</b><br>Home city: Innsbruck, Tyrol, Austria, (Holy Roman Empire)<br>Letters in drawable network: 2</div>`)[0];
                popup_b5aef8be9551cac6d6f763ebbf77ef55.setContent(html_0afc0b9e8d94773e245aa0c1d7016a78);
            
        

        circle_marker_0798f82a74605774e275858fc0ce194a.bindPopup(popup_b5aef8be9551cac6d6f763ebbf77ef55)
        ;

        
    
    
            circle_marker_0798f82a74605774e275858fc0ce194a.bindTooltip(
                `<div>
                     Person: Maximilian Ernest of Austria, 1583-1616
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fd7b82205ad1fa596a6fa65025ac72f7 = L.circleMarker(
                [51.5074456, -0.1277653],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_958569faaed1740537ee8e40085613f5 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a633663cd587a960afa33c08a97b00ca = $(`<div id="html_a633663cd587a960afa33c08a97b00ca" style="width: 100.0%; height: 100.0%;"><b>Heydon, Christopher (Sir), 1561-1623</b><br>Home city: London, England, United Kingdom<br>Letters in drawable network: 2</div>`)[0];
                popup_958569faaed1740537ee8e40085613f5.setContent(html_a633663cd587a960afa33c08a97b00ca);
            
        

        circle_marker_fd7b82205ad1fa596a6fa65025ac72f7.bindPopup(popup_958569faaed1740537ee8e40085613f5)
        ;

        
    
    
            circle_marker_fd7b82205ad1fa596a6fa65025ac72f7.bindTooltip(
                `<div>
                     Person: Heydon, Christopher (Sir), 1561-1623
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8b40a05c271a06722272d62d76ebe44d = L.circleMarker(
                [48.5621964, 12.0859345],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6a865cb6c8c5638c490b947317cda2f2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_4d6007826b5d60e7f4ab297efc920622 = $(`<div id="html_4d6007826b5d60e7f4ab297efc920622" style="width: 100.0%; height: 100.0%;"><b>Szenci Molnár, Albert, 1574-1634</b><br>Home city: Altdorf, Bavaria, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_6a865cb6c8c5638c490b947317cda2f2.setContent(html_4d6007826b5d60e7f4ab297efc920622);
            
        

        circle_marker_8b40a05c271a06722272d62d76ebe44d.bindPopup(popup_6a865cb6c8c5638c490b947317cda2f2)
        ;

        
    
    
            circle_marker_8b40a05c271a06722272d62d76ebe44d.bindTooltip(
                `<div>
                     Person: Szenci Molnár, Albert, 1574-1634
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9add2af0e1be540f787302266d9d030c = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_402b98906332bbc5b67594dcf14ccdc0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_4097df62f168442e1aed6703a4fa2654 = $(`<div id="html_4097df62f168442e1aed6703a4fa2654" style="width: 100.0%; height: 100.0%;"><b>Fersius, Johannes, fl. 1607-1608</b><br>Home city: Dresden, Saxony, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_402b98906332bbc5b67594dcf14ccdc0.setContent(html_4097df62f168442e1aed6703a4fa2654);
            
        

        circle_marker_9add2af0e1be540f787302266d9d030c.bindPopup(popup_402b98906332bbc5b67594dcf14ccdc0)
        ;

        
    
    
            circle_marker_9add2af0e1be540f787302266d9d030c.bindTooltip(
                `<div>
                     Person: Fersius, Johannes, fl. 1607-1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a5d3ec9d67d1131975508ca183449c3e = L.circleMarker(
                [51.8666527, 12.646761],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_d316a4b1bb1ee0b9331baacdb744a7a6 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e5bacc4eb3601bc4ad1aac3bbd041b95 = $(`<div id="html_e5bacc4eb3601bc4ad1aac3bbd041b95" style="width: 100.0%; height: 100.0%;"><b>Fabricius, Johannes, 1587-1616</b><br>Home city: Wittenberg, Saxony-Anhalt, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_d316a4b1bb1ee0b9331baacdb744a7a6.setContent(html_e5bacc4eb3601bc4ad1aac3bbd041b95);
            
        

        circle_marker_a5d3ec9d67d1131975508ca183449c3e.bindPopup(popup_d316a4b1bb1ee0b9331baacdb744a7a6)
        ;

        
    
    
            circle_marker_a5d3ec9d67d1131975508ca183449c3e.bindTooltip(
                `<div>
                     Person: Fabricius, Johannes, 1587-1616
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_eaf9299ec12e5cc8b22cd9b12330a9a6 = L.circleMarker(
                [52.1625283, 10.5348215],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5cba932b98ab693704d5ab9d5c2808f4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a4d95976d456ccb14c565d3661e59c02 = $(`<div id="html_a4d95976d456ccb14c565d3661e59c02" style="width: 100.0%; height: 100.0%;"><b>Krabbe, Johannes, 1553-1616</b><br>Home city: Wolfenbüttel, Lower Saxony, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_5cba932b98ab693704d5ab9d5c2808f4.setContent(html_a4d95976d456ccb14c565d3661e59c02);
            
        

        circle_marker_eaf9299ec12e5cc8b22cd9b12330a9a6.bindPopup(popup_5cba932b98ab693704d5ab9d5c2808f4)
        ;

        
    
    
            circle_marker_eaf9299ec12e5cc8b22cd9b12330a9a6.bindTooltip(
                `<div>
                     Person: Krabbe, Johannes, 1553-1616
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_08c65da6b3cbacc367331a311722233b = L.circleMarker(
                [45.4046171, 12.3105232],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_89f790d5a20446b052a0c92b891d6501 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0517945a62b0444301cdd4b3845059a6 = $(`<div id="html_0517945a62b0444301cdd4b3845059a6" style="width: 100.0%; height: 100.0%;"><b>Fugger, Georg, fl. 1610</b><br>Home city: Venice, Veneto, Italy<br>Letters in drawable network: 2</div>`)[0];
                popup_89f790d5a20446b052a0c92b891d6501.setContent(html_0517945a62b0444301cdd4b3845059a6);
            
        

        circle_marker_08c65da6b3cbacc367331a311722233b.bindPopup(popup_89f790d5a20446b052a0c92b891d6501)
        ;

        
    
    
            circle_marker_08c65da6b3cbacc367331a311722233b.bindTooltip(
                `<div>
                     Person: Fugger, Georg, fl. 1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_45132bd59072f122cfecfc30c1adf4da = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_02914fc5ff6ae20bd1b19093677d5cf9 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_21a6a16b270a4355b1f5fbdb8fca305f = $(`<div id="html_21a6a16b270a4355b1f5fbdb8fca305f" style="width: 100.0%; height: 100.0%;"><b>Donauer, Christoph, 1564-1611</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_02914fc5ff6ae20bd1b19093677d5cf9.setContent(html_21a6a16b270a4355b1f5fbdb8fca305f);
            
        

        circle_marker_45132bd59072f122cfecfc30c1adf4da.bindPopup(popup_02914fc5ff6ae20bd1b19093677d5cf9)
        ;

        
    
    
            circle_marker_45132bd59072f122cfecfc30c1adf4da.bindTooltip(
                `<div>
                     Person: Donauer, Christoph, 1564-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e25669d47ea9ac5a5d1f0105f5f63f6a = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_156870ce2c3fc7dba256c8ad269c6051 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_08720596dbef603bc82d4e3cdfbd2889 = $(`<div id="html_08720596dbef603bc82d4e3cdfbd2889" style="width: 100.0%; height: 100.0%;"><b>Upper Austria, Government of</b><br>Home city: Linz, Upper Austria, Austria<br>Letters in drawable network: 2</div>`)[0];
                popup_156870ce2c3fc7dba256c8ad269c6051.setContent(html_08720596dbef603bc82d4e3cdfbd2889);
            
        

        circle_marker_e25669d47ea9ac5a5d1f0105f5f63f6a.bindPopup(popup_156870ce2c3fc7dba256c8ad269c6051)
        ;

        
    
    
            circle_marker_e25669d47ea9ac5a5d1f0105f5f63f6a.bindTooltip(
                `<div>
                     Person: Upper Austria, Government of
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6af90cd8e439ccc6391b0ca67c88622a = L.circleMarker(
                [49.2888745, 10.5597693],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b24618d826134ef87aa79ab0e1c3972b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d018831455cb16f2d9ac5103af256fa7 = $(`<div id="html_d018831455cb16f2d9ac5103af256fa7" style="width: 100.0%; height: 100.0%;"><b>Marius, Simon, 1570-1624</b><br>Home city: Ansbach, Bavaria, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_b24618d826134ef87aa79ab0e1c3972b.setContent(html_d018831455cb16f2d9ac5103af256fa7);
            
        

        circle_marker_6af90cd8e439ccc6391b0ca67c88622a.bindPopup(popup_b24618d826134ef87aa79ab0e1c3972b)
        ;

        
    
    
            circle_marker_6af90cd8e439ccc6391b0ca67c88622a.bindTooltip(
                `<div>
                     Person: Marius, Simon, 1570-1624
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_163723a0daa78844f31b16bc1208f426 = L.circleMarker(
                [48.1565472, 14.0243752],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4f2212513821c6221c80e465d44c10a8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_33c16d54feff9bec400a8b4a58ddd99a = $(`<div id="html_33c16d54feff9bec400a8b4a58ddd99a" style="width: 100.0%; height: 100.0%;"><b>Strahlendorf, Peter Heinrich von, 1580-1637</b><br>Home city: Wels, Upper Austria, Austria<br>Letters in drawable network: 2</div>`)[0];
                popup_4f2212513821c6221c80e465d44c10a8.setContent(html_33c16d54feff9bec400a8b4a58ddd99a);
            
        

        circle_marker_163723a0daa78844f31b16bc1208f426.bindPopup(popup_4f2212513821c6221c80e465d44c10a8)
        ;

        
    
    
            circle_marker_163723a0daa78844f31b16bc1208f426.bindTooltip(
                `<div>
                     Person: Strahlendorf, Peter Heinrich von, 1580-1637
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d70167df0da569ff4d359a9e0fbcf3ba = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e21d412890179dfd25c713402a7f57e7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e8c447a8b9c748fd066b4a05028ee6d9 = $(`<div id="html_e8c447a8b9c748fd066b4a05028ee6d9" style="width: 100.0%; height: 100.0%;"><b>Valesius, Jakob, fl. 1614</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 2</div>`)[0];
                popup_e21d412890179dfd25c713402a7f57e7.setContent(html_e8c447a8b9c748fd066b4a05028ee6d9);
            
        

        circle_marker_d70167df0da569ff4d359a9e0fbcf3ba.bindPopup(popup_e21d412890179dfd25c713402a7f57e7)
        ;

        
    
    
            circle_marker_d70167df0da569ff4d359a9e0fbcf3ba.bindTooltip(
                `<div>
                     Person: Valesius, Jakob, fl. 1614
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_60088260668f5eb03f3bf827d3848d68 = L.circleMarker(
                [48.7630165, 11.4250395],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_35ab8dcd28c5d1215b285436a3f09fb1 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_dc9459de7903614baad6c9e92173e04a = $(`<div id="html_dc9459de7903614baad6c9e92173e04a" style="width: 100.0%; height: 100.0%;"><b>Scheiner, Christoph, 1573-1650</b><br>Home city: Ingolstadt, Bavaria, Germany, (Holy Roman Empire)<br>Letters in drawable network: 2</div>`)[0];
                popup_35ab8dcd28c5d1215b285436a3f09fb1.setContent(html_dc9459de7903614baad6c9e92173e04a);
            
        

        circle_marker_60088260668f5eb03f3bf827d3848d68.bindPopup(popup_35ab8dcd28c5d1215b285436a3f09fb1)
        ;

        
    
    
            circle_marker_60088260668f5eb03f3bf827d3848d68.bindTooltip(
                `<div>
                     Person: Scheiner, Christoph, 1573-1650
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_30e090059917d4e3dd310969f45c5449 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a10b2ad8d83613e16ba15519791d3c44 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a32d0ef55e30a9b8fe9abfbb4b6bc700 = $(`<div id="html_a32d0ef55e30a9b8fe9abfbb4b6bc700" style="width: 100.0%; height: 100.0%;"><b>Hoffmann, Peter, fl. 1615</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 2</div>`)[0];
                popup_a10b2ad8d83613e16ba15519791d3c44.setContent(html_a32d0ef55e30a9b8fe9abfbb4b6bc700);
            
        

        circle_marker_30e090059917d4e3dd310969f45c5449.bindPopup(popup_a10b2ad8d83613e16ba15519791d3c44)
        ;

        
    
    
            circle_marker_30e090059917d4e3dd310969f45c5449.bindTooltip(
                `<div>
                     Person: Hoffmann, Peter, fl. 1615
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_743dae9f6b4d844bc58876617d983229 = L.circleMarker(
                [47.2654296, 11.3927685],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2d780dbe97297f5642287b07128e3ba8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_7233503fbe52540f9e4964949515c250 = $(`<div id="html_7233503fbe52540f9e4964949515c250" style="width: 100.0%; height: 100.0%;"><b>Stöltzle, Melchior, fl. 1615</b><br>Home city: Innsbruck, Tyrol, Austria, (Holy Roman Empire)<br>Letters in drawable network: 2</div>`)[0];
                popup_2d780dbe97297f5642287b07128e3ba8.setContent(html_7233503fbe52540f9e4964949515c250);
            
        

        circle_marker_743dae9f6b4d844bc58876617d983229.bindPopup(popup_2d780dbe97297f5642287b07128e3ba8)
        ;

        
    
    
            circle_marker_743dae9f6b4d844bc58876617d983229.bindTooltip(
                `<div>
                     Person: Stöltzle, Melchior, fl. 1615
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_95120279d9c6e7a3e4f89d2183a0a9ba = L.circleMarker(
                [44.4938203, 11.3426327],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4d8653592e7e8433c0cbc2b200322997 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0658dea13ab555058d5e035aa25365dc = $(`<div id="html_0658dea13ab555058d5e035aa25365dc" style="width: 100.0%; height: 100.0%;"><b>Roffeni, Giovanni Antonio, 1580-1643</b><br>Home city: Bologna, Emilia-Romagna, Italy<br>Letters in drawable network: 2</div>`)[0];
                popup_4d8653592e7e8433c0cbc2b200322997.setContent(html_0658dea13ab555058d5e035aa25365dc);
            
        

        circle_marker_95120279d9c6e7a3e4f89d2183a0a9ba.bindPopup(popup_4d8653592e7e8433c0cbc2b200322997)
        ;

        
    
    
            circle_marker_95120279d9c6e7a3e4f89d2183a0a9ba.bindTooltip(
                `<div>
                     Person: Roffeni, Giovanni Antonio, 1580-1643
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e4039383cf34b1d69580b470d8327b9b = L.circleMarker(
                [50.5862066, 8.6742306],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_bcb61406ada5e1cae74591d3e182d8bc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a34a2f4078b59b2c33def54559f5681c = $(`<div id="html_a34a2f4078b59b2c33def54559f5681c" style="width: 100.0%; height: 100.0%;"><b>Horst, Gregor, 1578-1636</b><br>Home city: Giessen, Hesse, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_bcb61406ada5e1cae74591d3e182d8bc.setContent(html_a34a2f4078b59b2c33def54559f5681c);
            
        

        circle_marker_e4039383cf34b1d69580b470d8327b9b.bindPopup(popup_bcb61406ada5e1cae74591d3e182d8bc)
        ;

        
    
    
            circle_marker_e4039383cf34b1d69580b470d8327b9b.bindTooltip(
                `<div>
                     Person: Horst, Gregor, 1578-1636
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_c4a07f48d8004b3b731b291bd3660e4d = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_f6040382ebdbc6fa2d71321b7aeb5008 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0f77c631916c5b5504663692bab2d67b = $(`<div id="html_0f77c631916c5b5504663692bab2d67b" style="width: 100.0%; height: 100.0%;"><b>Schleiffer, Ludwig, fl. 1619</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 2</div>`)[0];
                popup_f6040382ebdbc6fa2d71321b7aeb5008.setContent(html_0f77c631916c5b5504663692bab2d67b);
            
        

        circle_marker_c4a07f48d8004b3b731b291bd3660e4d.bindPopup(popup_f6040382ebdbc6fa2d71321b7aeb5008)
        ;

        
    
    
            circle_marker_c4a07f48d8004b3b731b291bd3660e4d.bindTooltip(
                `<div>
                     Person: Schleiffer, Ludwig, fl. 1619
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0eb7f582eaeaf6c716b996f84e392f26 = L.circleMarker(
                [45.4641943, 9.1896346],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4cdae2c95264beeb6fd0c6199b456536 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_2d0067d9dfdde01801a010d5d75d8f18 = $(`<div id="html_2d0067d9dfdde01801a010d5d75d8f18" style="width: 100.0%; height: 100.0%;"><b>Barbavara, Ludovico, b.1575</b><br>Home city: Milan, Lombardy, Italy<br>Letters in drawable network: 2</div>`)[0];
                popup_4cdae2c95264beeb6fd0c6199b456536.setContent(html_2d0067d9dfdde01801a010d5d75d8f18);
            
        

        circle_marker_0eb7f582eaeaf6c716b996f84e392f26.bindPopup(popup_4cdae2c95264beeb6fd0c6199b456536)
        ;

        
    
    
            circle_marker_0eb7f582eaeaf6c716b996f84e392f26.bindTooltip(
                `<div>
                     Person: Barbavara, Ludovico, b.1575
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_02dbaa627e73b87f97c8d9a471cc2d98 = L.circleMarker(
                [48.1371079, 11.5753822],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_16f9c683b067237d66f2ce25d1c545ac = L.popup({
  "maxWidth": 320,
});

        
            
                let html_562fb4aa2998918c4e6c25c542731952 = $(`<div id="html_562fb4aa2998918c4e6c25c542731952" style="width: 100.0%; height: 100.0%;"><b>Lantz, Johann, 1564-1638</b><br>Home city: Munich, Bavaria, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_16f9c683b067237d66f2ce25d1c545ac.setContent(html_562fb4aa2998918c4e6c25c542731952);
            
        

        circle_marker_02dbaa627e73b87f97c8d9a471cc2d98.bindPopup(popup_16f9c683b067237d66f2ce25d1c545ac)
        ;

        
    
    
            circle_marker_02dbaa627e73b87f97c8d9a471cc2d98.bindTooltip(
                `<div>
                     Person: Lantz, Johann, 1564-1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e38915762433c254ce2755b5f42693bd = L.circleMarker(
                [49.453872, 11.077298],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e4098e121d988e645efefc6f9892761a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9e2b0fe9276a26dd3e421bc3af3d19bb = $(`<div id="html_9e2b0fe9276a26dd3e421bc3af3d19bb" style="width: 100.0%; height: 100.0%;"><b>Nuremberg, Senate of, fl. 1655</b><br>Home city: Nuremberg, Bavaria, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_e4098e121d988e645efefc6f9892761a.setContent(html_9e2b0fe9276a26dd3e421bc3af3d19bb);
            
        

        circle_marker_e38915762433c254ce2755b5f42693bd.bindPopup(popup_e4098e121d988e645efefc6f9892761a)
        ;

        
    
    
            circle_marker_e38915762433c254ce2755b5f42693bd.bindTooltip(
                `<div>
                     Person: Nuremberg, Senate of, fl. 1655
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3df1b426fd190d73e01643352bbab66f = L.circleMarker(
                [48.1598261, 14.0758845],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2b039efeff79802de2a25b27f00123d0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_00176428c5508e2c097c4355941e4cd2 = $(`<div id="html_00176428c5508e2c097c4355941e4cd2" style="width: 100.0%; height: 100.0%;"><b>Widmar, Wolf, fl. 1623</b><br>Home city: Castle Leombach, Leombach, Upper Austria, Austria<br>Letters in drawable network: 2</div>`)[0];
                popup_2b039efeff79802de2a25b27f00123d0.setContent(html_00176428c5508e2c097c4355941e4cd2);
            
        

        circle_marker_3df1b426fd190d73e01643352bbab66f.bindPopup(popup_2b039efeff79802de2a25b27f00123d0)
        ;

        
    
    
            circle_marker_3df1b426fd190d73e01643352bbab66f.bindTooltip(
                `<div>
                     Person: Widmar, Wolf, fl. 1623
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4f37b66620f8f3b4612a22c8dc8a33ad = L.circleMarker(
                [48.3331132, 13.8532739],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b09fd85f5cf000140582b642a1e31a58 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_b7031163d9a32f80c5a14964d4c338aa = $(`<div id="html_b7031163d9a32f80c5a14964d4c338aa" style="width: 100.0%; height: 100.0%;"><b>Hohenfelder, Ludwig von, 1576-1644</b><br>Home city: Schloss Weidenholz, Weidenholz, Upper Austria, Austria<br>Letters in drawable network: 2</div>`)[0];
                popup_b09fd85f5cf000140582b642a1e31a58.setContent(html_b7031163d9a32f80c5a14964d4c338aa);
            
        

        circle_marker_4f37b66620f8f3b4612a22c8dc8a33ad.bindPopup(popup_b09fd85f5cf000140582b642a1e31a58)
        ;

        
    
    
            circle_marker_4f37b66620f8f3b4612a22c8dc8a33ad.bindTooltip(
                `<div>
                     Person: Hohenfelder, Ludwig von, 1576-1644
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ac9ecf7aacffd213b8b6ff34b21534d7 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_73f1e51b8e548f8f2dea46f989ac5cea = L.popup({
  "maxWidth": 320,
});

        
            
                let html_31ce70c3d761893865fb29739de224af = $(`<div id="html_31ce70c3d761893865fb29739de224af" style="width: 100.0%; height: 100.0%;"><b>Hochkircher, Christoph von, fl. 1624</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 2</div>`)[0];
                popup_73f1e51b8e548f8f2dea46f989ac5cea.setContent(html_31ce70c3d761893865fb29739de224af);
            
        

        circle_marker_ac9ecf7aacffd213b8b6ff34b21534d7.bindPopup(popup_73f1e51b8e548f8f2dea46f989ac5cea)
        ;

        
    
    
            circle_marker_ac9ecf7aacffd213b8b6ff34b21534d7.bindTooltip(
                `<div>
                     Person: Hochkircher, Christoph von, fl. 1624
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5c615529b7eab3533e1b6e76537f080d = L.circleMarker(
                [50.41768, 8.63873],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0f623adea16613554b5e668a03ae4da7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c49b44187013385e5dd0c95a8c9dbbe7 = $(`<div id="html_c49b44187013385e5dd0c95a8c9dbbe7" style="width: 100.0%; height: 100.0%;"><b>Mögling, Daniel, 1596-1635</b><br>Home city: Butzbach, Hesse, Germany, (Holy Roman Empire)<br>Letters in drawable network: 2</div>`)[0];
                popup_0f623adea16613554b5e668a03ae4da7.setContent(html_c49b44187013385e5dd0c95a8c9dbbe7);
            
        

        circle_marker_5c615529b7eab3533e1b6e76537f080d.bindPopup(popup_0f623adea16613554b5e668a03ae4da7)
        ;

        
    
    
            circle_marker_5c615529b7eab3533e1b6e76537f080d.bindTooltip(
                `<div>
                     Person: Mögling, Daniel, 1596-1635
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a5c14b98a6401a5258de2de10eee04b2 = L.circleMarker(
                [48.3984968, 9.9912458],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3274d5fed018ef1a1f7e8a9fbba45ffa = L.popup({
  "maxWidth": 320,
});

        
            
                let html_76ff97a9d29d45b5bcd698c1ba13169f = $(`<div id="html_76ff97a9d29d45b5bcd698c1ba13169f" style="width: 100.0%; height: 100.0%;"><b>Schleicher, Sigmund, fl. 1627</b><br>Home city: Ulm, Baden-Württemberg, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_3274d5fed018ef1a1f7e8a9fbba45ffa.setContent(html_76ff97a9d29d45b5bcd698c1ba13169f);
            
        

        circle_marker_a5c14b98a6401a5258de2de10eee04b2.bindPopup(popup_3274d5fed018ef1a1f7e8a9fbba45ffa)
        ;

        
    
    
            circle_marker_a5c14b98a6401a5258de2de10eee04b2.bindTooltip(
                `<div>
                     Person: Schleicher, Sigmund, fl. 1627
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e765ee3c8d2945511328bc78d4823156 = L.circleMarker(
                [48.436836, 9.9404851],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_100331c5da03574b6df31d5974002724 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_af6cd7ca102b666327939ef9cfc48286 = $(`<div id="html_af6cd7ca102b666327939ef9cfc48286" style="width: 100.0%; height: 100.0%;"><b>Bachmayer, Wolfgang, 1597-1685</b><br>Home city: Mähringen, Baden-Württemberg, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_100331c5da03574b6df31d5974002724.setContent(html_af6cd7ca102b666327939ef9cfc48286);
            
        

        circle_marker_e765ee3c8d2945511328bc78d4823156.bindPopup(popup_100331c5da03574b6df31d5974002724)
        ;

        
    
    
            circle_marker_e765ee3c8d2945511328bc78d4823156.bindTooltip(
                `<div>
                     Person: Bachmayer, Wolfgang, 1597-1685
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a4b93699155a6c7c4fba658e9e1aee7a = L.circleMarker(
                [51.8953514, 11.0520563],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6f60a9cae2ab44f277cd79bb1bc055c4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_7f8c8bd90f501ae2a2fe6cd4730042f1 = $(`<div id="html_7f8c8bd90f501ae2a2fe6cd4730042f1" style="width: 100.0%; height: 100.0%;"><b>Becker, David, fl. 1630</b><br>Home city: Halberstadt, Saxony-Anhalt, Germany<br>Letters in drawable network: 2</div>`)[0];
                popup_6f60a9cae2ab44f277cd79bb1bc055c4.setContent(html_7f8c8bd90f501ae2a2fe6cd4730042f1);
            
        

        circle_marker_a4b93699155a6c7c4fba658e9e1aee7a.bindPopup(popup_6f60a9cae2ab44f277cd79bb1bc055c4)
        ;

        
    
    
            circle_marker_a4b93699155a6c7c4fba658e9e1aee7a.bindTooltip(
                `<div>
                     Person: Becker, David, fl. 1630
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_be868383457d4b5073fa89d4fdea4022 = L.circleMarker(
                [48.8534951, 2.3483915],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_8882910a573ccb8750abb92b5d7535d9 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_4bd1e2a9274e7ff19a60c747325252f5 = $(`<div id="html_4bd1e2a9274e7ff19a60c747325252f5" style="width: 100.0%; height: 100.0%;"><b>Gassendi, Pierre, 1592-1655</b><br>Home city: Paris, Île-de-France, France<br>Letters in drawable network: 2</div>`)[0];
                popup_8882910a573ccb8750abb92b5d7535d9.setContent(html_4bd1e2a9274e7ff19a60c747325252f5);
            
        

        circle_marker_be868383457d4b5073fa89d4fdea4022.bindPopup(popup_8882910a573ccb8750abb92b5d7535d9)
        ;

        
    
    
            circle_marker_be868383457d4b5073fa89d4fdea4022.bindTooltip(
                `<div>
                     Person: Gassendi, Pierre, 1592-1655
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_66d3b1131c61bd7b256d74b589a576a2 = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_640a05058d5daeb170ee64fdac5d8fe0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_feb25226c7fc7ed9d2d818b1804c5ca4 = $(`<div id="html_feb25226c7fc7ed9d2d818b1804c5ca4" style="width: 100.0%; height: 100.0%;"><b>Hochmann, Johann, 1528-1603</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_640a05058d5daeb170ee64fdac5d8fe0.setContent(html_feb25226c7fc7ed9d2d818b1804c5ca4);
            
        

        circle_marker_66d3b1131c61bd7b256d74b589a576a2.bindPopup(popup_640a05058d5daeb170ee64fdac5d8fe0)
        ;

        
    
    
            circle_marker_66d3b1131c61bd7b256d74b589a576a2.bindTooltip(
                `<div>
                     Person: Hochmann, Johann, 1528-1603
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a637771bda0afe1a476d67ed67361b9c = L.circleMarker(
                [49.3180932, 9.4217233],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_fdaf5c8b0e3c844149a9f2ee320e4183 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a71b6312180d68c3ab5ff0da68463af5 = $(`<div id="html_a71b6312180d68c3ab5ff0da68463af5" style="width: 100.0%; height: 100.0%;"><b>Schärer, Melchior, 1563-1624</b><br>Home city: Widdern, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_fdaf5c8b0e3c844149a9f2ee320e4183.setContent(html_a71b6312180d68c3ab5ff0da68463af5);
            
        

        circle_marker_a637771bda0afe1a476d67ed67361b9c.bindPopup(popup_fdaf5c8b0e3c844149a9f2ee320e4183)
        ;

        
    
    
            circle_marker_a637771bda0afe1a476d67ed67361b9c.bindTooltip(
                `<div>
                     Person: Schärer, Melchior, 1563-1624
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_74b8327e806032feaf71420558e7271b = L.circleMarker(
                [48.4121233, 9.7847091],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9867e62c5d3cd40d52ab4044eb685d5a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_b1c5a288fb9ad9e6fc6bbf4f1b905b77 = $(`<div id="html_b1c5a288fb9ad9e6fc6bbf4f1b905b77" style="width: 100.0%; height: 100.0%;"><b>Köllin, Matthias, 1570-1612</b><br>Home city: Blaubeuren Abbey, Blaubeuren, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_9867e62c5d3cd40d52ab4044eb685d5a.setContent(html_b1c5a288fb9ad9e6fc6bbf4f1b905b77);
            
        

        circle_marker_74b8327e806032feaf71420558e7271b.bindPopup(popup_9867e62c5d3cd40d52ab4044eb685d5a)
        ;

        
    
    
            circle_marker_74b8327e806032feaf71420558e7271b.bindTooltip(
                `<div>
                     Person: Köllin, Matthias, 1570-1612
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5a635b30f3bda018659db976bd5a3a2b = L.circleMarker(
                [48.7501041, 8.8707147],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3a0ecdfc69f2eb9ee0a513072b079d97 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_364f2b70447969e84d1ea447e13ee468 = $(`<div id="html_364f2b70447969e84d1ea447e13ee468" style="width: 100.0%; height: 100.0%;"><b>Kepler, Sebald, fl. 1530-1593</b><br>Home city: Weil der Stadt, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_3a0ecdfc69f2eb9ee0a513072b079d97.setContent(html_364f2b70447969e84d1ea447e13ee468);
            
        

        circle_marker_5a635b30f3bda018659db976bd5a3a2b.bindPopup(popup_3a0ecdfc69f2eb9ee0a513072b079d97)
        ;

        
    
    
            circle_marker_5a635b30f3bda018659db976bd5a3a2b.bindTooltip(
                `<div>
                     Person: Kepler, Sebald, fl. 1530-1593
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4b7956bcd19e0b44c4b9cc44da53f16e = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5537540b6f99f9e2096ce7b160cbce89 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_79e50fe81957ed4877c42e5c027036de = $(`<div id="html_79e50fe81957ed4877c42e5c027036de" style="width: 100.0%; height: 100.0%;"><b>Faculty of Theological , University of Tübingen, fl. 1594</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_5537540b6f99f9e2096ce7b160cbce89.setContent(html_79e50fe81957ed4877c42e5c027036de);
            
        

        circle_marker_4b7956bcd19e0b44c4b9cc44da53f16e.bindPopup(popup_5537540b6f99f9e2096ce7b160cbce89)
        ;

        
    
    
            circle_marker_4b7956bcd19e0b44c4b9cc44da53f16e.bindTooltip(
                `<div>
                     Person: Faculty of Theological , University of Tübingen, fl. 1594
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_7a34045861a4df360b21038a52f3a4da = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_90c6eaf58a3d08b515541f3fde8268db = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e50aef38fc5ab2e3dbf12b082df5ebb4 = $(`<div id="html_e50aef38fc5ab2e3dbf12b082df5ebb4" style="width: 100.0%; height: 100.0%;"><b>Court Council of War, Styria, fl. 1594</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_90c6eaf58a3d08b515541f3fde8268db.setContent(html_e50aef38fc5ab2e3dbf12b082df5ebb4);
            
        

        circle_marker_7a34045861a4df360b21038a52f3a4da.bindPopup(popup_90c6eaf58a3d08b515541f3fde8268db)
        ;

        
    
    
            circle_marker_7a34045861a4df360b21038a52f3a4da.bindTooltip(
                `<div>
                     Person: Court Council of War, Styria, fl. 1594
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a4fa3ada112bffe4669aa4aa22af2109 = L.circleMarker(
                [48.734346, 8.7352364],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e787c8e4bde5fc20bef05650375322db = L.popup({
  "maxWidth": 320,
});

        
            
                let html_fce61618867c355f3d0945fe8213c5fe = $(`<div id="html_fce61618867c355f3d0945fe8213c5fe" style="width: 100.0%; height: 100.0%;"><b>Ortholph, Christoph, b.1573</b><br>Home city: Hirsau, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_e787c8e4bde5fc20bef05650375322db.setContent(html_fce61618867c355f3d0945fe8213c5fe);
            
        

        circle_marker_a4fa3ada112bffe4669aa4aa22af2109.bindPopup(popup_e787c8e4bde5fc20bef05650375322db)
        ;

        
    
    
            circle_marker_a4fa3ada112bffe4669aa4aa22af2109.bindTooltip(
                `<div>
                     Person: Ortholph, Christoph, b.1573
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_55ea3d1ae2a5b098e101654fae8f5adc = L.circleMarker(
                [48.2741408, 14.5817826],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1140856288ea3c94d22569de3aeabccc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_b76abb15a1082f714bb6fc640be793ef = $(`<div id="html_b76abb15a1082f714bb6fc640be793ef" style="width: 100.0%; height: 100.0%;"><b>Tschernembl, Georg Erasmus von, 1567-1626</b><br>Home city: Schwertberg, Upper Austria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_1140856288ea3c94d22569de3aeabccc.setContent(html_b76abb15a1082f714bb6fc640be793ef);
            
        

        circle_marker_55ea3d1ae2a5b098e101654fae8f5adc.bindPopup(popup_1140856288ea3c94d22569de3aeabccc)
        ;

        
    
    
            circle_marker_55ea3d1ae2a5b098e101654fae8f5adc.bindTooltip(
                `<div>
                     Person: Tschernembl, Georg Erasmus von, 1567-1626
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_010c5a382e50e03222b41dde5defaa70 = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_17a2b1d51755f14f7e4538632fe1043b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_cb49f044f839733b5def50dc37e108cb = $(`<div id="html_cb49f044f839733b5def50dc37e108cb" style="width: 100.0%; height: 100.0%;"><b>Styria, Councillors of, fl. 1595</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_17a2b1d51755f14f7e4538632fe1043b.setContent(html_cb49f044f839733b5def50dc37e108cb);
            
        

        circle_marker_010c5a382e50e03222b41dde5defaa70.bindPopup(popup_17a2b1d51755f14f7e4538632fe1043b)
        ;

        
    
    
            circle_marker_010c5a382e50e03222b41dde5defaa70.bindTooltip(
                `<div>
                     Person: Styria, Councillors of, fl. 1595
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_670deb3985004f3b4ab82e1923cde6e5 = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e0d411f3d535b933e2001a88d4b47975 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9e9b4790542960b7f48a87d799a88b28 = $(`<div id="html_9e9b4790542960b7f48a87d799a88b28" style="width: 100.0%; height: 100.0%;"><b>Church Minister, Graz, fl. 1597</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_e0d411f3d535b933e2001a88d4b47975.setContent(html_9e9b4790542960b7f48a87d799a88b28);
            
        

        circle_marker_670deb3985004f3b4ab82e1923cde6e5.bindPopup(popup_e0d411f3d535b933e2001a88d4b47975)
        ;

        
    
    
            circle_marker_670deb3985004f3b4ab82e1923cde6e5.bindTooltip(
                `<div>
                     Person: Church Minister, Graz, fl. 1597
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_fd43b64de65d505a050c9607ca139790 = L.circleMarker(
                [48.1371079, 11.5753822],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0ad990290760c9062a95584c8e081084 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_4ccf0588e2f376166e201a619a5fafb9 = $(`<div id="html_4ccf0588e2f376166e201a619a5fafb9" style="width: 100.0%; height: 100.0%;"><b>Fickler, Johann Baptist, 1533-1610</b><br>Home city: Munich, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_0ad990290760c9062a95584c8e081084.setContent(html_4ccf0588e2f376166e201a619a5fafb9);
            
        

        circle_marker_fd43b64de65d505a050c9607ca139790.bindPopup(popup_0ad990290760c9062a95584c8e081084)
        ;

        
    
    
            circle_marker_fd43b64de65d505a050c9607ca139790.bindTooltip(
                `<div>
                     Person: Fickler, Johann Baptist, 1533-1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_523895a32bc5f560fdaa2f02b66dab4e = L.circleMarker(
                [47.4121987, 15.2721668],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_914f23d8dce834d054d5e8c1c30dd7a2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_8c1513622dc0b0842737fe73f7f4f1d8 = $(`<div id="html_8c1513622dc0b0842737fe73f7f4f1d8" style="width: 100.0%; height: 100.0%;"><b>Vochtmann, Matthias, fl. 1597</b><br>Home city: Bruck an der Mur, Styria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_914f23d8dce834d054d5e8c1c30dd7a2.setContent(html_8c1513622dc0b0842737fe73f7f4f1d8);
            
        

        circle_marker_523895a32bc5f560fdaa2f02b66dab4e.bindPopup(popup_914f23d8dce834d054d5e8c1c30dd7a2)
        ;

        
    
    
            circle_marker_523895a32bc5f560fdaa2f02b66dab4e.bindTooltip(
                `<div>
                     Person: Vochtmann, Matthias, fl. 1597
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_49a5cda04ee21f5fc0bb8b383b337d94 = L.circleMarker(
                [48.4283109, 9.2657297],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_bd95e29c61177fa8e2f4a27c87888a74 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_bd47961e22d4a357e7d1a1c05cb1ae12 = $(`<div id="html_bd47961e22d4a357e7d1a1c05cb1ae12" style="width: 100.0%; height: 100.0%;"><b>Pleuring, Johannes, fl. 1597</b><br>Home city: Burgstein, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_bd95e29c61177fa8e2f4a27c87888a74.setContent(html_bd47961e22d4a357e7d1a1c05cb1ae12);
            
        

        circle_marker_49a5cda04ee21f5fc0bb8b383b337d94.bindPopup(popup_bd95e29c61177fa8e2f4a27c87888a74)
        ;

        
    
    
            circle_marker_49a5cda04ee21f5fc0bb8b383b337d94.bindTooltip(
                `<div>
                     Person: Pleuring, Johannes, fl. 1597
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e1ddb637157d972c459aa7b6cd998cb3 = L.circleMarker(
                [50.9281717, 11.5879359],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_47e07dd76cd5746b4f5aaf63505e664f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_09410e9ffd8ed51f985d148a7da37d8c = $(`<div id="html_09410e9ffd8ed51f985d148a7da37d8c" style="width: 100.0%; height: 100.0%;"><b>Limnäus, Georg, 1554-1611</b><br>Home city: Jena, Thuringia, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_47e07dd76cd5746b4f5aaf63505e664f.setContent(html_09410e9ffd8ed51f985d148a7da37d8c);
            
        

        circle_marker_e1ddb637157d972c459aa7b6cd998cb3.bindPopup(popup_47e07dd76cd5746b4f5aaf63505e664f)
        ;

        
    
    
            circle_marker_e1ddb637157d972c459aa7b6cd998cb3.bindTooltip(
                `<div>
                     Person: Limnäus, Georg, 1554-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3e9e955babfb8a3f40150af8a6128f2b = L.circleMarker(
                [50.253211, 14.8409386],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_31327a97a5b395d9aafd3bb5edaefd5a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_8718e93cfcbc50cd597f5482f59d086f = $(`<div id="html_8718e93cfcbc50cd597f5482f59d086f" style="width: 100.0%; height: 100.0%;"><b>Meherentius, Rudolph, fl. 1599</b><br>Home city: Girsitz<br>Letters in drawable network: 1</div>`)[0];
                popup_31327a97a5b395d9aafd3bb5edaefd5a.setContent(html_8718e93cfcbc50cd597f5482f59d086f);
            
        

        circle_marker_3e9e955babfb8a3f40150af8a6128f2b.bindPopup(popup_31327a97a5b395d9aafd3bb5edaefd5a)
        ;

        
    
    
            circle_marker_3e9e955babfb8a3f40150af8a6128f2b.bindTooltip(
                `<div>
                     Person: Meherentius, Rudolph, fl. 1599
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_db8bc7f9f885768c1b4545d17b421e0c = L.circleMarker(
                [48.584614, 7.7507127],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_7603e1672a98257a8858d22ff9d6740b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_6508b11813dd59d961a12eb1346e09db = $(`<div id="html_6508b11813dd59d961a12eb1346e09db" style="width: 100.0%; height: 100.0%;"><b>Dasypodius, Conrad, 1532-1601</b><br>Home city: Strasbourg, Grand Est, France<br>Letters in drawable network: 1</div>`)[0];
                popup_7603e1672a98257a8858d22ff9d6740b.setContent(html_6508b11813dd59d961a12eb1346e09db);
            
        

        circle_marker_db8bc7f9f885768c1b4545d17b421e0c.bindPopup(popup_7603e1672a98257a8858d22ff9d6740b)
        ;

        
    
    
            circle_marker_db8bc7f9f885768c1b4545d17b421e0c.bindTooltip(
                `<div>
                     Person: Dasypodius, Conrad, 1532-1601
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b19cfdca04135b0d0db2b006276786b5 = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_44fea0b64ad8446d2acf785e29165522 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_200e6d18264f32019933febd1992b853 = $(`<div id="html_200e6d18264f32019933febd1992b853" style="width: 100.0%; height: 100.0%;"><b>Leyser, Polycarp, 1586-1633</b><br>Home city: Dresden, Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_44fea0b64ad8446d2acf785e29165522.setContent(html_200e6d18264f32019933febd1992b853);
            
        

        circle_marker_b19cfdca04135b0d0db2b006276786b5.bindPopup(popup_44fea0b64ad8446d2acf785e29165522)
        ;

        
    
    
            circle_marker_b19cfdca04135b0d0db2b006276786b5.bindTooltip(
                `<div>
                     Person: Leyser, Polycarp, 1586-1633
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_437e896b4a4074434f300be47ff7a8b4 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4cb5a0287d67bbdb67ca104d6d9537e8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d8e9d304b11a9f1c049c4a1cd9f3677f = $(`<div id="html_d8e9d304b11a9f1c049c4a1cd9f3677f" style="width: 100.0%; height: 100.0%;"><b>Maximilian II, Holy Roman Emperor, 1527-1576</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_4cb5a0287d67bbdb67ca104d6d9537e8.setContent(html_d8e9d304b11a9f1c049c4a1cd9f3677f);
            
        

        circle_marker_437e896b4a4074434f300be47ff7a8b4.bindPopup(popup_4cb5a0287d67bbdb67ca104d6d9537e8)
        ;

        
    
    
            circle_marker_437e896b4a4074434f300be47ff7a8b4.bindTooltip(
                `<div>
                     Person: Maximilian II, Holy Roman Emperor, 1527-1576
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_739fff422e168c553a79c889db7b3969 = L.circleMarker(
                [52.1314783, 11.6400789],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_d2b231894e6eaeb35aab46b50f9af094 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_02da2cb99b7da28859d40d89f10419d9 = $(`<div id="html_02da2cb99b7da28859d40d89f10419d9" style="width: 100.0%; height: 100.0%;"><b>Rollenhagius, Georgius, 1542-1609</b><br>Home city: Magdeburg, Saxony-Anhalt, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_d2b231894e6eaeb35aab46b50f9af094.setContent(html_02da2cb99b7da28859d40d89f10419d9);
            
        

        circle_marker_739fff422e168c553a79c889db7b3969.bindPopup(popup_d2b231894e6eaeb35aab46b50f9af094)
        ;

        
    
    
            circle_marker_739fff422e168c553a79c889db7b3969.bindTooltip(
                `<div>
                     Person: Rollenhagius, Georgius, 1542-1609
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_197db99c1b2ef18a6c0de90d012dd123 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5cda289b32507dbe29b39b7da0277b16 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_49100b35a9f9703cd82c6416c89a1f10 = $(`<div id="html_49100b35a9f9703cd82c6416c89a1f10" style="width: 100.0%; height: 100.0%;"><b>Barvitius, Johann Anton, 1555-1620</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_5cda289b32507dbe29b39b7da0277b16.setContent(html_49100b35a9f9703cd82c6416c89a1f10);
            
        

        circle_marker_197db99c1b2ef18a6c0de90d012dd123.bindPopup(popup_5cda289b32507dbe29b39b7da0277b16)
        ;

        
    
    
            circle_marker_197db99c1b2ef18a6c0de90d012dd123.bindTooltip(
                `<div>
                     Person: Barvitius, Johann Anton, 1555-1620
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_f90e1ce2ff1e257577633fc652e4298c = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_97008e9ee3c1a09e7d70a3945762c138 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_286909707f7089f0efedf3dacd9c8ba6 = $(`<div id="html_286909707f7089f0efedf3dacd9c8ba6" style="width: 100.0%; height: 100.0%;"><b>Schulten, Otto, d.1624</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_97008e9ee3c1a09e7d70a3945762c138.setContent(html_286909707f7089f0efedf3dacd9c8ba6);
            
        

        circle_marker_f90e1ce2ff1e257577633fc652e4298c.bindPopup(popup_97008e9ee3c1a09e7d70a3945762c138)
        ;

        
    
    
            circle_marker_f90e1ce2ff1e257577633fc652e4298c.bindTooltip(
                `<div>
                     Person: Schulten, Otto, d.1624
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_772bde6c980e275ce6217ac2e9b45763 = L.circleMarker(
                [52.3730796, 4.8924534],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c2cc947cca4896657a208440e3d19e6d = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9b7fbfb094e041d9aed6d0eb82166010 = $(`<div id="html_9b7fbfb094e041d9aed6d0eb82166010" style="width: 100.0%; height: 100.0%;"><b>Blaeu, Willem Janszoon, 1571-1638</b><br>Home city: Amsterdam, North Holland, (United Provinces) Netherlands<br>Letters in drawable network: 1</div>`)[0];
                popup_c2cc947cca4896657a208440e3d19e6d.setContent(html_9b7fbfb094e041d9aed6d0eb82166010);
            
        

        circle_marker_772bde6c980e275ce6217ac2e9b45763.bindPopup(popup_c2cc947cca4896657a208440e3d19e6d)
        ;

        
    
    
            circle_marker_772bde6c980e275ce6217ac2e9b45763.bindTooltip(
                `<div>
                     Person: Blaeu, Willem Janszoon, 1571-1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a509ca1b5d4f19eb1ef7cf3951e6f72f = L.circleMarker(
                [49.4093582, 8.694724],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5efdd7456d7f6427c4a03fabb076f2f8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_71f5bfdeeb9ab04056a684930de64b3b = $(`<div id="html_71f5bfdeeb9ab04056a684930de64b3b" style="width: 100.0%; height: 100.0%;"><b>Christmann, Jacob, 1554-1613</b><br>Home city: Heidelberg, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_5efdd7456d7f6427c4a03fabb076f2f8.setContent(html_71f5bfdeeb9ab04056a684930de64b3b);
            
        

        circle_marker_a509ca1b5d4f19eb1ef7cf3951e6f72f.bindPopup(popup_5efdd7456d7f6427c4a03fabb076f2f8)
        ;

        
    
    
            circle_marker_a509ca1b5d4f19eb1ef7cf3951e6f72f.bindTooltip(
                `<div>
                     Person: Christmann, Jacob, 1554-1613
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3a9f627f4cd38d1e4aa9d51bedebeeb3 = L.circleMarker(
                [50.1106444, 8.6820917],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_708c00e4d718720df72d57e87d2414a2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_540949307fdfa938aae459aad929b93d = $(`<div id="html_540949307fdfa938aae459aad929b93d" style="width: 100.0%; height: 100.0%;"><b>Marne, Claude, d.1610</b><br>Home city: Frankfurt am Main, Hesse, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_708c00e4d718720df72d57e87d2414a2.setContent(html_540949307fdfa938aae459aad929b93d);
            
        

        circle_marker_3a9f627f4cd38d1e4aa9d51bedebeeb3.bindPopup(popup_708c00e4d718720df72d57e87d2414a2)
        ;

        
    
    
            circle_marker_3a9f627f4cd38d1e4aa9d51bedebeeb3.bindTooltip(
                `<div>
                     Person: Marne, Claude, d.1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5532514c9334fc55f0843b3958ba82f3 = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2a0d2e5c9ead66710aaeb7d05a294bad = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f9ad8bcedd7546b021fb5aabdf2d3196 = $(`<div id="html_f9ad8bcedd7546b021fb5aabdf2d3196" style="width: 100.0%; height: 100.0%;"><b>Hagenloch, Anselm, fl. 1604</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_2a0d2e5c9ead66710aaeb7d05a294bad.setContent(html_f9ad8bcedd7546b021fb5aabdf2d3196);
            
        

        circle_marker_5532514c9334fc55f0843b3958ba82f3.bindPopup(popup_2a0d2e5c9ead66710aaeb7d05a294bad)
        ;

        
    
    
            circle_marker_5532514c9334fc55f0843b3958ba82f3.bindTooltip(
                `<div>
                     Person: Hagenloch, Anselm, fl. 1604
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ffc0eb3c86be3ff9e0ad60b7f1869417 = L.circleMarker(
                [51.1563185, 14.991018],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_03dcc31c559b831e9ae1cb0e1b10e840 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_17b95cb3f6acfe5aced9a64abf8ab95b = $(`<div id="html_17b95cb3f6acfe5aced9a64abf8ab95b" style="width: 100.0%; height: 100.0%;"><b>Scultetus, Bartholomäus, 1540-1614</b><br>Home city: Görlitz, Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_03dcc31c559b831e9ae1cb0e1b10e840.setContent(html_17b95cb3f6acfe5aced9a64abf8ab95b);
            
        

        circle_marker_ffc0eb3c86be3ff9e0ad60b7f1869417.bindPopup(popup_03dcc31c559b831e9ae1cb0e1b10e840)
        ;

        
    
    
            circle_marker_ffc0eb3c86be3ff9e0ad60b7f1869417.bindTooltip(
                `<div>
                     Person: Scultetus, Bartholomäus, 1540-1614
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ff9ddcb2a2648b98fb261a2103e8488f = L.circleMarker(
                [45.0677551, 7.6824892],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_7235da9c7af398668912215ba1ebe14f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_27625b7dd0a51d70f0f3a52ddc679a56 = $(`<div id="html_27625b7dd0a51d70f0f3a52ddc679a56" style="width: 100.0%; height: 100.0%;"><b>Cristini, Bartolomeo, b.1547</b><br>Home city: Turin, Piedmont, Italy<br>Letters in drawable network: 1</div>`)[0];
                popup_7235da9c7af398668912215ba1ebe14f.setContent(html_27625b7dd0a51d70f0f3a52ddc679a56);
            
        

        circle_marker_ff9ddcb2a2648b98fb261a2103e8488f.bindPopup(popup_7235da9c7af398668912215ba1ebe14f)
        ;

        
    
    
            circle_marker_ff9ddcb2a2648b98fb261a2103e8488f.bindTooltip(
                `<div>
                     Person: Cristini, Bartolomeo, b.1547
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0432830c1d0b5b3c31165c4b99f324df = L.circleMarker(
                [53.5336832, 7.2642003],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c5440e99597426d6185e11e3c35d6324 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f47c0103bc370c89bace3e697c1794af = $(`<div id="html_f47c0103bc370c89bace3e697c1794af" style="width: 100.0%; height: 100.0%;"><b>Schele, Eberartus, fl. 1601-1605</b><br>Home city: Osteel, Lower Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_c5440e99597426d6185e11e3c35d6324.setContent(html_f47c0103bc370c89bace3e697c1794af);
            
        

        circle_marker_0432830c1d0b5b3c31165c4b99f324df.bindPopup(popup_c5440e99597426d6185e11e3c35d6324)
        ;

        
    
    
            circle_marker_0432830c1d0b5b3c31165c4b99f324df.bindTooltip(
                `<div>
                     Person: Schele, Eberartus, fl. 1601-1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e2a78ca8fc2bb02438e7979936528a93 = L.circleMarker(
                [50.039436, 15.5606989],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_61cdfe5d71e0aa97d22718dbab0c0e52 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9650574f9c35a721559d18b6817d6959 = $(`<div id="html_9650574f9c35a721559d18b6817d6959" style="width: 100.0%; height: 100.0%;"><b>von Mies, Matthias, fl. 1605</b><br>Home city: Přelouč, Pardubický, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_61cdfe5d71e0aa97d22718dbab0c0e52.setContent(html_9650574f9c35a721559d18b6817d6959);
            
        

        circle_marker_e2a78ca8fc2bb02438e7979936528a93.bindPopup(popup_61cdfe5d71e0aa97d22718dbab0c0e52)
        ;

        
    
    
            circle_marker_e2a78ca8fc2bb02438e7979936528a93.bindTooltip(
                `<div>
                     Person: von Mies, Matthias, fl. 1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5b49b86fa1b6375fea5e70a94f1e1d39 = L.circleMarker(
                [51.2211097, 4.3997081],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_98d9aa9c2c709a3020caec71182e3f14 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_848a4b9d88f300d7d819fdeb4a32a12b = $(`<div id="html_848a4b9d88f300d7d819fdeb4a32a12b" style="width: 100.0%; height: 100.0%;"><b>Martinius, Aegidius, fl. 1603</b><br>Home city: Antwerp, Flanders, Belgium<br>Letters in drawable network: 1</div>`)[0];
                popup_98d9aa9c2c709a3020caec71182e3f14.setContent(html_848a4b9d88f300d7d819fdeb4a32a12b);
            
        

        circle_marker_5b49b86fa1b6375fea5e70a94f1e1d39.bindPopup(popup_98d9aa9c2c709a3020caec71182e3f14)
        ;

        
    
    
            circle_marker_5b49b86fa1b6375fea5e70a94f1e1d39.bindTooltip(
                `<div>
                     Person: Martinius, Aegidius, fl. 1603
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_550382c1dc61532e3d18c3e158eb0fc4 = L.circleMarker(
                [49.9995205, 8.2736253],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_f7ee50e2ac5633b58fc3d23fe844c56b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ddcb00dee2a5f48b6dcb6031bdd6fd28 = $(`<div id="html_ddcb00dee2a5f48b6dcb6031bdd6fd28" style="width: 100.0%; height: 100.0%;"><b>Krzistanowicz, Stanisław, fl. 1605</b><br>Home city: Mainz, Rhineland-Palatinate, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_f7ee50e2ac5633b58fc3d23fe844c56b.setContent(html_ddcb00dee2a5f48b6dcb6031bdd6fd28);
            
        

        circle_marker_550382c1dc61532e3d18c3e158eb0fc4.bindPopup(popup_f7ee50e2ac5633b58fc3d23fe844c56b)
        ;

        
    
    
            circle_marker_550382c1dc61532e3d18c3e158eb0fc4.bindTooltip(
                `<div>
                     Person: Krzistanowicz, Stanisław, fl. 1605
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_482cf74887b6a905ec24e9669ee65036 = L.circleMarker(
                [46.603354, 1.8883335],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e1c3f78ee6a6cd107bd453e29e37bcd7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_465f61789e409e886158663c8001aece = $(`<div id="html_465f61789e409e886158663c8001aece" style="width: 100.0%; height: 100.0%;"><b>Nautonier, Guillaume de, 1557-1620</b><br>Home city: France<br>Letters in drawable network: 1</div>`)[0];
                popup_e1c3f78ee6a6cd107bd453e29e37bcd7.setContent(html_465f61789e409e886158663c8001aece);
            
        

        circle_marker_482cf74887b6a905ec24e9669ee65036.bindPopup(popup_e1c3f78ee6a6cd107bd453e29e37bcd7)
        ;

        
    
    
            circle_marker_482cf74887b6a905ec24e9669ee65036.bindTooltip(
                `<div>
                     Person: Nautonier, Guillaume de, 1557-1620
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_425d400f54e67eef6101c74be99c42ab = L.circleMarker(
                [41.8933203, 12.4829321],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5043fdeebed0cc6c0c80749148d042d7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_af0dc4680ab000630ddd82ebd01720f5 = $(`<div id="html_af0dc4680ab000630ddd82ebd01720f5" style="width: 100.0%; height: 100.0%;"><b>Heck, Johannes, 1579-1616 or after</b><br>Home city: Rome, Latium, Italy<br>Letters in drawable network: 1</div>`)[0];
                popup_5043fdeebed0cc6c0c80749148d042d7.setContent(html_af0dc4680ab000630ddd82ebd01720f5);
            
        

        circle_marker_425d400f54e67eef6101c74be99c42ab.bindPopup(popup_5043fdeebed0cc6c0c80749148d042d7)
        ;

        
    
    
            circle_marker_425d400f54e67eef6101c74be99c42ab.bindTooltip(
                `<div>
                     Person: Heck, Johannes, 1579-1616 or after
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9c6898422e980a61eca161e4d4936097 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_475e22890c341e77b6c61ab44f6b4aa4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_21c78d28177735c93147336058ec22dd = $(`<div id="html_21c78d28177735c93147336058ec22dd" style="width: 100.0%; height: 100.0%;"><b>Vlaveryn, Wenzel, fl. 1606</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_475e22890c341e77b6c61ab44f6b4aa4.setContent(html_21c78d28177735c93147336058ec22dd);
            
        

        circle_marker_9c6898422e980a61eca161e4d4936097.bindPopup(popup_475e22890c341e77b6c61ab44f6b4aa4)
        ;

        
    
    
            circle_marker_9c6898422e980a61eca161e4d4936097.bindTooltip(
                `<div>
                     Person: Vlaveryn, Wenzel, fl. 1606
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_56589737671dc0cfbcf7f0352721d283 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_28d813995a5237cf89c94e6d0f87dc67 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_97ce5238157becaeeca726bf510a7292 = $(`<div id="html_97ce5238157becaeeca726bf510a7292" style="width: 100.0%; height: 100.0%;"><b>Albert (Herr), fl. 1606</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_28d813995a5237cf89c94e6d0f87dc67.setContent(html_97ce5238157becaeeca726bf510a7292);
            
        

        circle_marker_56589737671dc0cfbcf7f0352721d283.bindPopup(popup_28d813995a5237cf89c94e6d0f87dc67)
        ;

        
    
    
            circle_marker_56589737671dc0cfbcf7f0352721d283.bindTooltip(
                `<div>
                     Person: Albert (Herr), fl. 1606
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b8d5c2e9c2e3230210f5d779b458f0b8 = L.circleMarker(
                [47.0708678, 15.4382786],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_5fd90af992d64698e7eba846df6b92b0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c0f29fa9310c68002efde5c9aedd0ce5 = $(`<div id="html_c0f29fa9310c68002efde5c9aedd0ce5" style="width: 100.0%; height: 100.0%;"><b>Casal, Peter, fl. 1606</b><br>Home city: Graz, Styria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_5fd90af992d64698e7eba846df6b92b0.setContent(html_c0f29fa9310c68002efde5c9aedd0ce5);
            
        

        circle_marker_b8d5c2e9c2e3230210f5d779b458f0b8.bindPopup(popup_5fd90af992d64698e7eba846df6b92b0)
        ;

        
    
    
            circle_marker_b8d5c2e9c2e3230210f5d779b458f0b8.bindTooltip(
                `<div>
                     Person: Casal, Peter, fl. 1606
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1f78157629047469199baa3830472625 = L.circleMarker(
                [51.2211097, 4.3997081],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4d73aa26030864cc1f5540a29a328669 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_697c0dce52495daf92876f1179745a56 = $(`<div id="html_697c0dce52495daf92876f1179745a56" style="width: 100.0%; height: 100.0%;"><b>Coignet, Michiel, 1549-1623</b><br>Home city: Antwerp, Flanders, Belgium<br>Letters in drawable network: 1</div>`)[0];
                popup_4d73aa26030864cc1f5540a29a328669.setContent(html_697c0dce52495daf92876f1179745a56);
            
        

        circle_marker_1f78157629047469199baa3830472625.bindPopup(popup_4d73aa26030864cc1f5540a29a328669)
        ;

        
    
    
            circle_marker_1f78157629047469199baa3830472625.bindTooltip(
                `<div>
                     Person: Coignet, Michiel, 1549-1623
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_21e5de2b03a51ec3e8d7c12ff0730437 = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b6edbd405e6e3ddaf9c692fce3fd925d = L.popup({
  "maxWidth": 320,
});

        
            
                let html_322edd3f62e2112409aa9ba1844c0545 = $(`<div id="html_322edd3f62e2112409aa9ba1844c0545" style="width: 100.0%; height: 100.0%;"><b>Ruland, Martin, 1569-1611</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_b6edbd405e6e3ddaf9c692fce3fd925d.setContent(html_322edd3f62e2112409aa9ba1844c0545);
            
        

        circle_marker_21e5de2b03a51ec3e8d7c12ff0730437.bindPopup(popup_b6edbd405e6e3ddaf9c692fce3fd925d)
        ;

        
    
    
            circle_marker_21e5de2b03a51ec3e8d7c12ff0730437.bindTooltip(
                `<div>
                     Person: Ruland, Martin, 1569-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b87e3c894a1e8d5fe038cc0a7a7dba56 = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2f1dd65f2174aa003a8fd373f7d6ec4e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ab483378e4a6683046f5a45f9f53d25a = $(`<div id="html_ab483378e4a6683046f5a45f9f53d25a" style="width: 100.0%; height: 100.0%;"><b>Zeidler, Hans, fl. 1607</b><br>Home city: Dresden, Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_2f1dd65f2174aa003a8fd373f7d6ec4e.setContent(html_ab483378e4a6683046f5a45f9f53d25a);
            
        

        circle_marker_b87e3c894a1e8d5fe038cc0a7a7dba56.bindPopup(popup_2f1dd65f2174aa003a8fd373f7d6ec4e)
        ;

        
    
    
            circle_marker_b87e3c894a1e8d5fe038cc0a7a7dba56.bindTooltip(
                `<div>
                     Person: Zeidler, Hans, fl. 1607
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_1a648a23aabea9ee7fad55fe0596d42d = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c59090199e4f08cb61b90487282911eb = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e8c7727bf9e326f79bb4a0df80aee6ba = $(`<div id="html_e8c7727bf9e326f79bb4a0df80aee6ba" style="width: 100.0%; height: 100.0%;"><b>De Cavalli, Marin, 1561-1611</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_c59090199e4f08cb61b90487282911eb.setContent(html_e8c7727bf9e326f79bb4a0df80aee6ba);
            
        

        circle_marker_1a648a23aabea9ee7fad55fe0596d42d.bindPopup(popup_c59090199e4f08cb61b90487282911eb)
        ;

        
    
    
            circle_marker_1a648a23aabea9ee7fad55fe0596d42d.bindTooltip(
                `<div>
                     Person: De Cavalli, Marin, 1561-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_85de90161627abd9c16e16395ac39d96 = L.circleMarker(
                [54.0703296, 9.9884451],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_59854f0de1d211374159cd2a853b1986 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_401594b6705cb7fdca931e96d67b66d6 = $(`<div id="html_401594b6705cb7fdca931e96d67b66d6" style="width: 100.0%; height: 100.0%;"><b>Forst, Detlef, fl. 1608</b><br>Home city: Neumünster, Schleswig-Holstein, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_59854f0de1d211374159cd2a853b1986.setContent(html_401594b6705cb7fdca931e96d67b66d6);
            
        

        circle_marker_85de90161627abd9c16e16395ac39d96.bindPopup(popup_59854f0de1d211374159cd2a853b1986)
        ;

        
    
    
            circle_marker_85de90161627abd9c16e16395ac39d96.bindTooltip(
                `<div>
                     Person: Forst, Detlef, fl. 1608
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_9c7711ef95c32e6c4dec423db339e563 = L.circleMarker(
                [50.879202, 4.7011675],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_8aead6d50eb13c0f53b24184dc96acdf = L.popup({
  "maxWidth": 320,
});

        
            
                let html_74936be41e651d23b98239ce5f051241 = $(`<div id="html_74936be41e651d23b98239ce5f051241" style="width: 100.0%; height: 100.0%;"><b>Roomen, Adriaan van, 1561-1615</b><br>Home city: Leuven, Flemish Brabant, Belgium<br>Letters in drawable network: 1</div>`)[0];
                popup_8aead6d50eb13c0f53b24184dc96acdf.setContent(html_74936be41e651d23b98239ce5f051241);
            
        

        circle_marker_9c7711ef95c32e6c4dec423db339e563.bindPopup(popup_8aead6d50eb13c0f53b24184dc96acdf)
        ;

        
    
    
            circle_marker_9c7711ef95c32e6c4dec423db339e563.bindTooltip(
                `<div>
                     Person: Roomen, Adriaan van, 1561-1615
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b7b8096ceb3af9772e484c80ef6b6c3c = L.circleMarker(
                [51.6511561, 14.0342532],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_e89b057b9e025b8960c13b6ef4ae08b0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_379442cdd58c6482f293a75cecd1dd94 = $(`<div id="html_379442cdd58c6482f293a75cecd1dd94" style="width: 100.0%; height: 100.0%;"><b>Moller, Albin, fl. 1609</b><br>Home city: Altdöbern, Brandenburg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_e89b057b9e025b8960c13b6ef4ae08b0.setContent(html_379442cdd58c6482f293a75cecd1dd94);
            
        

        circle_marker_b7b8096ceb3af9772e484c80ef6b6c3c.bindPopup(popup_e89b057b9e025b8960c13b6ef4ae08b0)
        ;

        
    
    
            circle_marker_b7b8096ceb3af9772e484c80ef6b6c3c.bindTooltip(
                `<div>
                     Person: Moller, Albin, fl. 1609
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_01b237ac1347cdfdf68cd6cd1680028e = L.circleMarker(
                [50.698157, 17.3849804],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_39740cbef66d089e78487e1fefaaa465 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_52f59aef43eb8ad4e6438abcdf360581 = $(`<div id="html_52f59aef43eb8ad4e6438abcdf360581" style="width: 100.0%; height: 100.0%;"><b>Hannke, Valentin, fl. 1610</b><br>Home city: Grodków, Opole Voivodeship, Poland<br>Letters in drawable network: 1</div>`)[0];
                popup_39740cbef66d089e78487e1fefaaa465.setContent(html_52f59aef43eb8ad4e6438abcdf360581);
            
        

        circle_marker_01b237ac1347cdfdf68cd6cd1680028e.bindPopup(popup_39740cbef66d089e78487e1fefaaa465)
        ;

        
    
    
            circle_marker_01b237ac1347cdfdf68cd6cd1680028e.bindTooltip(
                `<div>
                     Person: Hannke, Valentin, fl. 1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_cb2e4b1b028f7fb2635350e6b7414cd3 = L.circleMarker(
                [43.7697955, 11.2556404],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_db1e1e7acade439603e9ecc7f253216e = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e7592be3e4d2db6df96fdd6ae10992ee = $(`<div id="html_e7592be3e4d2db6df96fdd6ae10992ee" style="width: 100.0%; height: 100.0%;"><b>Vinta, Belisario, 1542-1613</b><br>Home city: Florence, Tuscany, Italy<br>Letters in drawable network: 1</div>`)[0];
                popup_db1e1e7acade439603e9ecc7f253216e.setContent(html_e7592be3e4d2db6df96fdd6ae10992ee);
            
        

        circle_marker_cb2e4b1b028f7fb2635350e6b7414cd3.bindPopup(popup_db1e1e7acade439603e9ecc7f253216e)
        ;

        
    
    
            circle_marker_cb2e4b1b028f7fb2635350e6b7414cd3.bindTooltip(
                `<div>
                     Person: Vinta, Belisario, 1542-1613
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_aacd15a81756e8c29d9dce8ef6589455 = L.circleMarker(
                [48.8534951, 2.3483915],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_fd7e4b8e88b2a04cd1b47fd4608b6c79 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_92f1646a5f5c47cadd715e5b22ac2962 = $(`<div id="html_92f1646a5f5c47cadd715e5b22ac2962" style="width: 100.0%; height: 100.0%;"><b>Carosio, Matteo, fl. 1610</b><br>Home city: Paris, Île-de-France, France<br>Letters in drawable network: 1</div>`)[0];
                popup_fd7e4b8e88b2a04cd1b47fd4608b6c79.setContent(html_92f1646a5f5c47cadd715e5b22ac2962);
            
        

        circle_marker_aacd15a81756e8c29d9dce8ef6589455.bindPopup(popup_fd7e4b8e88b2a04cd1b47fd4608b6c79)
        ;

        
    
    
            circle_marker_aacd15a81756e8c29d9dce8ef6589455.bindTooltip(
                `<div>
                     Person: Carosio, Matteo, fl. 1610
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_18ddfa77c032d4db336f659537097972 = L.circleMarker(
                [52.2277037, 11.0104702],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9a117036fcd171d97a1b1bf3060edea7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_3dd88028639475ca716382a314982624 = $(`<div id="html_3dd88028639475ca716382a314982624" style="width: 100.0%; height: 100.0%;"><b>Caselius, Johannes, 1533-1613</b><br>Home city: Helmstedt, Lower Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_9a117036fcd171d97a1b1bf3060edea7.setContent(html_3dd88028639475ca716382a314982624);
            
        

        circle_marker_18ddfa77c032d4db336f659537097972.bindPopup(popup_9a117036fcd171d97a1b1bf3060edea7)
        ;

        
    
    
            circle_marker_18ddfa77c032d4db336f659537097972.bindTooltip(
                `<div>
                     Person: Caselius, Johannes, 1533-1613
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_4fff478e5903d206775a9078c85e3eae = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2dffe2701407c518ffde45deac556ce4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_12cfe356c2e431ce6f87bfa3ab4850ab = $(`<div id="html_12cfe356c2e431ce6f87bfa3ab4850ab" style="width: 100.0%; height: 100.0%;"><b>Lotter, Tobias, 1568-1631</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 1</div>`)[0];
                popup_2dffe2701407c518ffde45deac556ce4.setContent(html_12cfe356c2e431ce6f87bfa3ab4850ab);
            
        

        circle_marker_4fff478e5903d206775a9078c85e3eae.bindPopup(popup_2dffe2701407c518ffde45deac556ce4)
        ;

        
    
    
            circle_marker_4fff478e5903d206775a9078c85e3eae.bindTooltip(
                `<div>
                     Person: Lotter, Tobias, 1568-1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_0a68db1c350f7f601566f8763b6ee621 = L.circleMarker(
                [51.0493286, 13.7381437],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9afbcbdb94df788eaf76b63b09310dc1 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0ac2cf729a3e45a96bd4ee6fe14ac328 = $(`<div id="html_0ac2cf729a3e45a96bd4ee6fe14ac328" style="width: 100.0%; height: 100.0%;"><b>Gödelmann, Johann Georg, 1559-1611</b><br>Home city: Dresden, Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_9afbcbdb94df788eaf76b63b09310dc1.setContent(html_0ac2cf729a3e45a96bd4ee6fe14ac328);
            
        

        circle_marker_0a68db1c350f7f601566f8763b6ee621.bindPopup(popup_9afbcbdb94df788eaf76b63b09310dc1)
        ;

        
    
    
            circle_marker_0a68db1c350f7f601566f8763b6ee621.bindTooltip(
                `<div>
                     Person: Gödelmann, Johann Georg, 1559-1611
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ab615b660c794460ca85a33caa369808 = L.circleMarker(
                [48.5296743, 11.5084954],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_769ac26b4431f2bb49aa195edefa56e4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_18083e0faacdf503b2930805b5d799b4 = $(`<div id="html_18083e0faacdf503b2930805b5d799b4" style="width: 100.0%; height: 100.0%;"><b>Lorenz, Regina, 1590-1617</b><br>Home city: Pfaffenhofen an der Ilm, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_769ac26b4431f2bb49aa195edefa56e4.setContent(html_18083e0faacdf503b2930805b5d799b4);
            
        

        circle_marker_ab615b660c794460ca85a33caa369808.bindPopup(popup_769ac26b4431f2bb49aa195edefa56e4)
        ;

        
    
    
            circle_marker_ab615b660c794460ca85a33caa369808.bindTooltip(
                `<div>
                     Person: Lorenz, Regina, 1590-1617
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_961ffa05d808312a8035cd41fa98b0ab = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_8bee5fdec2a511d28da28060e43197fa = L.popup({
  "maxWidth": 320,
});

        
            
                let html_395f4c857019183e302087b891d2eb71 = $(`<div id="html_395f4c857019183e302087b891d2eb71" style="width: 100.0%; height: 100.0%;"><b>Stuttgart, Consistory of</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 1</div>`)[0];
                popup_8bee5fdec2a511d28da28060e43197fa.setContent(html_395f4c857019183e302087b891d2eb71);
            
        

        circle_marker_961ffa05d808312a8035cd41fa98b0ab.bindPopup(popup_8bee5fdec2a511d28da28060e43197fa)
        ;

        
    
    
            circle_marker_961ffa05d808312a8035cd41fa98b0ab.bindTooltip(
                `<div>
                     Person: Stuttgart, Consistory of
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_afe4772d4797b4fa3df997fe897d9b1f = L.circleMarker(
                [50.1106444, 8.6820917],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4e98a8e970e0a70862674e02f14e2823 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_36f926fc0f58eef2a12944c2e8028e5c = $(`<div id="html_36f926fc0f58eef2a12944c2e8028e5c" style="width: 100.0%; height: 100.0%;"><b>Freher, Marquard Friedrich, 1565-1614</b><br>Home city: Frankfurt am Main, Hesse, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_4e98a8e970e0a70862674e02f14e2823.setContent(html_36f926fc0f58eef2a12944c2e8028e5c);
            
        

        circle_marker_afe4772d4797b4fa3df997fe897d9b1f.bindPopup(popup_4e98a8e970e0a70862674e02f14e2823)
        ;

        
    
    
            circle_marker_afe4772d4797b4fa3df997fe897d9b1f.bindTooltip(
                `<div>
                     Person: Freher, Marquard Friedrich, 1565-1614
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_34c58978eddb22eeb01a1fff5c9def7d = L.circleMarker(
                [49.453872, 11.077298],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_df01e882f08e3a331b0203877754dbd0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_c32315d18e6ccc3ca9e5566fda8e5e14 = $(`<div id="html_c32315d18e6ccc3ca9e5566fda8e5e14" style="width: 100.0%; height: 100.0%;"><b>Brunn, Lukas, 1572-1628</b><br>Home city: Nuremberg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_df01e882f08e3a331b0203877754dbd0.setContent(html_c32315d18e6ccc3ca9e5566fda8e5e14);
            
        

        circle_marker_34c58978eddb22eeb01a1fff5c9def7d.bindPopup(popup_df01e882f08e3a331b0203877754dbd0)
        ;

        
    
    
            circle_marker_34c58978eddb22eeb01a1fff5c9def7d.bindTooltip(
                `<div>
                     Person: Brunn, Lukas, 1572-1628
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3d07b7da68d73f1005eaa01abbffd676 = L.circleMarker(
                [48.3059078, 14.286198],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6cfc726c6d0461fd4b4e7ce352d2d9cc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_53d66fd39e981b90ff9afce4fcd98b17 = $(`<div id="html_53d66fd39e981b90ff9afce4fcd98b17" style="width: 100.0%; height: 100.0%;"><b>Poltzhügel, Johann Georg Poltz von, d.1645</b><br>Home city: Linz, Upper Austria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_6cfc726c6d0461fd4b4e7ce352d2d9cc.setContent(html_53d66fd39e981b90ff9afce4fcd98b17);
            
        

        circle_marker_3d07b7da68d73f1005eaa01abbffd676.bindPopup(popup_6cfc726c6d0461fd4b4e7ce352d2d9cc)
        ;

        
    
    
            circle_marker_3d07b7da68d73f1005eaa01abbffd676.bindTooltip(
                `<div>
                     Person: Poltzhügel, Johann Georg Poltz von, d.1645
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d4a61dbc27325cab32ccb6e6602074f9 = L.circleMarker(
                [48.1565472, 14.0243752],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9545de2e92c05f21fcd101facfd7b428 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_06f4a71a6e049b817cdac43344bd3c22 = $(`<div id="html_06f4a71a6e049b817cdac43344bd3c22" style="width: 100.0%; height: 100.0%;"><b>Polheim, Gundacker von, 1575-1644</b><br>Home city: Wels, Upper Austria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_9545de2e92c05f21fcd101facfd7b428.setContent(html_06f4a71a6e049b817cdac43344bd3c22);
            
        

        circle_marker_d4a61dbc27325cab32ccb6e6602074f9.bindPopup(popup_9545de2e92c05f21fcd101facfd7b428)
        ;

        
    
    
            circle_marker_d4a61dbc27325cab32ccb6e6602074f9.bindTooltip(
                `<div>
                     Person: Polheim, Gundacker von, 1575-1644
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e21527e767be187c0c6b7fd233ec5fc0 = L.circleMarker(
                [47.4744721, 11.1681018],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_d02aa5eec694ae58c7598d05e9cbc28b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_4091739d5411707ea3e56ecfa250ba29 = $(`<div id="html_4091739d5411707ea3e56ecfa250ba29" style="width: 100.0%; height: 100.0%;"><b>Zelking, Hans Wilhelm von, 1589-1627</b><br>Home city: Wamberg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_d02aa5eec694ae58c7598d05e9cbc28b.setContent(html_4091739d5411707ea3e56ecfa250ba29);
            
        

        circle_marker_e21527e767be187c0c6b7fd233ec5fc0.bindPopup(popup_d02aa5eec694ae58c7598d05e9cbc28b)
        ;

        
    
    
            circle_marker_e21527e767be187c0c6b7fd233ec5fc0.bindTooltip(
                `<div>
                     Person: Zelking, Hans Wilhelm von, 1589-1627
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_3d7ec58f47f9a1f4eec501d2a03f8af5 = L.circleMarker(
                [48.8012983, 9.0150026],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_bd430fe39630363379c4249e3f8d56cc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_52b3e3c7b980d1ec3bd836de45315d01 = $(`<div id="html_52b3e3c7b980d1ec3bd836de45315d01" style="width: 100.0%; height: 100.0%;"><b>Leonberg, Senate of</b><br>Home city: Leonberg, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_bd430fe39630363379c4249e3f8d56cc.setContent(html_52b3e3c7b980d1ec3bd836de45315d01);
            
        

        circle_marker_3d7ec58f47f9a1f4eec501d2a03f8af5.bindPopup(popup_bd430fe39630363379c4249e3f8d56cc)
        ;

        
    
    
            circle_marker_3d7ec58f47f9a1f4eec501d2a03f8af5.bindTooltip(
                `<div>
                     Person: Leonberg, Senate of
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ceaf11570fb369932bf75d6ef04870f1 = L.circleMarker(
                [50.938361, 6.959974],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b28ce12fdb541fe18f9c907c08ac6f50 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f6ec4838a6bc09cc1ffe5483685134e0 = $(`<div id="html_f6ec4838a6bc09cc1ffe5483685134e0" style="width: 100.0%; height: 100.0%;"><b>Ens, Caspar, 1570-1650</b><br>Home city: Cologne, North Rhine-Westphalia, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_b28ce12fdb541fe18f9c907c08ac6f50.setContent(html_f6ec4838a6bc09cc1ffe5483685134e0);
            
        

        circle_marker_ceaf11570fb369932bf75d6ef04870f1.bindPopup(popup_b28ce12fdb541fe18f9c907c08ac6f50)
        ;

        
    
    
            circle_marker_ceaf11570fb369932bf75d6ef04870f1.bindTooltip(
                `<div>
                     Person: Ens, Caspar, 1570-1650
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ba3cd3564854ac34a52cf6d71a6a5f8a = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_97498de43087a1d8bb05b6d5923e846a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_22a475833944ac75895f6183d489f948 = $(`<div id="html_22a475833944ac75895f6183d489f948" style="width: 100.0%; height: 100.0%;"><b>Faber, Sebastian, 1564-1625</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 1</div>`)[0];
                popup_97498de43087a1d8bb05b6d5923e846a.setContent(html_22a475833944ac75895f6183d489f948);
            
        

        circle_marker_ba3cd3564854ac34a52cf6d71a6a5f8a.bindPopup(popup_97498de43087a1d8bb05b6d5923e846a)
        ;

        
    
    
            circle_marker_ba3cd3564854ac34a52cf6d71a6a5f8a.bindTooltip(
                `<div>
                     Person: Faber, Sebastian, 1564-1625
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e45bcea092381de42461ae13ed5e55d4 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_ef56e9c7ead1ea1d538fbf392551bedc = L.popup({
  "maxWidth": 320,
});

        
            
                let html_875e7f0f7b9473359a0e51847b3f353e = $(`<div id="html_875e7f0f7b9473359a0e51847b3f353e" style="width: 100.0%; height: 100.0%;"><b>Rechberger, Wilhelm, b.1593</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_ef56e9c7ead1ea1d538fbf392551bedc.setContent(html_875e7f0f7b9473359a0e51847b3f353e);
            
        

        circle_marker_e45bcea092381de42461ae13ed5e55d4.bindPopup(popup_ef56e9c7ead1ea1d538fbf392551bedc)
        ;

        
    
    
            circle_marker_e45bcea092381de42461ae13ed5e55d4.bindTooltip(
                `<div>
                     Person: Rechberger, Wilhelm, b.1593
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ab318056db8474ceed3514f815700e61 = L.circleMarker(
                [48.0390046, 14.4191276],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_696073df719f2bb66feac540aa7cfed3 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_13dc4f49211be60d8f8be4483e2eac3f = $(`<div id="html_13dc4f49211be60d8f8be4483e2eac3f" style="width: 100.0%; height: 100.0%;"><b>Lehner, Johannes, fl. 1619</b><br>Home city: Steyr, Upper Austria, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_696073df719f2bb66feac540aa7cfed3.setContent(html_13dc4f49211be60d8f8be4483e2eac3f);
            
        

        circle_marker_ab318056db8474ceed3514f815700e61.bindPopup(popup_696073df719f2bb66feac540aa7cfed3)
        ;

        
    
    
            circle_marker_ab318056db8474ceed3514f815700e61.bindTooltip(
                `<div>
                     Person: Lehner, Johannes, fl. 1619
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_99138459e2cb1777f57b42248c967c15 = L.circleMarker(
                [48.7784485, 9.1800132],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_59a612e742d35023cb86fd7d351b6bae = L.popup({
  "maxWidth": 320,
});

        
            
                let html_d510bf036d77177dcc22734fc1302fe6 = $(`<div id="html_d510bf036d77177dcc22734fc1302fe6" style="width: 100.0%; height: 100.0%;"><b>Grüninger, Erasmus, 1566-1631</b><br>Home city: Stuttgart, Baden-Württemberg, (Swabian Imperial Circle) Germany, (Holy Roman Empire)<br>Letters in drawable network: 1</div>`)[0];
                popup_59a612e742d35023cb86fd7d351b6bae.setContent(html_d510bf036d77177dcc22734fc1302fe6);
            
        

        circle_marker_99138459e2cb1777f57b42248c967c15.bindPopup(popup_59a612e742d35023cb86fd7d351b6bae)
        ;

        
    
    
            circle_marker_99138459e2cb1777f57b42248c967c15.bindTooltip(
                `<div>
                     Person: Grüninger, Erasmus, 1566-1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d7e327c14bd67e1933bc1c15b1d38844 = L.circleMarker(
                [48.3690341, 10.8979522],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1ca8873fa8e39b530e6450cf36bd5fb7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_ea8498ec3ff2784710e9fb089ea5c0e7 = $(`<div id="html_ea8498ec3ff2784710e9fb089ea5c0e7" style="width: 100.0%; height: 100.0%;"><b>Augsburg, Senate of</b><br>Home city: Augsburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_1ca8873fa8e39b530e6450cf36bd5fb7.setContent(html_ea8498ec3ff2784710e9fb089ea5c0e7);
            
        

        circle_marker_d7e327c14bd67e1933bc1c15b1d38844.bindPopup(popup_1ca8873fa8e39b530e6450cf36bd5fb7)
        ;

        
    
    
            circle_marker_d7e327c14bd67e1933bc1c15b1d38844.bindTooltip(
                `<div>
                     Person: Augsburg, Senate of
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_27318f9527ff50ef79cb6d583bc1373d = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_30c962d6b282bfa0725f0d2e28a24cfa = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0ba866c5863de24635f38088c8e78156 = $(`<div id="html_0ba866c5863de24635f38088c8e78156" style="width: 100.0%; height: 100.0%;"><b>Regensburg, Senate of, fl. 1620</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_30c962d6b282bfa0725f0d2e28a24cfa.setContent(html_0ba866c5863de24635f38088c8e78156);
            
        

        circle_marker_27318f9527ff50ef79cb6d583bc1373d.bindPopup(popup_30c962d6b282bfa0725f0d2e28a24cfa)
        ;

        
    
    
            circle_marker_27318f9527ff50ef79cb6d583bc1373d.bindTooltip(
                `<div>
                     Person: Regensburg, Senate of, fl. 1620
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_328e0721cad3978fee9c266f47563cb8 = L.circleMarker(
                [45.6348591, 11.4063543],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_7aa27db40d741525307c1a1ae079f583 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e0580df4ddb4e5f898454c7540bcada8 = $(`<div id="html_e0580df4ddb4e5f898454c7540bcada8" style="width: 100.0%; height: 100.0%;"><b>Pasino, Pacius, fl. 1621</b><br>Home city: Vicenza, Veneto, Italy<br>Letters in drawable network: 1</div>`)[0];
                popup_7aa27db40d741525307c1a1ae079f583.setContent(html_e0580df4ddb4e5f898454c7540bcada8);
            
        

        circle_marker_328e0721cad3978fee9c266f47563cb8.bindPopup(popup_7aa27db40d741525307c1a1ae079f583)
        ;

        
    
    
            circle_marker_328e0721cad3978fee9c266f47563cb8.bindTooltip(
                `<div>
                     Person: Pasino, Pacius, fl. 1621
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b634de5ec3ce7c8cbb58bd3531c22b44 = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_9324dda67cbaf703f200ce1062dfa80b = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f9bbf909c66dae79a376f126c1e3d16c = $(`<div id="html_f9bbf909c66dae79a376f126c1e3d16c" style="width: 100.0%; height: 100.0%;"><b>Oberndorffer, Johann, 1549-1625</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_9324dda67cbaf703f200ce1062dfa80b.setContent(html_f9bbf909c66dae79a376f126c1e3d16c);
            
        

        circle_marker_b634de5ec3ce7c8cbb58bd3531c22b44.bindPopup(popup_9324dda67cbaf703f200ce1062dfa80b)
        ;

        
    
    
            circle_marker_b634de5ec3ce7c8cbb58bd3531c22b44.bindTooltip(
                `<div>
                     Person: Oberndorffer, Johann, 1549-1625
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8a98c98b7cd54e6bd97be1510657f12e = L.circleMarker(
                [51.5074456, -0.1277653],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c68f466a8ad8cb68d850a372ad0963a7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_6f582101c6fbd662aa8c14ba91149394 = $(`<div id="html_6f582101c6fbd662aa8c14ba91149394" style="width: 100.0%; height: 100.0%;"><b>Gunter, Edmund, 1581-1626</b><br>Home city: London, England, United Kingdom<br>Letters in drawable network: 1</div>`)[0];
                popup_c68f466a8ad8cb68d850a372ad0963a7.setContent(html_6f582101c6fbd662aa8c14ba91149394);
            
        

        circle_marker_8a98c98b7cd54e6bd97be1510657f12e.bindPopup(popup_c68f466a8ad8cb68d850a372ad0963a7)
        ;

        
    
    
            circle_marker_8a98c98b7cd54e6bd97be1510657f12e.bindTooltip(
                `<div>
                     Person: Gunter, Edmund, 1581-1626
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_8d40081d2dd79e1b77681534ba81a29b = L.circleMarker(
                [48.5203263, 9.053596],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_27c12c405edc7b978a9855a004e82c5a = L.popup({
  "maxWidth": 320,
});

        
            
                let html_80568e9175b46478f8cb04f81e1a799f = $(`<div id="html_80568e9175b46478f8cb04f81e1a799f" style="width: 100.0%; height: 100.0%;"><b>Falco, Johannes, 1599-1634</b><br>Home city: Tübingen, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_27c12c405edc7b978a9855a004e82c5a.setContent(html_80568e9175b46478f8cb04f81e1a799f);
            
        

        circle_marker_8d40081d2dd79e1b77681534ba81a29b.bindPopup(popup_27c12c405edc7b978a9855a004e82c5a)
        ;

        
    
    
            circle_marker_8d40081d2dd79e1b77681534ba81a29b.bindTooltip(
                `<div>
                     Person: Falco, Johannes, 1599-1634
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_29911aefa2371198daa3fd8647c9419e = L.circleMarker(
                [51.7520131, -1.2578499],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_6bef46718ac57c01c872852cb9200bb9 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9fa240434c384dd507d8cdf26b4a1125 = $(`<div id="html_9fa240434c384dd507d8cdf26b4a1125" style="width: 100.0%; height: 100.0%;"><b>Briggs, Henry, 1561-1631</b><br>Home city: Oxford, Oxfordshire, England<br>Letters in drawable network: 1</div>`)[0];
                popup_6bef46718ac57c01c872852cb9200bb9.setContent(html_9fa240434c384dd507d8cdf26b4a1125);
            
        

        circle_marker_29911aefa2371198daa3fd8647c9419e.bindPopup(popup_6bef46718ac57c01c872852cb9200bb9)
        ;

        
    
    
            circle_marker_29911aefa2371198daa3fd8647c9419e.bindTooltip(
                `<div>
                     Person: Briggs, Henry, 1561-1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_ad24ac4a332347d084c9c0b512c73e86 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_811ce40ea263e6030e8cdacfd3eabc9f = L.popup({
  "maxWidth": 320,
});

        
            
                let html_51f8541e579daa7db13afdf3218a800b = $(`<div id="html_51f8541e579daa7db13afdf3218a800b" style="width: 100.0%; height: 100.0%;"><b>Höritzer von Steinbach, Hans Wolf, fl. 1625</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_811ce40ea263e6030e8cdacfd3eabc9f.setContent(html_51f8541e579daa7db13afdf3218a800b);
            
        

        circle_marker_ad24ac4a332347d084c9c0b512c73e86.bindPopup(popup_811ce40ea263e6030e8cdacfd3eabc9f)
        ;

        
    
    
            circle_marker_ad24ac4a332347d084c9c0b512c73e86.bindTooltip(
                `<div>
                     Person: Höritzer von Steinbach, Hans Wolf, fl. 1625
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e6b58c12c99893c6b5a2d8730fa9a20f = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_442518db7be993db2802a97a19b13f24 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_035a2ac431101c0dc1a6f05dd8283dcc = $(`<div id="html_035a2ac431101c0dc1a6f05dd8283dcc" style="width: 100.0%; height: 100.0%;"><b>Schörkl, Martin, fl. 1625</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_442518db7be993db2802a97a19b13f24.setContent(html_035a2ac431101c0dc1a6f05dd8283dcc);
            
        

        circle_marker_e6b58c12c99893c6b5a2d8730fa9a20f.bindPopup(popup_442518db7be993db2802a97a19b13f24)
        ;

        
    
    
            circle_marker_e6b58c12c99893c6b5a2d8730fa9a20f.bindTooltip(
                `<div>
                     Person: Schörkl, Martin, fl. 1625
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_595d1aea0b23f29326cb4a886d3cafee = L.circleMarker(
                [49.453872, 11.077298],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_3343f3e3b39073a8803d19586edf22ca = L.popup({
  "maxWidth": 320,
});

        
            
                let html_a622bb95d40608fcb9e6fd5361e8999b = $(`<div id="html_a622bb95d40608fcb9e6fd5361e8999b" style="width: 100.0%; height: 100.0%;"><b>Eckebrecht, Phillip, 1594-1667</b><br>Home city: Nuremberg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_3343f3e3b39073a8803d19586edf22ca.setContent(html_a622bb95d40608fcb9e6fd5361e8999b);
            
        

        circle_marker_595d1aea0b23f29326cb4a886d3cafee.bindPopup(popup_3343f3e3b39073a8803d19586edf22ca)
        ;

        
    
    
            circle_marker_595d1aea0b23f29326cb4a886d3cafee.bindTooltip(
                `<div>
                     Person: Eckebrecht, Phillip, 1594-1667
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_e8ba941b7c029db1c6b6559bac832601 = L.circleMarker(
                [46.2017559, 6.1466014],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_cfdc1e13bff52cead0e29c8d89af1829 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_5debf1043c18cd09cfbbb9dd00e25758 = $(`<div id="html_5debf1043c18cd09cfbbb9dd00e25758" style="width: 100.0%; height: 100.0%;"><b>Schickard, Lukas, fl. 1638</b><br>Home city: Geneva, Geneva, Switzerland<br>Letters in drawable network: 1</div>`)[0];
                popup_cfdc1e13bff52cead0e29c8d89af1829.setContent(html_5debf1043c18cd09cfbbb9dd00e25758);
            
        

        circle_marker_e8ba941b7c029db1c6b6559bac832601.bindPopup(popup_cfdc1e13bff52cead0e29c8d89af1829)
        ;

        
    
    
            circle_marker_e8ba941b7c029db1c6b6559bac832601.bindTooltip(
                `<div>
                     Person: Schickard, Lukas, fl. 1638
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b5eed52968c8262191fcb4281a758483 = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_7ef9567a2c4afaeff1c820840f5ae8e2 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9e03c68253cbf5131da52743026ff547 = $(`<div id="html_9e03c68253cbf5131da52743026ff547" style="width: 100.0%; height: 100.0%;"><b>Brahe, Georg, b.1583; Brahe, Tycho, b.1581</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_7ef9567a2c4afaeff1c820840f5ae8e2.setContent(html_9e03c68253cbf5131da52743026ff547);
            
        

        circle_marker_b5eed52968c8262191fcb4281a758483.bindPopup(popup_7ef9567a2c4afaeff1c820840f5ae8e2)
        ;

        
    
    
            circle_marker_b5eed52968c8262191fcb4281a758483.bindTooltip(
                `<div>
                     Person: Brahe, Georg, b.1583; Brahe, Tycho, b.1581
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_211a849f202029a70d0d97eae008d503 = L.circleMarker(
                [48.7427584, 9.3071685],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_1df22c52acf838bb02d93fb60da96904 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_348013dd860d8d9b8034c5d258dfabc5 = $(`<div id="html_348013dd860d8d9b8034c5d258dfabc5" style="width: 100.0%; height: 100.0%;"><b>Esslingen, City Council of, fl. 1627</b><br>Home city: Esslingen, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_1df22c52acf838bb02d93fb60da96904.setContent(html_348013dd860d8d9b8034c5d258dfabc5);
            
        

        circle_marker_211a849f202029a70d0d97eae008d503.bindPopup(popup_1df22c52acf838bb02d93fb60da96904)
        ;

        
    
    
            circle_marker_211a849f202029a70d0d97eae008d503.bindTooltip(
                `<div>
                     Person: Esslingen, City Council of, fl. 1627
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a21f4eb42e19c771fc9acf083c6b5083 = L.circleMarker(
                [48.3984968, 9.9912458],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_2da3b8c9ae808bda998e4c1c293b2400 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_e4a721795b9408ed633db4e90a9c593d = $(`<div id="html_e4a721795b9408ed633db4e90a9c593d" style="width: 100.0%; height: 100.0%;"><b>Ulm, City Council of</b><br>Home city: Ulm, Baden-Württemberg, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_2da3b8c9ae808bda998e4c1c293b2400.setContent(html_e4a721795b9408ed633db4e90a9c593d);
            
        

        circle_marker_a21f4eb42e19c771fc9acf083c6b5083.bindPopup(popup_2da3b8c9ae808bda998e4c1c293b2400)
        ;

        
    
    
            circle_marker_a21f4eb42e19c771fc9acf083c6b5083.bindTooltip(
                `<div>
                     Person: Ulm, City Council of
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6358ec447be30ae9c8abc0bde504da5a = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0a1d48a68e741907383ee0abd28c57f7 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_f8f405797154f740e94eed5853de34c4 = $(`<div id="html_f8f405797154f740e94eed5853de34c4" style="width: 100.0%; height: 100.0%;"><b>Auracher, Wolf, fl. 1628</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_0a1d48a68e741907383ee0abd28c57f7.setContent(html_f8f405797154f740e94eed5853de34c4);
            
        

        circle_marker_6358ec447be30ae9c8abc0bde504da5a.bindPopup(popup_0a1d48a68e741907383ee0abd28c57f7)
        ;

        
    
    
            circle_marker_6358ec447be30ae9c8abc0bde504da5a.bindTooltip(
                `<div>
                     Person: Auracher, Wolf, fl. 1628
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_dbdc8bffb10bb45c1ebeced638045a51 = L.circleMarker(
                [48.584614, 7.7507127],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0d26892f35d6f80bbe0bce64a4433cc8 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_35c0036966e2ed7c0cc3b7b899138f54 = $(`<div id="html_35c0036966e2ed7c0cc3b7b899138f54" style="width: 100.0%; height: 100.0%;"><b>Clutenius, Joachim, fl. 1628</b><br>Home city: Strasbourg, Grand Est, France<br>Letters in drawable network: 1</div>`)[0];
                popup_0d26892f35d6f80bbe0bce64a4433cc8.setContent(html_35c0036966e2ed7c0cc3b7b899138f54);
            
        

        circle_marker_dbdc8bffb10bb45c1ebeced638045a51.bindPopup(popup_0d26892f35d6f80bbe0bce64a4433cc8)
        ;

        
    
    
            circle_marker_dbdc8bffb10bb45c1ebeced638045a51.bindTooltip(
                `<div>
                     Person: Clutenius, Joachim, fl. 1628
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_d5991bc5d93ac53b17f20a0f2d0f5905 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_b6ca5050d252b287cf53fecba577b483 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_1d9cfac5d5de8dc66df03432e4784921 = $(`<div id="html_1d9cfac5d5de8dc66df03432e4784921" style="width: 100.0%; height: 100.0%;"><b>Bossius, Stephan, fl. 1628</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_b6ca5050d252b287cf53fecba577b483.setContent(html_1d9cfac5d5de8dc66df03432e4784921);
            
        

        circle_marker_d5991bc5d93ac53b17f20a0f2d0f5905.bindPopup(popup_b6ca5050d252b287cf53fecba577b483)
        ;

        
    
    
            circle_marker_d5991bc5d93ac53b17f20a0f2d0f5905.bindTooltip(
                `<div>
                     Person: Bossius, Stephan, fl. 1628
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_b98e7dd4389a221989770ea03bef31c9 = L.circleMarker(
                [51.3406321, 12.3747329],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_726c34e50d923c6db704923bb9a40b75 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_9ff8da1484b536ac48f734f645bcfd7d = $(`<div id="html_9ff8da1484b536ac48f734f645bcfd7d" style="width: 100.0%; height: 100.0%;"><b>Avianus, Wilhelm, d.1636</b><br>Home city: Leipzig, Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_726c34e50d923c6db704923bb9a40b75.setContent(html_9ff8da1484b536ac48f734f645bcfd7d);
            
        

        circle_marker_b98e7dd4389a221989770ea03bef31c9.bindPopup(popup_726c34e50d923c6db704923bb9a40b75)
        ;

        
    
    
            circle_marker_b98e7dd4389a221989770ea03bef31c9.bindTooltip(
                `<div>
                     Person: Avianus, Wilhelm, d.1636
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_06206bc4f5b1ca1662fbbb7b7418b7a0 = L.circleMarker(
                [48.1857192, 16.4221587],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_75b25aeea2eb6d1aade69e609718afa4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_8968dbfdbc4177b6419e3fbae6aa1c13 = $(`<div id="html_8968dbfdbc4177b6419e3fbae6aa1c13" style="width: 100.0%; height: 100.0%;"><b>Pieronius, Johannes, fl. 1629</b><br>Home city: Vienna, Wien, Austria<br>Letters in drawable network: 1</div>`)[0];
                popup_75b25aeea2eb6d1aade69e609718afa4.setContent(html_8968dbfdbc4177b6419e3fbae6aa1c13);
            
        

        circle_marker_06206bc4f5b1ca1662fbbb7b7418b7a0.bindPopup(popup_75b25aeea2eb6d1aade69e609718afa4)
        ;

        
    
    
            circle_marker_06206bc4f5b1ca1662fbbb7b7418b7a0.bindTooltip(
                `<div>
                     Person: Pieronius, Johannes, fl. 1629
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_bb67dbb76ef772f5f9058a90fe9421ab = L.circleMarker(
                [51.4205494, 9.9142574],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_c50cf3453afb5d8a3acc76d0ff0b2ef0 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_fc7b1457230d76a874bcff37ac5332d4 = $(`<div id="html_fc7b1457230d76a874bcff37ac5332d4" style="width: 100.0%; height: 100.0%;"><b>Griessel, Heinrich von, fl. 1630</b><br>Home city: Friedland, Lower Saxony, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_c50cf3453afb5d8a3acc76d0ff0b2ef0.setContent(html_fc7b1457230d76a874bcff37ac5332d4);
            
        

        circle_marker_bb67dbb76ef772f5f9058a90fe9421ab.bindPopup(popup_c50cf3453afb5d8a3acc76d0ff0b2ef0)
        ;

        
    
    
            circle_marker_bb67dbb76ef772f5f9058a90fe9421ab.bindTooltip(
                `<div>
                     Person: Griessel, Heinrich von, fl. 1630
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_5c28e1e99721d8a63060eec78343c7cf = L.circleMarker(
                [50.4370452, 15.3516528],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_0e203764102c46c4df6cc0909288dfb4 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_08c1a3c6afd34ddfeecc87c6e98b8623 = $(`<div id="html_08c1a3c6afd34ddfeecc87c6e98b8623" style="width: 100.0%; height: 100.0%;"><b>Chamberates of Albrecht von Wallenstein, fl. 1630</b><br>Home city: Jičín, Královéhradecký kraj, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_0e203764102c46c4df6cc0909288dfb4.setContent(html_08c1a3c6afd34ddfeecc87c6e98b8623);
            
        

        circle_marker_5c28e1e99721d8a63060eec78343c7cf.bindPopup(popup_0e203764102c46c4df6cc0909288dfb4)
        ;

        
    
    
            circle_marker_5c28e1e99721d8a63060eec78343c7cf.bindTooltip(
                `<div>
                     Person: Chamberates of Albrecht von Wallenstein, fl. 1630
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_20240bb8233b4438ad19b8eb351a2130 = L.circleMarker(
                [46.2017559, 6.1466014],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_4016900c8880b71a6199f9686af05e57 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_412e3f2d76354d8b342c21e4d08adadd = $(`<div id="html_412e3f2d76354d8b342c21e4d08adadd" style="width: 100.0%; height: 100.0%;"><b>Diodati, Elia, 1576-1661</b><br>Home city: Geneva, Geneva, Switzerland<br>Letters in drawable network: 1</div>`)[0];
                popup_4016900c8880b71a6199f9686af05e57.setContent(html_412e3f2d76354d8b342c21e4d08adadd);
            
        

        circle_marker_20240bb8233b4438ad19b8eb351a2130.bindPopup(popup_4016900c8880b71a6199f9686af05e57)
        ;

        
    
    
            circle_marker_20240bb8233b4438ad19b8eb351a2130.bindTooltip(
                `<div>
                     Person: Diodati, Elia, 1576-1661
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_6de78960bf638b16dc7105061c2d32a4 = L.circleMarker(
                [49.0195333, 12.0974869],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_8d2e8fd4968e830bc51201944d0e8591 = L.popup({
  "maxWidth": 320,
});

        
            
                let html_0b63a2aa15fae7b459b25b238cd15d0a = $(`<div id="html_0b63a2aa15fae7b459b25b238cd15d0a" style="width: 100.0%; height: 100.0%;"><b>Lansius, S., fl. 1631</b><br>Home city: Regensburg, Bavaria, Germany<br>Letters in drawable network: 1</div>`)[0];
                popup_8d2e8fd4968e830bc51201944d0e8591.setContent(html_0b63a2aa15fae7b459b25b238cd15d0a);
            
        

        circle_marker_6de78960bf638b16dc7105061c2d32a4.bindPopup(popup_8d2e8fd4968e830bc51201944d0e8591)
        ;

        
    
    
            circle_marker_6de78960bf638b16dc7105061c2d32a4.bindTooltip(
                `<div>
                     Person: Lansius, S., fl. 1631
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            let circle_marker_a32e2c242401623662c2d85090b57fad = L.circleMarker(
                [50.0874654, 14.4212535],
                {"bubblingMouseEvents": true, "color": "#4a235a", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#f39c12", "fillOpacity": 0.8, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 2, "stroke": true, "weight": 3}
            ).addTo(feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd);
        
    
        let popup_a37c3b59b73985b699cfb0f089e99cda = L.popup({
  "maxWidth": 320,
});

        
            
                let html_05b4c3baf03a864f0daa8bc8b5b4d81c = $(`<div id="html_05b4c3baf03a864f0daa8bc8b5b4d81c" style="width: 100.0%; height: 100.0%;"><b>Krupsky, Jakob, fl. until 1630</b><br>Home city: Prague, Czech Republic<br>Letters in drawable network: 1</div>`)[0];
                popup_a37c3b59b73985b699cfb0f089e99cda.setContent(html_05b4c3baf03a864f0daa8bc8b5b4d81c);
            
        

        circle_marker_a32e2c242401623662c2d85090b57fad.bindPopup(popup_a37c3b59b73985b699cfb0f089e99cda)
        ;

        
    
    
            circle_marker_a32e2c242401623662c2d85090b57fad.bindTooltip(
                `<div>
                     Person: Krupsky, Jakob, fl. until 1630
                 </div>`,
                {
  "sticky": true,
}
            );
        
    
            feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd.addTo(map_e9bef1e91c69bbc6d3090e60f47ab50e);
        
    
            let layer_control_24ba8d86a993ebddd8862bc193d8b6a8_layers = {
                base_layers : {
                    "cartodbpositron" : tile_layer_7b3f55578a2e753573ed9a974defb2a6,
                },
                overlays :  {
                    "City Routes" : feature_group_793d4fe6ae23895abb72acf925fa27dd,
                    "City Nodes" : feature_group_50088b14ff65d87258b2f84e6031adfc,
                    "Person Edges" : feature_group_c1ba1d99c8157cd267ee15928d1b1cd4,
                    "Person Nodes" : feature_group_b4bb5dc354d3bbb6584a65aedcf9e2fd,
                },
            };
            let layer_control_24ba8d86a993ebddd8862bc193d8b6a8 = L.control.layers(
                layer_control_24ba8d86a993ebddd8862bc193d8b6a8_layers.base_layers,
                layer_control_24ba8d86a993ebddd8862bc193d8b6a8_layers.overlays,
                {
  "position": "topright",
  "collapsed": false,
  "autoZIndex": true,
}
            ).addTo(map_e9bef1e91c69bbc6d3090e60f47ab50e);
