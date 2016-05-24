System.register(['angular2/core', "../../series.service"], function(exports_1, context_1) {
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
    var core_1, series_service_1;
    var adminElementsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (series_service_1_1) {
                series_service_1 = series_service_1_1;
            }],
        execute: function() {
            adminElementsComponent = (function () {
                function adminElementsComponent(service) {
                    this.service = service;
                    this.serieActual = new series_service_1.Serie(2, '', '', false, 0, 1, '#', [''], ['']);
                    this.categorias = '';
                    this.actores = '';
                    this.lista = this.service.getSeries();
                }
                adminElementsComponent.prototype.addSerie = function () {
                    this.serieActual.rutaIMG = '#';
                    this.separarStrings(this.categorias, this.serieActual.categorias);
                    this.separarStrings(this.actores, this.serieActual.personal);
                    this.serieActual.categorias = [''];
                    this.serieActual.personal = [''];
                    if (this.serieActual.esSerie == false) {
                        this.serieActual.temporadas = 0;
                        this.serieActual.capitulos = 1;
                    }
                    this.service.addSerie(new series_service_1.Serie(this.lista.length, this.serieActual.titulo, this.serieActual.sinopsis, this.serieActual.esSerie, this.serieActual.temporadas, this.serieActual.capitulos, this.serieActual.rutaIMG, this.serieActual.categorias, this.serieActual.personal));
                };
                adminElementsComponent.prototype.eliminarSerie = function (serie) {
                    this.service.removeSerie(serie);
                };
                adminElementsComponent.prototype.separarStrings = function (cadena, arrayString) {
                    arrayString = cadena.split(',');
                    for (var i = 0; i < arrayString.length; i++) {
                        arrayString[i] = arrayString[i].replace(/^\s*/, "").replace(/\s*$/, "");
                    }
                };
                adminElementsComponent.prototype.filterBySeries = function () {
                    this.lista = this.service.filterBySeries();
                };
                adminElementsComponent.prototype.filterByPeliculas = function () {
                    this.lista = this.service.filterByPelicula();
                };
                adminElementsComponent.prototype.filterByTodo = function () {
                    this.lista = this.service.filterByTodo();
                };
                adminElementsComponent.prototype.filtrarNombre = function () {
                    this.lista = this.service.getElementoByTitulo(this.nombre);
                };
                adminElementsComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/admin/adminElements/adminElements.template.html',
                        providers: [series_service_1.seriesService]
                    }), 
                    __metadata('design:paramtypes', [series_service_1.seriesService])
                ], adminElementsComponent);
                return adminElementsComponent;
            }());
            exports_1("adminElementsComponent", adminElementsComponent);
        }
    }
});
//# sourceMappingURL=adminElements.component.js.map