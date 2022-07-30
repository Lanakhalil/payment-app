import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BankDetail } from '../shared/bank.model';
import { BankDetailService } from '../shared/bank.service';
import { BankDetailFormComponent } from './bank-detail-form/bank-detail-form.component';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styles: [
  ]
})
export class BankDetailsComponent implements OnInit {

  constructor(public service: BankDetailService,
    private toastr:ToastrService, public dialog: MatDialog) { }

    ngOnInit(): void {
      this.service.refreshList();
    }
  
    populateForm(selectedRecord: BankDetail) {
      this.service.formData = Object.assign({}, selectedRecord);
    }
    onEdit(selectedRecord: BankDetail){
      this.service.formData = Object.assign({}, selectedRecord);
      const dconfig = new MatDialogConfig();
      dconfig.width = '50%';
      this.dialog.open(BankDetailFormComponent, dconfig);
     }
  
    onDelete(id: number) {
      if (confirm('Are you sure to delete this record ?')){
        debugger;
      this.service.deleteBank(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "BANK Detail");
        },
        err => { console.log(err)}
      )
    }}

    openDialog() {
      const dconfig = new MatDialogConfig();
      dconfig.width = '50%';
      this.dialog.open(BankDetailFormComponent, dconfig);
    }
}
