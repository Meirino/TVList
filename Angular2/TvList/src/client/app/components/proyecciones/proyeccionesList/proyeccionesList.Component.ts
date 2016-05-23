import {Component,OnInit,ElementRef,ViewChild} from 'angular2/core';
import {proyeccionesItemComponent} from '../proyeccionesItem/proyeccionesItem.Component';
import {proyeccionService} from '../proyeccion.service';

@Component({
  templateUrl: './app/components/proyecciones/proyeccionesList/proyeccionesList.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesList/proyeccionesList.Style.css'],
  directives: [proyeccionesItemComponent]
})

export class proyeccionesListComponent implements OnInit{
  
  ngOnInit():any {

  }
  

  constructor(private _proServ:proyeccionService){}
  
}
