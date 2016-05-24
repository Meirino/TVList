System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', './proyeccion.data'], function(exports_1, context_1) {
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
    var core_1, Rx_1, http_1, proyeccion_data_1;
    var proyeccionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (proyeccion_data_1_1) {
                proyeccion_data_1 = proyeccion_data_1_1;
            }],
        execute: function() {
            proyeccionService = (function () {
                function proyeccionService(_http) {
                    this._http = _http;
                    this._url = "/peliculas?";
                }
                proyeccionService.prototype.getPeliculasByTypeAndTitleAndPage = function (tipo, titulo, pagina) {
                    if (!pagina)
                        pagina = "";
                    else
                        pagina = "&page=" + pagina;
                    if (!tipo)
                        tipo = "";
                    else
                        tipo = "&genre=" + tipo;
                    if (!titulo)
                        titulo = "";
                    else
                        titulo = "&title=" + titulo;
                    var urlFull = this._url + tipo + titulo + pagina;
                    return this._http.get(urlFull)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                proyeccionService.prototype.convertirAListaPeliculas = function (lo) {
                    var listaPeliculas = new Array();
                    for (var _i = 0, lo_1 = lo; _i < lo_1.length; _i++) {
                        var o = lo_1[_i];
                        listaPeliculas.push(this.convertirAPelicula(o));
                    }
                    return listaPeliculas;
                };
                proyeccionService.prototype.convertirAPelicula = function (o) {
                    var pelicula = new proyeccion_data_1.proyeccion(o.id, o.title, o.description, o.image);
                    return pelicula;
                };
                proyeccionService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    return Rx_1.Observable.throw(errMsg);
                };
                proyeccionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], proyeccionService);
                return proyeccionService;
            }());
            exports_1("proyeccionService", proyeccionService);
        }
    }
});
//# sourceMappingURL=proyeccion.service.js.map