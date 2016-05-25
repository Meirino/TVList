System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', './proyeccion.data', "../multipart-upload/multipart-item", "../multipart-upload/multipart-uploader"], function(exports_1, context_1) {
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
    var core_1, Rx_1, http_1, proyeccion_data_1, proyeccion_data_2, multipart_item_1, multipart_uploader_1;
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
                proyeccion_data_2 = proyeccion_data_1_1;
            },
            function (multipart_item_1_1) {
                multipart_item_1 = multipart_item_1_1;
            },
            function (multipart_uploader_1_1) {
                multipart_uploader_1 = multipart_uploader_1_1;
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
                proyeccionService.prototype.createProy = function (proyec) {
                    var body = JSON.stringify(proyec);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post("/peliculas", body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return error; });
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
                proyeccionService.prototype.getTiposPelicula = function () {
                    var tipos = [];
                    tipos.push(new proyeccion_data_2.tipo(1, "Accion"));
                    tipos.push(new proyeccion_data_2.tipo(2, "Aventuras"));
                    tipos.push(new proyeccion_data_2.tipo(3, "Comedia"));
                    tipos.push(new proyeccion_data_2.tipo(4, "Infantil"));
                    tipos.push(new proyeccion_data_2.tipo(5, "Suspense"));
                    tipos.push(new proyeccion_data_2.tipo(6, "Romance"));
                    return tipos;
                };
                proyeccionService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    return Rx_1.Observable.throw(errMsg);
                };
                proyeccionService.prototype.upload = function (archivo) {
                    if (archivo == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    //formData.append("description", this.description);
                    formData.append("file", archivo);
                    var multipartItem = new multipart_item_1.MultipartItem(new multipart_uploader_1.MultipartUploader({ url: '/image/upload/pelicula' }));
                    multipartItem.formData = formData;
                    return multipartItem;
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