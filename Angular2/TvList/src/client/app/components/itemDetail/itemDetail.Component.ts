import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService}   from './series.service';

@Component({
  selector: 'serieDetalle',
  templateUrl: './app/components/itemDetail/itemDetail.Template.html'
})
export class itemDetailComponent {

  serie: Serie;

  constructor(public Serie serie, private router: Router, routeParams: RouteParams, private service: seriesService) {
    let id = routeParams.get('id');
    service.getSerie(id).subscribe(
        Serie => this.serie = Serie,
        error => console.error(error)
    );
  }
}
