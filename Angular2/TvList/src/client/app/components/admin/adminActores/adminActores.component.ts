/**
 * Created by Javi on 20/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../../actores.service";

@Component({
    templateUrl: './app/components/admin/adminActores/adminActores.template.html'
})

export class adminActoresComponent {
    public nuevoActor:Actor = new Actor(0, '', '', '#', ['']);
    public lista:Actor[] = [
        new Actor(0, 'Ryan Gosling', 'Protagonista de la pelicula Drive', '#', ['Drive'])
    ];
    public service: ActoresService;

    constructor() {
    }

    anadirActor() {
        this.nuevoActor.id = this.lista.length;
        this.nuevoActor.IMG = "#";
        this.lista.push(this.nuevoActor);
    }

    eliminarActor(actor:Actor) {

    }
}