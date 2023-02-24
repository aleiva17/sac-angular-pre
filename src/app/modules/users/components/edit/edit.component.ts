import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  protected user: User | undefined;
  protected form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {
    this.user = this.userService.getUser(this.activatedRoute.snapshot.params["email"]);
    if (!this.user) this.router.navigate(["/users"]);
    
    const emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    this.form = new FormGroup(
      {
        firstName: new FormControl(this.user!.firstName, [Validators.required]),
        lastName: new FormControl(this.user!.lastName, [Validators.required]),
        email: new FormControl(this.user!.email, [Validators.required, Validators.pattern(emailRegex)]),
        password: new FormControl(this.user!.password, [Validators.required, Validators.minLength(8)]),
        isAdmin: new FormControl(this.user!.isAdmin, [])
      }
    );
  }

  controlHasAnError(controlId: string): boolean {
    return this.form.controls[controlId].invalid && (this.form.controls[controlId].touched || this.form.controls[controlId].dirty);
  }
  
  submitForm() {
    if (this.form.status === "INVALID") return;
    this.userService.update(this.user!.email, {
      firstName: this.form.controls["firstName"].value,
      lastName: this.form.controls["lastName"].value,
      email: this.form.controls["email"].value,
      password: this.form.controls["password"].value,
      isAdmin: this.form.controls["isAdmin"].value
    });
    this.router.navigate(["/users"]);
  }
}
