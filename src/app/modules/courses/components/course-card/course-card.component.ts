import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/courses.model';

import { CoursesService } from 'src/app/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html'
})
export class CourseCardComponent {
  @Input() course!: Course;

  constructor(private courseService: CoursesService, private router: Router) { }

  goToEdit(): void {
    this.router.navigate(['/courses/edit', this.course.id]);
  }

  remove(): void {
    this.courseService.remove(this.course.id);
  }
}
