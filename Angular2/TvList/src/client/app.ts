import {bootstrap} from 'angular2/platform/browser';
import {MainApp} from './app/main';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Utilities} from './app/utilities';
Utilities.hashOri = window.location.hash;
bootstrap(MainApp, [ROUTER_PROVIDERS]);
