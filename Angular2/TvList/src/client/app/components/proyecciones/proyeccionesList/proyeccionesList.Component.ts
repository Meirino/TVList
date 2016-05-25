import {Component,OnInit,ElementRef,ViewChild} from 'angular2/core';
import {proyeccionesItemComponent} from '../proyeccionesItem/proyeccionesItem.Component';
import {modalComponent} from '../../modal/modal.component';
import {proyeccionesFormComponent} from '../proyeccionesForm/proyeccionesForm.Component';
import {proyeccionService} from '../proyeccion.service';
import {RouteParams} from 'angular2/router';
import {proyeccion} from '../proyeccion.data';
import {Location} from 'angular2/router';
import {Control} from 'angular2/common';
import {userService} from '../../user/user.service';



@Component({
  templateUrl: './app/components/proyecciones/proyeccionesList/proyeccionesList.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesList/proyeccionesList.Style.css'],
  directives: [proyeccionesItemComponent,modalComponent]
})

export class proyeccionesListComponent implements OnInit{


  private type:string;
  private title:string;
  private page:number;
  private peliculas:proyeccion[];
  private maxPage:number;
  private siguiente:number;
  private anterior:number;

  busqueda = new Control();



  private succesLabel:boolean=false;
  private keep:boolean=true;
  private _componenteACargar = proyeccionesFormComponent;
  @ViewChild('modal') private modal:modalComponent;
  
  
  
  
  
  constructor(private _proServ:proyeccionService, params: RouteParams,private location:Location,private _serUser:userService){
    this.succesLabel=false;
    this.type=params.get("genre");
    this.title=params.get("title");
    this.page=Number.parseInt(params.get("page"));
    if (!this.page)
      this.page=0;
    this.busqueda.valueChanges.debounceTime(400)
        .distinctUntilChanged().switchMap(busqueda=>this._proServ.getPeliculasByTypeAndTitleAndPage(this.type,busqueda,"0")).subscribe(res =>{
              this.title=this.busqueda.value;
              this.page=0;
              this.peliculas=this._proServ.convertirAListaPeliculas((<any>res).contenido);
              this.actualizarPagina((<any>res).paginaActual,(<any>res).paginaTotal);
              console.log(this.peliculas);
            },
            err => {
              console.log(err);
            }
        );
    _proServ.createSucces$.subscribe((suc) =>{
      if (suc){
        this.modal.toggleModal();
        this.succesLabel=false;
        setTimeout((a)=>{
          this.keep=false;
          this.succesLabel=true;
        },500);
      }
    });

  }

  ngOnInit():any {
    this.cargarPeliculas();
  }

  private cargarPeliculas(){

    let peliculas$=this._proServ.getPeliculasByTypeAndTitleAndPage(this.type,this.title,this.page.toString());
    peliculas$.subscribe(res =>{
      this.peliculas=this._proServ.convertirAListaPeliculas((<any>res).contenido);
      this.actualizarPagina((<any>res).paginaActual,(<any>res).paginaTotal);

    },
    err => {
      console.log(err);
    }
    );

  }

  private prev(){
    this.cargar(this.anterior);
  }

  private next(){
    this.cargar(this.siguiente);
  }

  private cargar(pag){
    this.page=pag;
    this.cargarPeliculas();
  }



  private actualizarPagina(paginaActual,paginaTotal){
    var tip="";
    var titulo="";
    if (this.type)
      tip="&genre="+this.type;
    if (this.title)
      titulo="&title="+this.title;
    this.location.go("/peliculas?page="+paginaActual+tip+titulo);
    this.page=Number.parseInt(paginaActual);
    this.maxPage=Number.parseInt(paginaTotal);
    this.siguiente=this.page+1;
    this.anterior=this.page-1;
  }


  private buscarPorTitulo(val){
  var ite=val;

  }

  private mostrarCrearPelicula(){
    this.keep=true;
    setTimeout((a)=>{
      this.modal.toggleModal();
    },0)
  }

  private eliminarPelicula(id){
    var idAeliminar=id;
    console.log(idAeliminar);
    this._proServ.eliminarPeliPorId(id.value).subscribe(g=>{
      console.log(g);
      this.eliminarPeliculadeLista(id.value);
    },
    e=>{
      console.log("Error eliminando");
    });
  }

  private eliminarPeliculadeLista(id){
    var posBorrar;
    for (var cont=0;cont<this.peliculas.length;cont++){

      if (this.peliculas[cont].id==id){
        posBorrar=cont;
        break;
      }

    }
    this.peliculas[posBorrar].id=-1;
    setTimeout(x=>{
      this.peliculas.splice(cont,1);
    },500);
  }

}
