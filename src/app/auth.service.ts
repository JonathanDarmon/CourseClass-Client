import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(loginForm: object): Observable<object>{
    console.log('Arrived');
    return this.http.post<object>('https://localhost:44303/api/auth', loginForm);
  }
}
