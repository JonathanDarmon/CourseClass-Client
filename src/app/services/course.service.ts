import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _getCourses = 'https://localhost:44303/api/course';
  private _getCourseById = 'https://localhost:44303/api/course/';
  private _createCourse = 'https://localhost:44303/api/course/create';
  private _editCourse = 'https://localhost:44303/api/course/edit';
  private _deleteCourse = 'https://localhost:44303/api/course/delete/';
  constructor(private http: HttpClient) { }

  getCourses(): any {
    return this.http.get(this._getCourses);
  }

  getCourseById(id): any {
    return this.http.get(this._getCourseById + id);
  }

  createCourse(user): any {
    return this.http.post<any>(this._createCourse, user);
  }

  editCourse(user): any {
    return this.http.put<any>(this._editCourse, user);
  }

  deleteCourse(user): any {
    return this.http.delete(this._deleteCourse, user);
  }
}
