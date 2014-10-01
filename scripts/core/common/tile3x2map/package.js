Package.describe({
  summary: "tile_3x2_map - Jquery based tile"
});

Package.on_use(function (api) {
	api.use('templating', 'client');
    api.use('jquery', 'client');
	api.use('d3', 'client');
    api.use('c3', 'client');
    api.use('dynatable', 'client');
    api.use('leaflet', 'client');
    api.use('leaflet-markercluster');
    api.use('tile-assets', 'client');

    api.add_files([ //HTML
		'tile_3x2_map.html',
		], 'client'
	);

	api.add_files([ //JS Template Pairs
		'tile_3x2_map.js',
		], 'client'
	);

	if (typeof api.export !== 'undefined') {
        api.export('tile_3x2_map', ['server', 'client']);
	}
});