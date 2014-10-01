tiletypes = function(userId) {
    this.userId = userId;
    this.tiles = [];
    for(var pack in Package) { //get list of tile packages
        if (new RegExp("tile[0-9].*").exec(pack)) {
            var num = new RegExp("[0-9]x[0-9]").exec(pack);
            var packin = (pack.replace('tile', 'tile_')).replace(num, num+'_');
            this.tiles[pack] = (eval('Package.'+pack+'.'+packin));
        }
    }
};