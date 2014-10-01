Package.describe({
  summary: "Assets for tiles used by multiple sizes/types"
});

Package.on_use(function (api) {
    api.use('scss', 'client');
    api.use('jquery', 'client');

    api.add_files([ //IMAGES
        'img/icon_green.png',
        'img/icon_shadow.png',
        'img/drag-transparent-icon.png',
        'img/settings-transparent-icon.png',
        ], 'client'
    );

    api.add_files([
        'js/helpers.js'
        ], 'client'
    );

    if (typeof api.export !== 'undefined') {
        api.export('flattenObject', 'client');
        api.export('verifyData', 'client');
        api.export('defaultSaveData', 'client');
        api.export('transformDateFields', 'client');
        api.export('transformArrayDateFields', 'client');
        api.export('defaultsaveBack', 'client');
    }
});