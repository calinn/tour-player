/* globals Tour, Lang, BrouserInfo*/

Tour.init = function(data, options) {
    console.info('Tour-player', 'v' + this.version.join('.'), 'by http://Tour-360.ru');
    BrouserInfo();
    this.options.set(this.defaultOption);
    this.options.set(options);
    this.options.set(this.query.get());
    Lang.set(this.options.lang, Tour.dictionary);
    this.createScene();
    this.load(this.options.data || data, function(data) {
        this.view.set(Tour.query.get());
        this.setPanorama(data.start);
        this.addEventListeners();
        this.animate();
    }.bind(this));
};
