System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', "./user/multipart-upload/multipart-uploader", "./user/multipart-upload/multipart-item"], function(exports_1, context_1) {
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
    var core_1, http_1, multipart_uploader_1, multipart_item_1;
    var Actor, ActoresService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (multipart_uploader_1_1) {
                multipart_uploader_1 = multipart_uploader_1_1;
            },
            function (multipart_item_1_1) {
                multipart_item_1 = multipart_item_1_1;
            }],
        execute: function() {
            Actor = (function () {
                function Actor(id, nombre, descripcion, IMG, obras) {
                    this.id = id;
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.IMG = IMG;
                    this.obras = obras;
                }
                return Actor;
            }());
            exports_1("Actor", Actor);
            ActoresService = (function () {
                //public options:RequestOptionsArgs;
                function ActoresService(http) {
                    this.http = http;
                    this.obras = '';
                    this.url = "https://localhost:8443/actores/";
                    //this.options.headers.append('Content-Type', 'application/json');
                    //this.options.headers.append('Authorization', 'Basic YWRtaW46cGFzcw==');
                }
                ActoresService.prototype.getDatos = function () {
                    var listaPro = [];
                    this.http.get(this.url).subscribe(function (response) {
                        for (var i = 0; i < response.json().length; i++) {
                            console.log(response.json()[i]);
                            listaPro.push(new Actor(response.json()[i].id, response.json()[i].nombre, response.json()[i].descripcion, response.json()[i].IMG, response.json()[i].obras));
                        }
                    });
                    return listaPro;
                };
                ActoresService.prototype.getActor = function (id) {
                    var actor = new Actor(0, 'Actor sin nombre', 'Descripción cualquiera', '#', ['Película 1', 'Película 2']);
                    this.http.get("https://localhost:8443/actores/" + id).subscribe(function (response) {
                        var mySON = response.json();
                        console.log(mySON);
                        actor.id = mySON.id;
                        actor.nombre = mySON.nombre;
                        actor.descripcion = mySON.descripcion;
                        actor.IMG = mySON.IMG;
                        actor.obras = mySON.obras;
                    }, function (error) { return console.log(error); });
                    return actor;
                };
                ActoresService.prototype.filtrarPorNombre = function (nom) {
                    var listaPro = [];
                    this.http.get(this.url).subscribe(function (response) {
                        for (var i = 0; i < response.json().length; i++) {
                            if (response.json()[i].nombre == nom) {
                                console.log(response.json()[i]);
                                listaPro.push(new Actor(response.json()[i].id, response.json()[i].nombre, response.json()[i].descripcion, response.json()[i].IMG, response.json()[i].obras));
                            }
                        }
                    });
                    return listaPro;
                };
                ActoresService.prototype.anadirActor = function (actor) {
                    var body = JSON.stringify(actor);
                    console.log(body);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(this.url, body, options).subscribe(function (response) { return console.log(response); }, function (error) { return console.error(error); });
                };
                ActoresService.prototype.eliminarActor = function (id) {
                    var jsonActor = id;
                    this.http.delete("https://localhost:8443/actores/" + id).subscribe(function (response) {
                        console.log(response);
                    }, function (error) { return console.log(error); });
                };
                ActoresService.prototype.upload = function (archivo) {
                    console.debug("Uploading file...");
                    if (archivo == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    formData.append("file", archivo);
                    var multipartItem = new multipart_item_1.MultipartItem(new multipart_uploader_1.MultipartUploader({ url: '/image/upload' }));
                    multipartItem.formData = formData;
                    return multipartItem;
                };
                ActoresService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ActoresService);
                return ActoresService;
            }());
            exports_1("ActoresService", ActoresService);
        }
    }
});
//# sourceMappingURL=actores.service.js.map