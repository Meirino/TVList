import {Component} from 'angular2/core';
import {messageListComponent} from '../../messages/messageList.component';
import {userService} from '../../user/user.service';

@Component({
    templateUrl : './app/components/perfil/misValoraciones/misValoraciones.template.html',
    directives: [messageListComponent],
})
export class misValoracionesComponent{
    
    constructor(private _userService:userService){}
    
}