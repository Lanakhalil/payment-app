import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/shared/customer.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-customer-detail-form',
  templateUrl: './customer-detail-form.component.html',
  styles: [
  ]
})
export class CustomerDetailFormComponent implements OnInit {
  public lisItems:PaymentDetail[];

  constructor(public service: CustomerService,
    private toastr:ToastrService, private dialogRef: MatDialogRef<CustomerDetailFormComponent>) { 
      // this.service.getCustomer().subscribe(data => this.lisItems = data,  
      //   error => console.log(error),  
      //   () => console.log('Get all complete'));
    }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm) {
    if(this.service.formData.customerId == 0)
    this.insertRecord(form); 
    else
    this.updateRecord(form)
 }

  insertRecord(form: NgForm) {
    debugger
    this.service.postCustomer().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList()

        this.toastr.success("Submited Successfully", "Customer Detail Regster")
        this.dialogRef.close()

      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCustomer().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList()
        this.toastr.info("Ubdated Successfully", "Customer Detail Regster")
        this.dialogRef.close()

      },
      err => { console.log(err); }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = {
      customerId:0,
      customerName:'',
      customerCity:'',
      phoneNumber:''   
    };
  }

}
