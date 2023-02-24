import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from 'src/app/core/services';
import { Course } from 'src/app/models/courses.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  protected course: Course | undefined;
  protected form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ) {
    this.course = this.courseService.getCourse(this.activatedRoute.snapshot.params["id"]);
    if (!this.course) this.router.navigate(["/courses"]);

    this.form = new FormGroup({
      name: new FormControl(this.course!.name, [Validators.required]),
      startDate: new FormControl(this.course!.startDate, [Validators.required]),
      endDate: new FormControl(this.course!.endDate, [Validators.required]),
      openVacancies: new FormControl(this.course!.openVacancies, [Validators.required, Validators.min(1)]),
    });
  }

  controlHasAnError(controlId: string): boolean {
    return this.form.controls[controlId].invalid && (this.form.controls[controlId].touched || this.form.controls[controlId].dirty);
  }

  submitForm() {
    if (this.form.status === "INVALID") return;
    this.courseService.update(this.course!.id,
      { 
        id: this.course!.id,
        name: this.form.controls["name"].value,
        startDate: this.form.controls["startDate"].value,
        endDate: this.form.controls["endDate"].value,
        openVacancies: this.form.controls["openVacancies"].value
      }
    );
    this.router.navigate(["/courses"]);
  }
}
