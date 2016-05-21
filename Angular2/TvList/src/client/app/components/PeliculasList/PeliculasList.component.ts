/**
 * Created by Javi on 22/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";

@Component({
    templateUrl: './app/components/PeliculasList/PeliculasList.template.html'
})

export class PeliculasListComponent {
    public lista:Serie[];
    public serie:Serie;

    constructor(public router:Router) {
        this.lista = [
            new Serie(0, 'Drive', 'Película protagonizada por Ryan Gosling', false, 0, 1, '#', ['Romance', 'Acción'], ['Ryan Gosling']),
            new Serie(1, 'Los vengadores', 'Película protagonizada por los vengadores', false, 0, 1, '#', ['Superheroes', 'Acción'], ['Chris Evans']),
            new Serie(2, 'Sherlock', 'Serie protagonizada por Sherlock Holmes', true, 4, 20, '#', ['Misterio'], ['Benedict Cumcumberbatch'])
        ];
    }
}