import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'https://localhost:44303/api/auth';
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(loginForm): any {
    return this.http.post<any>(this._loginUrl, loginForm);
  }

  loggedIn(): any {
    return !!localStorage.getItem('token');
  }

  logout(): any {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    this.router.navigate(['']);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getRole(): any {
    return localStorage.getItem('role');
  }

  getUsername(): any {
    return localStorage.getItem('name');
  }
}
