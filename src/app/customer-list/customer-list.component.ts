import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  id: string = '';
  name: string = '';
  city: string = '';

  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.refresh();
  }

  public refresh() {
    console.log('Refresh');
    this.customers = [{ id: Date.now() + 1, name: 'Kamil Kukielka', city: 'Krakow' },
    { id: Date.now() + 2, name: 'John Johnson', city: 'New York' },
    { id: Date.now() + 3, name: 'Tom Thompson', city: 'London' }];
  }

  public addCustomer() {
    this.customers.push({id: Date.now(), name: this.name, city: this.city});
    this.resetFields();
  }

  public updateCustomer() {
    const customer = this.customers.find(customer => customer.id === +this.id);

    if (!customer) {
      throw new Error(`Customer with ID = ${this.id} not found`);
    }

    customer.name = this.name;
    customer.city = this.city;
    this.resetFields();
  }

  resetFields() {
    this.name = '';
    this.city = '';
    this.id = '';
  }

  isUpdate(): boolean {
    return this.id !== '';
  }

  isEmpty(): boolean {
    return this.name === '' || this.city === '';
  }

  // When you add/remove item, Angular will update only the related node, not the entire list - no problem
  // When list is fetched from BE, Angular refreshes entire list because the ref3erences changed - performance problem
  // Solution: use trackBy function to tell Angular how to indentify similar elements and not recreate them when not needed
  trackBy(index: number, customer: Customer) {
    return customer.id;
  }

  // You can also track by multiple fields in order to get unique id
  trackByMultiple(index: number, customer: Customer) {
    return customer.name + customer.city;
  }

  update(customer: Customer) {
    this.id = customer.id.toString();
    this.name = customer.name;
    this.city = customer.city;
  }

}
