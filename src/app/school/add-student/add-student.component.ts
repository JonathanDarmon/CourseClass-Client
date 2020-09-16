import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  selectedFile: File = null;

  addStudentForm = new FormGroup({
    name: new FormControl(),
  });

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  onStudentCreate(): void {

  }

  ngOnInit(): void {
  }

}
