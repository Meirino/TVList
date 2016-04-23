System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Usuario;
    return {
        setters:[],
        execute: function() {
            Usuario = (function () {
                function Usuario(nombre, apellidos, contraseña, correo, series, capitulos, rutaIMG, categorias) {
                    this.nombre = nombre;
                    this.apellidos = apellidos;
                    this.contraseña = contraseña;
                    this.correo = correo;
                    this.series = series;
                    this.capitulos = capitulos;
                    this.rutaIMG = rutaIMG;
                    this.categorias = categorias;
                }
                return Usuario;
            }());
            exports_1("Usuario", Usuario);
        }
    }
});
//# sourceMappingURL=usuarios.service.js.map
