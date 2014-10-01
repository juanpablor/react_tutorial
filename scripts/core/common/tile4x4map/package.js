Package.describe({
  summary: "tile_4x4_map - Jquery based tile"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.use('scss', 'client');
  api.use('jquery', 'client');
  api.use('d3', 'client');
  api.use('c3', 'client');
  api.use('dynatable', 'client');
  api.use('leaflet', 'client');
  api.use('leaflet-markercluster');
  api.use('tile-assets', 'client');

  api.add_files([ //HTML
		'tile_4x4_map.html',
		], 'client'
	);

	api.add_files([ //JS Template Pairs
		'tile_4x4_map.js',
		], 'client'
	);

  api.add_files([
    'tile_4x4_map.scss',
    ], 'client'
  );

  if (typeof api.export !== 'undefined') {
      api.export('tile_4x4_map', ['server', 'client']);
  }
});