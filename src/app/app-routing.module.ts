import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { ProductsComponent } from './modules/products/products.component';
import { SalesComponent } from './modules/sales/sales.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  {path: '',
  component: DefaultComponent,
  children: [
    {path: 'users', component: UsersComponent },
    {path: 'customers', component: CustomersComponent },
    {path: 'products', component: ProductsComponent },
    {path: 'sales', component: SalesComponent }

 ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
