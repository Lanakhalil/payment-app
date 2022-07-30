import { JsonpClientBackend } from "@angular/common/http";
import { BankDetail } from "./bank.model";
import { Customer } from "./customer.model";

export class PaymentDetail {
    paymentDetailId: number=0;
    cardNumber: string='';
    expirationDate: string='';
    securityCode: string='';
    banklId:number =0;
    bank:BankDetail;
    customerId: number=0;
    customer: Customer;
}