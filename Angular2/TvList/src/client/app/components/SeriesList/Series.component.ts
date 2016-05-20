/**
 * Created by Javi on 19/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";
import {SerieService} from "../Serie.service";

@Component({
    selector: 'SeriesList',
    templateUrl: './app/components/SeriesList/Series.template.html',
    providers: [SerieService]
})

export class SeriesComponent {
    public lista:Serie[];
    public serie:Serie;

    constructor(public router:Router) {
        this.lista = [
            new Serie(0, 'Drive', 'Película protagonizada por Ryan Gosling', false, 0, 1, '#', ['Conducción'], ['Ryan Gosling']),
            new Serie(0, 'Sherlock', 'Serie protagonizada por Sherlock Holmes', true, 4, 20, '#', ['Misterio'], ['Benedict Cumcumberbatch'])
        ];
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