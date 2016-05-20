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
        var id = this.lista.length;
        this.nuevoActor.IMG = "#";
        this.lista.push(new Actor(id, this.nuevoActor.nombre, this.nuevoActor.descrip, '#', this.nuevoActor.obras));
    }

    eliminarActor(actor:Actor) {
        var index = this.lista.indexOf(actor);
        if (index > -1) {
            this.lista.splice(index, 1);
        }
    }
}