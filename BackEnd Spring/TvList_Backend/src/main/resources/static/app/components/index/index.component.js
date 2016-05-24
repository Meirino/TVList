System.register(['angular2/core', "../series.service"], function(exports_1, context_1) {
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
    var indexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (series_service_1_1) {
                series_service_1 = series_service_1_1;
            }],
        execute: function() {
            indexComponent = (function () {
                function indexComponent(service) {
                    this.service = service;
                    this.lista = this.service.getSeries();
                }
                indexComponent.prototype.filterBySeries = function () {
                    this.lista = this.service.filterBySeries();
                };
                indexComponent.prototype.filterByPeliculas = function () {
                    this.lista = this.service.filterByPelicula();
                };
                indexComponent.prototype.filterByTodo = function () {
                    this.lista = this.service.filterByTodo();
                };
                indexComponent.prototype.filtrarNombre = function () {
                    this.lista = this.service.getElementoByTitulo(this.nombre);
                };
                indexComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/index/index.template.html',
                        styleUrls: ['./app/components/index/topCarrouselComponent.Style.css'],
                        providers: [series_service_1.seriesService]
                    }), 
                    __metadata('design:paramtypes', [series_service_1.seriesService])
                ], indexComponent);
                return indexComponent;
            }());
            exports_1("indexComponent", indexComponent);
        }
    }
});
//# sourceMappingURL=index.component.js.map