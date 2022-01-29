import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { CustomerComponent } from './modules/customer/customer.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CustomerModule } from './modules/customer/customers/customer.module';
import { RouterModule,Routes } from '@angular/router';
import { CustomerComponent } from './modules/customer/customers/customer/customer.component';
import { UpdateCustomerComponent } from './modules/customer/customers/update-customer/update-customer.component';
//import { UpdateCustomerComponent } from './modules/update-customer/update-customer.component';

const APP_ROUTES:Routes=[
  {path:"admin",component:AdminComponent},
  {path:"newCustomer",component:UpdateCustomerComponent},
  //{path:"customer", loadChildren:()=> import("./modules/customer/customers/customer.module").then(m=>m.CustomerModule)},

 
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
     ReactiveFormsModule,
     FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomerModule,
   RouterModule.forRoot(APP_ROUTES),

    ///////////////// material modules /////////////////
    MatInputModule,
    MatButtonModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
