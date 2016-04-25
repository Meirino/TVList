import {Injectable} from 'angular2/core';
import {Message} from './message.data';
import {Observable} from 'rxjs/Rx';
import {userService} from '../user/user.service'

@Injectable()
export class messageService{


    private _listaComentarios:Message[]=[
        new Message(0,4,'Muy Buena, divertida fascinante','Muy buena'),
        new Message(1,2,'Un poco aburrida','Del monton'),
        new Message(2,5,'Lo mejor que se ha hecho nunca','WOWOWW'),
        new Message(3,3,'Entretiene','No esta mal'),
        new Message(4,0,'Ni de gratis','AARGh'),
        new Message(5,1,'Me dormi','Zzzz')
    ];

    private _listaComentarios_Usuarios:number[][]=[
        [0,0],
        [1,2],
        [2,1],
        [3,1],
        [4,2],
        [5,1]
    ];


    constructor(private _userService:userService){}

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

        let userinfo=this._userService.getUserByID(userID);
        let comentarioConUserInfo=comentarios.flatMap(x=>{
        return userinfo.map(y=>{return({comentario:x,usuario:y})});
    });
        return comentarioConUserInfo;

    }
    
}
