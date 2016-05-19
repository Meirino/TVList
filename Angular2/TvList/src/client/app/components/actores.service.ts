/**
 * Created by Javi on 17/05/2016.
 */
import {Injectable} from 'angular2/core';
import {withObserver} from './utils'

export class Actor {
    constructor(public id:number,
    public nombre:string,
    public descrip:string,
    public IMG:string,
    public obras:string[]) {}
}

@Injectable()
export class ActoresService {

    lista:Actor[] = [
        new Actor(0, 'Ryan Gosling', 'Protagonista de la pelicula Drive', '#', ['Drive'])
    ];

    /*removePersona(actor: Actor){
        for(let i=0; i<this.datos.length; i++){
            if(this.datos[i].id === actor.id){
                this.datos.splice(i,1);
            }
        }
        return withObserver(actor);
    }*/

    getDatos() {
        return this.lista;
    }

    /*getAutoresByID(id: number) {
        let elem = this.datos.filter(h => h.id == id)
        return elem;
    }*/
}