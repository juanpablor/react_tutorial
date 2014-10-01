tile_3x2_map = {};

tile_3x2_map.size = '3x2';
tile_3x2_map.type = 'map';
tile_3x2_map.needData = true;

tile_3x2_map_save_initial = function() {
    return defaultSaveData();
};

tile_3x2_map.tile_3x2_map_create = function(ele) {
    var result = tile_3x2_map_save_initial();
    //GRABBING SETTINGS/sources ABOVE || CREATION BELOW
    ele.closeModal('floatRightSlide');

    var newtile = { //the new tile
        title: result.title,
        settings: result.settings,
        filters: result.filters,
        '@owners': [Meteor.userId()],
        size: tile_3x2_map.size.split('x'),
        type: tile_3x2_map.type
    };

    var group = {
        id: result.settings.group,
        sources: result.sources,
    };

    ele.makeNewTile(newtile, group);
    //create the dashboard object and add tile to correct group
};

tile_3x2_map.tile_3x2_map_save = false;

tile_3x2_map_format_data = function(data, settings, sources) {
    var returns = {};

    if(Object.size(data) > 0) {
        var data = transformDateFields(data, sources.report_gather, settings.dateColumn, settings.dateInFormat, settings.dateOutFormat);
        if(typeof sources.report_gather == 'undefined' || sources.report_gather == '' || sources.report_gather.search(/group\([^,]*\)/i) == -1) { //basic data points
            returns.simple = [];
            for(var iter in data) {
                for(var inner in data[iter]) {
                    returns.simple.push({latitude: data[iter][inner][settings.Lat], longitude: data[iter][inner][settings.Long], text: data[iter][inner][settings.iconText].toString()});
                }
            }
        }
        else if(sources.report_gather.search(/group\([^,]*\)/i) != -1) { //only 1 group level | directions
            returns.complex = [];
            for(var iter in data) {
                for(var inner in data[iter]) {
                    returns.complex[inner] = {
                        title: inner,
                        longlats: []
                    };
                    for(var pos in data[iter][inner]) {
                        returns.complex[inner].longlats.push({longitude: data[iter][inner][pos][settings.Long], latitude: data[iter][inner][pos][settings.Lat]});
                    }
                }
            }
        }
    }
    return returns;
};

tile_3x2_map.tile_3x2_map_draw = function(ele) {
    if (ele.interactiveObject !== false) {
        ele.interactiveObject.remove(); //remove map to re-draw if needed (options may have changed, etc)
    }

    /*var layer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/fmichael.i8eadi2m/{z}/{x}/{y}.png', { //osm tile layer
        attribution: '&copy; <a href="https://www.mapbox.com/tos/">Mapbox</a>'
    });*/
    var layer2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //osm tile layer
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    });
    var layer3 = MQ.mapLayer();

    var data = tile_3x2_map_format_data(ele.parent.data, ele.settings, ele.parent.sources);

    var zoom = 10;
    if ("zoom" in ele.settings) {
        zoom = ele.settings.zoom;
    }

    var location = [ 45.5, -73.58329772949219 ];
    if("location" in ele.settings) {
        location = [ele.settings.location.lon, ele.settings.location.lat];
    }

    $('#'+ele.id+' .tileLoader').remove();
    ele.interactiveObject = L.map('drawable_'+ele.id, {
        center: location,
        zoom: zoom,
        minZoom: 3,
        layers: [layer],
        zoomControl: false
    });

    var greenIcon = L.icon({
        iconUrl: '../packages/tile-assets/img/icon_green.png',
        shadowUrl: '../packages/tile-assets/img/icon_shadow.png',

        iconSize:     [16, 16], // size of the icon
        iconAnchor:   [16, 8], // point of the icon which will correspond to marker's location
        popupAnchor:  [8, -16], // point from which the popup should open relative to the iconAnchor
        shadowAnchor: [4, 4],  // the same for the shadow
    });

    var icons = [];

    if(typeof data.simple != 'undefined') {
        var markers = new L.markerClusterGroup();
        for(var iter in data.simple) {
            markers.addLayer(new L.marker({lon: data.simple[iter].longitude, lat: data.simple[iter].latitude}, {icon: greenIcon}).bindPopup(data.simple[iter].text));
        }
        ele.interactiveObject.addLayer(markers);
        ele.interactiveObject.fitBounds(markers.getBounds());
    }
    else if(typeof data.complex != 'undefined') {


        var x = 0;
        for(var directionSet in data.complex) {
            var dir = MQ.routing.directions();
            var locs = [];
            for(var longlat in data.complex[directionSet].longlats) {
                x++;
                locs.push({latLng: {lat: data.complex[directionSet].longlats[longlat].latitude, lng: data.complex[directionSet].longlats[longlat].longitude}});
                if(x >= 24) {
                    break;
                }
            }
            dir.optimizedRoute({
                locations: locs,
                options: {
                    //routeType: 'pedestrian',
                    //roadGradeStrategy: 'FAVOR_DOWN_HILL'
                }
            });

            this.interactiveObject.addLayer(MQ.routing.routeLayer({
                directions: dir,
                fitBounds: true,
                ribbonOptions: {
                    draggable: false
                }
            }));

            if(x >= 24) {
                break;
            }
        }
    }

    var base = {
        /*"Map Box": layer,*/
        "OpenStreetMap": layer2,
        "MapQuest": layer3,
    };

    L.control.layers(base, {}, {position:'bottomright'}).addTo(ele.interactiveObject);
    L.control.zoom({position: 'bottomleft'}).addTo(ele.interactiveObject);

    tile_3x2_map_draw_back(ele);
};

tile_3x2_map_draw_back = function(ele) { //can be used to update any stuff on back of tile, atm only does sources
    defaultsaveBack(ele);
};