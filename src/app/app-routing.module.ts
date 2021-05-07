import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './items/item/item.component';
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';
import {CreateItemComponent} from './items/create-item/create-item.component';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'create-customer', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
