import {Component,ViewChild,ElementRef, OnInit} from 'angular2/core';
import {proyeccion,tipo} from '../proyeccion.data';
import {proyeccionService} from '../proyeccion.service';

@Component({
  selector: 's-proyeccionesItem',
  templateUrl: './app/components/proyecciones/proyeccionesForm/proyeccionesForm.Template.html',
  styleUrls: ['./app/components/proyecciones/proyeccionesForm/proyeccionesForm.Style.css']
})

export class proyeccionesFormComponent implements OnInit{

  private file: File;

  private imagenPrev:boolean=false;
  

  @ViewChild('movieForm') movieForm;

  private movieToCreate:proyeccion=new proyeccion();
  private tipos:tipo[];

  constructor(private _serPel:proyeccionService){
  }


  ngOnInit():any {
    this.tipos=this._serPel.getTiposPelicula();
    this.movieToCreate.tipo=this.tipos[0].id.toString();
  }

  private agregarPelicula(){
    if (this.file){
      let multipartItem=this._serPel.upload(this.file);
      multipartItem.callback = (data, status, headers) => {
        if (status == 200){
          this.movieToCreate.image=data;
          console.debug("File has been uploaded");
          this._serPel.createProy(this.movieToCreate).subscribe(res=>{
                this._serPel.peliculaCreada();
          },
              error=>{
                console.log(error);
              });
        } else {
          console.error("Error uploading file");
        }
      };
      multipartItem.upload();
    }
    else
      this._serPel.createProy(this.movieToCreate).subscribe(res=>{
            this._serPel.peliculaCreada();
      },
      error=>{
        console.log(error);
      });
  }
  
  

  private selectFile($event) {
    this.file = $event.target.files[0];
    if (this.file)
    {
      this.imagenPrev=true;
      var ctx=(<any>document.getElementById('canvas')).getContext('2d');
      var reader  = new FileReader();
      var img = new Image();
      img.onload = function() {
        ctx.canvas.width = img.width;
        ctx.canvas.height = img.height;
        ctx.drawImage(img, 0, 0
            , ctx.canvas.width, ctx.canvas.height
        );
      }
      reader.onloadend = function () {
        img.src = reader.result;
      }
      reader.readAsDataURL(this.file);
    }
    else{
      this.imagenPrev=false;
    }
  }

}
