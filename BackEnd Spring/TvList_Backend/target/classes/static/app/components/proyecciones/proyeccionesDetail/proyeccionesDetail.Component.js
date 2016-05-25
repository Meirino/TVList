System.register(['angular2/core', '../proyeccion.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, proyeccion_service_1, router_1;
    var proyeccionesDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (proyeccion_service_1_1) {
                proyeccion_service_1 = proyeccion_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            proyeccionesDetailComponent = (function () {
                function proyeccionesDetailComponent(_servPel, params) {
                    this._servPel = _servPel;
                    this.errorCarga = false;
                    this.idPelicula = params.get('id');
                }
                proyeccionesDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.errorCarga = false;
                    this._servPel.getPeliculaById(this.idPelicula).subscribe(function (msg) {
                        _this.pelicula = _this._servPel.convertirAPelicula(msg);
                    }, function (error) {
                        console.log("ID no existe?");
                        _this.errorCarga = true;
                    });
                };
                proyeccionesDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/proyecciones/proyeccionesDetail/proyeccionesDetail.Template.html'
                    }), 
                    __metadata('design:paramtypes', [proyeccion_service_1.proyeccionService, router_1.RouteParams])
                ], proyeccionesDetailComponent);
                return proyeccionesDetailComponent;
            }());
            exports_1("proyeccionesDetailComponent", proyeccionesDetailComponent);
        }
    }
});
//# sourceMappingURL=proyeccionesDetail.Component.js.map