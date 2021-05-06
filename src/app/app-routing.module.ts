import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';

const routes: Routes = [
  {path: 'items', component: ItemComponent},
  {path: 'create-customer', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
