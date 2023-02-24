import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  protected form: FormGroup;

  constructor() {
    const emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      rememberMe: new FormControl(false)
    });
  }

  controlHasAnError(controlId: string): boolean {
    return this.form.controls[controlId].invalid && (this.form.controls[controlId].touched || this.form.controls[controlId].dirty);
  }

  submitForm() {
    if (this.form.status === "INVALID") return;
    alert("[PLACEHOLDER] YOU HAVE LOGGED IN");
    this.form.reset();
  }
}
