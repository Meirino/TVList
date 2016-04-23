import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService}   from './series.service';

@Component({
  selector: 's-itemDetail',
  templateUrl: './app/components/itemDetail/itemDetail.Template.html'
})
export class itemDetailComponent {
  constructor(public Serie serie, private service: seriesService) {
    let id = routeParams.get('id');
    service.getSerie(id).subscribe(
        serie => this.serie = serie,
        error => console.error(error)
    );
  }
}
