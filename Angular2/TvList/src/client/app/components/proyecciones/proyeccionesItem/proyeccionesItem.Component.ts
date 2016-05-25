import {Component,Input} from 'angular2/core';
import {  ROUTER_DIRECTIVES } from 'angular2/router';



@Component({
  selector: 's-proyeccionesItem',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/components/proyecciones/proyeccionesItem/proyeccionesItem.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesItem/proyeccionesItem.Style.css']
})

export class proyeccionesItemComponent{
  @Input() peliInfo:any;
  
  constructor(){}

}
