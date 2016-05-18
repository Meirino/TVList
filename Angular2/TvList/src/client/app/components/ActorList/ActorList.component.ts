/**
 * Created by Javi on 17/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";

@Component({
    selector: 'ActorList',
    template: '<div>Test</div>',
    providers: [ActoresService]
})
export class ActorListComponent {
    public lista:Actor[];
    public service: ActoresService;

    constructor(public router: Router, public routeParams: RouteParams) {
    }
}