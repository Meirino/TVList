/**
 * Created by Javi on 22/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";

@Component({
    templateUrl: './app/components/PeliculasList/PeliculasList.template.html',
    providers: [seriesService]
})

export class PeliculasListComponent {
    public lista:Serie[];
    public serie:Serie;
    public busq:string;

    constructor(public service:seriesService, public router:Router) {
        this.lista = this.service.filterByPelicula();
    }

    filtrarPorNombre() {
        this.lista = this.service.getElementoByTitulo(this.busq);
    }
}