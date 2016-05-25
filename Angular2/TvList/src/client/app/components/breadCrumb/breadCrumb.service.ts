import {Injectable} from 'angular2/core';
@Injectable()
export class breadCrumbService{
    public pageBreadCrumb:{path:string,acumulativePath:string}[]=[];
    public host:string;
    public generateBreadCrumb(location:string){
        var posPathOpcional=location.lastIndexOf("?");
        if (posPathOpcional>=0)
            location=location.substr(0,posPathOpcional);
        let paths=location.split('/');
        this.pageBreadCrumb=[];
        for (let c=0;c<paths.length;c++){
            this.pageBreadCrumb.push({'path':paths[c],'acumulativePath':this.host+"/#/"});
            for (let ca=0;ca<=(+c);ca++)
                this.pageBreadCrumb[c].acumulativePath+=paths[ca]+(ca<c?'/':'');
           
        }

    }
    
}
