System.register(['angular2/core', '../proyeccionesItem/proyeccionesItem.Component', '../../modal/modal.component', '../proyeccionesForm/proyeccionesForm.Component', '../proyeccion.service', 'angular2/router', 'angular2/common', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, proyeccionesItem_Component_1, modal_component_1, proyeccionesForm_Component_1, proyeccion_service_1, router_1, router_2, common_1, user_service_1;
    var proyeccionesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (proyeccionesItem_Component_1_1) {
                proyeccionesItem_Component_1 = proyeccionesItem_Component_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            },
            function (proyeccionesForm_Component_1_1) {
                proyeccionesForm_Component_1 = proyeccionesForm_Component_1_1;
            },
            function (proyeccion_service_1_1) {
                proyeccion_service_1 = proyeccion_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            proyeccionesListComponent = (function () {
                function proyeccionesListComponent(_proServ, params, location, _serUser) {
                    var _this = this;
                    this._proServ = _proServ;
                    this.location = location;
                    this._serUser = _serUser;
                    this.busqueda = new common_1.Control();
                    this.succesLabel = false;
                    this.keep = true;
                    this._componenteACargar = proyeccionesForm_Component_1.proyeccionesFormComponent;
                    this.succesLabel = false;
                    this.type = params.get("genre");
                    this.title = params.get("title");
                    this.page = Number.parseInt(params.get("page"));
                    if (!this.page)
                        this.page = 0;
                    this.busqueda.valueChanges.debounceTime(400)
                        .distinctUntilChanged().switchMap(function (busqueda) { return _this._proServ.getPeliculasByTypeAndTitleAndPage(_this.type, busqueda, "0"); }).subscribe(function (res) {
                        _this.title = _this.busqueda.value;
                        _this.page = 0;
                        _this.peliculas = _this._proServ.convertirAListaPeliculas(res.contenido);
                        _this.actualizarPagina(res.paginaActual, res.paginaTotal);
                        console.log(_this.peliculas);
                    }, function (err) {
                        console.log(err);
                    });
                    _proServ.createSucces$.subscribe(function (suc) {
                        if (suc) {
                            _this.modal.toggleModal();
                            _this.succesLabel = false;
                            setTimeout(function (a) {
                                _this.keep = false;
                                _this.succesLabel = true;
                            }, 500);
                        }
                    });
                }
                proyeccionesListComponent.prototype.ngOnInit = function () {
                    this.cargarPeliculas();
                };
                proyeccionesListComponent.prototype.cargarPeliculas = function () {
                    var _this = this;
                    var peliculas$ = this._proServ.getPeliculasByTypeAndTitleAndPage(this.type, this.title, this.page.toString());
                    peliculas$.subscribe(function (res) {
                        _this.peliculas = _this._proServ.convertirAListaPeliculas(res.contenido);
                        _this.actualizarPagina(res.paginaActual, res.paginaTotal);
                    }, function (err) {
                        console.log(err);
                    });
                };
                proyeccionesListComponent.prototype.prev = function () {
                    this.cargar(this.anterior);
                };
                proyeccionesListComponent.prototype.next = function () {
                    this.cargar(this.siguiente);
                };
                proyeccionesListComponent.prototype.cargar = function (pag) {
                    this.page = pag;
                    this.cargarPeliculas();
                };
                proyeccionesListComponent.prototype.actualizarPagina = function (paginaActual, paginaTotal) {
                    var tip = "";
                    var titulo = "";
                    if (this.type)
                        tip = "&genre=" + this.type;
                    if (this.title)
                        titulo = "&title=" + this.title;
                    this.location.go("/peliculas?page=" + paginaActual + tip + titulo);
                    this.page = Number.parseInt(paginaActual);
                    this.maxPage = Number.parseInt(paginaTotal);
                    this.siguiente = this.page + 1;
                    this.anterior = this.page - 1;
                };
                proyeccionesListComponent.prototype.buscarPorTitulo = function (val) {
                    var ite = val;
                };
                proyeccionesListComponent.prototype.mostrarCrearPelicula = function () {
                    var _this = this;
                    this.keep = true;
                    setTimeout(function (a) {
                        _this.modal.toggleModal();
                    }, 0);
                };
                proyeccionesListComponent.prototype.eliminarPelicula = function (id) {
                    var _this = this;
                    var idAeliminar = id;
                    console.log(idAeliminar);
                    this._proServ.eliminarPeliPorId(id.value).subscribe(function (g) {
                        console.log(g);
                        _this.eliminarPeliculadeLista(id.value);
                    }, function (e) {
                        console.log("Error eliminando");
                    });
                };
                proyeccionesListComponent.prototype.eliminarPeliculadeLista = function (id) {
                    var _this = this;
                    var posBorrar;
                    for (var cont = 0; cont < this.peliculas.length; cont++) {
                        if (this.peliculas[cont].id == id) {
                            posBorrar = cont;
                            break;
                        }
                    }
                    this.peliculas[posBorrar].id = -1;
                    setTimeout(function (x) {
                        _this.peliculas.splice(cont, 1);
                    }, 500);
                };
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', modal_component_1.modalComponent)
                ], proyeccionesListComponent.prototype, "modal", void 0);
                proyeccionesListComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/proyecciones/proyeccionesList/proyeccionesList.Template.html',
                        styleUrls: ['./app/components/proyecciones/proyeccionesList/proyeccionesList.Style.css'],
                        directives: [proyeccionesItem_Component_1.proyeccionesItemComponent, modal_component_1.modalComponent]
                    }), 
                    __metadata('design:paramtypes', [proyeccion_service_1.proyeccionService, router_1.RouteParams, router_2.Location, user_service_1.userService])
                ], proyeccionesListComponent);
                return proyeccionesListComponent;
            }());
            exports_1("proyeccionesListComponent", proyeccionesListComponent);
        }
    }
});
//# sourceMappingURL=proyeccionesList.Component.js.map