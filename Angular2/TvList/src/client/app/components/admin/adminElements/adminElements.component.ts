import {Component} from 'angular2/core';
import {Serie,seriesService} from "../../series.service";

@Component({
  templateUrl: './app/components/admin/adminElements/adminElements.template.html',
    providers: [seriesService]
})

export class adminElementsComponent {
    public serieActual: Serie = new Serie(2, '','', false, 0, 1, '#', [''], ['']);
    public categorias:string = '';
    public actores:string = '';
    public lista:Serie[];
    public nombre:string;

    constructor(public service:seriesService) {
        this.lista = this.service.getSeries();
    }

    addSerie() {
        this.serieActual.rutaIMG = '#';
        this.separarStrings(this.categorias, this.serieActual.categorias);
        this.separarStrings(this.actores, this.serieActual.personal);
        this.serieActual.categorias = [''];
        this.serieActual.personal = [''];
        if(this.serieActual.esSerie == false) {
            this.serieActual.temporadas = 0;
            this.serieActual.capitulos = 1;
        }
        this.service.addSerie(new Serie(this.lista.length, this.serieActual.titulo, this.serieActual.sinopsis, this.serieActual.esSerie, this.serieActual.temporadas, this.serieActual.capitulos, this.serieActual.rutaIMG, this.serieActual.categorias, this.serieActual.personal));
    }

    eliminarSerie(serie:Serie) {
        this.service.removeSerie(serie);
    }

    separarStrings(cadena:string, arrayString:string[]) {
        arrayString = cadena.split(',');
        for(var i = 0; i < arrayString.length; i++) {
            arrayString[i] = arrayString[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
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
