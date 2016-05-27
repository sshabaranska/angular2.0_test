import './shim';
import 'rxjs/add/operator/map';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { BootstrapComponent } from './app/common/bootstrap/BootstrapComponent';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { AUTH_PROVIDERS } from './app/account';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(BootstrapComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide('ENVIRONMENT', { useValue: ENVIRONMENT })
]);
