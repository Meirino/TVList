import {Component,OnInit,ElementRef,ViewChild} from 'angular2/core';
import {proyeccionesItemComponent} from '../proyeccionesItem/proyeccionesItem.Component';
import {proyeccionService} from '../proyeccion.service';
import {RouteParams} from 'angular2/router';

@Component({
  templateUrl: './app/components/proyecciones/proyeccionesList/proyeccionesList.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesList/proyeccionesList.Style.css'],
  directives: [proyeccionesItemComponent]
})

export class proyeccionesListComponent implements OnInit{

  private type:string;
  private title:string;
  
  constructor(private _proServ:proyeccionService, params: RouteParams){
    this.type=params.get("type");
    this.title=params.get("titulo");
  }

  ngOnInit():any {
    let peliculas$=this._proServ.getPeliculasByType(this.type,this.title);
  }
  



}
