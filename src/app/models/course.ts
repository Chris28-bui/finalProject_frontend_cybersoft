import { User } from "./user";
export class Course {
    id: number = 0;
    version: number = 0;
    createdBy: String = "";
    updatedBy: String = "";
    createdAt: String = "";
    updatedAt: String = "";
    courseName: String = "";
    courseDescription: String = "";
    duration: number = 0;
    courseInstructor: User = new User();
    rating: number = 0;
    price: number = 0;
    avatar: String = "";
    courseContent: Object[] = [];
    courseCategory: Object[] = [];
    learnerNumber: number = 0;
    registedUser: Object[] = [];
    userWishList: Object[] = [];
        
}
