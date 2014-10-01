tile_8x4_table = {};

tile_8x4_table.size = '8x4';
tile_8x4_table.type = 'table';
tile_8x4_table.needData = true;

tile_8x4_table_save_initial = function() {
    return defaultSaveData();
};

tile_8x4_table.tile_8x4_table_create = function(ele) {
    var result = tile_8x4_table_save_initial();
    //GRABBING SETTINGS/sources ABOVE || CREATION BELOW
    ele.closeModal('floatRightSlide');

    var newtile = { //the new tile
        title: result.title,
        settings: result.settings,
        filters: result.filters,
        '@owners': [Meteor.userId()],
        size: tile_8x4_table.size.split('x'),
        type: tile_8x4_table.type
    };

    var group = {
        id: result.settings.group,
        sources: result.sources,
    };

    ele.makeNewTile(newtile, group);
    //create the dashboard object and add tile to correct group
};

tile_8x4_table.tile_8x4_table_save = false;

tile_8x4_table_format_data = function(data, settings, sources) {
    var ret = [];
    if(Object.size(data) > 0) {
        flattenObject(data, ret);
        transformArrayDateFields(ret, settings.dateColumn, settings.dateInFormat, settings.dateOutFormat);
    }
    return ret;
};

tile_8x4_table.tile_8x4_table_draw = function(ele) {
    var height = $('#'+ele.id).height()-114;
    if(typeof ele.settings.tileSettings != 'undefined') {
        if(typeof ele.settings.tileSettings.title != 'undefined' && !ele.settings.tileSettings.title) {
            //hide title w/ bar
            $('#'+ele.id+' .setting_span').css('display', 'none');
            $('#'+ele.id+' .contents').css('top', 0);
            height = $('#'+ele.id+' .contents').height()-30;
        }
    }

    $('#drawable_'+ele.id).empty();
    var appender = '<div class="table_cont" style="max-height:'+height+'px"><table id="table_'+ele.id+'" class="table table-bordered"><thead>';
    var objects = tile_8x4_table_format_data(ele.parent.data, ele.settings, ele.parent.sources);
    if(objects.length > 0) {
        for(var iter in objects[0]) {
            appender += '<th>'+iter+'</th>';
        }
        appender += '</thead><tbody>';
        var numCols = objects[0].length;

        for(var iter in objects) {
            appender += '<tr>';
            for(var iteriter in objects[iter]) {
                if(typeof objects[iter][iteriter] == 'string' && (objects[iter][iteriter].match(/http/) != null || objects[iter][iteriter].match(/www/) != null)) {
                    appender += '<td><a href="'+objects[iter][iteriter]+'" target="_blank">Link</a></td>';
                }
                else {
                    appender += '<td>'+objects[iter][iteriter]+'</td>';
                }

            }
            appender += '</tr>';
        }

        appender += '</tbody></table></div>';

        $('#drawable_'+ele.id).append(appender);
        ele.interactiveObject = $('#table_'+ele.id).dynatable({
            features: ele.settings,
        });
    } else {
        appender += '<th>No</th><th>Data</th><th>Found</th>';
        appender += '</thead><tbody></tbody></table></div>';
        $('#drawable_'+ele.id).append(appender);
        ele.interactiveObject = $('#table_'+ele.id).dynatable({
            features: ele.settings,
        });
    }
    //ele.interactiveObject.data('dynatable').records.getFromTable(); //can be used to export
    tile_8x4_table_draw_back(ele);
};

tile_8x4_table_draw_back = function(ele) { //can be used to update any stuff on back of tile, atm only does sources
    defaultsaveBack(ele);
};