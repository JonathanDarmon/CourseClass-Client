import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(res => console.log(res));
  }

}
