import {bootstrap} from 'angular2/platform/browser';
import {ComponentRef,provide} from 'angular2/core';
import {MainApp} from './app/main';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {userService} from './app/components/user/user.service';
import {proyeccionService} from './app/components/proyecciones/proyeccion.service';
import {messageService} from './app/components/messages/message.service';
import {breadCrumbService} from './app/components/breadCrumb/breadCrumb.service';
import {Utilities} from './app/utilities';
import {Http,HTTP_PROVIDERS} from 'angular2/http';


Utilities.hashOri = window.location.hash;
import {appInjector} from './app/app-injector';
bootstrap(MainApp, [breadCrumbService,messageService,userService,proyeccionService,ROUTER_PROVIDERS,HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
])
    .then((appRef: ComponentRef) => {
        // store a reference to the application injector
        appInjector(appRef.injector);
    });