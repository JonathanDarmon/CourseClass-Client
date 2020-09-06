import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  token: string;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  onSubmit(): void{
    this.authService.authenticate(this.loginForm.value);
  }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
