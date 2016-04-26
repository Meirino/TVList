import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouteParams,CanActivate,ComponentInstruction} from 'angular2/router';
import {adminIndexComponent} from './adminIndex/adminIndex.component';
import {adminElementsComponent} from './adminElements/adminElements.component';
import {isAdmin} from '../user/loginAuth';

@Component({
  templateUrl: './app/components/admin/admin.template.html',
  directives: [RouterOutlet],
})
@RouteConfig([
  {
    path: '/',
    name: 'AdminIndex',
    component: adminIndexComponent
  },
  {
    path: '/elementos',
    name: 'Elementos',
    component: adminElementsComponent
  }
])
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  return isAdmin(next, previous);
})
export class adminComponent {
}
