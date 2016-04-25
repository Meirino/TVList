import {bootstrap} from 'angular2/platform/browser';
import {ComponentRef} from 'angular2/core';
import {MainApp} from './app/main';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {userService} from './app/components/user/user.service';
import {messageService} from './app/components/messages/message.service';

import {Utilities} from './app/utilities';


Utilities.hashOri = window.location.hash;
import {appInjector} from './app/app-injector';
bootstrap(MainApp, [messageService,userService,ROUTER_PROVIDERS])
    .then((appRef: ComponentRef) => {
        // store a reference to the application injector
        appInjector(appRef.injector);
    });
