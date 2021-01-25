import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCustoComponent } from './show-custo/show-custo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { CrudCustoComponent } from './crud-custo/crud-custo.component';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ShowCustoComponent,
    CrudCustoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule
    

    
      

  ],
  exports:[
    ShowCustoComponent,
    CrudCustoComponent,
    MatTableModule,
  ],
})
export class CustomersModule { }
