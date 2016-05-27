import { Component,  Input } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router-deprecated';

import template from './nav.html';

@Component({
  selector: 'nav-menu',
  template: template,
  directives: [RouterOutlet, RouterLink]
})
export class NavComponent {
  constructor(router: Router) {
    this._router = router;
  }
}