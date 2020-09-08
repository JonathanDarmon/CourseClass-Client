import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _getStudents = 'https://localhost:44303/api/student';
  private _getStudentById = 'https://localhost:44303/api/student/';
  private _createStudent = 'https://localhost:44303/api/student/create';
  private _editStudent = 'https://localhost:44303/api/student/edit';
  private _deleteStudent = 'https://localhost:44303/api/student/delete/';
  constructor(private http: HttpClient) { }

  getStudents(): any {
    return this.http.get(this._getStudents);
  }

  getStudentById(id): any {
    return this.http.get(this._getStudentById + id);
  }

  createStudent(user): any {
    return this.http.post<any>(this._createStudent, user);
  }

  editStudent(user): any {
    return this.http.put<any>(this._editStudent, user);
  }

  deleteStudent(user): any {
    return this.http.delete(this._deleteStudent, user);
  }

}
