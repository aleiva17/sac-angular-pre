import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules').then(m => m.HomeModule) },
  { path: 'courses', loadChildren: () => import('./modules').then(m => m.CoursesModule) },
  { path: 'students', loadChildren: () => import('./modules').then(m => m.StudentsModule) },
  { path: 'inscriptions', loadChildren: () => import('./modules').then(m => m.InscriptionsModule) },
  { path: 'login', loadChildren: () => import('./modules').then(m => m.LoginModule) },
  { path: 'sign-up', loadChildren: () => import('./modules').then(m => m.SignUpModule) },
  { path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
