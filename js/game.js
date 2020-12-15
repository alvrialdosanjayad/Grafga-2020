/**
 * Developed by Michal Goly on the 20/04/2016
 */

var Game = function(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.assetsManager = new AssetsManager();
    this.assetsManager.loadAll();
};

Game.prototype.newGame = function() {
    this.background = new Background(this.canvas, this.assetsManager);
    this.background.draw(this.context);

};


