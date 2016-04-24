import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService}   from './series.service';

@Component({
    selector: 'itemList',
    template: './series-detalle.component.html'
})

export class itemList {
  private elem: Serie[];
  private service: seriesService;

  constructor(private router: Router, routeParams: RouteParams) {
      this.service.getSeries().subscribe(
          series => this.elem = series,
          error => console.error(error)
      );
  }

  listSeriesbyCat(routeParams: RouteParams) {
    let cat = routeParams.get('cat');
    this.elem = this.service.getSeriesbyCategorias(cat);
  }

  listPeliculasbyCat(routeParams: RouteParams) {
    let cat = routeParams.get('cat');
    this.elem = this.service.getPeliculasbyCategorias(cat);
  }

  listElementosbyTipo(routeParams: RouteParams) {
    let tipo = routeParams.get('tipo');
    if(tipo == "series") {
      this.elem = this.service.getSeriesbyTipo(true);
    } else {
      this.elem = this.service.getSeriesbyTipo(false);
    } //ifelse
  }
}
