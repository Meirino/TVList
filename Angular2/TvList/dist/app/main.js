System.register(['angular2/core', 'angular2/router', './components/index/index.component', './components/perfil/perfil.Component', './components/admin/admin.Component'], function(exports_1, context_1) {
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
    var core_1, router_1, index_component_1, perfil_Component_1, admin_Component_1;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (perfil_Component_1_1) {
                perfil_Component_1 = perfil_Component_1_1;
            },
            function (admin_Component_1_1) {
                admin_Component_1 = admin_Component_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp() {
                }
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Index',
                            component: index_component_1.indexComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/perfil',
                            name: 'Perfil',
                            component: perfil_Component_1.perfilComponent
                        },
                        {
                            path: '/admin/...',
                            name: 'Admin',
                            component: admin_Component_1.adminComponent
                        }
                    ]),
                    __metadata('design:paramtypes', [])
                ], MainApp);
                return MainApp;
            }());
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=main.js.map
