import {Component} from 'angular2/core';
import {Serie} from "../../series.service";

@Component({
  templateUrl: './app/components/admin/adminElements/adminElements.template.html'
})

export class adminElementsComponent {
    public serieActual: Serie = new Serie(2, '','', false, 0, 1, '#', [''], ['']);
    public categorias:string = '';
    public actores:string = '';
    public lista:Serie[] = [
        new Serie(0, 'Drive', 'Película protagonizada por Ryan Gosling', false, 0, 1, '#', ['Conducción'], ['Ryan Gosling']),
        new Serie(1, 'Sherlock', 'Serie protagonizada por Sherlock Holmes', true, 4, 20, '#', ['Misterio'], ['Benedict Cumcumberbatch'])
    ];

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
        this.lista.push(new Serie(this.lista.length, this.serieActual.titulo, this.serieActual.sinopsis, this.serieActual.esSerie, this.serieActual.temporadas, this.serieActual.capitulos, this.serieActual.rutaIMG, this.serieActual.categorias, this.serieActual.personal));
    }

    eliminarSerie(serie:Serie) {
        var index = this.lista.indexOf(serie);
        if (index > -1) {
            this.lista.splice(index, 1);
        }
    }

    separarStrings(cadena:string, arrayString:string[]) {
        arrayString = cadena.split(',');
        for(var i = 0; i < arrayString.length; i++) {
            arrayString[i] = arrayString[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
    }
}
