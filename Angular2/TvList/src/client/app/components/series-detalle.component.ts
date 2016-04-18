import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService}   from './series.service';

@Component({
    templateURL: series-detalle.component.html
})
export class SerieDetallesComponent {

    serie: Serie;

    constructor(private router: Router, routeParams: RouteParams, private service: seriesService) {
        let id = routeParams.get('id');
        service.getSerie(id).subscribe(
            serie => this.serie = serie,
            error => console.error(error)
        );
    }

    removeBook() {
        let okResponse = window.confirm("Do you want to remove this book?");
        if (okResponse) {
            this.service.removeSerie(this.serie).subscribe(
                _ => this.router.navigate(['Series']),
                error => console.error(error)
            )
        }
    }

    editBook() {
        this.router.navigate(['SeriesEdit', { id: this.serie.id }]);
    }

    gotoBooks() {
        this.router.navigate(['Series']);
    }
}
