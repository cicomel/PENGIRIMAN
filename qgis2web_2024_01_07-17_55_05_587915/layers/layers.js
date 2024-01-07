var wms_layers = [];

var format_bentengselatang_0 = new ol.format.GeoJSON();
var features_bentengselatang_0 = format_bentengselatang_0.readFeatures(json_bentengselatang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bentengselatang_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bentengselatang_0.addFeatures(features_bentengselatang_0);
var lyr_bentengselatang_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bentengselatang_0, 
                style: style_bentengselatang_0,
                interactive: true,
                title: '<img src="styles/legend/bentengselatang_0.png" /> benteng selatang'
            });
var format_bentengutara_1 = new ol.format.GeoJSON();
var features_bentengutara_1 = format_bentengutara_1.readFeatures(json_bentengutara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bentengutara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bentengutara_1.addFeatures(features_bentengutara_1);
var lyr_bentengutara_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bentengutara_1, 
                style: style_bentengutara_1,
                interactive: true,
                title: '<img src="styles/legend/bentengutara_1.png" /> benteng utara'
            });
var format_benteng_2 = new ol.format.GeoJSON();
var features_benteng_2 = format_benteng_2.readFeatures(json_benteng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_benteng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_benteng_2.addFeatures(features_benteng_2);
var lyr_benteng_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_benteng_2, 
                style: style_benteng_2,
                interactive: true,
                title: '<img src="styles/legend/benteng_2.png" /> benteng'
            });
var format_Namajalan_3 = new ol.format.GeoJSON();
var features_Namajalan_3 = format_Namajalan_3.readFeatures(json_Namajalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Namajalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Namajalan_3.addFeatures(features_Namajalan_3);
var lyr_Namajalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Namajalan_3, 
                style: style_Namajalan_3,
                interactive: true,
                title: '<img src="styles/legend/Namajalan_3.png" /> Nama jalan'
            });
var format_PENGIRIMAN_4 = new ol.format.GeoJSON();
var features_PENGIRIMAN_4 = format_PENGIRIMAN_4.readFeatures(json_PENGIRIMAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENGIRIMAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENGIRIMAN_4.addFeatures(features_PENGIRIMAN_4);
var lyr_PENGIRIMAN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENGIRIMAN_4, 
                style: style_PENGIRIMAN_4,
                interactive: true,
                title: '<img src="styles/legend/PENGIRIMAN_4.png" /> PENGIRIMAN'
            });

lyr_bentengselatang_0.setVisible(true);lyr_bentengutara_1.setVisible(true);lyr_benteng_2.setVisible(true);lyr_Namajalan_3.setVisible(true);lyr_PENGIRIMAN_4.setVisible(true);
var layersList = [lyr_bentengselatang_0,lyr_bentengutara_1,lyr_benteng_2,lyr_Namajalan_3,lyr_PENGIRIMAN_4];
lyr_bentengselatang_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_bentengutara_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_benteng_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Namajalan_3.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', });
lyr_PENGIRIMAN_4.set('fieldAliases', {'NAMA': 'NAMA', 'X': 'X', 'Y': 'Y', });
lyr_bentengselatang_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_bentengutara_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_benteng_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_Namajalan_3.set('fieldImages', {'id': '', 'Nama jalan': '', });
lyr_PENGIRIMAN_4.set('fieldImages', {'NAMA': '', 'X': '', 'Y': '', });
lyr_bentengselatang_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_bentengutara_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_benteng_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_Namajalan_3.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'no label', });
lyr_PENGIRIMAN_4.set('fieldLabels', {'NAMA': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PENGIRIMAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});