import {Component}  from 'angular2/core';
import {RouteConfig, Router, RouterOutlet, RouteParams,CanActivate,ComponentInstruction} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";
import {ActorDetalleComponent} from "../ActorDetalle/ActorDetalle.component";

@Component({
    selector: 'ActoresList',
    templateUrl: './app/components/ActorList/ActoresList.template.html',
    providers:[ActoresService]
})

export class ActoresListComponent{
    public lista:Actor[]=this.service.getDatos();
    public busq:string;

    constructor(public router:Router, private service:ActoresService) {
    }

    filtrarPorNombre() {
        this.lista = this.service.getActorByNombre(this.busq);
    }
}