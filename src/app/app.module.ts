import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from 'src/app/layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { CustomersService } from './services/customers.service';
import { CrudCustoComponent } from './modules/customers/crud-custo/crud-custo.component';





@NgModule({
  declarations: [
    AppComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    DefaultModule,
    HttpClientModule
  ],
  providers: [UserService,CustomersService],
  bootstrap: [AppComponent],
  entryComponents:[CrudCustoComponent]
})
export class AppModule { }
