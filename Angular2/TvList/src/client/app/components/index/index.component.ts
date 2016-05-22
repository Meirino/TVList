import {Component} from 'angular2/core';
import {Serie} from "../series.service";
@Component({
  templateUrl: './app/components/index/index.template.html',
  styleUrls: ['./app/components/index/topCarrouselComponent.Style.css']
})
export class indexComponent {
  public lista:Serie[] = [
    new Serie(0, 'Drive', 'Película protagonizada por Ryan Gosling', false, 0, 1, '#', ['Conducción'], ['Ryan Gosling']),
    new Serie(1, 'Sherlock', 'Serie protagonizada por Sherlock Holmes', true, 4, 20, '#', ['Misterio'], ['Benedict Cumcumberbatch'])
  ];
}
