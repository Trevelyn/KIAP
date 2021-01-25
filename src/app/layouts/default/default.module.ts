import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { CustomersComponent } from 'src/app/modules/customers/customers.component';
import { ShowCustoComponent } from 'src/app/modules/customers/show-custo/show-custo.component';

import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CustomersModule } from 'src/app/modules/customers/customers.module';
import { CrudCustoComponent } from 'src/app/modules/customers/crud-custo/crud-custo.component';
import { SalesComponent } from 'src/app/modules/sales/sales.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { ProductsModule } from 'src/app/modules/products/products.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ 
    DefaultComponent,
    UsersComponent,
    CustomersComponent,
    SalesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CustomersModule,
    ProductsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
    
  ],
  exports: [
    MatTableModule,
    CustomersModule,
   
    
  ],
  
})
export class DefaultModule { }
