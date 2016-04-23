import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils'
import {Serie} from './series.service';

export class Personal {

  constructor(public id: number, public nombre: string,
    public descripcion:string,
    public rutaIMG:string, public categorias:String[],
    public obras:string[]) {}
}

@Injectable()
export class PersonalService {
  private Personales = [
    new Personal(1, 'Ryan Gosling','Actor protagonista en Drive','#',[''],['Drive 2011']),
    new Personal(2, 'Bob Odenkirk', 'Actor en Break Bad como Saul Goodman', '#', [''], ['Breaking Bad'])
  ]

  addPersonal(persona:Personal) {
    this.Personales.push(persona)
  }

  getPersonales() {
    return withObserver(this.Personales);
  }

  getPersonalbyID(id:number | string) {
    let elem = this.Personales.filter(h => h.id === +id)[0]
    return withObserver(new Personal(elem.id, elem.nombre, elem.descripcion, elem.rutaIMG, elem.categorias, elem.obras));
  }

  getPersonalbyName(nom:string) {
    let elem = this.Personales.filter(h => h.nombre == nom)
    return elem;
  }

  getPersonalByObra(obra: string) {
    let elem = this.Personales.filter(h => h.obras.indexOf(obra) > -1)[0]
    return elem;
  }

  removePersona(serie: Serie){
    for(let i=0; i<this.Personales.length; i++){
        if(this.Personales[i].id === serie.id){
          this.Personales.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }
}
