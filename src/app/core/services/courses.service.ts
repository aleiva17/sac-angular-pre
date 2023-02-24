import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Course } from 'src/app/models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  protected courses: Course[] = [];
  protected courses$: Subject<Course[]> = new Subject();

  constructor() { }

  addCourse(course: Course): void {
    course.id = this.courses.length ? this.courses.at(-1)!.id + 1 : 1;
    this.courses.push(course);
    this.courses$.next(this.courses);
  }

  update(courseId: number, newCourseInfo: Course): void {
    this.courses = this.courses.map((course: Course) => course.id !== courseId ? course : newCourseInfo);
    this.courses$.next(this.courses);
  }

  remove(courseId: number): void {
    this.courses = this.courses.filter((course: Course) => course.id !== courseId);
    this.courses$.next(this.courses);
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find(course => course.id == id);
  }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getObservable(): Observable<Course[]> {
    return this.courses$.asObservable();
  }
}
