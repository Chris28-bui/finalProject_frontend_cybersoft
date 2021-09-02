import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-carousel',
  templateUrl: './course-carousel.component.html',
  styleUrls: ['./course-carousel.component.css']
})
export class CourseCarouselComponent implements OnInit {
  courses: Course[] = [];
  coursesArray: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.handleCourseList();
  }

  handleCourseList() {
    this.courseService.getCourseMethod().subscribe(
      this.processResult()
    );
  }

  processResult() {
    return ((data: any) => {
      this.courses = data;
      console.log(this.courses)
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 15,
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    responsive: {
    0: {
      items: 2,
      margin: 10
    },
    600: {
        items: 3,
        margin: 5
    },
    1000: {
        items: 4,
        margin:5
    },
    1450:{
        items: 4,
        margin:15
    }
    },
    nav: true
  }

}
