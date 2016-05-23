/**
 * Created by david on 19/04/2016.
 */
export class proyeccion{
    public constructor(
        public id?:number,
        public name?:string,
        public description?:string,
        public imagen?:string
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