/**
 * Created by Javi on 19/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";

@Component({
    selector: 'SeriesList',
    templateUrl: './app/components/SeriesList/Series.template.html'
})

export class SeriesComponent {
    public service: seriesService;
    public lista = [
        new Serie(1, 'Drive', 'Sinopsis', false, 0, 0, 'aaa', ['Drama', 'Conducción'], ['Ryan Gosling']),
        new Serie(2, 'Breaking Bad', 'Sinopsis', true, 7, 50, 'aaa', ['Drama', 'Thriller', 'Policiaco'], ['Brian Carston'])
    ];

    constructor() {}
}