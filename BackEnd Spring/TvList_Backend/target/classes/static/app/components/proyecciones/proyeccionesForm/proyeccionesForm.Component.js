System.register(['angular2/core', '../proyeccion.data', '../proyeccion.service'], function(exports_1, context_1) {
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
    var core_1, proyeccion_data_1, proyeccion_service_1;
    var proyeccionesFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (proyeccion_data_1_1) {
                proyeccion_data_1 = proyeccion_data_1_1;
            },
            function (proyeccion_service_1_1) {
                proyeccion_service_1 = proyeccion_service_1_1;
            }],
        execute: function() {
            proyeccionesFormComponent = (function () {
                function proyeccionesFormComponent(_serPel) {
                    this._serPel = _serPel;
                    this.imagenPrev = false;
                    this.movieToCreate = new proyeccion_data_1.proyeccion();
                }
                proyeccionesFormComponent.prototype.ngOnInit = function () {
                    this.tipos = this._serPel.getTiposPelicula();
                    this.movieToCreate.tipo = this.tipos[0].id.toString();
                };
                proyeccionesFormComponent.prototype.agregarPelicula = function () {
                    var _this = this;
                    if (this.file) {
                        var multipartItem = this._serPel.upload(this.file);
                        multipartItem.callback = function (data, status, headers) {
                            if (status == 200) {
                                _this.movieToCreate.image = data;
                                console.debug("File has been uploaded");
                                _this._serPel.createProy(_this.movieToCreate).subscribe(function (res) {
                                    console.log(res);
                                }, function (error) {
                                    console.log(error);
                                });
                            }
                            else {
                                console.error("Error uploading file");
                            }
                        };
                        multipartItem.upload();
                    }
                    else
                        this._serPel.createProy(this.movieToCreate).subscribe(function (res) {
                            console.log(res);
                        }, function (error) {
                            console.log(error);
                        });
                };
                proyeccionesFormComponent.prototype.selectFile = function ($event) {
                    this.file = $event.target.files[0];
                    if (this.file) {
                        this.imagenPrev = true;
                        var ctx = document.getElementById('canvas').getContext('2d');
                        var reader = new FileReader();
                        var img = new Image();
                        img.onload = function () {
                            ctx.canvas.width = img.width;
                            ctx.canvas.height = img.height;
                            ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
                        };
                        reader.onloadend = function () {
                            img.src = reader.result;
                        };
                        reader.readAsDataURL(this.file);
                    }
                    else {
                        this.imagenPrev = false;
                    }
                };
                __decorate([
                    core_1.ViewChild('movieForm'), 
                    __metadata('design:type', Object)
                ], proyeccionesFormComponent.prototype, "movieForm", void 0);
                proyeccionesFormComponent = __decorate([
                    core_1.Component({
                        selector: 's-proyeccionesItem',
                        templateUrl: './app/components/proyecciones/proyeccionesForm/proyeccionesForm.Template.html',
                        styleUrls: ['./app/components/proyecciones/proyeccionesForm/proyeccionesForm.Style.css']
                    }), 
                    __metadata('design:paramtypes', [proyeccion_service_1.proyeccionService])
                ], proyeccionesFormComponent);
                return proyeccionesFormComponent;
            }());
            exports_1("proyeccionesFormComponent", proyeccionesFormComponent);
        }
    }
});
//# sourceMappingURL=proyeccionesForm.Component.js.map