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
    private series:string[] = [
        "String 1", "String 2"
    ];

    constructor() {
        /*this.series  = [
            new Serie(1, 'Drive', 'Sinopsis', false, 0, 0, 'aaa', ['Drama', 'Conducción'], ['Ryan Gosling']),
            new Serie(2, 'Breaking Bad', 'Sinopsis', true, 7, 50, 'aaa', ['Drama', 'Thriller', 'Policiaco'], ['Brian Carston'])
        ];*/
    }

  /*addSerie(serie:Serie) {
    this.series.push(serie);
  }*/

  getSeries() {
    return this.series;
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

  removeSerie(serie: Serie){
    for(let i=0; i<this.series.length; i++){
        if(this.series[i].id === serie.id){
          this.series.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
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
