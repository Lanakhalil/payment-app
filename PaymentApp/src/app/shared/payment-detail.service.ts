import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { BankDetail } from './bank.model';
import { Customer } from './customer.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44308/api/PaymentDetail';
  formData: PaymentDetail= new PaymentDetail();
  list: PaymentDetail[];
  x:string;
getbanks():Observable<any>{
  return this.http.get<BankDetail[]>('https://localhost:44308/api/Bank');
}
getCustomers():Observable<any>{
  return this.http.get<Customer[]>('https://localhost:44308/api/Customers');
}
  // getPaymentDetails(): Observable<any>{
  //   if (this.x === 'bank') {
  //     return this.http.get<BankDetail[]>('https://localhost:44308/api/Bank');
  //   }

  //   else {
  //     return this.http.get<Customer[]>('https://localhost:44308/api/Customers');
  //   } 
    
  // }

  postPaymentDetail22():Observable<any> {
   // debugger
   // console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }
}
