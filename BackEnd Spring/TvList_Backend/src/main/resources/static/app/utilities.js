System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utilities;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by david on 16/04/2016.
             */
            (function (Utilities) {
                function getQueryString(querystring) {
                    var queryStrings = querystring.substr(1).split("&");
                    var queryMap = new Map();
                    for (var quer in queryStrings) {
                        console.log(queryStrings[quer]);
                        var p = queryStrings[quer].split("=");
                        queryMap.set(p[0], p[1]);
                    }
                    return queryMap;
                }
                Utilities.getQueryString = getQueryString;
                function getClassFromValidation(validationObj) {
                    var clases = [];
                    if (validationObj.untouched)
                        clases.push('label-info');
                    else if ((validationObj.valid))
                        clases.push('label-success');
                    else
                        clases.push('label-danger');
                    return clases;
                }
                Utilities.getClassFromValidation = getClassFromValidation;
            })(Utilities = Utilities || (Utilities = {}));
            exports_1("Utilities", Utilities);
        }
    }
});
//# sourceMappingURL=utilities.js.map