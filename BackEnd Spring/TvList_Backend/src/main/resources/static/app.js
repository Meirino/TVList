System.register(['angular2/platform/browser', 'angular2/core', './app/main', 'angular2/router', './app/components/user/user.service', './app/components/proyecciones/proyeccion.service', './app/components/messages/message.service', './app/components/breadCrumb/breadCrumb.service', './app/utilities', 'angular2/http', './app/app-injector'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, main_1, router_1, user_service_1, proyeccion_service_1, message_service_1, breadCrumb_service_1, utilities_1, http_1, app_injector_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (proyeccion_service_1_1) {
                proyeccion_service_1 = proyeccion_service_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (breadCrumb_service_1_1) {
                breadCrumb_service_1 = breadCrumb_service_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            }],
        execute: function() {
            utilities_1.Utilities.hashOri = window.location.hash;
            browser_1.bootstrap(main_1.MainApp, [breadCrumb_service_1.breadCrumbService, message_service_1.messageService, user_service_1.userService, proyeccion_service_1.proyeccionService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ])
                .then(function (appRef) {
                // store a reference to the application injector
                app_injector_1.appInjector(appRef.injector);
            });
        }
    }
});
//# sourceMappingURL=app.js.map