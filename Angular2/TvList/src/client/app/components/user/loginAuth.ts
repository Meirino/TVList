import {Injector} from 'angular2/core';
import {appInjector} from '../../app-injector';
import {Router, ComponentInstruction} from 'angular2/router';
import {userService} from './user.service';
import {user} from './user.data';

export const isLoggedIn = (next: ComponentInstruction, previous: ComponentInstruction) => {
    let injector: Injector = appInjector(); // get the stored reference to the injector
    let userServ: userService = injector.get(userService);
    let router:Router = injector.get(Router);
    let userLogged:user=userServ.userLogged;

    if (userLogged)
        return true;
    else
    {
        router.navigate(['/Peliculas']);
        return false;
    }

};

export const isAdmin = (next: ComponentInstruction, previous: ComponentInstruction) => {
    let injector: Injector = appInjector(); // get the stored reference to the injector
    let userServ: userService = injector.get(userService);
    let router:Router = injector.get(Router);
    let userLogged:user=userServ.userLogged;

    if (userLogged && userLogged.isAdmin)
        return true;
    else
    {
        router.navigate(['/Peliculas']);

    }

};