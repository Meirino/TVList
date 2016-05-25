System.register(['angular2/core', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var loginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            loginComponent = (function () {
                function loginComponent(servicioUsuarios, ref) {
                    this.servicioUsuarios = servicioUsuarios;
                    this.ref = ref;
                    this.showmessage = false;
                }
                loginComponent.prototype.login = function () {
                    var _this = this;
                    this.showmessage = false;
                    var userAceptableStream = this.servicioUsuarios.getUserByUser_And_Pass(this.loginForm.value.userName, this.loginForm.value.userPass);
                    userAceptableStream.subscribe(function (value) {
                    }, function (error) {
                        if (error.status == "401")
                            _this.showMessage("Usuario o contaseña incorrectos");
                        else
                            _this.showMessage("Error de conexion");
                    });
                };
                loginComponent.prototype.showMessage = function (mes) {
                    var _this = this;
                    this.mens = mes;
                    setTimeout(function () {
                        _this.showmessage = true;
                    }, 0);
                };
                __decorate([
                    core_1.ViewChild('loginForm'), 
                    __metadata('design:type', Object)
                ], loginComponent.prototype, "loginForm", void 0);
                loginComponent = __decorate([
                    core_1.Component({
                        selector: "login",
                        templateUrl: './app/components/centroUsuario/login/login.template.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.userService, core_1.ElementRef])
                ], loginComponent);
                return loginComponent;
            }());
            exports_1("loginComponent", loginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map