import {Component} from 'angular2/core';
import {Serie,seriesService} from "../series.service";
@Component({
  templateUrl: './app/components/index/index.template.html',
  styleUrls: ['./app/components/index/topCarrouselComponent.Style.css'],
    providers: [seriesService]
})
export class indexComponent {
  public lista:Serie[];
    public nombre:string;

  constructor(public service:seriesService) {
      this.lista = this.service.getSeries();
  }

    filterBySeries() {
        this.lista = this.service.filterBySeries();
    }

    filterByPeliculas() {
        this.lista = this.service.filterByPelicula();
    }

    filterByTodo() {
        this.lista = this.service.filterByTodo();
    }

    filtrarNombre() {
        this.lista = this.service.getElementoByTitulo(this.nombre);
    }
}
