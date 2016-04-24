/**
 * Created by david on 19/04/2016.
 */
import {Injectable} from 'angular2/core';
import {user} from './user.data';
import {Observable,ConnectableObservable,Subject } from 'rxjs/Rx';
@Injectable()
export class userService{

    public userLogged=null;

    private listaUsuarios:user[]=[
    new user(0,"admin","pass",true),
    new user(1,"david","pass",false),
    new user(2,"jose","pass",false)
    ];

    private _loginSucces = new Subject<boolean>();

    public loginSucces$ = this._loginSucces.asObservable();


    loginUserInApp(usr:user){
        this.userLogged=usr;
        this._loginSucces.next(true);
    }

    getUserByUser_And_Pass(userName:string, userPassword:string):ConnectableObservable<any> {
        var userStream = Observable.create((observer:any) => {
            let userToReturn=null;
            for (let userOb of this.listaUsuarios){
                if (userOb.user_Name==userName && userOb.user_Password==userPassword){
                    userToReturn=userOb;
                    observer.next(userToReturn);
                    observer.complete();
                }
            }
            observer.error('Usuario o Contraseña incorrecto');
        }).publishReplay(1);;

        var userAcceptedStream = userStream.map(x => {
            if (x==0)
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

    getUserByID(id:number):user {
        return undefined;
    }

    getAllUser():user[] {
        return undefined;
    }

    createUser(userOb:user):user {
        return undefined;
    }

    setUserByID(id:number, userOb:user):user {
        return undefined;
    }

    deleteUserByID(id:number):user {
        return undefined;
    }
    
    

}