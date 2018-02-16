import { Component, OnInit } from '@angular/core';
import { ProgrammingService } from './programming.service';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {


  title = "Hello Programming world";

  courses;

  constructor(service: ProgrammingService ) {
    this.courses = service.getProgramming();
   }

  ngOnInit() {
  }

  getTitle()
  {
    return this.title;
  }
}
