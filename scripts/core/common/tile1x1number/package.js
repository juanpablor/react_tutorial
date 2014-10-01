Package.describe({
  summary: "tile_1x1_number - Jquery based tile"
});

Package.on_use(function (api) {
	api.use('templating', 'client');
    api.use('scss', 'client');
    api.use('jquery', 'client');
    api.use('d3', 'client');
    api.use('c3', 'client');
    api.use('dynatable', 'client');
    api.use('leaflet', 'client');
    api.use('tile-assets', 'client');

    api.add_files([ //CSS
        'tile_1x1_number.scss'
        ], 'client'
    );

    api.add_files([ //HTML
		'tile_1x1_number.html',
		], 'client'
	);

	api.add_files([ //JS Template Pairs
		'tile_1x1_number.js',
		], 'client'
	);

	if (typeof api.export !== 'undefined') {
        api.export('tile_1x1_number', ['server', 'client']);
	}
});