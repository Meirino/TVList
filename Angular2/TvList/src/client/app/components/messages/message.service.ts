import {Injectable} from 'angular2/core';
import {Message} from './message.data';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class messageService{


    private _listaComentarios:Message[]=[
        new Message(0,4,'Muy Buena, divertida fascinante'),
        new Message(1,2,'Un poco aburrida'),
        new Message(2,5,'Lo mejor que se ha hecho nunca'),
        new Message(3,3,'Entretiene'),
        new Message(4,0,'Ni de gratis'),
        new Message(5,1,'Me dormi')
    ];

    private _listaComentarios_Usuarios:number[][]=[
        [0,0],
        [1,2],
        [2,1],
        [3,1],
        [4,2],
        [5,1]
    ];


    constructor(){}

    public getMesFromUserID(userID:number){
        let listadoValoracionesYUsuarios=Observable. fromArray(this._listaComentarios_Usuarios);
        let listadoFiltradoConValoracionDelUsuario= listadoValoracionesYUsuarios.filter((x)=>{
            return x[1]==userID
        }).map((x)=>{
            return x[0]
        });
        let listadoComentariosDelUsuario = Observable.fromArray(this._listaComentarios);
        let comentarios= listadoFiltradoConValoracionDelUsuario.flatMap((idcomentario)=>{
            return listadoComentariosDelUsuario.filter((comentario)=>{
                return idcomentario==comentario.id;
            })
        })

        return comentarios;

    }
    
}
