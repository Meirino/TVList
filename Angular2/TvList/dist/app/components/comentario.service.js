System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var comentario;
    return {
        setters:[],
        execute: function() {
            comentario = (function () {
                function comentario(usuario, valoracion, contenido, nombreSerie) {
                    this.usuario = usuario;
                    this.valoracion = valoracion;
                    this.contenido = contenido;
                    this.nombreSerie = nombreSerie;
                }
                return comentario;
            }());
            exports_1("comentario", comentario);
        }
    }
});
//# sourceMappingURL=comentario.service.js.map
