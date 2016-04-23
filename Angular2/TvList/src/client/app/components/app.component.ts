import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {seriesService} from './series.service';

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Library</h1>
  `,
  providers:  [seriesService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  //{path: '/series', name: 'Series', component: BookListComponent, useAsDefault: true}
])
export class AppComponent { }
