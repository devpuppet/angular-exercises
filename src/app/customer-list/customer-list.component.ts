import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [
    { id: 1, name: 'Kamil Kukielka', city: 'Krakow' },
    { id: 2, name: 'John Johnson', city: 'New York' },
    { id: 3, name: 'Tom Thompson', city: 'London' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
