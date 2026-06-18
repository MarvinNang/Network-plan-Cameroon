var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_cameroonnewscores_1 = new ol.format.GeoJSON();
var features_cameroonnewscores_1 = format_cameroonnewscores_1.readFeatures(json_cameroonnewscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cameroonnewscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cameroonnewscores_1.addFeatures(features_cameroonnewscores_1);
var lyr_cameroonnewscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cameroonnewscores_1, 
                style: style_cameroonnewscores_1,
                popuplayertitle: 'cameroon-new-scores',
                interactive: true,
    title: 'cameroon-new-scores<br />\
    <img src="styles/legend/cameroonnewscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/cameroonnewscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/cameroonnewscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/cameroonnewscores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/cameroonnewscores_1_4.png" /> 4 - 5<br />' });
var format_boundariesadmindepartment_2 = new ol.format.GeoJSON();
var features_boundariesadmindepartment_2 = format_boundariesadmindepartment_2.readFeatures(json_boundariesadmindepartment_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundariesadmindepartment_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundariesadmindepartment_2.addFeatures(features_boundariesadmindepartment_2);
var lyr_boundariesadmindepartment_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundariesadmindepartment_2, 
                style: style_boundariesadmindepartment_2,
                popuplayertitle: 'boundaries-admin-department',
                interactive: true,
                title: '<img src="styles/legend/boundariesadmindepartment_2.png" /> boundaries-admin-department'
            });
var format_Active_sites_NP_16062026_3 = new ol.format.GeoJSON();
var features_Active_sites_NP_16062026_3 = format_Active_sites_NP_16062026_3.readFeatures(json_Active_sites_NP_16062026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Active_sites_NP_16062026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Active_sites_NP_16062026_3.addFeatures(features_Active_sites_NP_16062026_3);
var lyr_Active_sites_NP_16062026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Active_sites_NP_16062026_3, 
                style: style_Active_sites_NP_16062026_3,
                popuplayertitle: 'Active_sites_NP_16.06.2026',
                interactive: true,
                title: '<img src="styles/legend/Active_sites_NP_16062026_3.png" /> Active_sites_NP_16.06.2026'
            });
var format_Planned_sites_NP_16062026_4 = new ol.format.GeoJSON();
var features_Planned_sites_NP_16062026_4 = format_Planned_sites_NP_16062026_4.readFeatures(json_Planned_sites_NP_16062026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planned_sites_NP_16062026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planned_sites_NP_16062026_4.addFeatures(features_Planned_sites_NP_16062026_4);
var lyr_Planned_sites_NP_16062026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planned_sites_NP_16062026_4, 
                style: style_Planned_sites_NP_16062026_4,
                popuplayertitle: 'Planned_sites_NP_16.06.2026',
                interactive: true,
    title: 'Planned_sites_NP_16.06.2026<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_4_0.png" /> GRID<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_4_1.png" /> SOLAR<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_cameroonnewscores_1.setVisible(true);lyr_boundariesadmindepartment_2.setVisible(true);lyr_Active_sites_NP_16062026_3.setVisible(true);lyr_Planned_sites_NP_16062026_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cameroonnewscores_1,lyr_boundariesadmindepartment_2,lyr_Active_sites_NP_16062026_3,lyr_Planned_sites_NP_16062026_4];
lyr_cameroonnewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_boundariesadmindepartment_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Active_sites_NP_16062026_3.set('fieldAliases', {'Station_ID': 'Station_ID', 'City': 'City', 'Cluster': 'Cluster', 'Station Na': 'Station Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', });
lyr_Planned_sites_NP_16062026_4.set('fieldAliases', {'Station_ID': 'Station_ID', 'City': 'City', 'Cluster': 'Cluster', 'Station Na': 'Station Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', 'id': 'id', 'Station id': 'Station id', 'Name': 'Name', 'Department': 'Department', 'Region': 'Region', 'Floor_surf': 'Floor_surf', 'Roof_surf': 'Roof_surf', 'Type': 'Type', 'Racks Cap': 'Racks Cap', });
lyr_cameroonnewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_boundariesadmindepartment_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Active_sites_NP_16062026_3.set('fieldImages', {'Station_ID': 'TextEdit', 'City': 'TextEdit', 'Cluster': 'TextEdit', 'Station Na': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Planned_sites_NP_16062026_4.set('fieldImages', {'Station_ID': 'TextEdit', 'City': 'TextEdit', 'Cluster': 'TextEdit', 'Station Na': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', 'id': 'TextEdit', 'Station id': 'TextEdit', 'Name': 'TextEdit', 'Department': 'TextEdit', 'Region': 'TextEdit', 'Floor_surf': 'TextEdit', 'Roof_surf': 'TextEdit', 'Type': 'TextEdit', 'Racks Cap': 'TextEdit', });
lyr_cameroonnewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_boundariesadmindepartment_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Active_sites_NP_16062026_3.set('fieldLabels', {'Station_ID': 'inline label - always visible', 'City': 'inline label - always visible', 'Cluster': 'inline label - always visible', 'Station Na': 'inline label - always visible', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Status': 'inline label - always visible', 'Comments': 'header label - visible with data', });
lyr_Planned_sites_NP_16062026_4.set('fieldLabels', {'Station_ID': 'no label', 'City': 'no label', 'Cluster': 'no label', 'Station Na': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'no label', 'Comments': 'no label', 'id': 'no label', 'Station id': 'no label', 'Name': 'no label', 'Department': 'no label', 'Region': 'no label', 'Floor_surf': 'no label', 'Roof_surf': 'no label', 'Type': 'no label', 'Racks Cap': 'no label', });
lyr_Planned_sites_NP_16062026_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});