/**
 * Created by david on 18/04/2016.
 */
import {Component,ViewChild,ElementRef, OnInit} from 'angular2/core';
import {userService} from '../../user/user.service';
import {Observable,ConnectableObservable } from 'rxjs/Rx';
import {user} from '../../user/user.data'

import {Control,Validators,FormBuilder,ControlGroup,FORM_DIRECTIVES} from 'angular2/common';

@Component({
    directives: [FORM_DIRECTIVES],
    selector:"register",
    templateUrl: './app/components/centroUsuario/register/register.template.html',
    styleUrls : ['./app/components/centroUsuario/register/register.style.css']
})

export class registerComponent{

    @ViewChild('regForm_Step1') regForm_Step1;
    @ViewChild('regForm_Step2') regForm_Step2;
    @ViewChild('link_Step1') link_Step1:ElementRef;
    @ViewChild('link_Step2') link_Step2:ElementRef;
    @ViewChild('link_Step3') link_Step3:ElementRef;

    private userToCreate:user=new user();

    form: ControlGroup;

    private currentStep = 1;
    private showmessage=false;
    private errors:string[]=[];

    private redVal=0;
    private yellowVal=0;
    private greenVal=0;

    constructor(private servicioUsuarios:userService,private ref:ElementRef,private fb: FormBuilder){
    }
    
    
    


    ngOnInit() {
/*       this.form = this.fb.group({
           // password: ['', Validators.pattern('[0-9]{5}')],
            'passwordsGroup': new ControlGroup({
                'password': new Control(''),
                'passwordRep': new Control('')
            }, {}, this.passwordRepetValidator),
            password: ['', this.passwordStreValidator]
        });*/

        this.form = this.fb.group({
            passwordsGroup: this.fb.group({
                password: ["", Validators.compose([Validators.required,this.passwordStreValidator])],
                passwordRep: ["", null]
            },{validator: this.passwordRepetValidator})
        });

    }

    private reg_step1(){
        this.userToCreate.surname
        this.showmessage=false;
        let userAceptableStream=this.servicioUsuarios.checkIf_UserName_AND_Email_Free(this.userToCreate.user_Name,this.userToCreate.user_Email);
        userAceptableStream.subscribe(
            value => {
                (<any>$(this.link_Step2.nativeElement)).tab('show');
                this.currentStep=2;
            },
            error => {
                this.showMessage(error);
            }
        );
    }

    private reg_step2(){
        (<any>$(this.link_Step3.nativeElement)).tab('show');
        this.currentStep=3;
    }

    private reg_step3(){
        console.log('aaaaaaaaaa');
    }


    private back(num:number){
        switch(num){
            case 1:
                (<any>$(this.link_Step1.nativeElement)).tab('show');
                break;
            case 2:
                (<any>$(this.link_Step2.nativeElement)).tab('show');
        }
        this.currentStep--;
    }


    
    

    private showMessage(mes:string[]){
        this.errors=[];
        if (mes[0].length!=0)
            this.errors.push(mes[0]);
        if (mes[1].length!=0)
            this.errors.push(mes[1]);
        setTimeout(() => {
            this.showmessage=true;
        }, 0);
    }

    private changePasswordBar(perc:number){
        let redVa=0;
        if (perc>49)
            redVa=50;
        else
            redVa = perc%50;
        this.redVal=redVa;
        let yelVa=0;
        if (perc>74)
            yelVa=25
        else
            yelVa = (perc-50)%25;
        yelVa =yelVa<0?0:yelVa;
        this.yellowVal=yelVa;
        let greenVa=0;
        greenVa = perc-75;
        greenVa =greenVa<0?0:greenVa;
        this.greenVal=greenVa;
    }

    private UpdateBar(passw){
        let passStre=0;
        passStre+=(passw.length-6)*6;
        passStre=passStre<0?0:passStre;
        passStre+=(passw.length)*4;
        if (passw.match(/[0-9]+/)) {
            passStre*=1.25;
        }
        if (passw.match(/[a-z]+/)) {
            passStre*=1.5;
        }
        if (passw.match(/[A-Z]+/)) {
            passStre*=1.5;
        }
        passStre=passStre>100?100:passStre;
        this.changePasswordBar(passStre);

    }

    private passwordStreValidator(control: Control): { [s: string]: boolean } {
        if (control.value != undefined) {
            let passStre=0;
            passStre+=(control.value.length-6)*6;
            passStre=passStre<0?0:passStre;
            passStre+=(control.value.length)*4;
            if (control.value.match(/[0-9]+/)) {
                passStre*=1.25;
            }
            if (control.value.match(/[a-z]+/)) {
                passStre*=1.5;
            }
            if (control.value.match(/[A-Z]+/)) {
                passStre*=1.5;
            }

            if (passStre<50){
                return {passwordStrenError: true};
            }
        }
    }

    private passwordRepetValidator(control: ControlGroup): { [s: string]: boolean } {
    if (control.controls != undefined && control.controls['password'].value != undefined && control.controls['passwordRep'].value != undefined)
        if (control.controls['password'].value !== control.controls['passwordRep'].value )
            return {passwordNotEqual:true};

    }
}
