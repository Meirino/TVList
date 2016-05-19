System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user;
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
        }
    }
});
//# sourceMappingURL=user.data.js.map