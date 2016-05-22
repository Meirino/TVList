/**
 * Created by Javi on 22/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";

@Component({
    templateUrl: './app/components/SeriesList/Series.template.html'
})

export class SeriesAccionComponent {
    public lista:Serie[];
    public serie:Serie;

    constructor(public router:Router) {
        this.lista = [
            new Serie(0, 'Drive', 'Película protagonizada por Ryan Gosling', false, 0, 1, '#', ['Conducción'], ['Ryan Gosling']),
            new Serie(1, 'Sherlock', 'Serie protagonizada por Sherlock Holmes', true, 4, 20, '#', ['Misterio'], ['Benedict Cumcumberbatch']),
            new Serie(2, 'Agentes de SHIELD', 'Serie protagonizada por la agencia de SHIELD', true, 4, 20, '#', ['Acción'], ['Sam Wilson'])
        ].filter(serie => serie.categorias.lastIndexOf('Acción') > -1);
    }

    removeSerie(serie: Serie){
        for(let i=0; i<this.lista.length; i++){
            if(this.lista[i].id === serie.id){
                this.lista.splice(i,1);
            }
        }
    }

    onSelect(serie:Serie) {
        this.router.navigate(['/Series/', serie.id]);
    }
}