import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component';
import { SchoolComponent } from './school/school.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { ShowStudentComponent } from './school/show-student/show-student.component';
import { ShowCourseComponent } from './school/show-course/show-course.component';
import { EditCourseComponent } from './school/edit-course/edit-course.component';
import { EditStudentComponent } from './school/edit-student/edit-student.component';
import { AddStudentComponent } from './school/add-student/add-student.component';
import { AddCourseComponent } from './school/add-course/add-course.component';
import { AddAdminComponent } from './administration/add-admin/add-admin.component';
import { EditAdminComponent } from './administration/edit-admin/edit-admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard],
    children: [
      { path: 'add-admin', component: AddAdminComponent },
      { path: 'edit-admin', component: EditAdminComponent }
    ]
  },
  {
    path: 'school', component: SchoolComponent, canActivate: [AuthGuard],
    children: [
      { path: 'course', component: ShowCourseComponent },
      { path: 'add-course', component: AddCourseComponent },
      { path: 'edit-course', component: EditCourseComponent },
      { path: 'student', component: ShowStudentComponent },
      { path: 'edit-student', component: EditStudentComponent },
      { path: 'add-student', component: AddStudentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
