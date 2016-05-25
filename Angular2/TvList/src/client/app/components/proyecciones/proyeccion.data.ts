/**
 * Created by david on 19/04/2016.
 */
export class proyeccion{
    public constructor(
        public id?:number,
        public title?:string,
        public description?:string,
        public image?:string,
        public tipo?:string
    ){}
}

export class proyeccionSpring{
    public id:number;
    public name:string;
    public passwordHash:string;
    public mail:string;
    public isAdmin:boolean;
    public rname:string;
    public surname:string;
    public avatar:string;
    public roles:string[];

    public constructor(proy:proyeccion){

    }
    

}

export class tipo{
    public constructor(
        public id?:number,
        public tema?:string
    ){
        
    }
}