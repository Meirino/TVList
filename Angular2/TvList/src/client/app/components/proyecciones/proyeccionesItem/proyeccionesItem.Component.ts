import {Component,Input} from 'angular2/core';


@Component({
  selector: 's-proyeccionesItem',
  templateUrl: './app/components/proyecciones/proyeccionesItem/proyeccionesItem.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesItem/proyeccionesItem.Style.css']
})

export class proyeccionesItemComponent{
  @Input() peliInfo:any;
  
  constructor(){}

}
