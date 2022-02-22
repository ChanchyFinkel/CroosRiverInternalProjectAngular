import { Component, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CustomerService } from "./customer.service";
 import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent} from './customer-card/customer-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerDialogComponent } from "./customer-dialog/customer-dialog.component";
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInput, MatInputModule } from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";

const CUSTOMER_ROUTES: Routes = [
    { path: "customer", component: CustomerListComponent },
    { path: "customer/NewCustomer", component: CustomerCardComponent },
];
@NgModule({
    declarations: [CustomerListComponent, CustomerCardComponent, CustomerDialogComponent],
    imports: [ReactiveFormsModule, FormsModule, RouterModule.forChild(CUSTOMER_ROUTES), MatDialogModule,
        MatButtonModule,CommonModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule, MatIconModule ],
    providers: [CustomerService],
    exports: [CustomerListComponent, CustomerCardComponent]
})
export class CustomerModule {

}
// isLoggedIn$ = new BehaviorSubject<boolean>(false);