verifyData = function(res) {
    if (res !== undefined && res !== null && res !== '' && res.trim() !== '') {
        return res;
    }
    return false;
};

defaultSaveData = function() {
    var settings = {};
    var filters = {};
    var sources = {};
    var title = $('.modal .settings input[setFilt="title"]').val();

    $('.modal').find('.form').children().each(function() {
        var which = 'settings';
        if ($(this).hasClass('filter'))
            which = 'filters';
        else if ($(this).hasClass('source'))
            which = 'sources';

        $(this).children().each(function() {
            var value = false;
            var found = false;
            //grab each setting
            if ($(this).context.localName == 'input') {
                switch($(this).attr('type')) {
                    case 'checkbox':
                    case 'radio':
                        if($(this).is(":checked"))
                            value = true;
                        else
                            value = false;
                        found = true;
                    break;
                    case 'text':
                    case 'number':
                    case 'range':
                    case 'input':
                        var f = verifyData($(this).val());
                        if(f) {
                            value = f;
                            found = true;
                        }
                }
            }
            else if ($(this).context.localName == 'textarea' || $(this).context.localName == 'select') {
                var f = verifyData($(this).val());
                if(f) {
                    value = f;
                    found = true;
                }
            }

            if (found) {
                if (which == 'settings') {
                    settings[$(this).attr('setFilt')] = value;
                }
                else if(which == 'filters') {
                    filters[$(this).attr('setFilt')] = value;
                }
                else if (which == 'sources') {
                    sources[$(this).attr('setFilt')] = value;
                }
            }
        });
    });

    if($('.form > .title > input').val() == '') {
        $('.form > .title > input').addClass('error');
        $('.form > .title > input').attr('placeholder', 'Please Fill in');

        return;
    } else {
        $('.form > .title > input').removeClass('error');
        $('.form > .title > input').attr('placeholder', '');
    }

    return {title: title, settings: settings, filters: filters, sources: sources};
};

defaultsaveBack = function(ele) {
    var objs = {sources: ele.parent.sources, settings: ele.settings, filters: ele.filters};
    for(var obj in objs) {
        for(var iter in objs[obj]) {
            if($('#'+ele.id+' [setFilt="'+iter+'"]').is('input[type="text"]')) {
                $('#'+ele.id+' input[setFilt="'+iter+'"]').val(objs[obj][iter]);
            }
            else if ($('#'+ele.id+' [setFilt="'+iter+'"]').is('select')) {
                $('#'+ele.id+' select[setFilt="'+iter+'"]').val(objs[obj][iter]);
            }
            else if ($('#'+ele.id+' [setFilt="'+iter+'"]').is('input[type="checkbox"]')) {
                $('#'+ele.id+' input[setFilt="'+iter+'"]').attr('checked', objs[obj][iter]);
            }

        }
    }
};

flattenObject = function(data, centralArray) {
    var leaf = true;
    for (var index in data) {
        if (typeof data[index] == 'object' || typeof data[index] == 'array') {
            leaf = false;
            flattenObject(data[index], centralArray);
        }
    }
    if(leaf) {
        centralArray.push(data);
    }
};

transformDateFields = function(data, grouped, columns, formatIn, formatOut) {
    //var newData = JSON.parse(JSON.stringify(data)); //otherwise data is overwritten
    var newData = {};
    if(typeof formatIn == 'undefined' || formatIn == '') {
        formatIn = 'X';
    }


    if(typeof columns == 'undefined') {
        return data;
    }
    var columnArray = columns.split(',');
    if(typeof columns != 'undefined' && columns !== '' &&  typeof grouped != 'undefined' && grouped !== '') {
        var groupedArray = grouped.split(',');
        return transformGroupedDateFields(columnArray, groupedArray, data, formatIn, formatOut);
    }
    else if(typeof columns != 'undefined' && columns !== '') {
        return transformNonGroupedDateFields(columnArray, data, formatIn, formatOut);
    }
    return newData;
};

