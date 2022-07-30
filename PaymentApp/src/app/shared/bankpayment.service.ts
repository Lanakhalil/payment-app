import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bankpayment } from './bankpayment.model';

@Injectable({
  providedIn: 'root'
})
export class BankpaymentService {
  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44308/api/BankPayments';
  formData: Bankpayment= new Bankpayment();
  list: Bankpayment[];

  postBankPayment() {
    return this.http.post(this.baseURL, this.formData);
  }

  putBank() {
    return this.http.put(`${this.baseURL}/${this.formData.banklId}`, this.formData);
  }
  putPayment() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }
  deleteBank(id: number) {
    debugger;
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Bankpayment[]);
  }
}
