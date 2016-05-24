/**
 * Created by david on 19/04/2016.
 */
import {Injectable,OnInit} from 'angular2/core';
import {Observable,ConnectableObservable,Subject } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from 'angular2/http';
import {proyeccion} from './proyeccion.data';

@Injectable()
export class proyeccionService {

    private _url:string="/peliculas?";

    constructor(private _http:Http) {
    }


    public getPeliculasByTypeAndTitleAndPage(tipo:string,titulo:string,pagina:string){
        if (!pagina)
            pagina="";
        else
            pagina="&page="+pagina;
        if (!tipo)
            tipo="";
        else
            tipo="&genre="+tipo;
        if (!titulo)
            titulo="";
        else
            titulo="&titulo="+titulo;
        var urlFull=this._url+tipo+titulo+pagina;
        return this._http.get(urlFull)
            .map(response => response.json())
            .catch(this.handleError);
    }


    public convertirAListaPeliculas(lo:any){
        let listaPeliculas:proyeccion[]=new Array();
        for (var o of lo){
            listaPeliculas.push(this.convertirAPelicula(o));
        }
        return listaPeliculas;
    }

    public convertirAPelicula(o:any){
        let pelicula=new proyeccion(o.id,o.title,o.description,o.image )
        return pelicula;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
    

}