transformGroupedDateFields = function(columnArray, groupedArray, data, formatIn, formatOut) {
    var sortHelper = [];
    var newData = [];
    var mapping = [];

    if(formatOut == 'MMM') {
        sortHelper = moment.monthsShort();
        newData[0] = [];
        mapping[0] = 'Jan';
        newData[1] = [];
        mapping[1] = 'Feb';
        newData[2] = [];
        mapping[2] = 'Mar';
        newData[3] = [];
        mapping[3] = 'Apr';
        newData[4] = [];
        mapping[4] = 'May';
        newData[5] = [];
        mapping[5] = 'Jun';
        newData[6] = [];
        mapping[6] = 'Jul';
        newData[7] = [];
        mapping[7] = 'Aug';
        newData[8] = [];
        mapping[8] = 'Sep';
        newData[9] = [];
        mapping[9] = 'Oct';
        newData[10] = [];
        mapping[10] = 'Nov';
        newData[11] = [];
        mapping[11] = 'Dec';
    }
    else if (formatOut == 'Do MMM') {
        sortHelper = {
            string: moment.monthsShort(),
            splitter: ' '
        };
    }
    else if (formatOut == 'YYYY') {
        sortHelper = '';
    }
    else if (formatOut == 'ddd') {
        sortHelper = moment.weekdaysShort();
        newData[0] = [];
        mapping[0] = 'Sun';
        newData[1] = [];
        mapping[1] = 'Mon';
        newData[2] = [];
        mapping[2] = 'Tue';
        newData[3] = [];
        mapping[3] = 'Wed';
        newData[4] = [];
        mapping[4] = 'Thu';
        newData[5] = [];
        mapping[5] = 'Fri';
        newData[6] = [];
        mapping[6] = 'Sat';
    }
    else if (formatOut == 'HH:mm' || formatOut == 'HH:00') {
        sortHelper = ':';
        if(formatOut == 'HH:00') {
            newData[800] = [];
            mapping[800] = '08:00';
            newData[900] = [];
            mapping[900] = '09:00';
            newData[1000] = [];
            mapping[1000] = '10:00';
            newData[1100] = [];
            mapping[1100] = '11:00';
            newData[1200] = [];
            mapping[1200] = '12:00';
            newData[1300] = [];
            mapping[1300] = '13:00';
            newData[1400] = [];
            mapping[1400] = '14:00';
            newData[1500] = [];
            mapping[1500] = '15:00';
            newData[1600] = [];
            mapping[1600] = '16:00';
            newData[1700] = [];
            mapping[1700] = '17:00';
            newData[1800] = [];
            mapping[1800] = '18:00';
            newData[1900] = [];
            mapping[1900] = '19:00';
            newData[2000] = [];
            mapping[2000] = '20:00';
        }
    }
    else if (formatOut.indexOf('/') != -1) {
        sortHelper = '/';
    }
    else if (formatOut.indexOf(' ') != -1) {
        sortHelper = ' ';
    }
    else if (formatOut.indexOf('-') != -1) {
        sortHelper = '-';
    }

    var replaceGroup = columnArray.indexOf('groupingColumn') != -1;
    var avgDataTempHolder = {};

    for(var outer in data) {
        var oldindex = Object.getFirstIndex(data[outer]);
        for(var inner in data[outer]) {
            var ind;
            if(replaceGroup && oldindex == inner) {
                var date = convertDateField(moment(oldindex, formatIn), formatOut);
                var mapped = convertDateToNum(date, sortHelper);
                mapping[mapped] = date;

                if(typeof newData[mapped] == 'undefined') {
                    newData[mapped] = {};
                }
                if(typeof newData[mapped][mapped] == 'undefined') {
                    newData[mapped][mapped] = {};
                }
                ind = mapped;
            }
            else if(!replaceGroup) {
                if(typeof newData[inner] == 'undefined') {
                    newData[inner] = {};
                }
                if(typeof newData[inner][inner] == 'undefined') {
                    newData[inner][inner] = {};
                }
                ind = inner;
            }
            for(var row in data[outer][inner]) {
                if(typeof newData[ind][ind][row] == 'undefined') {
                    newData[ind][ind][row] = {};
                }
                for(var col in data[outer][inner][row]) {
                    var str = '';
                    var found = false;
                    for(var iter in groupedArray) {
                        if(new RegExp('^' + col + ':', 'g').test(groupedArray[iter])) {
                            found = true;
                            //need to add this row to any previous with same date
                            if(typeof newData[ind][ind][row][col] == 'undefined') {
                                newData[ind][ind][row][col] = 0;
                            }
                            switch(groupedArray[iter].split(':')[1].split('(')[0]) {
                                case 'count':
                                case 'sum':
                                    newData[ind][ind][row][col] += data[outer][inner][row][col];
                                break;
                                case 'avg':
                                    if(typeof avgDataTempHolder[ind] == 'undefined') {
                                        avgDataTempHolder[ind] = 0;
                                        avgDataTempHolder[ind+'-c'] = 0;
                                    }
                                    avgDataTempHolder[ind] += data[outer][inner][row][col];
                                    avgDataTempHolder[ind+'-c'] += 1;

                                    newData[ind][ind][row][col] = avgDataTempHolder[ind] / avgDataTempHolder[ind+'-c'];

                                break;
                                case 'max':
                                    if(data[outer][inner][row][col] > newData[ind][ind][row][col]) {
                                        newData[ind][ind][row][col] = data[outer][inner][row][col];
                                    }
                                break;
                                case 'min':
                                    if(data[outer][inner][row][col] < newData[ind][ind][row][col]) {
                                        newData[ind][ind][row][col] = data[outer][inner][row][col];
                                    }
                                break;
                            }
                        }
                    }
                    if(!found) { //not a grouped column, just overwrite last entry into x date.
                        if(columnArray.indexOf(col) != -1) {
                            newData[ind][ind][row][col] = convertDateField(moment(data[outer][inner][row][col], formatIn), formatOut);

                        }
                        else {
                            newData[ind][ind][row][col] = data[outer][inner][row][col];
                        }
                    }
                }
            }
        }
    }
    var returnData = [];
    for(var iter in newData) {
        var innerReturnData = {};
        for(var inner in newData[iter]) {
            innerReturnData[mapping[inner]] = newData[iter][inner];
        }
        returnData[mapping[iter]] = innerReturnData;
    }
    return returnData;
};

