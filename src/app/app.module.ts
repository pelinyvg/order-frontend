import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemComponent} from './items/item/item.component';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { CountdownPipe } from './pipes/countdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CreateCustomerComponent,
    NameFilterPipe,
    CreateItemComponent,
    CountdownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
