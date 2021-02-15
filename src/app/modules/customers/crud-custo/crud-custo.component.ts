import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomersService } from 'src/app/services/customers.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-crud-custo',
  templateUrl: './crud-custo.component.html',
  styleUrls: ['./crud-custo.component.scss']
})
export class CrudCustoComponent implements OnInit {
  constructor(public service: CustomersService, 
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<CrudCustoComponent>,) { }

   


  ngOnInit(): void {
    
    

  }

 /**  onSubmit(){
     if (this.service.form.valid){
        if (!this.service.form.get('$id')?.value)
          this.service.addCustomer(this.service.form.value).subscribe(data =>{this.service.form.value;});

        else
          this.service.updateCustomer(this.service.form.value).subscribe(data =>{});
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Submitted successfully');
      this.onClose();
      }
    }*/
      
  
   onSubmit(){
      if (this.service.form.valid){
         if (!this.service.form.get('$id')?.value)
         this.service.addCustomer(this.service.form.value).subscribe(data => 
           {});
         else
         this.service.updateCustomer(this.service.form.value).subscribe(data =>{alert("updated")
         });
       this.service.form.reset();
       this.service.initializeFormGroup();
       this.notificationService.success('Submitted successfully');
       this.onClose();
       }
         
     
     }
  

  onClear() {
    this.service.form.reset();
     this.service.initializeFormGroup();
    this.notificationService.success('Cleared');
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
