/**
 * Created by Javi on 20/05/2016.
 */
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import 'rxjs/Rx';

export class Serie {
    constructor(public id:number,
                public titulo: string,
                public sinopsis:string,
                public esSerie:boolean,
                public temporadas:number,
                public capitulos:number,
                public rutaIMG:string, 
                public categorias:String[],
                public personal:String[]) {}
}

@Injectable()
export class SerieService {
    public lista:string;

    constructor() {
        this.lista = "Hello world";
    }

    getString() {
        return "Hola mundo"
    }
}