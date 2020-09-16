import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _courseUrl = 'https://localhost:44303/api/course';
  constructor(private http: HttpClient) { }

  getCourses(): any {
    return this.http.get(this._courseUrl);
  }

  getCourseById(id): any {
    return this.http.get(this._courseUrl + id);
  }

  createCourse(user): any {
    return this.http.post<any>(this._courseUrl + 'create', user);
  }

  editCourse(user): any {
    return this.http.put<any>(this._courseUrl + 'edit', user);
  }

  deleteCourse(user): any {
    return this.http.delete(this._courseUrl + 'delete', user);
  }
}
