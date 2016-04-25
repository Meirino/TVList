import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Serie, seriesService}   from './series.service';

@Component({
    selector: 'itemList',
    templateURL: './app/components/itemList.component.html'
})

export class itemList {
  private elem:Serie;
  private elems: Serie[];
  private service: seriesService;

  constructor(private router: Router, routeParams: RouteParams) {
      this.service.getSeries().subscribe(
          series => this.elems = series,
          error => console.error(error)
      );
  }

  anadirElemento() {
    this.service.saveSerie(this.elem);
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
