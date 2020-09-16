import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-student',
  styleUrls: ['./show-student.component.css'],

  template: `<h2>Student</h2>
  <span class="spacer"></span>
  <button mat-raised-button (click)="editStudent()">Edit</button>
  <mat-divider></mat-divider>
  <mat-card class="example-card">
    <mat-card-header>
      <img mat-card-avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu">
      <mat-card-title>Yonatan Darmon</mat-card-title>
      <mat-card-subtitle>052-8382597</mat-card-subtitle>
      <mat-card-subtitle>darmon101@gmail.com</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <mat-list role="list">
        <mat-list-item role="listitem">course 1</mat-list-item>
        <mat-list-item role="listitem">course 2</mat-list-item>
        <mat-list-item role="listitem">course 3</mat-list-item>
      </mat-list>
    </mat-card-content>
  </mat-card>`
})

export class ShowStudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editStudent(): void {
    this.router.navigate(['/school/edit-student']);
  }

}
