var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_contours_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:contours",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "contours",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_contours_1, 0]);
var lyr_existing_parking_sites_location_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:existing_parking_sites_location",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "existing_parking_sites_location",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_existing_parking_sites_location_2, 0]);
var lyr_points_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:points",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "points",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_points_3, 0]);
var lyr_RAILWAY_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:railway",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "RAILWAY",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RAILWAY_4, 0]);
var lyr_Roadscondition_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:road_condition_map",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Roads condition",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Roadscondition_5, 0]);
var lyr_suitability_for_parking_station_1_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:suitability_for_parking_station_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "suitability_for_parking_station_1",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_suitability_for_parking_station_1_6, 0]);
var lyr_suitablelocationsforparkingstations_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:suitable_locations_for_parking_stations",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "suitable locations for parking stations",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_suitablelocationsforparkingstations_7, 0]);
var lyr_Harare_CBD_Boundary_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:harare_cbd_boundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Harare_CBD_Boundary",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Harare_CBD_Boundary_8, 0]);

lyr_OpenStreetMap_0.setVisible(true);lyr_contours_1.setVisible(true);lyr_existing_parking_sites_location_2.setVisible(true);lyr_points_3.setVisible(true);lyr_RAILWAY_4.setVisible(true);lyr_Roadscondition_5.setVisible(true);lyr_suitability_for_parking_station_1_6.setVisible(true);lyr_suitablelocationsforparkingstations_7.setVisible(true);lyr_Harare_CBD_Boundary_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_contours_1,lyr_existing_parking_sites_location_2,lyr_points_3,lyr_RAILWAY_4,lyr_Roadscondition_5,lyr_suitability_for_parking_station_1_6,lyr_suitablelocationsforparkingstations_7,lyr_Harare_CBD_Boundary_8];
