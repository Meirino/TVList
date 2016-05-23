/**
 * Created by Javi on 23/05/2016.
 */
import {Component} from 'angular2/core';
import {user} from "../../user/user.data";
import {userService} from "../../user/user.service";

@Component({
    templateUrl: './app/components/admin/adminUsuarios/adminUsuarios.template.html',
    providers: [userService]
})

export class userAdminComponent {
    public listaUsers:user[];

    constructor(public service:userService) {
        this.listaUsers = this.service.getAllUser();
    }
    
    eliminarUsuario(usuario:user) {
        this.service.deleteUserByID(usuario.id);
    }
}
