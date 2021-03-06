import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Personal, PersonalService}   from './personal.service';

@Component({
    selector: 'personaList',
    templateUrl: './app/component/PersonaDetails.template.html'
})

export class PersonaDetailsComponent {
  private persona: Personal;
  private service: PersonalService;

  constructor(private router: Router, routeParams: RouteParams) {
    let id = routeParams.get('id');
    this.service.getPersonalbyID(id).subscribe(
        personal => this.persona = personal,
        error => console.error(error)
    );
  }
}
