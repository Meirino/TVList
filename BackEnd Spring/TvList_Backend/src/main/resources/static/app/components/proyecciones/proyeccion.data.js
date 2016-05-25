System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var proyeccion, proyeccionSpring, tipo;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by david on 19/04/2016.
             */
            proyeccion = (function () {
                function proyeccion(id, title, description, image, tipo) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                    this.image = image;
                    this.tipo = tipo;
                }
                return proyeccion;
            }());
            exports_1("proyeccion", proyeccion);
            proyeccionSpring = (function () {
                function proyeccionSpring(proy) {
                }
                return proyeccionSpring;
            }());
            exports_1("proyeccionSpring", proyeccionSpring);
            tipo = (function () {
                function tipo(id, tema) {
                    this.id = id;
                    this.tema = tema;
                }
                return tipo;
            }());
            exports_1("tipo", tipo);
        }
    }
});
//# sourceMappingURL=proyeccion.data.js.map