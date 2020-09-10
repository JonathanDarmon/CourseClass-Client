import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router){}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  token: string;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  onSubmit(): any{
    this.authService.authenticate(this.loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('name', res.name);
        this.router.navigate(['school']);
      },
      err => console.log(err)
      );
  }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
