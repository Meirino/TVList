System.register(['angular2/core', 'angular2/router', "./components/modal/modal.component", './components/index/index.component', './components/perfil/perfil.Component', './components/admin/admin.Component', './components/centroUsuario/centroUsuario.component', './components/user/user.service', './components/breadCrumb/breadCrumb.service', "./components/ActorList/ActoresList.component", "./components/SeriesList/Series.component", "./components/ActorDetalle/ActorDetalle.component", "./components/PeliculasList/PeliculasList.component", "./components/PeliculasList/PeliculasListAccion.component", "./components/PeliculasList/PeliculasListAventuras.component", "./components/PeliculasList/PeliculasListComedia.component", "./components/PeliculasList/PeliculasListInfantil.component", "./components/PeliculasList/PeliculaListSuspense.component", "./components/PeliculasList/PeliculasListRomance.component", "./components/SeriesList/SeriesAccion.component", "./components/SeriesList/SeriesAventuras.component", "./components/SeriesList/SeriesComedia.component", "./components/SeriesList/SeriesInfantil.component", "./components/SeriesList/SeriesSuspense.component", "./components/SeriesList/SeriesRomance.component"], function(exports_1, context_1) {
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
    var core_1, router_1, modal_component_1, index_component_1, perfil_Component_1, admin_Component_1, centroUsuario_component_1, user_service_1, breadCrumb_service_1, ActoresList_component_1, Series_component_1, ActorDetalle_component_1, PeliculasList_component_1, PeliculasListAccion_component_1, PeliculasListAventuras_component_1, PeliculasListComedia_component_1, PeliculasListInfantil_component_1, PeliculaListSuspense_component_1, PeliculasListRomance_component_1, SeriesAccion_component_1, SeriesAventuras_component_1, SeriesComedia_component_1, SeriesInfantil_component_1, SeriesSuspense_component_1, SeriesRomance_component_1;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (perfil_Component_1_1) {
                perfil_Component_1 = perfil_Component_1_1;
            },
            function (admin_Component_1_1) {
                admin_Component_1 = admin_Component_1_1;
            },
            function (centroUsuario_component_1_1) {
                centroUsuario_component_1 = centroUsuario_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (breadCrumb_service_1_1) {
                breadCrumb_service_1 = breadCrumb_service_1_1;
            },
            function (ActoresList_component_1_1) {
                ActoresList_component_1 = ActoresList_component_1_1;
            },
            function (Series_component_1_1) {
                Series_component_1 = Series_component_1_1;
            },
            function (ActorDetalle_component_1_1) {
                ActorDetalle_component_1 = ActorDetalle_component_1_1;
            },
            function (PeliculasList_component_1_1) {
                PeliculasList_component_1 = PeliculasList_component_1_1;
            },
            function (PeliculasListAccion_component_1_1) {
                PeliculasListAccion_component_1 = PeliculasListAccion_component_1_1;
            },
            function (PeliculasListAventuras_component_1_1) {
                PeliculasListAventuras_component_1 = PeliculasListAventuras_component_1_1;
            },
            function (PeliculasListComedia_component_1_1) {
                PeliculasListComedia_component_1 = PeliculasListComedia_component_1_1;
            },
            function (PeliculasListInfantil_component_1_1) {
                PeliculasListInfantil_component_1 = PeliculasListInfantil_component_1_1;
            },
            function (PeliculaListSuspense_component_1_1) {
                PeliculaListSuspense_component_1 = PeliculaListSuspense_component_1_1;
            },
            function (PeliculasListRomance_component_1_1) {
                PeliculasListRomance_component_1 = PeliculasListRomance_component_1_1;
            },
            function (SeriesAccion_component_1_1) {
                SeriesAccion_component_1 = SeriesAccion_component_1_1;
            },
            function (SeriesAventuras_component_1_1) {
                SeriesAventuras_component_1 = SeriesAventuras_component_1_1;
            },
            function (SeriesComedia_component_1_1) {
                SeriesComedia_component_1 = SeriesComedia_component_1_1;
            },
            function (SeriesInfantil_component_1_1) {
                SeriesInfantil_component_1 = SeriesInfantil_component_1_1;
            },
            function (SeriesSuspense_component_1_1) {
                SeriesSuspense_component_1 = SeriesSuspense_component_1_1;
            },
            function (SeriesRomance_component_1_1) {
                SeriesRomance_component_1 = SeriesRomance_component_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp(_router, _servicioUsuarios, _breadCrumbService) {
                    var _this = this;
                    this._router = _router;
                    this._servicioUsuarios = _servicioUsuarios;
                    this._breadCrumbService = _breadCrumbService;
                    this.keep = true;
                    this._componenteACargar = centroUsuario_component_1.centroUsuarioComponent;
                    _router.subscribe(function (val) {
                        _router.recognize(val).then(function (x) {
                            console.log(x);
                        });
                        var abrir_modal_login = window.location;
                        _breadCrumbService.generateBreadCrumb(val);
                    });
                    /*
                        V1
                        Actualmente Angular 2 no soporta manipulacion de #
                        https://github.com/angular/angular/issues/7215
                        window.location.hash=window.location.hash;
                        _router.subscribe((val) => {
                          let abrir_modal_login=window.location.hash;
                          this.abrirModal(abrir_modal_login);
                        });
                    */
                    _servicioUsuarios.loginSucces$.subscribe(function (suc) {
                        if (suc) {
                            _this.modal.toggleModal();
                            _this.cargarUsuario();
                            _this.keep = false;
                        }
                    });
                }
                MainApp.prototype.ngOnInit = function () {
                    this._breadCrumbService.host = window.location.origin;
                };
                MainApp.prototype.navigateByUrl = function (url) {
                    this._router.navigateByUrl(url).then(function (x) { return true; });
                };
                MainApp.prototype.cargarUsuario = function () {
                };
                /*
                  V1
                  private mostrarLogin(){
                    window.location.hash="#login";
                  }
                */
                MainApp.prototype.mostrarLogin = function () {
                    var _this = this;
                    this.keep = true;
                    setTimeout(function (a) {
                        _this.modal.toggleModal();
                    }, 0);
                };
                MainApp.prototype._desconectarUsuario = function () {
                    this._router.navigate(['/Index']);
                    this._servicioUsuarios.logOut().subscribe();
                };
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', modal_component_1.modalComponent)
                ], MainApp.prototype, "modal", void 0);
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES, modal_component_1.modalComponent]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Index',
                            component: index_component_1.indexComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/perfil/...',
                            name: 'Perfil',
                            component: perfil_Component_1.perfilComponent
                        },
                        {
                            path: '/admin/...',
                            name: 'Admin',
                            component: admin_Component_1.adminComponent
                        },
                        {
                            path: '/Actores',
                            name: 'Actores',
                            component: ActoresList_component_1.ActoresListComponent
                        },
                        {
                            path: '/Detalles',
                            name: 'Detalles',
                            component: ActorDetalle_component_1.ActorDetalleComponent
                        },
                        {
                            path: '/Series',
                            name: 'Series',
                            component: Series_component_1.SeriesComponent
                        },
                        {
                            path: '/Peliculas',
                            name: 'Peliculas',
                            component: PeliculasList_component_1.PeliculasListComponent
                        },
                        {
                            path: '/Peliculas/Accion',
                            name: 'PeliculasAccion',
                            component: PeliculasListAccion_component_1.PeliculasListAccionComponent
                        },
                        {
                            path: '/Peliculas/Aventuras',
                            name: 'PeliculasAventuras',
                            component: PeliculasListAventuras_component_1.PeliculasListAventurasComponent
                        },
                        {
                            path: '/Peliculas/Comedia',
                            name: 'PeliculasComedia',
                            component: PeliculasListComedia_component_1.PeliculasListComediaComponent
                        },
                        {
                            path: '/Peliculas/Infantil',
                            name: 'PeliculasInfantil',
                            component: PeliculasListInfantil_component_1.PeliculasListInfantilComponent
                        },
                        {
                            path: '/Peliculas/Suspense',
                            name: 'PeliculasSuspense',
                            component: PeliculaListSuspense_component_1.PeliculasListSuspenseComponent
                        },
                        {
                            path: '/Peliculas/Romance',
                            name: 'PeliculasRomance',
                            component: PeliculasListRomance_component_1.PeliculasListRomanceComponent
                        },
                        {
                            path: '/Series/Accion',
                            name: 'SeriesAccion',
                            component: SeriesAccion_component_1.SeriesAccionComponent
                        },
                        {
                            path: '/Series/Aventuras',
                            name: 'SeriesAventuras',
                            component: SeriesAventuras_component_1.SeriesAventurasComponent
                        },
                        {
                            path: '/Series/Comedia',
                            name: 'SeriesComedia',
                            component: SeriesComedia_component_1.SeriesComediaComponent
                        },
                        {
                            path: '/Series/Infantil',
                            name: 'SeriesInfantil',
                            component: SeriesInfantil_component_1.SeriesInfantilComponent
                        },
                        {
                            path: '/Series/Suspense',
                            name: 'SeriesSuspense',
                            component: SeriesSuspense_component_1.SeriesSuspenseComponent
                        },
                        {
                            path: '/Series/Romance',
                            name: 'SeriesRomance',
                            component: SeriesRomance_component_1.SeriesRomanceComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.userService, breadCrumb_service_1.breadCrumbService])
                ], MainApp);
                return MainApp;
            }());
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=main.js.map