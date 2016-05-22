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
import {breadCrumbService} from './components/breadCrumb/breadCrumb.service';
import {ActoresListComponent} from "./components/ActorList/ActoresList.component";
import {SeriesComponent} from "./components/SeriesList/Series.component";
import {ActorDetalleComponent} from "./components/ActorDetalle/ActorDetalle.component";
import {PeliculasListComponent} from "./components/PeliculasList/PeliculasList.component";
import {PeliculasListAccionComponent} from "./components/PeliculasList/PeliculasListAccion.component";
import {PeliculasListAventurasComponent} from "./components/PeliculasList/PeliculasListAventuras.component";
import {PeliculasListComediaComponent} from "./components/PeliculasList/PeliculasListComedia.component";
import {PeliculasListInfantilComponent} from "./components/PeliculasList/PeliculasListInfantil.component";
import {PeliculasListSuspenseComponent} from "./components/PeliculasList/PeliculaListSuspense.component";
import {PeliculasListRomanceComponent} from "./components/PeliculasList/PeliculasListRomance.component";
import {SeriesAccionComponent} from "./components/SeriesList/SeriesAccion.component";
import {SeriesAventurasComponent} from "./components/SeriesList/SeriesAventuras.component";
import {SeriesComediaComponent} from "./components/SeriesList/SeriesComedia.component";
import {SeriesInfantilComponent} from "./components/SeriesList/SeriesInfantil.component";
import {SeriesSuspenseComponent} from "./components/SeriesList/SeriesSuspense.component";
import {SeriesRomanceComponent} from "./components/SeriesList/SeriesRomance.component";



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
  },
    {
        path: '/Actores',
        name: 'Actores',
        component: ActoresListComponent
    },
    {
        path: '/Detalles',
        name: 'Detalles',
        component: ActorDetalleComponent
    },
  {
    path: '/Series',
    name: 'Series',
    component: SeriesComponent
  },
  {
    path: '/Peliculas',
    name: 'Peliculas',
    component: PeliculasListComponent
  },
  {
    path: '/Peliculas/Accion',
    name: 'PeliculasAccion',
    component: PeliculasListAccionComponent
  },
  {
    path: '/Peliculas/Aventuras',
    name: 'PeliculasAventuras',
    component: PeliculasListAventurasComponent
  },
  {
    path: '/Peliculas/Comedia',
    name: 'PeliculasComedia',
    component: PeliculasListComediaComponent
  },
  {
    path: '/Peliculas/Infantil',
    name: 'PeliculasInfantil',
    component: PeliculasListInfantilComponent
  },
  {
    path: '/Peliculas/Suspense',
    name: 'PeliculasSuspense',
    component: PeliculasListSuspenseComponent
  },
  {
    path: '/Peliculas/Romance',
    name: 'PeliculasRomance',
    component: PeliculasListRomanceComponent
  },
  {
    path: '/Series/Accion',
    name: 'SeriesAccion',
    component: SeriesAccionComponent
  },
  {
    path: '/Series/Aventuras',
    name: 'SeriesAventuras',
    component: SeriesAventurasComponent
  },
  {
    path: '/Series/Comedia',
    name: 'SeriesComedia',
    component: SeriesComediaComponent
  },
  {
    path: '/Series/Infantil',
    name: 'SeriesInfantil',
    component: SeriesInfantilComponent
  },
  {
    path: '/Series/Suspense',
    name: 'SeriesSuspense',
    component: SeriesSuspenseComponent
  },
  {
    path: '/Series/Romance',
    name: 'SeriesRomance',
    component: SeriesRomanceComponent
  }
])

export class MainApp implements OnInit{
  ngOnInit():any {
    this._breadCrumbService.host=window.location.origin;
  }

  routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):boolean|Promise<boolean> {
    return false;
  }

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
    this.modal.toggleModal();

  }

  private _desconectarUsuario(){
    this._router.navigate(['/Index']);
    this._servicioUsuarios.userLogged=null;
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
