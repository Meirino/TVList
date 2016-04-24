import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Personal, PersonalService}   from './personal.service';

@Component({
    selector: 'personaList',
    template: './PersonaList.component.html'
})

export class itemList {
  private elem: Personal[];
  private service: PersonalService;

  constructor(private router: Router, routeParams: RouteParams) {
      this.service.getPersonales().subscribe(
          personal => this.elem = personal,
          error => console.error(error)
      );
  }

  listPersonasbyNombre(nom: string) {
    this.elem = this.service.getPersonalbyName(nom);
  }

  listPersonasbyObra(obra: string) {
    this.elem = this.service.getPersonalByObra(obra);
  }
}
