System.register(['angular2/core', './message.service', './messageItem/messageItem.component'], function(exports_1, context_1) {
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
    var core_1, message_service_1, messageItem_component_1;
    var messageListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (messageItem_component_1_1) {
                messageItem_component_1 = messageItem_component_1_1;
            }],
        execute: function() {
            ;
            messageListComponent = (function () {
                function messageListComponent(_messageService) {
                    this._messageService = _messageService;
                    this.comentarios = [];
                }
                messageListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var listaComentarios = this._messageService[this.primeraPeticion](this.id);
                    listaComentarios.subscribe(function (comentario) {
                        _this.comentarios.push(comentario);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], messageListComponent.prototype, "primeraPeticion", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], messageListComponent.prototype, "id", void 0);
                messageListComponent = __decorate([
                    core_1.Component({
                        selector: 'messageList',
                        templateUrl: './app/components/messages/messageList.template.html',
                        directives: [messageItem_component_1.messageItemComponent]
                    }), 
                    __metadata('design:paramtypes', [message_service_1.messageService])
                ], messageListComponent);
                return messageListComponent;
            }());
            exports_1("messageListComponent", messageListComponent);
        }
    }
});
//# sourceMappingURL=messageList.component.js.map