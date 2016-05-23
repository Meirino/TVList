System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user, userSpring;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by david on 19/04/2016.
             */
            user = (function () {
                function user(id, user_Name, user_Password, user_Email, isAdmin, name, surname, avatar, roles) {
                    this.id = id;
                    this.user_Name = user_Name;
                    this.user_Password = user_Password;
                    this.user_Email = user_Email;
                    this.isAdmin = isAdmin;
                    this.name = name;
                    this.surname = surname;
                    this.avatar = avatar;
                    this.roles = roles;
                }
                return user;
            }());
            exports_1("user", user);
            userSpring = (function () {
                function userSpring(usuario) {
                    this.id = usuario.id;
                    this.name = usuario.user_Name;
                    this.passwordHash = usuario.user_Password;
                    this.mail = usuario.user_Email;
                    this.isAdmin = usuario.isAdmin;
                    this.rname = usuario.name;
                    this.surname = usuario.surname;
                    this.avatar = usuario.avatar;
                    this.roles = usuario.roles;
                }
                return userSpring;
            }());
            exports_1("userSpring", userSpring);
        }
    }
});
//# sourceMappingURL=user.data.js.map