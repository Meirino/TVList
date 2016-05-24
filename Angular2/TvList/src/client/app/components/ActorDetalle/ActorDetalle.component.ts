/**
 * Created by Javi on 18/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";

@Component({
    templateUrl: './app/components/ActorDetalle/ActorDetalle.template.html',
    providers:[ActoresService]
})

export class ActorDetalleComponent {
    detalles:Actor;
    constructor(public params: RouteParams, private service:ActoresService) {
        this.detalles = this.service.getActor(this.params.get("id"));
    }
}