import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Serie} from  './series.service.ts';
import {Usuario} from './usuarios.service.ts';

export class comentario {
  constructor(public usuario:Usuario, public valoracion:number,
    public contenido:string, public nombreSerie:string) {}
}
