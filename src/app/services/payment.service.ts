import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl  = 'https://elearning-cybersoft.herokuapp.com/api/payment';
  // private paymentUrl = 'http://localhost:8089/api/payment';

  constructor(private httpClient: HttpClient) { }

  savePaymentMethod(payment: Payment): Observable<any> {

    return this.httpClient.post<Payment>(this.paymentUrl, payment);

  }

  findPaymentCardNumberMethod(username: String): Observable<Payment[]> {

    const findPaymentByUsernameUrl = `${this.paymentUrl}/${username}`;

    return this.httpClient.get<GetPayments>(findPaymentByUsernameUrl).pipe(
      map (
        data => data.content,
      )
    )

  }

  findPaymentInfoUsingCardNumberMethod(cardNumber: String): Observable<Payment> {

    const findPaymentInfoUrl = `${this.paymentUrl}/search-payment/${cardNumber}`;

    return this.httpClient.get<GetPayment>(findPaymentInfoUrl).pipe(
      map (
        data => data.content,
      )
    )
  }
}

interface GetPayments {
  content: Payment[];
}

interface GetPayment {
  content: Payment;
}

