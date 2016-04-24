/**
 * Created by david on 18/04/2016.
 */
import {Component,ViewChild,ElementRef} from 'angular2/core';
import {userService} from '../../user/user.service';
import {Observable,ConnectableObservable } from 'rxjs/Rx';

@Component({
    selector:"login",
    templateUrl: './app/components/centroUsuario/login/login.template.html'
})

export class loginComponent{
    @ViewChild('loginForm') loginForm;
    private showmessage=false;
    private mens:string;
    constructor(private servicioUsuarios:userService,private ref:ElementRef){}
    
    private login(){
        this.showmessage=false;
        console.log(this.loginForm);
        let userAceptableStream=this.servicioUsuarios.getUserByUser_And_Pass(this.loginForm.value.userName,this.loginForm.value.userPass);
        userAceptableStream.subscribe(
            value => {
                console.log('Soy el login y el valor es: '+value);
            },
            error => {
                console.log("error");
                this.showMessage(error);
            }
        );
    }

    private showMessage(mes:string){
        this.mens=mes;
        setTimeout(() => {
            this.showmessage=true;
        }, 0);
    }
    
}
