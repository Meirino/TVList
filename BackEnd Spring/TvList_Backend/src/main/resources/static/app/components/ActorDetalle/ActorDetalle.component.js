System.register(['angular2/core', "../actores.service"], function(exports_1, context_1) {
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
    var core_1, actores_service_1;
    var ActorDetalleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (actores_service_1_1) {
                actores_service_1 = actores_service_1_1;
            }],
        execute: function() {
            ActorDetalleComponent = (function () {
                function ActorDetalleComponent() {
                    this.lista = new actores_service_1.Actor(0, 'Ryan Gosling', 'Protagonista de la pelicula Drive', 'http://www.soletopia.com/wp-content/uploads/2013/07/ryan-gosling-only-god-forgives-style-11-navy-vest.jpg', ['Drive']);
                }
                ActorDetalleComponent = __decorate([
                    core_1.Component({
                        selector: 'ActoresList',
                        templateUrl: './app/components/ActorList/ActoresList.template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActorDetalleComponent);
                return ActorDetalleComponent;
            }());
            exports_1("ActorDetalleComponent", ActorDetalleComponent);
        }
    }
});
//# sourceMappingURL=ActorDetalle.component.js.map