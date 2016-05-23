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
    public nuevoActor:Actor;
    public obras: string = '';
    lista:Actor[] = [
        new Actor(0, 'Ryan Gosling', 'Protagonista de la pelicula Drive', '#', ['Drive']),
        new Actor(1, 'Brian Craston', 'Protagonista de Breaking Bad', '#', ['Breaking Bad'])
    ];

    getDatos() {
        return this.lista;
    }

    anadirActor(actor:Actor) {
        this.lista.push(actor);
    }

    eliminarActor(actor:Actor) {
        var index = this.lista.indexOf(actor);
        if (index > -1) {
            this.lista.splice(index, 1);
        }
    }

    getActorByNombre(nombre:string) {
        return this.lista.filter(actor => actor.nombre == nombre);
    }
}