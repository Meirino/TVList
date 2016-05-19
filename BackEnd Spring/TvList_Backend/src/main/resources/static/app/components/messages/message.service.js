System.register(['angular2/core', './message.data', 'rxjs/Rx', '../user/user.service'], function(exports_1, context_1) {
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
    var core_1, message_data_1, Rx_1, user_service_1;
    var messageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_data_1_1) {
                message_data_1 = message_data_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            messageService = (function () {
                function messageService(_userService) {
                    this._userService = _userService;
                    this._listaComentarios = [
                        new message_data_1.Message(0, 4, 'Muy Buena, divertida fascinante', 'Muy buena'),
                        new message_data_1.Message(1, 2, 'Un poco aburrida', 'Del monton'),
                        new message_data_1.Message(2, 5, 'Lo mejor que se ha hecho nunca', 'WOWOWW'),
                        new message_data_1.Message(3, 3, 'Entretiene', 'No esta mal'),
                        new message_data_1.Message(4, 0, 'Ni de gratis', 'AARGh'),
                        new message_data_1.Message(5, 1, 'Me dormi', 'Zzzz')
                    ];
                    this._listaComentarios_Usuarios = [
                        [0, 0],
                        [1, 2],
                        [2, 1],
                        [3, 1],
                        [4, 2],
                        [5, 1]
                    ];
                }
                messageService.prototype.getMesFromUserID = function (userID) {
                    var listadoValoracionesYUsuarios = Rx_1.Observable.fromArray(this._listaComentarios_Usuarios);
                    var listadoFiltradoConValoracionDelUsuario = listadoValoracionesYUsuarios.filter(function (x) {
                        return x[1] == userID;
                    }).map(function (x) {
                        return x[0];
                    });
                    var listadoComentariosDelUsuario = Rx_1.Observable.fromArray(this._listaComentarios);
                    var comentarios = listadoFiltradoConValoracionDelUsuario.flatMap(function (idcomentario) {
                        return listadoComentariosDelUsuario.filter(function (comentario) {
                            return idcomentario == comentario.id;
                        });
                    });
                    var userinfo = this._userService.getUserByID(userID);
                    var comentarioConUserInfo = comentarios.flatMap(function (x) {
                        return userinfo.map(function (y) { return ({ comentario: x, usuario: y }); });
                    });
                    return comentarioConUserInfo;
                };
                messageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.userService])
                ], messageService);
                return messageService;
            }());
            exports_1("messageService", messageService);
        }
    }
});
//# sourceMappingURL=message.service.js.map