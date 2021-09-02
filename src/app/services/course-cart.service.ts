import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CourseItems } from '../models/course-items';

@Injectable({
  providedIn: 'root'
})
export class CourseCartService {

  courseCart: CourseItems[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = localStorage; 

  constructor() {
    let data = JSON.parse(this.storage.getItem('cart item(s): ')!);

    if (data != null)
      this.courseCart = data;
    
      this.computeCartTotal;
  }

  addToCart(course: CourseItems) {
    this.courseCart.push(course);

    this.computeCartTotal();
  };

  computeCartTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCourseItem of this.courseCart) {
      totalPriceValue += currentCourseItem.price;
      totalQuantityValue++;
    }

    // publish the new values -> all subcribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.persistCourseItem();

  }

  persistCourseItem() {
    this.storage.setItem('cart item(s): ', JSON.stringify(this.courseCart));
  }

  remove(courseCartItem: CourseItems) {

    const itemIndex = this.courseCart.findIndex(courseItem => courseItem.id === courseCartItem.id);

    if (itemIndex > -1) {
      this.courseCart.splice(itemIndex, 1);

      this.computeCartTotal();
    }

  };

  

}