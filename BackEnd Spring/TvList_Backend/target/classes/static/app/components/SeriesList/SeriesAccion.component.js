System.register(['angular2/core', 'angular2/router', "../series.service"], function(exports_1, context_1) {
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
    var core_1, router_1, series_service_1;
    var SeriesAccionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (series_service_1_1) {
                series_service_1 = series_service_1_1;
            }],
        execute: function() {
            SeriesAccionComponent = (function () {
                function SeriesAccionComponent(service, router) {
                    this.service = service;
                    this.router = router;
                    this.lista = this.service.filterBySeries();
                    this.lista = this.lista.filter(function (serie) { return serie.categorias.indexOf('Acción') > -1; });
                }
                SeriesAccionComponent.prototype.filtrarPorNombre = function () {
                    this.lista = this.service.getElementoByTitulo(this.busq);
                };
                SeriesAccionComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/SeriesList/Series.template.html',
                        providers: [series_service_1.seriesService]
                    }), 
                    __metadata('design:paramtypes', [series_service_1.seriesService, router_1.Router])
                ], SeriesAccionComponent);
                return SeriesAccionComponent;
            }());
            exports_1("SeriesAccionComponent", SeriesAccionComponent);
        }
    }
});
//# sourceMappingURL=SeriesAccion.component.js.map