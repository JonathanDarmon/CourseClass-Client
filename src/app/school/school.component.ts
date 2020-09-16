import { Component, OnInit } from '@angular/core';
import { StudentService } from '../core/services/student.service';
import { CourseService } from '../core/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private studentService: StudentService,
              private courseService: CourseService,
              private router: Router) { }

  students: Array<any>;
  courses: Array<any>;
  container: string;
    studentClick(student): any {
      console.log(student);
      this.router.navigate(['/school/student']);
    }

    courseClick(course): any {
      console.log(course);
      this.router.navigate(['/school/course']);
    }

    addCourse(): any {
      this.router.navigate(['/school/add-course']);
    }

    addStudent(): any {
      this.router.navigate(['/school/add-student']);
    }

    routerStatus(): boolean {
      return this.router.url === '/school';
    }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(res => {
      this.students = res;
    });

    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

}
