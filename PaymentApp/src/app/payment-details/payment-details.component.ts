import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
  
  constructor(public service: PaymentDetailService,
  private toastr:ToastrService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

 

  populateForm(selectedRecord: PaymentDetail) {
    // this.service.formData = Object.assign({}, selectedRecord);
  }

 onEdit(selectedRecord: PaymentDetail){
  this.service.formData = Object.assign({}, selectedRecord);
  const dconfig = new MatDialogConfig();
  dconfig.width = '50%';
  this.dialog.open(PaymentDetailFormComponent, dconfig);
  // this.openDialog();
 }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?')){
    this.service.deletePaymentDetail(id).subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("Deleted Successfully", "Payment Detail Regster");
      },
      err => { console.log(err)}
    )
  }}

  openDialog() {
    const dconfig = new MatDialogConfig();
    dconfig.width = '50%';
    this.dialog.open(PaymentDetailFormComponent, dconfig);
  }
}
