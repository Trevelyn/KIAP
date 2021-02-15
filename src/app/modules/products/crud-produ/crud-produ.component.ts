import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-crud-produ',
  templateUrl: './crud-produ.component.html',
  styleUrls: ['./crud-produ.component.scss']
})
export class CrudProduComponent implements OnInit {

  constructor(public service: ProductsService, 
    private notification: NotificationService,
    public dialogRef: MatDialogRef<CrudProduComponent> ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$productId')?.value){
      this.service.addProducts(this.service.form.value).subscribe(data =>{})}
      else{
        this.service.updateProducts(this.service.form.value)}
    
      this.service.form.reset();
       this.service.initializeFormGroup();
       this.notification.success('Submitted successfully');
       this.onClose();
    }
  }
  onClear() {
    this.service.form.reset();
     this.service.initializeFormGroup();
    this.notification.success('Cleared');
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
