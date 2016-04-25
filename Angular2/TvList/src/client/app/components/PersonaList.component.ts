import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Personal, PersonalService}   from './personal.service';

@Component({
    selector: 'personaList',
    template: './PersonaList.component.html'
})

export class PersonaList {
  private persona: Personal;
  private elems: Personal[];
  private service: PersonalService;
  private busq: string;

  constructor(private router: Router, routeParams: RouteParams) {
      this.service.getPersonales().subscribe(
          personal => this.elems = personal,
          error => console.error(error)
      );
  }

  anadirPersona() {
    this.service.savePersona(this.persona);
  }

  listPersonasbyNombre(nom: string) {
    this.elems = this.service.getPersonalbyName(nom);
  }

  listPersonasbyObra(obra: string) {
    this.elems = this.service.getPersonalByObra(obra);
  }
}
