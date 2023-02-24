import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  protected form: FormGroup;

  constructor(private userService: UsersService) {
    const emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    this.form = new FormGroup(
      {
        firstName: new FormControl("", [Validators.required]),
        lastName: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
        isAdmin: new FormControl(false, [])
      }
    );
  }

  controlHasAnError(controlId: string): boolean {
    return this.form.controls[controlId].invalid && (this.form.controls[controlId].touched || this.form.controls[controlId].dirty);
  }
  
  submitForm() {
    if (this.form.status === "INVALID") return;
    this.userService.add({
      firstName: this.form.controls["firstName"].value,
      lastName: this.form.controls["lastName"].value,
      email: this.form.controls["email"].value,
      password: this.form.controls["password"].value,
      isAdmin: this.form.controls["isAdmin"].value
    });
    this.form.reset();
  }
}
