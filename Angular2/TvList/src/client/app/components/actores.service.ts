/**
 * Created by Javi on 17/05/2016.
 */
import {Injectable} from 'angular2/core';
import {withObserver} from './utils';
import {RequestOptions, Request, RequestMethod, HTTP_PROVIDERS, Http, RequestOptionsArgs, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {MultipartUploader} from "./user/multipart-upload/multipart-uploader";
import {MultipartItem} from "./user/multipart-upload/multipart-item";

export class Actor {
    constructor(public id:number,
    public nombre:string,
    public descripcion:string,
    public IMG:string,
    public obras:string[]) {}
}

@Injectable()
export class ActoresService {
    public nuevoActor:Actor;
    public obras: string = '';
    public url = "https://localhost:8443/actores/";
    public lista:Actor[];
    //public options:RequestOptionsArgs;

    constructor(private http: Http) {
        //this.options.headers.append('Content-Type', 'application/json');
        //this.options.headers.append('Authorization', 'Basic YWRtaW46cGFzcw==');
    }

    getDatos() {
        let listaPro:Actor[] = [];
        this.http.get(this.url).subscribe(response => {
            for(let i = 0; i < response.json().length;i++) {
                console.log(response.json()[i]);
                listaPro.push(new Actor(response.json()[i].id, response.json()[i].nombre, response.json()[i].descripcion, response.json()[i].IMG, response.json()[i].obras));
            }
        });
        return listaPro;
    }

    getActor(id:string) {
        let actor:Actor = new Actor(0, 'Actor sin nombre', 'Descripción cualquiera', '#', ['Película 1','Película 2']);
        this.http.get("https://localhost:8443/actores/"+id).subscribe(
            response => {
            let mySON = response.json();
            console.log(mySON);
            actor.id = mySON.id;
            actor.nombre = mySON.nombre;
            actor.descripcion = mySON.descripcion;
            actor.IMG = mySON.IMG;
            actor.obras = mySON.obras;
        },
            error => console.log(error)
        );
        return actor;
    }
    
    filtrarPorNombre(nom:string) {
        let listaPro:Actor[] = [];
        this.http.get(this.url).subscribe(response => {
            for(let i = 0; i < response.json().length;i++) {
                if(response.json()[i].nombre == nom) {
                    console.log(response.json()[i]);
                    listaPro.push(new Actor(response.json()[i].id, response.json()[i].nombre, response.json()[i].descripcion, response.json()[i].IMG, response.json()[i].obras));
                }
            }
        });
        return listaPro;
    }

    anadirActor(actor:Actor) {
        let body = JSON.stringify(actor);
        console.log(body);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({headers})
        this.http.post(this.url, body, options).subscribe(
            response => console.log(response),
            error => console.error(error)
        );
    }

    eliminarActor(id:string) {
        let jsonActor = id;
        this.http.delete("https://localhost:8443/actores/"+id).subscribe(
            response => {
                console.log(response);
            },
            error => console.log(error)
        );
    }

    upload(archivo:File) {
        console.debug("Uploading file...");
        if (archivo == null) {
            console.error("You have to select a file and set a description.");
            return;
        };
        let formData = new FormData();
        formData.append("file",  archivo);
        let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));
        multipartItem.formData = formData;
        return multipartItem;
    }
}