System.register(['angular2/core', '../../../components/user/user.service', '../../../components/user/user.data', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, user_service_1, user_data_1, common_1;
    var profileDataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_data_1_1) {
                user_data_1 = user_data_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            profileDataComponent = (function () {
                function profileDataComponent(_servicioUsuario, ref, fb) {
                    this._servicioUsuario = _servicioUsuario;
                    this.ref = ref;
                    this.fb = fb;
                    this.redVal = 0;
                    this.yellowVal = 0;
                    this.greenVal = 0;
                    this.userToCreate = new user_data_1.user();
                    this.succesLabel = false;
                    this.imagenPrev = false;
                }
                profileDataComponent.prototype.ngOnInit = function () {
                    // (<user>this._servicioUsuario.userLogged).name;
                    this.form = this.fb.group({
                        userMail: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.pattern("([a-z]|[A-Z]|[0-9]|_)+@([a-z]|[A-Z]|[0-9]|_)+\\.([a-z]|[A-Z])+")])],
                        passwordsGroup: this.fb.group({
                            password: ["", common_1.Validators.compose([common_1.Validators.required, this.passwordStreValidator])],
                            passwordRep: ["", null]
                        }, { validator: this.passwordRepetValidator })
                    });
                    this.loadProfileData();
                };
                profileDataComponent.prototype.updateUser = function () {
                    var _this = this;
                    var userCreated;
                    this.succesLabel = false;
                    if (this.file) {
                        var multipartItem = this._servicioUsuario.upload(this.file);
                        multipartItem.callback = function (data, status, headers) {
                            if (status == 200) {
                                _this.userToCreate.avatar = data;
                                console.debug("File has been uploaded");
                                //this.loadImages();
                                userCreated = _this._servicioUsuario.setUserByID(_this.userToCreate);
                                userCreated.subscribe(function (x) {
                                    _this._servicioUsuario.userLogged = _this.userToCreate;
                                    setTimeout(function (a) {
                                        _this.succesLabel = true;
                                    }, 0);
                                });
                            }
                            else {
                                console.error("Error uploading file");
                            }
                        };
                        multipartItem.upload();
                    }
                    else {
                        userCreated = this._servicioUsuario.setUserByID(this.userToCreate);
                        userCreated.subscribe(function (x) {
                            _this._servicioUsuario.userLogged = _this.userToCreate;
                            setTimeout(function (a) {
                                _this.succesLabel = true;
                            }, 0);
                        });
                    }
                };
                profileDataComponent.prototype.loadProfileData = function () {
                    this.userToCreate = JSON.parse(JSON.stringify(this._servicioUsuario.userLogged));
                    this.userToCreate.user_Password = '';
                };
                profileDataComponent.prototype.passwordStreValidator = function (control) {
                    if (control.value != undefined) {
                        var passStre = 0;
                        passStre += (control.value.length - 6) * 6;
                        passStre = passStre < 0 ? 0 : passStre;
                        passStre += (control.value.length) * 4;
                        if (control.value.match(/[0-9]+/)) {
                            passStre *= 1.25;
                        }
                        if (control.value.match(/[a-z]+/)) {
                            passStre *= 1.5;
                        }
                        if (control.value.match(/[A-Z]+/)) {
                            passStre *= 1.5;
                        }
                        if (passStre < 50) {
                            return { passwordStrenError: true };
                        }
                    }
                };
                profileDataComponent.prototype.selectFile = function ($event) {
                    this.file = $event.target.files[0];
                    if (this.file) {
                        this.imagenPrev = true;
                        var ctx = document.getElementById('canvas').getContext('2d');
                        var reader = new FileReader();
                        // load to image to get it's width/height
                        var img = new Image();
                        img.onload = function () {
                            // scale canvas to image
                            ctx.canvas.width = img.width;
                            ctx.canvas.height = img.height;
                            // draw image
                            ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
                        };
                        // this is to setup loading the image
                        reader.onloadend = function () {
                            img.src = reader.result;
                        };
                        // this is to read the file
                        reader.readAsDataURL(this.file);
                    }
                    else {
                        this.imagenPrev = false;
                    }
                };
                profileDataComponent.prototype.UpdateBar = function (passw) {
                    var passStre = 0;
                    passStre += (passw.length - 6) * 6;
                    passStre = passStre < 0 ? 0 : passStre;
                    passStre += (passw.length) * 4;
                    if (passw.match(/[0-9]+/)) {
                        passStre *= 1.25;
                    }
                    if (passw.match(/[a-z]+/)) {
                        passStre *= 1.5;
                    }
                    if (passw.match(/[A-Z]+/)) {
                        passStre *= 1.5;
                    }
                    passStre = passStre > 100 ? 100 : passStre;
                    this.changePasswordBar(passStre);
                };
                profileDataComponent.prototype.changePasswordBar = function (perc) {
                    var redVa = 0;
                    if (perc > 49)
                        redVa = 50;
                    else
                        redVa = perc % 50;
                    this.redVal = redVa;
                    var yelVa = 0;
                    if (perc > 74)
                        yelVa = 25;
                    else
                        yelVa = (perc - 50) % 25;
                    yelVa = yelVa < 0 ? 0 : yelVa;
                    this.yellowVal = yelVa;
                    var greenVa = 0;
                    greenVa = perc - 75;
                    greenVa = greenVa < 0 ? 0 : greenVa;
                    this.greenVal = greenVa;
                };
                profileDataComponent.prototype.passwordRepetValidator = function (control) {
                    if (control.controls != undefined && control.controls['password'].value != undefined && control.controls['passwordRep'].value != undefined)
                        if (control.controls['password'].value !== control.controls['passwordRep'].value)
                            return { passwordNotEqual: true };
                };
                __decorate([
                    core_1.ViewChild('regForm_Step1'), 
                    __metadata('design:type', Object)
                ], profileDataComponent.prototype, "regForm_Step1", void 0);
                __decorate([
                    core_1.ViewChild('regForm_Step2'), 
                    __metadata('design:type', Object)
                ], profileDataComponent.prototype, "regForm_Step2", void 0);
                __decorate([
                    core_1.ViewChild('link_Step1'), 
                    __metadata('design:type', core_1.ElementRef)
                ], profileDataComponent.prototype, "link_Step1", void 0);
                __decorate([
                    core_1.ViewChild('link_Step2'), 
                    __metadata('design:type', core_1.ElementRef)
                ], profileDataComponent.prototype, "link_Step2", void 0);
                __decorate([
                    core_1.ViewChild('link_Step3'), 
                    __metadata('design:type', core_1.ElementRef)
                ], profileDataComponent.prototype, "link_Step3", void 0);
                profileDataComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/perfil/profileData/profileData.Template.html',
                        styleUrls: ['./app/components/perfil/profileData/profileData.Style.css']
                    }), 
                    __metadata('design:paramtypes', [user_service_1.userService, core_1.ElementRef, common_1.FormBuilder])
                ], profileDataComponent);
                return profileDataComponent;
            }());
            exports_1("profileDataComponent", profileDataComponent);
        }
    }
});
//# sourceMappingURL=profileData.Component.js.map