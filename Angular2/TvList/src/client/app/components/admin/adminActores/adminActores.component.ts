/**
 * Created by Javi on 20/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../../actores.service";

@Component({
    templateUrl: './app/components/admin/adminActores/adminActores.template.html',
    providers:[ActoresService]
})

export class adminActoresComponent {
    public nuevoActor:Actor = new Actor(0, '', '', '#', ['','']);
    public obras: string = '';
    public lista:Actor[];
    public busq:string;

    constructor(public service: ActoresService) {
        this.lista = this.service.getDatos();
    }

    anadirActor() {
        this.nuevoActor.IMG = "#";
        this.separarStrings(this.obras, this.nuevoActor.obras);
        this.service.anadirActor(new Actor(0, this.nuevoActor.nombre, this.nuevoActor.descripcion, this.nuevoActor.IMG, this.nuevoActor.obras));
    }

    eliminarActor(actor:Actor) {
        console.log(actor.id);
        this.service.eliminarActor(actor.id.toString());
    }

    separarStrings(cadena:string, arrayString:string[]) {
        arrayString = cadena.split(',');
    }

    filtrarPorNombre() {
        this.lista = this.service.getActorByNombre(this.busq);
    }
}