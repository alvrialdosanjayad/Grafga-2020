/**
 * Developed by Michal Goly on the 20/04/2016
 */

var AssetsManager = function() {
    this.images = [];
    this.audios = [];
};

// assets by Kenney Vleugels (www.kenney.nl)
AssetsManager.prototype.loadAll = function() {

    this.images["background"] = new Image();
    this.images["background"].src = "asset/blueBig.png";

};


