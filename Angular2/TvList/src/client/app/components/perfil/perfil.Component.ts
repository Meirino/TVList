import {Component,OnInit,ElementRef,ViewChild} from 'angular2/core';
import {userService} from '../../components/user/user.service';
import {user} from '../../components/user/user.data';
import {Control,Validators,FormBuilder,ControlGroup,FORM_DIRECTIVES} from 'angular2/common';
@Component({
  selector: 's-perfil',
  templateUrl: './app/components/perfil/perfil.Template.html',
  styleUrls: ['./app/components/perfil/perfil.Style.css']
})
export class perfilComponent implements OnInit{


  @ViewChild('regForm_Step1') regForm_Step1;
  @ViewChild('regForm_Step2') regForm_Step2;
  @ViewChild('link_Step1') link_Step1:ElementRef;
  @ViewChild('link_Step2') link_Step2:ElementRef;
  @ViewChild('link_Step3') link_Step3:ElementRef;

  private redVal=0;
  private yellowVal=0;
  private greenVal=0;

  private userToCreate:user=new user();

  form: ControlGroup;

  ngOnInit():any {
    // (<user>this._servicioUsuario.userLogged).name;
    this.form = this.fb.group({
      userMail : ['',Validators.compose([Validators.required,Validators.pattern("([a-z]|[A-Z]|[0-9]|_)+@([a-z]|[A-Z]|[0-9]|_)+\\.([a-z]|[A-Z])+")])],
      passwordsGroup: this.fb.group({
        password: ["", Validators.compose([Validators.required,this.passwordStreValidator])],
        passwordRep: ["", null]
      },{validator: this.passwordRepetValidator})
    });
    this.loadProfileData();
  }

  private loadProfileData(){
    this.userToCreate=this._servicioUsuario.userLogged;
    this.userToCreate.user_Password='';
  }
  constructor(private _servicioUsuario:userService,private ref:ElementRef,private fb: FormBuilder){}

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


  private passwordRepetValidator(control: ControlGroup): { [s: string]: boolean } {
    if (control.controls != undefined && control.controls['password'].value != undefined && control.controls['passwordRep'].value != undefined)
      if (control.controls['password'].value !== control.controls['passwordRep'].value )
        return {passwordNotEqual:true};

  }

}
