import { Component, OnInit, AfterViewInit, ViewChild, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersService } from 'src/app/services/customers.service';
import { CrudCustoComponent } from '../crud-custo/crud-custo.component';

@Component({
  selector: 'app-show-custo',
  templateUrl: './show-custo.component.html',
  styleUrls: ['./show-custo.component.scss']
})
export class ShowCustoComponent implements OnInit {
  


  constructor(private service:CustomersService,
    private dialog: MatDialog ) { }
//table
  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = ['customerId','customerName','category','actions'];
//table sort and pigmentation  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  ngAfterViewInit() {
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }
  //filter 
  public searchKey!: string;

  
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
    this.listData.filter = this.searchKey.trim().toLowerCase();
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
  
  
}