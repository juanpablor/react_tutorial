tile_1x1_number = {};

tile_1x1_number.size = '1x1';
tile_1x1_number.type = 'number';
tile_1x1_number.needData = true;

tile_1x1_number_save_initial = function() {
    return defaultSaveData();
};

tile_1x1_number.tile_1x1_number_create = function(ele) {
    var result = tile_1x1_number_save_initial();
    //GRABBING SETTINGS/sources ABOVE || CREATION BELOW
    ele.closeModal('floatRightSlide');

    var newtile = { //the new tile
        title: result.title,
        settings: result.settings,
        filters: result.filters,
        '@owners': [Meteor.userId()],
        size: tile_1x1_number.size.split('x'),
        type: tile_1x1_number.type
    };

    var group = {
        id: result.settings.group,
        sources: result.sources,
    };

    ele.makeNewTile(newtile, group);
    //create the dashboard object and add tile to correct group
};

tile_1x1_number.tile_1x1_number_save = false;

tile_1x1_number_format_data = function(data, settings, sources) {
    if(Object.size(data) > 0) {
        var data = transformDateFields(data, sources.report_gather, settings.dateColumn, settings.dateInFormat, settings.dateOutFormat);
        if(typeof sources.report_gather == 'undefined' || sources.report_gather == '' || sources.report_gather.search(/group\([^,]*\)/i) == -1) {
            var first = Object.getFirstIndex(data);

            for(var iter in data[first]) {
                if(typeof data[first][iter][settings.columnName] != 'undefined') {

                    var ret = +data[first][iter][settings.columnName].toFixed(2);
                    if(settings.beforeAfter == 'left') {
                        ret = (settings.frontText ? settings.frontText : '') + ret.toString();
                    }
                    else if(settings.beforeAfter == 'right') {
                        ret = ret.toString() + (settings.frontText ? settings.frontText : '');
                    }

                    return {number: ret, text: settings.columnName};
                }
            }
        }
        else if(sources.report_gather.search(/group\([^,]*\)/i) != -1) { //only 1 group level
            var first = Object.getFirstIndex(data);

            for(var iter in data[first]) {
                if(typeof data[first][iter][0][settings.columnName] != 'undefined') {

                    var ret = +data[first][iter][0][settings.columnName].toFixed(2);
                    if(settings.beforeAfter == 'left') {
                        ret = (settings.frontText ? settings.frontText : '') + ret.toString();
                    }
                    else if(settings.beforeAfter == 'right') {
                        ret = ret.toString() + (settings.frontText ? settings.frontText : '');
                    }
                    console.log(ret);
                    return {number: ret, text: settings.columnName};
                }
            }
        }
    }
    return {number: 0, text: settings.columnName ? settings.columnName : ''};
};

tile_1x1_number.tile_1x1_number_draw = function(ele) {
    $('#'+ele.id+' input[setFilt="label"]').val(str);
    var type = (ele.settings.type == undefined) ? 'count' : ele.settings.type;
    var object = tile_1x1_number_format_data(ele.parent.data, ele.settings, ele.parent.sources);
    var str = object.text;
    var num = object.number;

    //output to boxy box
    $('#drawable_'+ele.id).empty();
    ele.interactiveObject = '<div><span class="number">'+num+'</span><span class="label">'+str+'</span></div>';
    $('#drawable_'+ele.id).append(ele.interactiveObject);

    tile_1x1_number_draw_back(ele);
};

tile_1x1_number_draw_back = function(ele) {
    defaultsaveBack(ele);
};