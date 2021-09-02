import { Component, OnInit } from '@angular/core';
import { CourseItems } from 'src/app/models/course-items';
import { CourseCartService } from 'src/app/services/course-cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItem: CourseItems[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private courseCartService: CourseCartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    
    this.cartItem = this.courseCartService.courseCart;

    this.courseCartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.courseCartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.courseCartService.computeCartTotal();

  }

  remove(theCartItem: CourseItems) {
    this.courseCartService.remove(theCartItem);
  }

}
