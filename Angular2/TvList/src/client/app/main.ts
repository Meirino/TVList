import {Component,ViewChild,OnInit} from 'angular2/core';
import {Router,RouteConfig,  ROUTER_DIRECTIVES,CanDeactivate ,ComponentInstruction} from 'angular2/router';
import {Utilities} from './utilities';
import {Injector} from 'angular2/core';
import {modalComponent} from "./components/modal/modal.component";
import {indexComponent} from './components/index/index.component';
import {perfilComponent} from './components/perfil/perfil.Component';
import {adminComponent} from './components/admin/admin.Component';
import {centroUsuarioComponent} from './components/centroUsuario/centroUsuario.component';
import {userService} from './components/user/user.service';
import {breadCrumbService} from './components/breadCrumb/breadCrumb.service'


@Component({
  selector: 'main-app',
  templateUrl: 'app/main.html',
  directives: [ROUTER_DIRECTIVES,modalComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Index',
    component: indexComponent,
    useAsDefault: true
  },
  {
    path: '/perfil/...',
    name: 'Perfil',
    component: perfilComponent
  },
  {
    path: '/admin/...',
    name: 'Admin',
    component: adminComponent
  }
])

export class MainApp implements OnInit{
  ngOnInit():any {
    this._breadCrumbService.host=window.location.origin;
  }
  
  private keep:boolean=true;
  private _componenteACargar = centroUsuarioComponent;
  @ViewChild('modal') private modal:modalComponent;

  constructor(private _router: Router,private _servicioUsuarios:userService,private _breadCrumbService:breadCrumbService) {


    _router.subscribe((val) => {
      _router.recognize(val).then(x=>{
        console.log(x)})
      let abrir_modal_login=window.location;
      _breadCrumbService.generateBreadCrumb(val);
    });



/*
    V1
    Actualmente Angular 2 no soporta manipulacion de #
    https://github.com/angular/angular/issues/7215
    window.location.hash=window.location.hash;
    _router.subscribe((val) => {
      let abrir_modal_login=window.location.hash;
      this.abrirModal(abrir_modal_login);
    });
*/

    _servicioUsuarios.loginSucces$.subscribe((suc) =>{
      if (suc){
        this.modal.toggleModal();
        this.cargarUsuario();
        this.keep=false;
      }
    });
  }


  private navigateByUrl(url:string){
    this._router.navigateByUrl(url).then(x=>{return true});
  }

  private cargarUsuario(){

  }

/*
  V1
  private mostrarLogin(){
    window.location.hash="#login";
  }
*/

  private mostrarLogin(){
    this.keep=true;
    setTimeout((a)=>{
      this.modal.toggleModal();

    },0)


  }

  private _desconectarUsuario(){
    this._router.navigate(['/Index']);
    this._servicioUsuarios.logOut().subscribe();
  }


  /*
  V1
  private abrirModal(hash:string){
    switch (hash){
      case "#login":
        this._mostrar=true;
      break;
      case "#register":
      break;
      case "":
        this._mostrar=false;
      break;
    }
  }
*/



}
