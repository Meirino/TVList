/**
 * Created by Javi on 20/05/2016.
 */
import {Component}  from 'angular2/core';
import {RouteParams, OnActivate, Router} from 'angular2/router';
import {Serie, seriesService} from "../series.service";

@Component({
    selector: 'SeriesList',
    templateUrl: './app/components/SeriesList/SerieDetalle.template.html'
})
export class SerieDetalleComponent {

    public serie:Serie;
    public router:Router;
    public routerParams:RouteParams;

}