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
import {proyeccionesListComponent} from './components/proyecciones/proyeccionesList/proyeccionesList.Component';
import {proyeccionesDetailComponent} from './components/proyecciones/proyeccionesDetail/proyeccionesDetail.Component';
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
import {ActoresService} from "./components/actores.service";



@Component({
  selector: 'main-app',
  templateUrl: 'app/main.html',
  providers:[ActoresService],
  directives: [ROUTER_DIRECTIVES,modalComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Index',
    redirectTo: ["/Peliculas"]
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
    path: '/peliculas',
    name: 'Peliculas',
    component: proyeccionesListComponent,
    useAsDefault: true
  },
  {
    path: '/peliculas/:id',
    name: 'PeliculasDetail',
    component: proyeccionesDetailComponent
  },
    {
        path: '/Actores',
        name: 'Actores',
        component: ActoresListComponent
    },
  {
    path: '/Series',
    name: 'Series',
    component: SeriesComponent
  },
  {
    path: '/Actores/:id/',
    name: 'Actor',
    component: ActorDetalleComponent
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
  
  private keep:boolean=true;
  private _componenteACargar = centroUsuarioComponent;
  @ViewChild('modal') private modal:modalComponent;

  constructor(private _router: Router,private _servicioUsuarios:userService,private _breadCrumbService:breadCrumbService) {


    _router.subscribe((val) => {
      _router.recognize(val).then(x=>{
        })
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
    this._router.navigate(['/Peliculas']);
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
