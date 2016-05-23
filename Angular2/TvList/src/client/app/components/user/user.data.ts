/**
 * Created by david on 19/04/2016.
 */
export class user{
    public constructor(
        public id?:number,
        public user_Name?:string,
        public user_Password?:string,
        public user_Email?:string,
        public isAdmin?:boolean,
        public name?:string,
        public surname?:string,
        public avatar?:string,
        public roles?:string[]
    ){}
}

export class userSpring{
    public id:number;
    public name:string;
    public passwordHash:string;
    public mail:string;
    public isAdmin:boolean;
    public rname:string;
    public surname:string;
    public avatar:string;
    public roles:string[];

    public constructor(usuario:user){
        this.id=usuario.id;
        this.name=usuario.user_Name;
        this.passwordHash=usuario.user_Password;
        this.mail=usuario.user_Email;
        this.isAdmin=usuario.isAdmin;
        this.rname=usuario.name;
        this.surname=usuario.surname;
        this.avatar=usuario.avatar;
        this.roles=usuario.roles;
    }

}