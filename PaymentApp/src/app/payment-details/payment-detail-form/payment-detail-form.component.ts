import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BankDetail } from 'src/app/shared/bank.model';
import { BankDetailService } from 'src/app/shared/bank.service';
import { Bankpayment } from 'src/app/shared/bankpayment.model';
import { BankpaymentService } from 'src/app/shared/bankpayment.service';
import { Customer } from 'src/app/shared/customer.model';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {
  public lisItems:BankDetail[];
  public customer:Customer[];
  toppings: FormGroup;

  constructor(public service: PaymentDetailService,
    private toastr:ToastrService,  private dialogRef: MatDialogRef<PaymentDetailFormComponent>,
    public s2: BankDetailService) {
      // this.toppings = fb.group({
      //   pepperoni: false,
      //   extracheese: false,
      //   mushroom: false
      // });
    //   this.service.getPaymentDetails().subscribe(data => this.customer = data,  
    //           error => console.log(error),  
    //           () => console.log('Get all complete'));

    //           this.service.x = 'b'
    //  this.service.getPaymentDetails().subscribe(data => this.lisItems = data,  
    //   error => console.log(error),  
    //   () => console.log('Get all complete'));
    // this.service.getPaymentDetails().subscribe(data => this.customer = data,  
    //  error => console.log(error),  
    //  () => console.log('Get all complete'));

      // this.service.getPaymentDetails().subscribe(data => this.lisItems = data,  
      //   error => console.log(error),  
      //   () => console.log('Get all complete'));

     }

  ngOnInit(): void {
    this.dropDownforCustomer();
    this.dropDownforBank();

   
  }

   dropDownforBank() {
     this.service.getbanks().subscribe(data => this.lisItems = data,  
      error => console.log(error),  
      () => console.log('Get all complete'));
  }
  dropDownforCustomer() {
    this.service.getCustomers().subscribe(data => this.customer = data,  
      error => console.log(error),  
      () => console.log('Get all complete'));
 
 }
  
  // dropDown() {
  //   this.service.getPaymentDetails().subscribe(data =>{
  //     data.forEach(element => {
  //       this.lisItems.push(element['banklId']);
  //     })} )
  // }

  onSubmit(form:NgForm) {
    if(this.service.formData.paymentDetailId == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    debugger
    this.service.postPaymentDetail22().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList()
        this.toastr.success("Submited Successfully", "Payment Detail Regster")
        this.dialogRef.close()

      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList()
        this.toastr.info("Ubdated Successfully", "Payment Detail Regster")
        this.dialogRef.close()

      },
      err => { console.log(err); }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = {
      paymentDetailId:0,
      cardNumber:'',
      expirationDate:'',
      securityCode:'',
      banklId:0,
      bank:new BankDetail,
      customerId:0,
      customer: new Customer
    
    };
  }
}
