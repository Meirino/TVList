/**
 * Created by Javi on 20/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Actor, ActoresService} from "../../actores.service";

@Component({
    templateUrl: './app/components/admin/adminActores/adminActores.template.html',
    providers:[ActoresService]
})

export class adminActoresComponent {
    public nuevoActor:Actor = new Actor(0, '', '', '#', ['','']);
    public obras: string = '';
    public lista:Actor[];
    public busq:string;
    public file:File;

    constructor(public service: ActoresService) {
        this.lista = this.service.getDatos();
    }

    anadirActor() {
        this.nuevoActor.IMG = "#";
        this.service.anadirActor(new Actor(0, this.nuevoActor.nombre, this.nuevoActor.descripcion, this.nuevoActor.IMG, this.nuevoActor.obras));
    }

    anadirActorIMG() {
        if (this.file){
            let multipartItem = this.service.upload(this.file);
            multipartItem.callback = (data, status, headers) => {
                if (status == 200){
                    this.nuevoActor.IMG = data;
                    console.debug("File has been uploaded");
                    //this.loadImages();
                    let userCreated=this.service.anadirActor(new Actor(0, this.nuevoActor.nombre, this.nuevoActor.descripcion, this.nuevoActor.IMG, this.nuevoActor.obras));
                } else {
                    console.error("Error uploading file");
                }
            };
            multipartItem.upload();
        }
    }

    eliminarActor(actor:Actor) {
        console.log(actor.id);
        this.service.eliminarActor(actor.id.toString());
    }

    separarStrings(cadena:string) {
        let arrayString = cadena.split(',');
        return arrayString;
    }

    SelectFiles($event) {
        this.file = $event.target.files[0];
    }

    getActorByNombre() {
        this.lista = this.service.filtrarPorNombre(this.busq);
    }
}