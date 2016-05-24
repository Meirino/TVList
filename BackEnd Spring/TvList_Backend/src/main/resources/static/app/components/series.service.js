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
                        new Serie(0, 'Drive', 'Sinopsis', false, 0, 0, 'aaa', ['Drama', 'Conducción', 'Romance'], ['Ryan Gosling']),
                        new Serie(1, 'Breaking Bad', 'Sinopsis', true, 7, 50, 'aaa', ['Drama', 'Suspense', 'Policiaco'], ['Brian Carston']),
                        new Serie(2, 'Los vengadores', 'Película protagonizada por los vengadores', false, 0, 1, '#', ['Superheroes', 'Acción', 'Comedia'], ['Chris Evans']),
                        new Serie(3, 'Virgen a los 40', 'Virgen a los 40', false, 0, 1, '#', ['Comedia', 'Romance'], ['Steve Carell']),
                        new Serie(4, 'Indiana Jones', 'Película protagonizada por Harrison Ford', false, 0, 1, '#', ['Aventuras', 'Acción'], ['Harrison Ford']),
                        new Serie(5, 'Heavy Rain', 'Película sobre asesinatos', false, 0, 1, '#', ['Suspense', 'Acción'], ['Scott Shellby']),
                        new Serie(6, 'Frozen', 'Película realizada por Disney', false, 0, 1, '#', ['Infantil', 'Romance'], ['Elsa']),
                        new Serie(7, 'The Office', 'Serie sobre la vida en una oficina', true, 10, 90, '#', ['Comedia', 'Romance'], ['Steve Carell']),
                        new Serie(8, 'Orange is the new black', 'Serie sobre una prisión femenina', true, 5, 50, '#', ['Suspense', 'Acción'], ['']),
                        new Serie(9, 'Agents of SHILED', 'Serie sobre super heroes', true, 3, 12, '#', ['Suspense', 'Acción', 'Comedia'], ['']),
                        new Serie(10, 'Castle', 'Serie sobre un escritor que trabaja con la policia', true, 10, 100, '#', ['Comedia', 'Acción', 'Suspense', 'Romance'], ['Richard Castle']),
                        new Serie(11, 'Its always sunny on Philadelphia', 'Serie sobre una pandilla que tiene un bar', true, 11, 100, '#', ['Comedia', 'Aventuras', 'Infantil'], ['Charlie Day'])
                    ];
                }
                seriesService.prototype.addSerie = function (serie) {
                    this.series.push(serie);
                };
                seriesService.prototype.getSeries = function () {
                    return this.series;
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
                seriesService.prototype.filterBySeries = function () {
                    return this.series.filter(function (serie) { return serie.esSerie == true; });
                };
                seriesService.prototype.filterByPelicula = function () {
                    return this.series.filter(function (serie) { return serie.esSerie == false; });
                };
                seriesService.prototype.filterByTodo = function () {
                    return this.series;
                };
                seriesService.prototype.getElementoByTitulo = function (nombre) {
                    return this.series.filter(function (serie) { return serie.titulo == nombre; });
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