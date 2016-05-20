/**
 * Created by david on 19/04/2016.
 */
import {Injectable,OnInit} from 'angular2/core';
import {user,userSpring} from './user.data';
import {Observable,ConnectableObservable,Subject } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";

@Injectable()
export class userService{

    public userLogged=null;
    public usuario;


    private listaUsuarios:user[]=[
        new user(0,"admin","pass","admin@tvlist.com",true,"Pepito","Piscinas","avatar1.png"),
        new user(1,"david","pass","david@gmail.com",false,"David","D","avatar2.jpg"),
        new user(2,"jose","pass","jose@gmail.com",false,"Jose","J","avatar3.png")
    ];
    
    private _autoid=3;

    constructor(private http: Http){
        this.reqIsLogged();
    }

    private _ponerUsuario(usr:user){
        usr.isAdmin=false;
        usr.id=this._autoid;
        this.listaUsuarios.push(usr);
        this._autoid++;
    }

    private _loginSucces = new Subject<boolean>();

    public loginSucces$ = this._loginSucces.asObservable();


    private loginUserInApp(usr:user){
        this.userLogged=usr;
        this._loginSucces.next(true);
    }

    public logOut(){
        return this.http.get('logOut').map(
            response => {
                this.userLogged=null;
                return response;
            }
        );
    }

    getUserByUser_And_Pass(userName:string, userPassword:string){


        let userPass = userName + ":" + userPassword;

        let headers = new Headers({
            'Authorization': 'Basic '+utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });

        let options = new RequestOptions({headers});

        var userStream= this.http.get('logIn', options).map(
            response => {
                this.processLogInResponse(response);
                return this.usuario;
            }
        ).publishReplay(1);


        var userAcceptedStream = userStream.map(x => {
            if (x==null)
                return false;
            else
                return true;
        });

        userStream.subscribe(
            usr => {
                this.loginUserInApp(usr);
            },
            error => {
                console.log('BOOM');
            }
        );

        userStream.connect();

        return userAcceptedStream;
    }


    
    checkIf_UserName_AND_Email_Free(userName:string,userMail:string):Observable<boolean>{
        var doesThisUserExist = Observable.create((obs) => {
            let error:string[]=['',''];
            let numfails:number=0;
            for (let userOb  of this.listaUsuarios){
                if (userOb.user_Name==userName){
                    error[0]='Nombre de usuario: '+userName+' ya existe, por favor elija otro';
                    numfails++;
                }
                if (userOb.user_Email==userMail){
                    error[1]='E-Mail: '+userMail+' ya existe, por favor elija otro';
                    numfails++;
                }
                if (numfails==2)
                    break;
            }
            if (numfails == 0)
                obs.next(true);
            else obs.error(error);
                
        });
        return doesThisUserExist;
    }
    
    

    getUserByID(id:number):Observable<user> {
        return Observable.fromArray(this.listaUsuarios).filter(x=>x.id ==id)
    }

    getAllUser():user[] {
        return this.listaUsuarios;
    }

    createUser(userOb:user){
        let userS = new userSpring(userOb);
        let body = JSON.stringify(userS);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers });

        return this.http.post("/registerUser", body, options)
            .map(response => response.json())
            .catch(error => error).subscribe(next=>{
                this.getUserByUser_And_Pass(userOb.user_Name,userOb.user_Password);
            });
    }

    upload(archivo:File) {

        console.debug("Uploading file...");

        if (archivo == null){
            console.error("You have to select a file and set a description.");
            return;
        }

        let formData = new FormData();

        //formData.append("description", this.description);
        formData.append("file",  archivo);

        let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));

        multipartItem.formData = formData;

        return multipartItem;
    }
    

    setUserByID(luserOb:user):Observable<user> {
       let usuarioActualizado=Observable.create(x=>{
           for (let userOb  in this.listaUsuarios){
               if (this.listaUsuarios[userOb].id==luserOb.id){
                   this.listaUsuarios[userOb]=luserOb;
                   x.next(luserOb);
               }
           }
           x.error(false)
       })
        
        return usuarioActualizado;
    }

    deleteUserByID(id:number):user {
        return undefined;
    }

    private processLogInResponse(response){
        this.userLogged = true;
        let userdata = response.json();
        this.usuario = new user(userdata.id,userdata.name,null,userdata.mail,userdata.admin,userdata.rname,userdata.surname,userdata.avatar,userdata.roles);
        this.userLogged=this.usuario;
    }

    reqIsLogged(){

        let headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest'
        });

        let options = new RequestOptions({headers});

        this.http.get('logIn', options).subscribe(
            response => this.processLogInResponse(response),
            error => {
                if(error.status != 401){
                    console.error("Error when asking if logged: "+
                        JSON.stringify(error));
                }
            }
        );
    }

}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}