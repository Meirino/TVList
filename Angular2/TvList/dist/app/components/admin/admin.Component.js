System.register(['angular2/core', 'angular2/router', './adminIndex/adminIndex.component', './adminElements/adminElements.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adminIndex_component_1, adminElements_component_1;
    var adminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adminIndex_component_1_1) {
                adminIndex_component_1 = adminIndex_component_1_1;
            },
            function (adminElements_component_1_1) {
                adminElements_component_1 = adminElements_component_1_1;
            }],
        execute: function() {
            adminComponent = (function () {
                function adminComponent() {
                }
                adminComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/admin/admin.template.html',
                        directives: [router_1.RouterOutlet],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'AdminIndex',
                            component: adminIndex_component_1.adminIndexComponent
                        },
                        {
                            path: '/elementos',
                            name: 'Elementos',
                            component: adminElements_component_1.adminElementsComponent
                        }
                    ]),
                    __metadata('design:paramtypes', [])
                ], adminComponent);
                return adminComponent;
            }());
            exports_1("adminComponent", adminComponent);
        }
    }
});
//# sourceMappingURL=admin.Component.js.map
