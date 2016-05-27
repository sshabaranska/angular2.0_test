import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup } from '@angular/common';
import { Router, RouterLink } from '@angular/router-deprecated';

import { UserService } from '../../services/UserService';
import template from './signup.html';

@Component({
  selector: 'signup',
  template: template,
  directives: [FORM_DIRECTIVES]
})

export class SignupComponent {

  signupForm: ControlGroup;

  constructor(userService: UserService, builder: FormBuilder, router: Router) {
    this._userService = userService;
    this._router = router;

    this.signupForm = new ControlGroup({
      name: new Control(""),
      email: new Control(""),
      password: new Control(""),
      cv: new Control("")
    });
  }

  createUser() {
    console.log(this.signupForm.value);
    this._userService.createUser(this.signupForm.value).subscribe((result) => {
      if (result) {
        this._router.navigate(['About']);
      }
    });
  }
}
