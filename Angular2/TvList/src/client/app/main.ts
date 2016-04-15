import {Component} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES} from 'angular2/router';
import {indexComponent} from './components/index/index.component';
import {perfilComponent} from './components/perfil/perfil.Component';
import {adminComponent} from './components/admin/admin.Component';


@Component({
  selector: 'main-app',
  templateUrl: 'app/main.html',
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {
    path: '/',
    name: 'Index',
    component: indexComponent,
    useAsDefault: true
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: perfilComponent
  },
  {
    path: '/admin/...',
    name: 'Admin',
    component: adminComponent
  }
])
export class MainApp {

}
