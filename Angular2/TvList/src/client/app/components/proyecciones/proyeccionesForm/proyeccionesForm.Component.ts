import {Component,ViewChild,ElementRef, OnInit} from 'angular2/core';
import {proyeccion,tipo} from '../proyeccion.data';
import {proyeccionService} from '../proyeccion.service';

@Component({
  selector: 's-proyeccionesItem',
  templateUrl: './app/components/proyecciones/proyeccionesForm/proyeccionesForm.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesForm/proyeccionesForm.Style.css']
})

export class proyeccionesFormComponent implements OnInit{
  ngOnInit():any {
    this.tipos=this._serPel.getTiposPelicula();
    this.movieToCreate.tipo=this.tipos[0].id.toString();
  }

  @ViewChild('movieForm') movieForm;

  private movieToCreate:proyeccion=new proyeccion();
  private tipos:tipo[];

  constructor(private _serPel:proyeccionService){
  }

}
