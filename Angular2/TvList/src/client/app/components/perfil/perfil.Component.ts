import {Component,OnInit,ElementRef,ViewChild} from 'angular2/core';
import {userService} from '../../components/user/user.service';
import {user} from '../../components/user/user.data';
import {Router,RouteConfig, RouterOutlet, RouteParams,RouterLink,CanActivate,ComponentInstruction,OnActivate} from 'angular2/router';
import {isLoggedIn} from '../user/loginAuth';
import {misValoracionesComponent} from './misValoraciones/misValoraciones.component';

import {profileDataComponent} from './profileData/profileData.Component';

@Component({
  selector: 's-perfil',
  templateUrl: './app/components/perfil/perfil.Template.html',
  styleUrls: ['./app/components/perfil/perfil.Style.css'],
  directives: [RouterOutlet,RouterLink]
})
@RouteConfig([
  {
    path: '/',
    name: 'Usuario',
    component: profileDataComponent,
    useAsDefault: true
  },
  {
    path: '/comentarios',
    name: 'Comentarios',
    component: misValoracionesComponent
  }
])


@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  return isLoggedIn(next, previous);
})
export class perfilComponent implements OnInit{
  ngOnInit():any {
    console.log(this.activeTab);
  }

  private activeTab:number=0;
 

  constructor(private _servicioUsuario:userService){}



}
