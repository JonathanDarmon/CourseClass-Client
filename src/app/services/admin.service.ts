import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _getAdmin = 'https://localhost:44303/api/admin';
  private _getAdminById = 'https://localhost:44303/api/admin/';
  private _createAdmin = 'https://localhost:44303/api/admin/create';
  private _editAdmin = 'https://localhost:44303/api/admin/edit';
  private _deleteAdmin = 'https://localhost:44303/api/admin/delete/';
  constructor(private http: HttpClient) { }

  getAdmin(): any {
    return this.http.get(this._getAdmin);
  }

  getAdminById(id): any {
    return this.http.get(this._getAdminById + id);
  }

  createAdmin(user): any {
    return this.http.post<any>(this._createAdmin, user);
  }

  editAdmin(user): any {
    return this.http.put<any>(this._editAdmin, user);
  }

  deleteAdmin(user): any {
    return this.http.delete(this._deleteAdmin, user);
  }
}
