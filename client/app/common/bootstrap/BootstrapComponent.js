import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars
import { RouteConfig, RouterOutlet} from '@angular/router-deprecated';

import { NavComponent } from '../nav/NavComponent';
import { routes } from './BootstrapRouter';
import template from './bootstrap.html';

@Component({
  selector: 'szkotska-app',
  directives: [NavComponent, RouterOutlet],
  template: template
})
@RouteConfig(routes)
export class BootstrapComponent {

  constructor(@Inject('ENVIRONMENT') environment) {
    this.environment = environment;
  }
}