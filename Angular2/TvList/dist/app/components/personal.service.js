System.register(['angular2/core', './utils'], function(exports_1, context_1) {
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
    var core_1, utils_1;
    var Personal, PersonalService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Personal = (function () {
                function Personal(id, nombre, descripcion, rutaIMG, obras) {
                    this.id = id;
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.rutaIMG = rutaIMG;
                    this.obras = obras;
                }
                return Personal;
            }());
            exports_1("Personal", Personal);
            PersonalService = (function () {
                function PersonalService() {
                    this.Personales = [
                        new Personal(1, 'Ryan Gosling', 'Actor protagonista en Drive', '#', ['Drive 2011']),
                        new Personal(2, 'Bob Odenkirk', 'Actor en Break Bad como Saul Goodman', '#', ['Breaking Bad'])
                    ];
                }
                PersonalService.prototype.addPersonal = function (persona) {
                    this.Personales.push(persona);
                };
                PersonalService.prototype.getPersonales = function () {
                    return utils_1.withObserver(this.Personales);
                };
                PersonalService.prototype.getPersonalbyID = function (id) {
                    var elem = this.Personales.filter(function (h) { return h.id === +id; })[0];
                    return utils_1.withObserver(new Personal(elem.id, elem.nombre, elem.descripcion, elem.rutaIMG, elem.obras));
                };
                PersonalService.prototype.getPersonalbyName = function (nom) {
                    var elem = this.Personales.filter(function (h) { return h.nombre == nom; });
                    return elem;
                };
                PersonalService.prototype.getPersonalByObra = function (obra) {
                    var elem = this.Personales.filter(function (h) { return h.obras.indexOf(obra) > -1; });
                    return elem;
                };
                PersonalService.prototype.removePersona = function (persona) {
                    for (var i = 0; i < this.Personales.length; i++) {
                        if (this.Personales[i].id === persona.id) {
                            this.Personales.splice(i, 1);
                            break;
                        }
                    }
                    return utils_1.withObserver(undefined);
                };
                PersonalService = __decorate([
                    core_1.Injectable(),
                    __metadata('design:paramtypes', [])
                ], PersonalService);
                return PersonalService;
            }());
            exports_1("PersonalService", PersonalService);
        }
    }
});
//# sourceMappingURL=personal.service.js.map
