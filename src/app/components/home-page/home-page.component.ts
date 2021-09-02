import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.listCourses();
  }

  // listCourses() {
  //   this.handleListCourses();
  // }

  // handleListCourses() {
  //   this.courseService.getCourseMethod().subscribe((data: Course[])=>{
  //     // this.processResult()
  //     // console.log("asd");
  //     this.courses = data;
  //     console.log(this.courses);
  //   })
  // }
  
  // processResult() {
  //   return (data: {content: { courses: Course[]; }; }) => {
  //     this.courses = data.content.courses;
  //   }
  // }
}

