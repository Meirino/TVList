/**
 * Created by david on 18/04/2016.
 */
import {Component,ViewChild,ElementRef} from 'angular2/core';
import {userService} from '../../user/user.service';
import {Observable,ConnectableObservable } from 'rxjs/Rx';

@Component({
    selector:"register",
    templateUrl: './app/components/centroUsuario/register/register.template.html',
    styleUrls : ['./assets/css/a_propios/StepWizardComponent.css']
})

export class registerComponent{
    @ViewChild('regForm_Step1') regForm_Step1;
    @ViewChild('link_Step2') link_Step2:ElementRef;
    private showmessage=false;
    private mens:string;
    constructor(private servicioUsuarios:userService,private ref:ElementRef){}
    
    private reg_step1(){
        this.showmessage=false;
        let a = (<any>$(this.link_Step2.nativeElement));
        console.log(a);
        a.tab('show');
        let userAceptableStream=this.servicioUsuarios.getUserByUser_And_Pass(this.regForm_Step1.value.userName,this.regForm_Step1.value.userPass);
        userAceptableStream.subscribe(
            value => {
                a.tab('show');
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
