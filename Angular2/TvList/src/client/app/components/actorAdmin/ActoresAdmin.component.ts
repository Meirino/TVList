/**
 * Created by Javi on 18/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";

@Component({
    selector: 'ActoresAdmin',
    templateUrl: './app/components/actorAdmin/ActoresAdmin.template.html'
})

export class ActoresAdminComponent {
    public lista:Actor[] = [
        new Actor(0, 'Ryan Gosling', 'Protagonista de la pelicula Drive', '#', ['Drive'])
    ];
    public service: ActoresService;

    constructor() {
    }
}