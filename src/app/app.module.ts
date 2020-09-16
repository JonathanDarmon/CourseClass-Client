import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdministrationComponent } from './administration/administration.component';
import { SchoolComponent } from './school/school.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/auth.guard';
import { TokenInterceptorService } from './core/interceptor/token-interceptor.service';
import { ShowStudentComponent } from './school/show-student/show-student.component';
import { ShowCourseComponent } from './school/show-course/show-course.component';
import { EditCourseComponent } from './school/edit-course/edit-course.component';
import { EditStudentComponent } from './school/edit-student/edit-student.component';
import { AddCourseComponent } from './school/add-course/add-course.component';
import { AddStudentComponent } from './school/add-student/add-student.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddAdminComponent } from './administration/add-admin/add-admin.component';
import { EditAdminComponent } from './administration/edit-admin/edit-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SchoolComponent,
    AdministrationComponent,
    ShowStudentComponent,
    ShowCourseComponent,
    EditCourseComponent,
    EditStudentComponent,
    AddCourseComponent,
    AddStudentComponent,
    AddAdminComponent,
    EditAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    NgbModule
  ],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
