System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Personal;
    return {
        setters:[],
        execute: function() {
            Personal = (function () {
                function Personal(nombre, descripcion, rutaIMG, categorias, obras) {
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.rutaIMG = rutaIMG;
                    this.categorias = categorias;
                    this.obras = obras;
                }
                return Personal;
            }());
            exports_1("Personal", Personal);
        }
    }
});
//# sourceMappingURL=personal.service.js.map
