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

  // When you add/remove item, Angular will update only the related node, not the entire list - no problem
  // When list is fetched from BE, Angular refreshes entire list because the ref3erences changed - performance problem
  // Solution: use trackBy function to tell Angular how to indentify similar elements and not recreate them when not needed
  trackBy(index: number, customer: Customer) {
    return customer.id;
  }

}
