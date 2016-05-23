import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Serie {
  constructor(public id:number, 
              public titulo: string,
              public sinopsis:string, 
              public esSerie:boolean,
              public temporadas:number, 
              public capitulos:number,
              public rutaIMG:string,
              public categorias:string[],
              public personal:string[]) {}
}

  @Injectable()
  export class seriesService {
    private series:Serie[] = [
        new Serie(0, 'Drive', 'Sinopsis', false, 0, 0, 'aaa', ['Drama', 'Conducción', 'Romance'], ['Ryan Gosling']),
        new Serie(1, 'Breaking Bad', 'Sinopsis', true, 7, 50, 'aaa', ['Drama', 'Suspense', 'Policiaco'], ['Brian Carston']),
        new Serie(2, 'Los vengadores', 'Película protagonizada por los vengadores', false, 0, 1, '#', ['Superheroes', 'Acción', 'Comedia'], ['Chris Evans']),
        new Serie(3, 'Virgen a los 40', 'Virgen a los 40', false, 0, 1, '#', ['Comedia', 'Romance'], ['Steve Carell']),
        new Serie(4, 'Indiana Jones', 'Película protagonizada por Harrison Ford', false, 0, 1, '#', ['Aventuras', 'Acción'], ['Harrison Ford']),
        new Serie(5, 'Heavy Rain', 'Película sobre asesinatos', false, 0, 1, '#', ['Suspense', 'Acción'], ['Scott Shellby']),
        new Serie(6, 'Frozen', 'Película realizada por Disney', false, 0, 1, '#', ['Infantil', 'Romance'], ['Elsa']),
        new Serie(7, 'The Office', 'Serie sobre la vida en una oficina', true, 10, 90, '#', ['Comedia', 'Romance'], ['Steve Carell']),
        new Serie(8, 'Orange is the new black', 'Serie sobre una prisión femenina', true, 5, 50, '#', ['Suspense', 'Acción'], ['']),
        new Serie(9, 'Agents of SHILED', 'Serie sobre super heroes', true, 3, 12, '#', ['Suspense', 'Acción', 'Comedia'], ['']),
        new Serie(10, 'Castle', 'Serie sobre un escritor que trabaja con la policia', true, 10, 100, '#', ['Comedia', 'Acción', 'Suspense', 'Romance'], ['Richard Castle']),
        new Serie(11, 'Its always sunny on Philadelphia', 'Serie sobre una pandilla que tiene un bar', true, 11, 100, '#', ['Comedia', 'Aventuras', 'Infantil'], ['Charlie Day'])
      ];

    constructor() {}

  addSerie(serie:Serie) {
      this.series.push(serie);
  }

  getSeries() {
    return this.series;
  }

      removeSerie(serie: Serie){
          for(let i=0; i<this.series.length; i++){
              if(this.series[i].id === serie.id){
                  this.series.splice(i,1);
                  break;
              }
          }
          return withObserver(undefined);
      }

      filterBySeries() {
          return this.series.filter(serie => serie.esSerie == true);
      }

      filterByPelicula() {
          return this.series.filter(serie => serie.esSerie == false);
      }

      filterByTodo() {
          return this.series;
      }

      getElementoByTitulo(nombre:string) {
          return this.series.filter(serie => serie.titulo == nombre);
      }

  /*getSeriebyID(id:number | string) {
    let elem = this.series.filter(h => h.id === +id)[0]
    return withObserver(new Serie(elem.id, elem.titulo, elem.sinopsis, elem.esSerie, elem.temporadas, elem.capitulos, elem.rutaIMG, elem.categorias, elem.personal));
  }

  getSeriesbyCategorias(cat:string) {
    let elem = this.series.filter(h => h.categorias.indexOf(cat) > -1)
    let elem2 = elem.filter(h => h.esSerie == true);
    return elem2;
  }

  getPeliculasbyCategorias(cat:string) {
    let elem = this.series.filter(h => h.categorias.indexOf(cat) > -1)
    let elem2 = elem.filter(h => h.esSerie == false);
    return elem2;
  }

  getSeriesbyTipo(tipo:boolean) {
    let elem = this.series.filter(h => h.esSerie == tipo);
    return elem;
  }

  saveSerie(serie: Serie){
    if(serie.id){
      let oldSerie = this.series.filter(h => h.id === serie.id)[0];
      oldSerie.titulo = serie.titulo;
      oldSerie.sinopsis = serie.sinopsis;
      oldSerie.esSerie = serie.esSerie;
      oldSerie.temporadas = serie.temporadas;
      oldSerie.capitulos = serie.capitulos;
      oldSerie.rutaIMG = serie.rutaIMG;
      oldSerie.categorias = serie.categorias;
      oldSerie.personal = serie.personal;
    } else {
      serie.id = this.series.length+1;
      this.series.push(serie);
    }
    return withObserver(serie);
  }*/
}
