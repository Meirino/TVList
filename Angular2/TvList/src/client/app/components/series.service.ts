import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Serie {
  constructor(public id:number, public titulo: string,
    public sinopsis:string, public esSerie:boolean,
    public temporadas:number, public capitulos:number,
    public rutaIMG:string, public categorias:String[], public personal:String[]) {}
}

  @Injectable()
  export class seriesService {
    private series = [
  	   new Serie(1, 'Drive', 'Sinopsis', false, 0, 0, 'aaa', ['Drama', 'Conducción'], ['Ryan Gosling']),
       new Serie(2, 'Breaking Bad', 'Sinopsis', true, 7, 50, 'aaa', ['Drama', 'Thriller', 'Policiaco'], ['Brian Carston'])
    ];

  getSeries() {
    return withObserver(this.series);
  }

  getSerie(id:number | string) {
    let elem = this.series.filter(h => h.id === +id)[0]
    return withObserver(new Serie(elem.id, elem.titulo, elem.sinopsis, elem.esSerie, elem.temporadas, elem.capitulos, elem.rutaIMG, elem.categorias, elem.personal));
  }

  getSeriesCategorias(cat:string) {
    let elem = this.series.filter(h => h.categorias.indexOf(cat) > -1)[0]
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
  }
}
