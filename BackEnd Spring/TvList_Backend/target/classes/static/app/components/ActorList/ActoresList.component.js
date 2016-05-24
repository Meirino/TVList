System.register(['angular2/core', 'angular2/router', "../actores.service"], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, actores_service_1;
    var ActoresListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (actores_service_1_1) {
                actores_service_1 = actores_service_1_1;
            }],
        execute: function() {
            ActoresListComponent = (function () {
                function ActoresListComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.lista = this.service.getDatos();
                }
                ActoresListComponent.prototype.getActorByNombre = function () {
                    this.lista = this.service.filtrarPorNombre(this.busq);
                };
                ActoresListComponent = __decorate([
                    core_1.Component({
                        selector: 'ActoresList',
                        templateUrl: './app/components/ActorList/ActoresList.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [actores_service_1.ActoresService]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, actores_service_1.ActoresService])
                ], ActoresListComponent);
                return ActoresListComponent;
            }());
            exports_1("ActoresListComponent", ActoresListComponent);
        }
    }
});
//# sourceMappingURL=ActoresList.component.js.map