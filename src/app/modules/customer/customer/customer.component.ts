import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerDTO } from 'src/app/models/CustomerDTO.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { CustomerDialogComponent } from '../customer-dialog/customer-dialog.component';
//Material:
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';



//import { EventEmitter } from 'stream';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,AfterViewInit {


  // @Output()
  // onGetCustomerDetails: EventEmitter<Customer> = new EventEmitter();

  constructor(private _customerService: CustomerService, public dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  // customerDetails!: Customer
  customers: CustomerDTO[]=[];

  

  // isSingleClick: Boolean = true;

  // onClicked() {
  //   this.isSingleClick = true;
  // }

  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '1200',
      data: {id:Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      alert('popup closed!!!!!!!!!!');
    });
  }
  

  getAllCustomers() {
    this._customerService.getAllCustomers().subscribe(data => {
      if (data) { this.customers = data; console.log(this.customers)
       } else { console.log("no customers") }
    })
  }

  getCustomerDetails(id:number): void {
    this.openDialog(id);
    // this.isSingleClick = false;
    // this.onGetCustomerDetails.emit()
  }

  ngOnInit(): void {
    this.getAllCustomers();
    
  }
  columnsToDisplay: string[] = ['firstName', 'lastName', 'emailAddress', 'address','phoneNumber'];
  dataSource = new MatTableDataSource<CustomerDTO>(this.customers);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator ;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  private handleContacts() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 

}

