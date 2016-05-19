System.register(['../../app-injector', 'angular2/router', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_injector_1, router_1, user_service_1;
    var isLoggedIn, isAdmin;
    return {
        setters:[
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            exports_1("isLoggedIn", isLoggedIn = function (next, previous) {
                var injector = app_injector_1.appInjector(); // get the stored reference to the injector
                var userServ = injector.get(user_service_1.userService);
                var router = injector.get(router_1.Router);
                var userLogged = userServ.userLogged;
                if (userLogged)
                    return true;
                else {
                    router.navigate(['/Index']);
                    return false;
                }
            });
            exports_1("isAdmin", isAdmin = function (next, previous) {
                var injector = app_injector_1.appInjector(); // get the stored reference to the injector
                var userServ = injector.get(user_service_1.userService);
                var router = injector.get(router_1.Router);
                var userLogged = userServ.userLogged;
                if (userLogged && userLogged.isAdmin)
                    return true;
                else {
                    router.navigate(['/Index']);
                }
            });
        }
    }
});
//# sourceMappingURL=loginAuth.js.map