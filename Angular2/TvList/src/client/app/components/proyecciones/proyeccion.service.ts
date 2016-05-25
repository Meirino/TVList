
import {Injectable,OnInit} from 'angular2/core';
import {Observable,ConnectableObservable,Subject } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from 'angular2/http';
import {proyeccion} from './proyeccion.data';
import {tipo} from './proyeccion.data';
import {MultipartItem} from "../multipart-upload/multipart-item";
import {MultipartUploader} from "../multipart-upload/multipart-uploader";


@Injectable()
export class proyeccionService {

    private _url:string="/peliculas?";

    constructor(private _http:Http) {
    }


    public getPeliculasByTypeAndTitleAndPage(tipo:string,titulo:any,pagina:string){
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
            titulo="&title="+titulo;
        var urlFull=this._url+tipo+titulo+pagina;
        return this._http.get(urlFull)
            .map(response => response.json())
            .catch(this.handleError);
    }

    public createProy(proyec:proyeccion){
        let body = JSON.stringify(proyec);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers });

        return this._http.post("/peliculas", body, options)
            .map(response => response.json())
            .catch(error => error);

    }


    public convertirAListaPeliculas(lo:any){
        let listaPeliculas:proyeccion[]=new Array();
        for (var o of lo){
            listaPeliculas.push(this.convertirAPelicula(o));
        }
        return listaPeliculas;
    }

    public convertirAPelicula(o:any){
        let pelicula=new proyeccion(o.id,o.title,o.description,o.image)
        return pelicula;
    }

    public getTiposPelicula(){
        let tipos:tipo[]=[];
        tipos.push(new tipo(1,"Accion"));
        tipos.push(new tipo(2,"Aventuras"));
        tipos.push(new tipo(3,"Comedia"));
        tipos.push(new tipo(4,"Infantil"));
        tipos.push(new tipo(5,"Suspense"));
        tipos.push(new tipo(6,"Romance"));
        return tipos;
        
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    upload(archivo:File) {



        if (archivo == null){
            console.error("You have to select a file and set a description.");
            return;
        }

        let formData = new FormData();

        //formData.append("description", this.description);
        formData.append("file",  archivo);

        let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload/pelicula'}));

        multipartItem.formData = formData;

        return multipartItem;
    }

}