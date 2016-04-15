import {Component} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES,RouterOutlet} from 'angular2/router';
import {adminIndexComponent} from './adminIndex/adminIndex.component';
import {adminElementsComponent} from './adminElements/adminElements.component';

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
export class adminComponent {
}
