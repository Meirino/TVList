System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var modalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            modalComponent = (function () {
                function modalComponent(dcl, injector, ref) {
                    this.dcl = dcl;
                    this.injector = injector;
                    this.ref = ref;
                }
                modalComponent.prototype.ngAfterViewInit = function () {
                    this.dcl.loadIntoLocation(this.componenteInterior, this.ref, 'child').then(function (cmp) {
                        cmp.instance.id = 'xxx';
                        // cmp.location.nativeElement.id = 'xxx';
                    });
                    var a = $(this.ref.nativeElement.children[0]);
                    /*
                            a.on('hidden.bs.modal', function () {
                                window.location.hash="";
                            })*/
                };
                modalComponent.prototype.toggleModal = function () {
                    var a = $(this.ref.nativeElement.children[0]);
                    a.modal("toggle");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], modalComponent.prototype, "componenteInterior", void 0);
                modalComponent = __decorate([
                    core_1.Component({
                        selector: 'pro-modal',
                        templateUrl: './app/components/modal/modal.template.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, core_1.ElementRef])
                ], modalComponent);
                return modalComponent;
            }());
            exports_1("modalComponent", modalComponent);
        }
    }
});
//# sourceMappingURL=modal.component.js.map