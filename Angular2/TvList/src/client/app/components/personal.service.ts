import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils'
import {Serie} from './series.service';

export class Personal {

  constructor(public nombre: string,
    public descripcion:string,
    public rutaIMG:string, public categorias:String[],
    public obras:Serie[]) {}

}
