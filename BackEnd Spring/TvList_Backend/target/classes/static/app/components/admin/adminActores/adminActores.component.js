System.register(['angular2/core', "../../actores.service"], function(exports_1, context_1) {
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
    var adminActoresComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (actores_service_1_1) {
                actores_service_1 = actores_service_1_1;
            }],
        execute: function() {
            adminActoresComponent = (function () {
                function adminActoresComponent(service) {
                    this.service = service;
                    this.nuevoActor = new actores_service_1.Actor(0, '', '', '#', ['', '']);
                    this.obras = '';
                    this.lista = this.service.getDatos();
                }
                adminActoresComponent.prototype.anadirActor = function () {
                    this.nuevoActor.IMG = "#";
                    this.service.anadirActor(new actores_service_1.Actor(0, this.nuevoActor.nombre, this.nuevoActor.descripcion, this.nuevoActor.IMG, this.nuevoActor.obras));
                };
                adminActoresComponent.prototype.anadirActorIMG = function () {
                    var _this = this;
                    if (this.file) {
                        var multipartItem = this.service.upload(this.file);
                        multipartItem.callback = function (data, status, headers) {
                            if (status == 200) {
                                _this.nuevoActor.IMG = data;
                                console.debug("File has been uploaded");
                                //this.loadImages();
                                var userCreated = _this.service.anadirActor(new actores_service_1.Actor(0, _this.nuevoActor.nombre, _this.nuevoActor.descripcion, _this.nuevoActor.IMG, _this.nuevoActor.obras));
                            }
                            else {
                                console.error("Error uploading file");
                            }
                        };
                        multipartItem.upload();
                    }
                };
                adminActoresComponent.prototype.eliminarActor = function (actor) {
                    console.log(actor.id);
                    this.service.eliminarActor(actor.id.toString());
                };
                adminActoresComponent.prototype.separarStrings = function (cadena) {
                    var arrayString = cadena.split(',');
                    return arrayString;
                };
                adminActoresComponent.prototype.SelectFiles = function ($event) {
                    this.file = $event.target.files[0];
                };
                adminActoresComponent.prototype.getActorByNombre = function () {
                    this.lista = this.service.filtrarPorNombre(this.busq);
                };
                adminActoresComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/admin/adminActores/adminActores.template.html',
                        providers: [actores_service_1.ActoresService]
                    }), 
                    __metadata('design:paramtypes', [actores_service_1.ActoresService])
                ], adminActoresComponent);
                return adminActoresComponent;
            }());
            exports_1("adminActoresComponent", adminActoresComponent);
        }
    }
});
//# sourceMappingURL=adminActores.component.js.map