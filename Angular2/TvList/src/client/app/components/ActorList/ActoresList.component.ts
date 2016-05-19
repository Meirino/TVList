/**
 * Created by Javi on 18/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";

@Component({
    selector: 'ActoresList',
    templateUrl: './app/components/ActorList/ActoresList.template.html'
})

export class ActoresListComponent {
    public lista:Actor[] = [
        new Actor(0, 'Ryan Gosling', 'Protagonista de la pelicula Drive', 'http://www.soletopia.com/wp-content/uploads/2013/07/ryan-gosling-only-god-forgives-style-11-navy-vest.jpg', ['Drive'])
    ];
    public service: ActoresService;

    constructor() {
    }
}