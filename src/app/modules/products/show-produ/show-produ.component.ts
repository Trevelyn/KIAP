import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/services/products.service';
import { CrudProduComponent } from '../crud-produ/crud-produ.component';

@Component({
  selector: 'app-show-produ',
  templateUrl: './show-produ.component.html',
  styleUrls: ['./show-produ.component.scss']
})
export class ShowProduComponent implements OnInit {

  constructor(private service: ProductsService,
    private dialog: MatDialog ) { }

  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = ['productId','productName','itemsize','sku','price','actions'];
 
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public searchKey!: string;

  ngAfterViewInit() {
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }
  

  
  ngOnInit(): void {
    this.listData = new MatTableDataSource();
    this.getProductList();
    

  } 
  getProductList(){
    this.service.getProduList().subscribe((data=>{
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
    this.dialog.open(CrudProduComponent, dialogConfig);
  }
  
}