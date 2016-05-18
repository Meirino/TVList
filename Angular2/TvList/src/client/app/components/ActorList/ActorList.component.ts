/**
 * Created by Javi on 17/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService}   from '../actores.service.ts';

@Component({
    selector: 'ActoresList',
    templateUrl: './components/ActorList/ActorList.component.html'
})
export class ActorListComponent {
    public lista:Actor[];
    public service:ActoresService;

    constructor(private router: Router, routeParams: RouteParams) {
        this.service.getDatos().subscribe(
            Actor => this.lista = Actor,
            Error => console.log(Error)
        );
    }
}