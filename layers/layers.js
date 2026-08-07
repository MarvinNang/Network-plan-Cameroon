var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Departmentboundaries_1 = new ol.format.GeoJSON();
var features_Departmentboundaries_1 = format_Departmentboundaries_1.readFeatures(json_Departmentboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departmentboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departmentboundaries_1.addFeatures(features_Departmentboundaries_1);
var lyr_Departmentboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departmentboundaries_1, 
                style: style_Departmentboundaries_1,
                popuplayertitle: 'Department boundaries',
                interactive: false,
                title: '<img src="styles/legend/Departmentboundaries_1.png" /> Department boundaries'
            });
var format_Activesites_2 = new ol.format.GeoJSON();
var features_Activesites_2 = format_Activesites_2.readFeatures(json_Activesites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activesites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activesites_2.addFeatures(features_Activesites_2);
var lyr_Activesites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activesites_2, 
                style: style_Activesites_2,
                popuplayertitle: 'Active sites',
                interactive: true,
                title: '<img src="styles/legend/Activesites_2.png" /> Active sites'
            });
var format_Acquiredsites_3 = new ol.format.GeoJSON();
var features_Acquiredsites_3 = format_Acquiredsites_3.readFeatures(json_Acquiredsites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acquiredsites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acquiredsites_3.addFeatures(features_Acquiredsites_3);
var lyr_Acquiredsites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acquiredsites_3, 
                style: style_Acquiredsites_3,
                popuplayertitle: 'Acquired sites',
                interactive: true,
                title: '<img src="styles/legend/Acquiredsites_3.png" /> Acquired sites'
            });
var format_Plannedsites_4 = new ol.format.GeoJSON();
var features_Plannedsites_4 = format_Plannedsites_4.readFeatures(json_Plannedsites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plannedsites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plannedsites_4.addFeatures(features_Plannedsites_4);
var lyr_Plannedsites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plannedsites_4, 
                style: style_Plannedsites_4,
                popuplayertitle: 'Planned sites',
                interactive: true,
    title: 'Planned sites<br />\
    <img src="styles/legend/Plannedsites_4_0.png" /> GRID<br />\
    <img src="styles/legend/Plannedsites_4_1.png" /> SOLAR<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Departmentboundaries_1.setVisible(true);lyr_Activesites_2.setVisible(true);lyr_Acquiredsites_3.setVisible(true);lyr_Plannedsites_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Departmentboundaries_1,lyr_Activesites_2,lyr_Acquiredsites_3,lyr_Plannedsites_4];
lyr_Departmentboundaries_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Activesites_2.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks Cap': 'Racks Cap', });
lyr_Acquiredsites_3.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks cap': 'Racks cap', });
lyr_Plannedsites_4.set('fieldAliases', {'Station_ID': 'Station_ID', 'City': 'City', 'Cluster': 'Cluster', 'Station Na': 'Station Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', 'id': 'id', 'Station id': 'Station id', 'Name': 'Name', 'Department': 'Department', 'Region': 'Region', 'Floor_surf': 'Floor_surf', 'Roof_surf': 'Roof_surf', 'Type': 'Type', 'Racks Cap': 'Racks Cap', });
lyr_Departmentboundaries_1.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Activesites_2.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks Cap': 'Range', });
lyr_Acquiredsites_3.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks cap': 'Range', });
lyr_Plannedsites_4.set('fieldImages', {'Station_ID': 'TextEdit', 'City': 'TextEdit', 'Cluster': 'TextEdit', 'Station Na': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', 'id': 'TextEdit', 'Station id': 'TextEdit', 'Name': 'TextEdit', 'Department': 'TextEdit', 'Region': 'TextEdit', 'Floor_surf': 'TextEdit', 'Roof_surf': 'TextEdit', 'Type': 'TextEdit', 'Racks Cap': 'TextEdit', });
lyr_Departmentboundaries_1.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Activesites_2.set('fieldLabels', {'Station_ID': 'no label', 'Ville': 'no label', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - visible with data', 'Racks Cap': 'inline label - always visible', });
lyr_Acquiredsites_3.set('fieldLabels', {'Station_ID': 'no label', 'Ville': 'no label', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Racks cap': 'inline label - always visible', });
lyr_Plannedsites_4.set('fieldLabels', {'Station_ID': 'no label', 'City': 'no label', 'Cluster': 'no label', 'Station Na': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'no label', 'Comments': 'no label', 'id': 'no label', 'Station id': 'no label', 'Name': 'no label', 'Department': 'no label', 'Region': 'no label', 'Floor_surf': 'no label', 'Roof_surf': 'no label', 'Type': 'inline label - always visible', 'Racks Cap': 'inline label - always visible', });
lyr_Plannedsites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});