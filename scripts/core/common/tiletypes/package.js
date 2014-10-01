Package.describe({
  summary: "tiletypes - Package containing list of all tiletypes"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.use('jquery', 'client');
  api.use('tile2x2chart', 'client');
  api.use('tile3x2chart', 'client');
  api.use('tile3x3chart', 'client');
  api.use('tile5x2chart', 'client');
  api.use('tile1x1number', 'client');
  api.use('tile2x2table', 'client');
  api.use('tile3x2table', 'client');
  api.use('tile3x3table', 'client');
  api.use('tile4x4table', 'client');
  api.use('tile8x4table', 'client');
  api.use('tile9x3table', 'client');
  api.use('tile2x3map', 'client');
  api.use('tile3x2map', 'client');
  api.use('tile3x3map', 'client');
  api.use('tile4x4map', 'client');

  api.add_files([
    'tiletypes.js', //needed for router
    ], 'client'
  );

  if (typeof api.export !== 'undefined') {
    api.export('tiletypes', ['server', 'client']);
  }
});