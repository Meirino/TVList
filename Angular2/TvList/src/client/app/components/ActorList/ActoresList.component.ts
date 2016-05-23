
import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";
import {ActorDetalleComponent} from "../ActorDetalle/ActorDetalle.component";

@Component({
    selector: 'ActoresList',
    templateUrl: './app/components/ActorList/ActoresList.template.html',
    directives:[ROUTER_DIRECTIVES]
})

export class ActoresListComponent{
    public lista:Actor[]=this._actoresServicio.getDatos();

    constructor(private _actoresServicio:ActoresService) {}
}