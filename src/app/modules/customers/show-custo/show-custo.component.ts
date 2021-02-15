import { Component, OnInit, AfterViewInit, ViewChild, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersService } from 'src/app/services/customers.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CrudCustoComponent } from '../crud-custo/crud-custo.component';

@Component({
  selector: 'app-show-custo',
  templateUrl: './show-custo.component.html',
  styleUrls: ['./show-custo.component.scss']
})
export class ShowCustoComponent implements OnInit {
  


  constructor(private service:CustomersService,
    private dialog: MatDialog ,
    private notification: NotificationService) { }
//table
  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = ['customerId','customerName','category','actions'];
//table sort and pigmentation  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchKey!: string;
  
  ngAfterViewInit() {
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    

  }
 


  
  ngOnInit(): void {
    this.listData = new MatTableDataSource();
    this.getCustomerList();
   
  } 
 
  getCustomerList(){
    this.service.getCustoList().subscribe((data=>{
      this.listData.data=data;
      
      return data;
    }));
    
  }
 //filter 
 
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  //create new customer
  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CrudCustoComponent, dialogConfig);
  }
  // Edit Customer
  onEdit(row: any){
    this.service.updateFormGroup(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CrudCustoComponent, dialogConfig);
  }
  
  onDelete($id: number){
    if(confirm('Are you sure you want to delete')){
      this.service.deleteCustomer($id).subscribe(data =>{
        this.getCustomerList();
      });
      this.notification.warn('Successfully deleted');
    }
  }
   
}