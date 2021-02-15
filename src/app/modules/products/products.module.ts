import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProduComponent } from './show-produ/show-produ.component';
import { CrudProduComponent } from './crud-produ/crud-produ.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ShowProduComponent,
    CrudProduComponent
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
  exports: [
    ShowProduComponent,
    CrudProduComponent
  ],
})
export class ProductsModule { }
