System.register(['angular2/core', './user.data', 'rxjs/Rx', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, user_data_1, Rx_1, http_1;
    var userService;
    function utf8_to_b64(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_data_1_1) {
                user_data_1 = user_data_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            userService = (function () {
                function userService(http) {
                    this.http = http;
                    this.userLogged = null;
                    this.listaUsuarios = [
                        new user_data_1.user(0, "admin", "pass", "admin@tvlist.com", true, "Pepito", "Piscinas", "avatar1.png"),
                        new user_data_1.user(1, "david", "pass", "david@gmail.com", false, "David", "D", "avatar2.jpg"),
                        new user_data_1.user(2, "jose", "pass", "jose@gmail.com", false, "Jose", "J", "avatar3.png")
                    ];
                    this._autoid = 3;
                    this._loginSucces = new Rx_1.Subject();
                    this.loginSucces$ = this._loginSucces.asObservable();
                    this.reqIsLogged();
                }
                userService.prototype._ponerUsuario = function (usr) {
                    usr.isAdmin = false;
                    usr.id = this._autoid;
                    this.listaUsuarios.push(usr);
                    this._autoid++;
                };
                userService.prototype.loginUserInApp = function (usr) {
                    this.userLogged = usr;
                    this._loginSucces.next(true);
                };
                userService.prototype.logOut = function () {
                    var _this = this;
                    return this.http.get('logOut').map(function (response) {
                        _this.userLogged = null;
                        return response;
                    });
                };
                userService.prototype.getUserByUser_And_Pass = function (userName, userPassword) {
                    var _this = this;
                    var userPass = userName + ":" + userPassword;
                    var headers = new http_1.Headers({
                        'Authorization': 'Basic ' + utf8_to_b64(userPass),
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var userStream = this.http.get('logIn', options).map(function (response) {
                        _this.processLogInResponse(response);
                        return _this.usuario;
                    }).publishReplay(1);
                    var userAcceptedStream = userStream.map(function (x) {
                        if (x == null)
                            return false;
                        else
                            return true;
                    });
                    userStream.subscribe(function (usr) {
                        _this.loginUserInApp(usr);
                    }, function (error) {
                        console.log('BOOM');
                    });
                    userStream.connect();
                    return userAcceptedStream;
                };
                userService.prototype.checkIf_UserName_AND_Email_Free = function (userName, userMail) {
                    var _this = this;
                    var doesThisUserExist = Rx_1.Observable.create(function (obs) {
                        var error = ['', ''];
                        var numfails = 0;
                        for (var _i = 0, _a = _this.listaUsuarios; _i < _a.length; _i++) {
                            var userOb = _a[_i];
                            if (userOb.user_Name == userName) {
                                error[0] = 'Nombre de usuario: ' + userName + ' ya existe, por favor elija otro';
                                numfails++;
                            }
                            if (userOb.user_Email == userMail) {
                                error[1] = 'E-Mail: ' + userMail + ' ya existe, por favor elija otro';
                                numfails++;
                            }
                            if (numfails == 2)
                                break;
                        }
                        if (numfails == 0)
                            obs.next(true);
                        else
                            obs.error(error);
                    });
                    return doesThisUserExist;
                };
                userService.prototype.getUserByID = function (id) {
                    return Rx_1.Observable.fromArray(this.listaUsuarios).filter(function (x) { return x.id == id; });
                };
                userService.prototype.getAllUser = function () {
                    return this.listaUsuarios;
                };
                userService.prototype.createUser = function (userOb) {
                    var _this = this;
                    var userS = new user_data_1.userSpring(userOb);
                    var body = JSON.stringify(userS);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post("/registerUser", body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return error; }).subscribe(function (next) {
                        /*                this._ponerUsuario(next);
                                        this.loginUserInApp(next);*/
                        _this.getUserByUser_And_Pass(userOb.user_Name, userOb.user_Password);
                    });
                    /*
                    let usuarioCreado=Observable.create((obs)=>{
                        this._ponerUsuario(userOb);
                        this.loginUserInApp(userOb);
                        obs.next(userOb);
                        obs.complete();
                    }
                );
                    return usuarioCreado;
                    */
                };
                userService.prototype.setUserByID = function (luserOb) {
                    var _this = this;
                    var usuarioActualizado = Rx_1.Observable.create(function (x) {
                        for (var userOb in _this.listaUsuarios) {
                            if (_this.listaUsuarios[userOb].id == luserOb.id) {
                                _this.listaUsuarios[userOb] = luserOb;
                                x.next(luserOb);
                            }
                        }
                        x.error(false);
                    });
                    return usuarioActualizado;
                };
                userService.prototype.deleteUserByID = function (id) {
                    return undefined;
                };
                userService.prototype.processLogInResponse = function (response) {
                    this.userLogged = true;
                    var userdata = response.json();
                    this.usuario = new user_data_1.user(userdata.id, userdata.name, null, userdata.mail, userdata.admin, userdata.rname, userdata.surname, userdata.avatar, userdata.roles);
                    this.userLogged = this.usuario;
                };
                userService.prototype.reqIsLogged = function () {
                    var _this = this;
                    var headers = new http_1.Headers({
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get('logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
                        if (error.status != 401) {
                            console.error("Error when asking if logged: " +
                                JSON.stringify(error));
                        }
                    });
                };
                userService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], userService);
                return userService;
            }());
            exports_1("userService", userService);
        }
    }
});
//# sourceMappingURL=user.service.js.map