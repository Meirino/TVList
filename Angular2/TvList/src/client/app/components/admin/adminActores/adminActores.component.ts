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
    public nuevoActor:Actor = new Actor(0, '', '', '#', ['']);
    public obras: string = '';
    public lista:Actor[];

    constructor(public service: ActoresService) {
        this.lista = this.service.getDatos();
    }

    anadirActor() {
        var id = this.lista.length;
        this.nuevoActor.IMG = "#";
        this.separarStrings(this.obras, this.nuevoActor.obras);
        this.service.anadirActor(new Actor(this.service.lista.length, this.nuevoActor.nombre, this.nuevoActor.descrip, this.nuevoActor.IMG, this.nuevoActor.obras));
    }

    eliminarActor(actor:Actor) {
        this.service.eliminarActor(actor);
    }

    separarStrings(cadena:string, arrayString:string[]) {
        arrayString = cadena.split(',');
        for(var i = 0; i < arrayString.length; i++) {
            arrayString[i] = arrayString[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
    }
}