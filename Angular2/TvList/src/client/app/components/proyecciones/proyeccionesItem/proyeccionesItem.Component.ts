import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {  ROUTER_DIRECTIVES } from 'angular2/router';
import {userService} from '../../user/user.service';



@Component({
  selector: 's-proyeccionesItem',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/components/proyecciones/proyeccionesItem/proyeccionesItem.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesItem/proyeccionesItem.Style.css']
})

export class proyeccionesItemComponent{
  @Input() peliInfo:any;
  @Output() eliminar = new EventEmitter();

  constructor(private _serUser:userService){}

  public eliminarPelicula(){
    this.eliminar.emit(
    {
      value: this.peliInfo.id
    });
  }

}
