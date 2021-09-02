import { Course } from "./course";
import { User } from "./user";

export class CourseItems {

    id: number = 0;
    courseName: String = "";
    avatar: String = "";
    courseInstructor: User = new User();
    price: number = 0;
    
    constructor(course: Course) {
        this.id = course.id;
        this.courseName = course.courseName;
        this.avatar = course.avatar;
        this.courseInstructor = course.courseInstructor;
        this.price = course.price;

    }

}
