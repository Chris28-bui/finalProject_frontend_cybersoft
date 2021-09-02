import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  private baseUrl = 'https://elearning-cybersoft.herokuapp.com/api/course/search-course-category';
  private searchCourseUrl = "https://elearning-cybersoft.herokuapp.com/api/course/search";

  constructor(private httpClient: HttpClient) { }

  getCourseByCourseCategory(courseCategory: String): Observable<Course[]> {

    const searchUrl = `${this.baseUrl}/${courseCategory}`;

    return this.httpClient.get<getCourse>(searchUrl).pipe(
      map (
        data => data.content
      )
    );

  }

  getCourseByCourseName(courseName: String): Observable<Course> {

    const searchUrl = `${this.searchCourseUrl}/${courseName}`;

    return this.httpClient.get<Course>(searchUrl);

  }

}

interface getCourse {
  content: Course[];
}
