System.register(['angular2/core', '../proyeccionesItem/proyeccionesItem.Component', '../proyeccion.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, proyeccionesItem_Component_1, proyeccion_service_1, router_1, router_2;
    var proyeccionesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (proyeccionesItem_Component_1_1) {
                proyeccionesItem_Component_1 = proyeccionesItem_Component_1_1;
            },
            function (proyeccion_service_1_1) {
                proyeccion_service_1 = proyeccion_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            proyeccionesListComponent = (function () {
                function proyeccionesListComponent(_proServ, params, location) {
                    this._proServ = _proServ;
                    this.location = location;
                    this.keepPage = false;
                    this.type = params.get("genre");
                    this.title = params.get("title");
                    this.page = Number.parseInt(params.get("page"));
                    if (!this.page)
                        this.page = 0;
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
                        console.log(_this.peliculas);
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
                proyeccionesListComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/proyecciones/proyeccionesList/proyeccionesList.Template.html',
                        styleUrls: ['./app/components/proyecciones/proyeccionesList/proyeccionesList.Style.css'],
                        directives: [proyeccionesItem_Component_1.proyeccionesItemComponent]
                    }), 
                    __metadata('design:paramtypes', [proyeccion_service_1.proyeccionService, router_1.RouteParams, router_2.Location])
                ], proyeccionesListComponent);
                return proyeccionesListComponent;
            }());
            exports_1("proyeccionesListComponent", proyeccionesListComponent);
        }
    }
});
//# sourceMappingURL=proyeccionesList.Component.js.map