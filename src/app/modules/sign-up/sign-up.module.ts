import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    SignUpComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
