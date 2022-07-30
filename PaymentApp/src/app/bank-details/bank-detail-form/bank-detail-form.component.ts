import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BankDetail } from 'src/app/shared/bank.model';
import { BankDetailService } from 'src/app/shared/bank.service';
import { Bankpayment } from 'src/app/shared/bankpayment.model';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-bank-detail-form',
  templateUrl: './bank-detail-form.component.html',
  styles: [
  ]
})
export class BankDetailFormComponent implements OnInit {

  constructor(public service: BankDetailService,
    private toastr:ToastrService, private dialogRef: MatDialogRef<BankDetailFormComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    if(this.service.formData.banklId == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form)

  }

  insertRecord(form: NgForm) {
    debugger;
    this.service.postBank().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList()
        this.toastr.success("Submited Successfully", "Bank Detail Regster")
        this.dialogRef.close()

      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putBank().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList()
        this.toastr.info("Ubdated Successfully", "Bank Detail Regster")
        this.dialogRef.close()

      },
      err => { console.log(err); }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = {
      banklId: 0,
      bankName: "",
      bankAddress:""  }
}
}
