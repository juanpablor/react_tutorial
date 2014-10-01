Package.describe({
  summary: "tile_2x3_map - Jquery based tile"
});

Package.on_use(function (api) {
	api.use('templating', 'client');
  	api.use('jquery', 'client');
	api.use('d3', 'client');
  	api.use('c3', 'client');
  	api.use('dynatable', 'client');
    api.use('leaflet-markercluster');
 	api.use('leaflet', 'client');
    api.use('tile-assets', 'client');

    api.add_files([ //HTML
		'tile_2x3_map.html',
		], 'client'
	);

	api.add_files([ //JS Template Pairs
		'tile_2x3_map.js',
		], 'client'
	);

	if (typeof api.export !== 'undefined') {
	    api.export('tile_2x3_map', ['server', 'client']);
	}
});