import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Serie, seriesService} from  './series.service.ts';

export class Usuario {
  constructor(public nombre: string, public apellidos:string,
    public contraseña:string, public correo:string,
    public series:Serie[], public capitulos:number,
    public rutaIMG:string, public categorias:String[]) {}
}
