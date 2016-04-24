System.register(['angular2/core', './utils'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utils_1;
    var Serie, seriesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Serie = (function () {
                function Serie(id, titulo, sinopsis, esSerie, temporadas, capitulos, rutaIMG, categorias, personal) {
                    this.id = id;
                    this.titulo = titulo;
                    this.sinopsis = sinopsis;
                    this.esSerie = esSerie;
                    this.temporadas = temporadas;
                    this.capitulos = capitulos;
                    this.rutaIMG = rutaIMG;
                    this.categorias = categorias;
                    this.personal = personal;
                }
                return Serie;
            }());
            exports_1("Serie", Serie);
            seriesService = (function () {
                function seriesService() {
                    this.series = [
                        new Serie(1, 'Drive', 'Sinopsis', false, 0, 0, 'aaa', ['Drama', 'Conducción'], ['Ryan Gosling']),
                        new Serie(2, 'Breaking Bad', 'Sinopsis', true, 7, 50, 'aaa', ['Drama', 'Thriller', 'Policiaco'], ['Brian Carston'])
                    ];
                }
                seriesService.prototype.addSerie = function (serie) {
                    this.series.push(serie);
                };
                seriesService.prototype.getSeries = function () {
                    return utils_1.withObserver(this.series);
                };
                seriesService.prototype.getSeriebyID = function (id) {
                    var elem = this.series.filter(function (h) { return h.id === +id; })[0];
                    return utils_1.withObserver(new Serie(elem.id, elem.titulo, elem.sinopsis, elem.esSerie, elem.temporadas, elem.capitulos, elem.rutaIMG, elem.categorias, elem.personal));
                };
                seriesService.prototype.getSeriesbyCategorias = function (cat) {
                    var elem = this.series.filter(function (h) { return h.categorias.indexOf(cat) > -1; });
                    var elem2 = elem.filter(function (h) { return h.esSerie == true; });
                    return elem2;
                };
                seriesService.prototype.getPeliculasbyCategorias = function (cat) {
                    var elem = this.series.filter(function (h) { return h.categorias.indexOf(cat) > -1; });
                    var elem2 = elem.filter(function (h) { return h.esSerie == false; });
                    return elem2;
                };
                seriesService.prototype.getSeriesbyTipo = function (tipo) {
                    var elem = this.series.filter(function (h) { return h.esSerie == tipo; });
                    return elem;
                };
                seriesService.prototype.removeSerie = function (serie) {
                    for (var i = 0; i < this.series.length; i++) {
                        if (this.series[i].id === serie.id) {
                            this.series.splice(i, 1);
                            break;
                        }
                    }
                    return utils_1.withObserver(undefined);
                };
                seriesService.prototype.saveSerie = function (serie) {
                    if (serie.id) {
                        var oldSerie = this.series.filter(function (h) { return h.id === serie.id; })[0];
                        oldSerie.titulo = serie.titulo;
                        oldSerie.sinopsis = serie.sinopsis;
                        oldSerie.esSerie = serie.esSerie;
                        oldSerie.temporadas = serie.temporadas;
                        oldSerie.capitulos = serie.capitulos;
                        oldSerie.rutaIMG = serie.rutaIMG;
                        oldSerie.categorias = serie.categorias;
                        oldSerie.personal = serie.personal;
                    }
                    else {
                        serie.id = this.series.length + 1;
                        this.series.push(serie);
                    }
                    return utils_1.withObserver(serie);
                };
                seriesService = __decorate([
                    core_1.Injectable(),
                    __metadata('design:paramtypes', [])
                ], seriesService);
                return seriesService;
            }());
            exports_1("seriesService", seriesService);
        }
    }
});
//# sourceMappingURL=series.service.js.map
