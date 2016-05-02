import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Personal, personalService}   from '../personal.service.ts';

@Component({
    selector: 'personaList',
    template: './PersonaList.component.html'
})

export class PersonaListComponent {
  private persona: Personal;
  private elems: Personal[];
  private service: personalService;
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
