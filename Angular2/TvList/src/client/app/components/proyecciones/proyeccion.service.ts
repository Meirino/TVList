/**
 * Created by david on 19/04/2016.
 */
import {Injectable,OnInit} from 'angular2/core';
import {Observable,ConnectableObservable,Subject } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from 'angular2/http';
import {proyeccion} from './proyeccion.data';

@Injectable()
export class proyeccionService {


    constructor(private _http:Http) {
    }


    public getPeliculas_TypeAll(){
        
        
    } 
    

}