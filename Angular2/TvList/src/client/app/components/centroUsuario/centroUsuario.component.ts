import {Component} from 'angular2/core';
import {loginComponent} from './login/login.component';
import { registerComponent} from './register/register.component';
@Component({
    selector: 'centroUsuario',
    directives: [loginComponent,registerComponent],
    templateUrl: './app/components/centroUsuario/centroUsuario.template.html',
    styleUrls: ['./app/components/centroUsuario/centroUsuario.style.css']
    
}
)

export class centroUsuarioComponent{
    switchValue = 0;
}
