import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig, Router, RouterOutlet, RouteParams,CanActivate,ComponentInstruction} from 'angular2/router';
import {Actor, ActoresService} from "../actores.service";
import {ActorDetalleComponent} from "../ActorDetalle/ActorDetalle.component";

@Component({
    selector: 'ActoresList',
    templateUrl: './app/components/ActorList/ActoresList.template.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[ActoresService]
})

export class ActoresListComponent{
    public lista:Actor[];
    public busq:string;

    constructor(public router:Router, private service:ActoresService) {
        this.lista = this.service.getDatos();
    }

    getActorByNombre() {
        
    }
}