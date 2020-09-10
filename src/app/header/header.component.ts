import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  public get role(): string{  return this.authService.getRole(); }

  public get name(): string{ return this.authService.getUsername(); }

  public get isLoggedIn(): boolean{ return this.authService.loggedIn(); }

  loggingOut(): any{
    this.authService.logout();
  }

  ngOnInit(): void {
  }
}
