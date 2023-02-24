import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { matchPassword } from '../../validators/match-password.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  protected form: FormGroup;

  constructor() {
    const emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    this.form = new FormGroup(
      {
        firstName: new FormControl("", [Validators.required]),
        lastName: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl("", [Validators.required]),
        isAdmin: new FormControl(false, [])
      },
      {
        validators: matchPassword
      }
    );
  }

  controlHasAnError(controlId: string): boolean {
    return this.form.controls[controlId].invalid && (this.form.controls[controlId].touched || this.form.controls[controlId].dirty);
  }

  submitForm() {
    if (this.form.status === "INVALID") return;
    alert("[PLACEHOLDER] YOU HAVE BEEN REGISTERED");
    this.form.reset();
  }
}
