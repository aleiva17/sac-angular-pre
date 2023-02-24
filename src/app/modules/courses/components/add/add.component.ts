import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/core/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  form: FormGroup;

  constructor(private courseService: CoursesService) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
      openVacancies: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }

  controlHasAnError(controlId: string): boolean {
    return this.form.controls[controlId].invalid && (this.form.controls[controlId].touched || this.form.controls[controlId].dirty);
  }

  submitForm() {
    if (this.form.status === "INVALID") return;
    this.courseService.addCourse(
      { 
        id: 0,
        name: this.form.controls["name"].value,
        startDate: this.form.controls["startDate"].value,
        endDate: this.form.controls["endDate"].value,
        openVacancies: this.form.controls["openVacancies"].value
      }
    );
    this.form.reset();
  }
}
