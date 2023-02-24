import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';


import { CoursesService } from 'src/app/core/services';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    AddComponent,
    EditComponent,
    ActionBarComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
