import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-course',
  styleUrls: ['./show-course.component.css'],
  template: `<h2>Course</h2>
  <span class="spacer"></span>
  <button mat-raised-button>Edit</button>
  <mat-card class="example-card">
    <mat-card-header>
      <img mat-card-avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu">
      <mat-card-title>Course A, Number of students</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
    </mat-card-content>
  </mat-card>
  `
})
export class ShowCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
