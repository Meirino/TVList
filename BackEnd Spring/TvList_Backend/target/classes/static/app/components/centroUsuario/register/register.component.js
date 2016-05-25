System.register(['angular2/core', '../../user/user.service', '../../user/user.data', 'angular2/common'], function(exports_1, context_1) {
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
    var registerComponent;
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
            registerComponent = (function () {
                function registerComponent(servicioUsuarios, ref, fb) {
                    this.servicioUsuarios = servicioUsuarios;
                    this.ref = ref;
                    this.fb = fb;
                    this.userToCreate = new user_data_1.user();
                    this.imagenPrev = false;
                    this.currentStep = 1;
                    this.showmessage = false;
                    this.errors = [];
                    this.redVal = 0;
                    this.yellowVal = 0;
                    this.greenVal = 0;
                }
                registerComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        passwordsGroup: this.fb.group({
                            password: ["", common_1.Validators.compose([common_1.Validators.required, this.passwordStreValidator])],
                            passwordRep: ["", null]
                        }, { validator: this.passwordRepetValidator })
                    });
                };
                registerComponent.prototype.reg_step1 = function () {
                    var _this = this;
                    this.showmessage = false;
                    var userAceptableStream = this.servicioUsuarios.checkIf_UserName_AND_Email_Free(this.userToCreate.user_Name, this.userToCreate.user_Email);
                    userAceptableStream.subscribe(function (value) {
                        $(_this.link_Step2.nativeElement).tab('show');
                        _this.currentStep = 2;
                    }, function (error) {
                        _this.showMessage(error);
                    });
                };
                registerComponent.prototype.reg_step2 = function () {
                    $(this.link_Step3.nativeElement).tab('show');
                    this.currentStep = 3;
                };
                registerComponent.prototype.reg_step3 = function () {
                    var _this = this;
                    if (this.file) {
                        var multipartItem = this.servicioUsuarios.upload(this.file);
                        multipartItem.callback = function (data, status, headers) {
                            if (status == 200) {
                                _this.userToCreate.avatar = data;
                                console.debug("File has been uploaded");
                                //this.loadImages();
                                var userCreated = _this.servicioUsuarios.createUser(_this.userToCreate);
                            }
                            else {
                                console.error("Error uploading file");
                            }
                        };
                        multipartItem.upload();
                    }
                    else
                        this.servicioUsuarios.createUser(this.userToCreate);
                };
                registerComponent.prototype.selectFile = function ($event) {
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
                registerComponent.prototype.back = function (num) {
                    switch (num) {
                        case 1:
                            $(this.link_Step1.nativeElement).tab('show');
                            break;
                        case 2:
                            $(this.link_Step2.nativeElement).tab('show');
                    }
                    this.currentStep--;
                };
                registerComponent.prototype.showMessage = function (mes) {
                    var _this = this;
                    this.errors = [];
                    if (mes[0].length != 0)
                        this.errors.push(mes[0]);
                    if (mes[1].length != 0)
                        this.errors.push(mes[1]);
                    setTimeout(function () {
                        _this.showmessage = true;
                    }, 0);
                };
                registerComponent.prototype.changePasswordBar = function (perc) {
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
                registerComponent.prototype.UpdateBar = function (passw) {
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
                registerComponent.prototype.passwordStreValidator = function (control) {
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
                registerComponent.prototype.passwordRepetValidator = function (control) {
                    if (control.controls != undefined && control.controls['password'].value != undefined && control.controls['passwordRep'].value != undefined)
                        if (control.controls['password'].value !== control.controls['passwordRep'].value)
                            return { passwordNotEqual: true };
                };
                __decorate([
                    core_1.ViewChild('regForm_Step1'), 
                    __metadata('design:type', Object)
                ], registerComponent.prototype, "regForm_Step1", void 0);
                __decorate([
                    core_1.ViewChild('regForm_Step2'), 
                    __metadata('design:type', Object)
                ], registerComponent.prototype, "regForm_Step2", void 0);
                __decorate([
                    core_1.ViewChild('link_Step1'), 
                    __metadata('design:type', core_1.ElementRef)
                ], registerComponent.prototype, "link_Step1", void 0);
                __decorate([
                    core_1.ViewChild('link_Step2'), 
                    __metadata('design:type', core_1.ElementRef)
                ], registerComponent.prototype, "link_Step2", void 0);
                __decorate([
                    core_1.ViewChild('link_Step3'), 
                    __metadata('design:type', core_1.ElementRef)
                ], registerComponent.prototype, "link_Step3", void 0);
                __decorate([
                    core_1.ViewChild('imgPrev'), 
                    __metadata('design:type', core_1.ElementRef)
                ], registerComponent.prototype, "imagePreview", void 0);
                registerComponent = __decorate([
                    core_1.Component({
                        directives: [common_1.FORM_DIRECTIVES],
                        selector: "register",
                        templateUrl: './app/components/centroUsuario/register/register.template.html',
                        styleUrls: ['./app/components/centroUsuario/register/register.style.css']
                    }), 
                    __metadata('design:paramtypes', [user_service_1.userService, core_1.ElementRef, common_1.FormBuilder])
                ], registerComponent);
                return registerComponent;
            }());
            exports_1("registerComponent", registerComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map