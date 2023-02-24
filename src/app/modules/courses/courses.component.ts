import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services';
import { Course } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  protected courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getObservable().subscribe((courses: Course[]) => { this.courses = courses; });
    this.coursesService.getCourses().subscribe((courses: Course[]) => { this.courses = courses; });
  }
}
