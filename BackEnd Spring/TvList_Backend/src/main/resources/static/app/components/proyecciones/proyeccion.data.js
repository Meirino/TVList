System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var proyeccion, proyeccionSpring;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by david on 19/04/2016.
             */
            proyeccion = (function () {
                function proyeccion(id, title, description, image) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                    this.image = image;
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
        }
    }
});
//# sourceMappingURL=proyeccion.data.js.map