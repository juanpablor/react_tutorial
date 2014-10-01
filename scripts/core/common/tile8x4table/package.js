Package.describe({
  summary: "tile_8x4_table - Jquery based tile"
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

  api.add_files([ //Scss
    'tile_8x4_table.scss',
    ], 'client'
  );

  api.add_files([ //HTML
		'tile_8x4_table.html',
		], 'client'
	);

	api.add_files([ //JS Template Pairs
		'tile_8x4_table.js',
		], 'client'
	);

  if (typeof api.export !== 'undefined') {
      api.export('tile_8x4_table', ['server', 'client']);
  }
});