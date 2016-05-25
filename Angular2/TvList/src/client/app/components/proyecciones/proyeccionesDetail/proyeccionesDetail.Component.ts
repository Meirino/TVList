import {Component,OnInit} from 'angular2/core';
import {proyeccionService} from '../proyeccion.service';
import {proyeccion} from '../proyeccion.data';
import {RouteParams} from 'angular2/router';

@Component({
  templateUrl: './app/components/proyecciones/proyeccionesDetail/proyeccionesDetail.Template.html'
})
export class proyeccionesDetailComponent implements OnInit{

  private pelicula:proyeccion;
  private idPelicula;
  private errorCarga:boolean=false;
  
  constructor(private _servPel:proyeccionService,params: RouteParams){
    this.idPelicula = params.get('id');
  }
  
  ngOnInit():any {
    this.errorCarga=false;
    this._servPel.getPeliculaById(this.idPelicula).subscribe(msg=>{
      this.pelicula=this._servPel.convertirAPelicula(msg);
      
    },
    error=>{
      console.log("ID no existe?"); 
      this.errorCarga=true;
    });
  }
  
}
