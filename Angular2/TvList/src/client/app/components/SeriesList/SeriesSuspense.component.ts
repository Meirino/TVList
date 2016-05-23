/**
 * Created by Javi on 22/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";

@Component({
    templateUrl: './app/components/SeriesList/Series.template.html',
    providers: [seriesService]
})

export class SeriesSuspenseComponent {
    public lista:Serie[];
    public serie:Serie;
    public busq:string;

    constructor(public service:seriesService, public router:Router) {
        this.lista = this.service.filterBySeries();
        this.lista = this.lista.filter(serie => serie.categorias.indexOf('Suspense') > -1);
    }

    filtrarPorNombre() {
        this.lista = this.service.getElementoByTitulo(this.busq);
    }
}