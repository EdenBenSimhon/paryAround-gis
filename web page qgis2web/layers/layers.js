var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Synagoguesfarad_1 = new ol.format.GeoJSON();
var features_Synagoguesfarad_1 = format_Synagoguesfarad_1.readFeatures(json_Synagoguesfarad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Synagoguesfarad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Synagoguesfarad_1.addFeatures(features_Synagoguesfarad_1);cluster_Synagoguesfarad_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Synagoguesfarad_1
});
var lyr_Synagoguesfarad_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Synagoguesfarad_1, 
                style: style_Synagoguesfarad_1,
                interactive: true,
                title: '<img src="styles/legend/Synagoguesfarad_1.png" /> Synagogue sfarad'
            });
var format_Synagogue_ashkenaz_2 = new ol.format.GeoJSON();
var features_Synagogue_ashkenaz_2 = format_Synagogue_ashkenaz_2.readFeatures(json_Synagogue_ashkenaz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Synagogue_ashkenaz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Synagogue_ashkenaz_2.addFeatures(features_Synagogue_ashkenaz_2);cluster_Synagogue_ashkenaz_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Synagogue_ashkenaz_2
});
var lyr_Synagogue_ashkenaz_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Synagogue_ashkenaz_2, 
                style: style_Synagogue_ashkenaz_2,
                interactive: true,
                title: '<img src="styles/legend/Synagogue_ashkenaz_2.png" /> Synagogue_ashkenaz'
            });
var format_Chruch_catholic_3 = new ol.format.GeoJSON();
var features_Chruch_catholic_3 = format_Chruch_catholic_3.readFeatures(json_Chruch_catholic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chruch_catholic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chruch_catholic_3.addFeatures(features_Chruch_catholic_3);cluster_Chruch_catholic_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Chruch_catholic_3
});
var lyr_Chruch_catholic_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Chruch_catholic_3, 
                style: style_Chruch_catholic_3,
                interactive: true,
                title: '<img src="styles/legend/Chruch_catholic_3.png" /> Chruch_catholic'
            });
var format_Chruch_orthodox_4 = new ol.format.GeoJSON();
var features_Chruch_orthodox_4 = format_Chruch_orthodox_4.readFeatures(json_Chruch_orthodox_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chruch_orthodox_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chruch_orthodox_4.addFeatures(features_Chruch_orthodox_4);cluster_Chruch_orthodox_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Chruch_orthodox_4
});
var lyr_Chruch_orthodox_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Chruch_orthodox_4, 
                style: style_Chruch_orthodox_4,
                interactive: true,
                title: '<img src="styles/legend/Chruch_orthodox_4.png" /> Chruch_orthodox'
            });
var format_Mosque_shia_5 = new ol.format.GeoJSON();
var features_Mosque_shia_5 = format_Mosque_shia_5.readFeatures(json_Mosque_shia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_shia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_shia_5.addFeatures(features_Mosque_shia_5);cluster_Mosque_shia_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Mosque_shia_5
});
var lyr_Mosque_shia_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Mosque_shia_5, 
                style: style_Mosque_shia_5,
                interactive: true,
                title: '<img src="styles/legend/Mosque_shia_5.png" /> Mosque_shia'
            });
var format_Mosque_sunni_6 = new ol.format.GeoJSON();
var features_Mosque_sunni_6 = format_Mosque_sunni_6.readFeatures(json_Mosque_sunni_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_sunni_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_sunni_6.addFeatures(features_Mosque_sunni_6);cluster_Mosque_sunni_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Mosque_sunni_6
});
var lyr_Mosque_sunni_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Mosque_sunni_6, 
                style: style_Mosque_sunni_6,
                interactive: true,
                title: '<img src="styles/legend/Mosque_sunni_6.png" /> Mosque_sunni'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Synagoguesfarad_1.setVisible(true);lyr_Synagogue_ashkenaz_2.setVisible(true);lyr_Chruch_catholic_3.setVisible(false);lyr_Chruch_orthodox_4.setVisible(false);lyr_Mosque_shia_5.setVisible(false);lyr_Mosque_sunni_6.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Synagoguesfarad_1,lyr_Synagogue_ashkenaz_2,lyr_Chruch_catholic_3,lyr_Chruch_orthodox_4,lyr_Mosque_shia_5,lyr_Mosque_sunni_6];
lyr_Synagoguesfarad_1.set('fieldAliases', {'City': 'City', 'Name': 'Name', 'Nosah': 'Nosah', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Navigate': 'Navigate', });
lyr_Synagogue_ashkenaz_2.set('fieldAliases', {'City': 'City', 'Name': 'Name', 'Nosah': 'Nosah', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Navigate': 'Navigate', });
lyr_Chruch_catholic_3.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Navigate': 'Navigate', });
lyr_Chruch_orthodox_4.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Navigate': 'Navigate', });
lyr_Mosque_shia_5.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Navigate': 'Navigate', });
lyr_Mosque_sunni_6.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Navigate': 'Navigate', });
lyr_Synagoguesfarad_1.set('fieldImages', {'City': 'Hidden', 'Name': 'TextEdit', 'Nosah': 'Hidden', 'Address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Navigate': 'TextEdit', });
lyr_Synagogue_ashkenaz_2.set('fieldImages', {'City': 'Hidden', 'Name': 'TextEdit', 'Nosah': 'Hidden', 'Address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Navigate': 'TextEdit', });
lyr_Chruch_catholic_3.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Navigate': 'TextEdit', });
lyr_Chruch_orthodox_4.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Navigate': 'TextEdit', });
lyr_Mosque_shia_5.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Navigate': 'TextEdit', });
lyr_Mosque_sunni_6.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Navigate': 'TextEdit', });
lyr_Synagoguesfarad_1.set('fieldLabels', {'Name': 'header label', 'Address': 'header label', 'Navigate': 'header label', });
lyr_Synagogue_ashkenaz_2.set('fieldLabels', {'Name': 'header label', 'Address': 'header label', 'Navigate': 'header label', });
lyr_Chruch_catholic_3.set('fieldLabels', {'Name': 'header label', 'Navigate': 'header label', });
lyr_Chruch_orthodox_4.set('fieldLabels', {'Name': 'header label', 'Navigate': 'header label', });
lyr_Mosque_shia_5.set('fieldLabels', {'Name': 'header label', 'Navigate': 'header label', });
lyr_Mosque_sunni_6.set('fieldLabels', {'Name': 'header label', 'Navigate': 'header label', });
lyr_Mosque_sunni_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});