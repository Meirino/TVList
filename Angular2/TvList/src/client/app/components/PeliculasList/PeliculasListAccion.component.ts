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

export class PeliculasListAccionComponent {
    public lista:Serie[];
    public serie:Serie;
    public busq:string;

    constructor(public service:seriesService, public router:Router) {
        this.lista = this.service.filterByPelicula();
        this.lista = this.lista.filter(serie => serie.categorias.indexOf('Acción') > -1);
    }

    filtrarPorNombre() {
        this.lista = this.service.getElementoByTitulo(this.busq);
    }
}