transformNonGroupedDateFields = function(columnArray, data, formatIn, formatOut) {
    var newData = {};
    for(var outer in data) {
        if(typeof newData[outer] == 'undefined') {
            newData[outer] = {};
        }
        for(var inner in data[outer]) {
            if(typeof newData[outer][inner] == 'undefined') {
                newData[outer][inner] = {};
            }
            for(var row in data[outer][inner]) {
                if(columnArray.indexOf(row) != -1) {
                    newData[outer][inner][row] = convertDateField(moment(data[outer][inner][row], formatIn), formatOut);
                }
                else {
                    newData[outer][inner][row] = data[outer][inner][row];
                }
            }
        }
    }
    return newData;
};

transformArrayDateFields = function(data, columns, formatIn, formatOut) {
    var columnArray = columns.split(',');
    for(var x = 0; x < data.length; x++) {
        for(var inner in data[x]) {
            if(columnArray.indexOf(inner) != -1) {
                data[x][inner] = convertDateField(moment(data[x][inner], formatIn), formatOut);
            }
            else {
                data[x][inner] = data[x][inner];
            }
        }
    }
};

convertDateField = function(date, format) {
    return moment(date).format(format);
};

convertDateToNum = function(date, type) {
    var string = '';
    if(typeof type == 'string') {
        string = date.replace(type, '');
    }
    else if (type instanceof Array) {
        string = type.indexOf(date);
    }
    else if (typeof type == 'object') {
        var splitter = date.split(type.splitter);
        splitter[0] = parseInt(splitter[0]);
        splitter[1] = type.string.indexOf(splitter[1]);
        splitter = splitter.join('');
    }
    return parseInt(string);
};



