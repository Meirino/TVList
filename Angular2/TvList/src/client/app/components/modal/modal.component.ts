import {Component,ElementRef,DynamicComponentLoader, Injector,Input} from 'angular2/core';

@Component({
    selector: 'pro-modal',
    templateUrl : './app/components/modal/modal.template.html'
})
export class modalComponent{
    @Input() componenteInterior:any;
    
    constructor(private dcl: DynamicComponentLoader, private injector: Injector, private ref:ElementRef) {}

    ngAfterViewInit() {
        this.dcl.loadIntoLocation(this.componenteInterior, this.ref,'child').then((cmp) => {
            cmp.instance.id = 'xxx';
            // cmp.location.nativeElement.id = 'xxx';
        });
        let a = (<any>$(this.ref.nativeElement.children[0]));
        
/*        
        a.on('hidden.bs.modal', function () {
            window.location.hash="";
        })*/
        
        
    }
    
    public toggleModal(){
        let a = (<any>$(this.ref.nativeElement.children[0]));
        a.modal("toggle");
    }
}

