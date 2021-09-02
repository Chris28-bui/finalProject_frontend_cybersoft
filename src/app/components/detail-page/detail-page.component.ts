import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/models/course';
import { CourseItems } from 'src/app/models/course-items';
import { CourseCartService } from 'src/app/services/course-cart.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  isReadMore: boolean = true;

  courseDetail: Course = new Course();
  tax: number = 0;
  priceTotal: number = 0;

  constructor(private courseServive: CourseService, private route: ActivatedRoute, private courseCartService: CourseCartService) { }

  ngOnInit(): void {
    this.getCourseDetail();
  }

  getCourseDetail() {

    const courseId: number = +this.route.snapshot.paramMap.get('id')!;
    console.log(courseId);
    this.courseServive.getCourseByCourseId(courseId).subscribe(
      data => {
        this.courseDetail = data,
        this.tax = this.courseDetail.price * 13 / 100;
        this.priceTotal = this.courseDetail.price + this.tax;
      }
    )
  }

  addToCart() {
    const theCourseItem = new CourseItems(this.courseDetail);
    this.courseCartService.addToCart(theCourseItem);
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

}