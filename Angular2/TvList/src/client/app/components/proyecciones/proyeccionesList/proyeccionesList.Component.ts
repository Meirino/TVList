import {Component,OnInit,ElementRef,ViewChild} from 'angular2/core';
import {proyeccionesItemComponent} from '../proyeccionesItem/proyeccionesItem.Component';
import {proyeccionService} from '../proyeccion.service';
import {RouteParams} from 'angular2/router';
import {proyeccion} from '../proyeccion.data';
import {Location} from 'angular2/router';


@Component({
  templateUrl: './app/components/proyecciones/proyeccionesList/proyeccionesList.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesList/proyeccionesList.Style.css'],
  directives: [proyeccionesItemComponent]
})

export class proyeccionesListComponent implements OnInit{


  private type:string;
  private title:string;
  private page:number;
  private peliculas:proyeccion[];
  private maxPage:number;
  private siguiente:number;
  private anterior:number;
  private keepPage:boolean=false;

  constructor(private _proServ:proyeccionService, params: RouteParams,private location:Location){
    this.type=params.get("genre");
    this.title=params.get("title");
    this.page=Number.parseInt(params.get("page"));
    if (!this.page)
      this.page=0;
  }

  ngOnInit():any {
    this.cargarPeliculas();
  }

  private cargarPeliculas(){

    let peliculas$=this._proServ.getPeliculasByTypeAndTitleAndPage(this.type,this.title,this.page.toString());
    peliculas$.subscribe(res =>{
      this.peliculas=this._proServ.convertirAListaPeliculas((<any>res).contenido);
      this.actualizarPagina((<any>res).paginaActual,(<any>res).paginaTotal);
      console.log(this.peliculas);
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


}
