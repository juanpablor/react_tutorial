tile_2x2_chart = {};

tile_2x2_chart.size = '2x2';
tile_2x2_chart.type = 'chart';
tile_2x2_chart.needData = true;

tile_2x2_chart_save_initial = function() {
    return defaultSaveData();
};

tile_2x2_chart.tile_2x2_chart_create = function(ele) {
    var result = tile_2x2_chart_save_initial();
    //GRABBING SETTINGS/sources ABOVE || CREATION BELOW
    ele.closeModal('floatRightSlide');

    var newtile = { //the new tile
        title: result.title,
        settings: result.settings,
        filters: result.filters,
        '@owners': [Meteor.userId()],
        size: tile_2x2_chart.size.split('x'),
        type: tile_2x2_chart.type
    };

    var group = {
        id: result.settings.group,
        sources: result.sources,
    };

    ele.makeNewTile(newtile, group);
    //create the dashboard object and add tile to correct group
};

tile_2x2_chart.tile_2x2_chart_save = false;

tile_2x2_chart_format_data = function(data, settings, sources) {
    var newobj = [];
    var mapping = []; //convert labels to indexes to use in array.
    var regions = 0;

    if(Object.size(data) > 0) {
        var data = transformDateFields(data, sources.report_gather, settings.dateColumn, settings.dateInFormat, settings.dateOutFormat);
        if(typeof sources.report_gather == 'undefined' || sources.report_gather == '' || sources.report_gather.search(/group\([^,]*\)/i) == -1) { //format sources report
            for(var y in data) {
                for(var x in data[y]) {
                    regions++;
                    for(var row in data[y][x]) {
                        if(y == Object.getFirstIndex(data)) {
                            mapping.push(row);
                            newobj[mapping.indexOf(row)] = [row];
                        }
                        newobj[mapping.indexOf(row)].push(data[y][x][row]);
                    }
                }
            }
        }
        else { //grouped data (Need to aggregate any columns)

            var cats = [];
            for(var y in data) {
                if(Object.size(data[y]) == 0) {
                    cats.push(y);
                }
                for(var x in data[y]) {
                    cats.push(x);
                }
            }

            if(sources.report_gather.search(/group\([^,]*\)/i) != -1) { //only 1 group level
                var splitColumns = sources.report_include.split(',');
                if(settings.type == 'pie' || settings.type == 'donut') {
                    for(var y in data) {
                        if(Object.size(data[y]) == 0) {
                            if(mapping.indexOf(y) == -1) {
                                if(newobj.length == 0) {
                                    mapping.push(splitColumns[0]);
                                    newobj[0] = [splitColumns[0]];
                                }
                                newobj[0].push(0);
                                regions++;
                            }
                        }
                        for(var x in data[y]) {
                            if(mapping.indexOf(x) == -1) {
                                mapping.push(x);
                                newobj[mapping.indexOf(x)] = [x];
                            }
                            for(var arr in data[y][x]) {
                                for(var row in data[y][x][arr]) {
                                    newobj[mapping.indexOf(x)].push(data[y][x][arr][row]);
                                }
                            }
                        }
                    }
                }
                else {
                    for(var y in data) {
                        if(Object.size(data[y]) == 0) {
                            if(mapping.indexOf(y) == -1) {
                                if(newobj.length == 0) {
                                    mapping.push(splitColumns[0]);
                                    newobj[0] = [splitColumns[0]];
                                }
                                newobj[0].push(0);
                                regions++;
                            }
                        }
                        for(var x in data[y]) {
                            for(var arr in data[y][x]) {
                                regions++;
                                for(var row in data[y][x][arr]) {
                                    if(mapping.indexOf(row) == -1) {
                                        mapping.push(row);
                                        newobj[mapping.indexOf(row)] = [row];
                                    }
                                    newobj[mapping.indexOf(row)].push(data[y][x][arr][row]);
                                }
                            }
                        }
                    }
                }
            }
            else {
                cats = [];
                newobj = [
                    ['ERROR', 0],
                    ['INVALID DATA SOURCE', 0]
                ];
            }

            settings.axis = {
                x: { //needed to use column labels
                    type: 'categories',
                    tick: {
                        rotate: 55,
                    },
                    height: 60,
                    categories: cats,
                },
            };
        }
    }
    return {data: newobj, regions: regions, settings: settings, sources: sources};
};

tile_2x2_chart.tile_2x2_chart_draw = function(ele) {
    var formatter = tile_2x2_chart_format_data(ele.parent.data, mergeObjects(ele.settings, ele.parent.settings), mergeObjects(ele.sources, ele.parent.sources));
    var settings = formatter.settings;
    var sources = formatter.sources;
    var regions = formatter.regions;
    var data = formatter.data;

    var stuff = {};
    stuff.size = {width: $('#'+ele.id).width(), height: ($('#'+ele.id).height())};

    if(Object.size(data) != 0) {
        stuff.data = {columns: data};
    }
    else {
        stuff.data = {columns: [
            ['No Data Found', 0],
        ]};
    }

    stuff.bindto = '#drawable_'+ele.id;

    if("x" in settings) {
        stuff.data.x = settings.x;
    }
    if("legend" in settings) {
        stuff.legend = {show: settings.legend};
    }
    if("type" in settings) {
        stuff.data.type = settings.type;
    }
    if("subchart" in settings) {
        stuff.subchart = {show: settings.subchart};
    }
    if("zoom" in settings) {
        stuff.zoom = {enabled: settings.zoom};
    }
    if("min" in sources && "max" in sources) {
        stuff.axis = {
            y: {
                max: parseInt(sources.max, 10),
                min: parseInt(sources.min, 10),
            }
        };
    }
    if("axis" in settings) {
        stuff.axis = settings.axis;
    }

    var basePattern = ['#5ab0ee', '#b5a1dd', '#2ec2c5', '#f4984e', '#d57b7e'];

    if(typeof settings.theme != 'undefined' && typeof settings.theme.primaryColor != 'undefined') {
        for(var iter = 0; iter < basePattern.length; iter++) {
            if(basePattern[0] == '#'+settings.theme.primaryColor) {
                break;
            }
            basePattern.push(basePattern.shift());
        }
    }

    stuff.color = {
        pattern: basePattern
    };

    if(settings.type != 'pie' && settings.type != 'donut') {
        stuff.grid = {
            y: {
                show: true
            }
        };
    }

    //stuff.regions
    var regObj = [];
    for(var iter = 0; iter < regions; iter++) {
        regObj.push({start: iter, end: iter+1, class: 'region'+(iter % 2)});
    }

    stuff.regions = regObj;

    ele.interactiveObject = c3.generate(stuff);

    //redraw backside
    tile_2x2_chart_draw_back(ele);
};

tile_2x2_chart_draw_back = function(ele) {
    defaultsaveBack(ele);
}