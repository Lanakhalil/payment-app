import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44308/api/Customers';
  formData: Customer= new Customer();
  list: Customer[];

  // getCustomer(): Observable<any>{
  //   return this.http.get<PaymentDetail[]>('https://localhost:44308/api/PaymentDetail');
  // }
  postCustomer():Observable<any> {
    debugger
    console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putCustomer() {
    return this.http.put(`${this.baseURL}/${this.formData.customerId}`, this.formData);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Customer[]);
  }
}
