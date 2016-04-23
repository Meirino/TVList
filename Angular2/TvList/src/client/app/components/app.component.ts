import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {seriesService} from './series.service';
import {itemDetailComponent} from './itemDetail/itemDetail.component'

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Library</h1>
  `,
  providers:  [seriesService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/series', name: 'Series', component: itemDetailComponent, useAsDefault: true}
])
export class AppComponent { }
