import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService} from '../series.service';

@Component({
  selector: 'serieDetalle',
  templateUrl: './app/components/itemDetail/itemDetail.Template.html'
})
export class itemDetailComponent {

  serie: Serie;

  constructor(private router: Router, routeParams: RouteParams, private service: seriesService) {
      let id = routeParams.get('id');
      service.getSerie(id).subscribe(
          serie => this.serie = serie,
          error => console.error(error)
      );
  }

  removeSerie() {
      let okResponse = window.confirm("¿De verdad quiere borrar este elemento?");
      if (okResponse) {
          this.service.removeSerie(this.serie).subscribe(
              _ => this.router.navigate(['Series']),
              error => console.error(error)
          )
      }
  }

  editSerie() {
      this.router.navigate(['SeriesEdit', { id: this.serie.id }]);
  }

  gotoSeries() {
      this.router.navigate(['Series']);
  }
}
