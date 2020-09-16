import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  private _studentUrl = 'https://localhost:44303/api/student';

  getStudents(): any {
    return this.http.get(this._studentUrl);
  }

  getStudentById(id): any {
    return this.http.get(this._studentUrl + 'student' + id);
  }

  createStudent(user): any {
    return this.http.post<any>(this._studentUrl + 'create', user);
  }

  editStudent(user): any {
    return this.http.put<any>(this._studentUrl + 'edit', user);
  }

  deleteStudent(user): any {
    return this.http.delete(this._studentUrl + 'delete', user);
  }
}
