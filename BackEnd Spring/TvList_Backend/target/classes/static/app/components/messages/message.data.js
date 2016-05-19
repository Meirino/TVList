System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(id, score, text, title) {
                    this.id = id;
                    this.score = score;
                    this.text = text;
                    this.title = title;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
//# sourceMappingURL=message.data.js.map