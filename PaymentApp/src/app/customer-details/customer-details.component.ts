import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDetailFormComponent } from './customer-detail-form/customer-detail-form.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent implements OnInit {

  constructor(public service: CustomerService,
    private toastr:ToastrService,  public dialog: MatDialog) { }

    ngOnInit(): void {
      this.service.refreshList();
    }
  
   
  
    // populateForm() {
    //   this.service.formData = Object.assign({}, selectedRecord);
    // }

    onEdit(selectedRecord: Customer){
      this.service.formData = Object.assign({}, selectedRecord);
      const dconfig = new MatDialogConfig();
      dconfig.width = '50%';
      this.dialog.open(CustomerDetailFormComponent, dconfig);

     }
  
   
  
    onDelete(id: number) {
      if (confirm('Are you sure to delete this record ?')){
      this.service.deleteCustomer(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "Customer Detail Regster");
        },
        err => { console.log(err)}
      )
    }}

    openDialog() {
      const dconfig = new MatDialogConfig();
      dconfig.width = '50%';
      this.dialog.open(CustomerDetailFormComponent, dconfig);
      
    }

}
