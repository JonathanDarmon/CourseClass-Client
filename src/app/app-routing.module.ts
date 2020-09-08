import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component';
import { SchoolComponent } from './school/school.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard]},
  {path: 'school', component: SchoolComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
