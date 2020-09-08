import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'https://localhost:44303/api/auth';
  constructor(private http: HttpClient) { }

  authenticate(loginForm): any {
    return this.http.post<any>(this._loginUrl, loginForm);
  }

  loggedIn(): any {
    return !!localStorage.getItem('token');
  }
}
