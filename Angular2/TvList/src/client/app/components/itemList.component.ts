import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService}   from './series.service';

@Component({
    selector: 'itemList',
    templateURL: './components/itemList.component.html'
})

export class itemList {
  private elems: Serie[];
  private service: seriesService;

  constructor(private router: Router, routeParams: RouteParams) {
      this.service.getSeries().subscribe(
          series => this.elem = series,
          error => console.error(error)
      );
  }

  listSeriesbyCat(routeParams: RouteParams) {
    let cat = routeParams.get('cat');
    this.elems = this.service.getSeriesbyCategorias(cat);
  }

  listPeliculasbyCat(routeParams: RouteParams) {
    let cat = routeParams.get('cat');
    this.elems = this.service.getPeliculasbyCategorias(cat);
  }

  listElementosbyTipo(routeParams: RouteParams) {
    let tipo = routeParams.get('tipo');
    if(tipo == "series") {
      this.elems = this.service.getSeriesbyTipo(true);
    } else {
      this.elems = this.service.getSeriesbyTipo(false);
    } //ifelse
  }
}
