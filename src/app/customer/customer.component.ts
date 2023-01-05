import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer } from './model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnChanges {

  @Input()
  isOdd!: boolean;
  @Input()
  isEven!: boolean;
  @Input()
  isFirst!: boolean;
  @Input()
  isLast!: boolean;
  @Input()
  index!: number;
  @Input()
  customer!: Customer;
  @Output()
  customerChange: EventEmitter<Customer> = new EventEmitter<Customer>();
  oldCustomer: Customer = {id: 0, name: '', city: ''};
  doCheckCount = 0;

  private changelog: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change = changes[propName];
      const to  = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const entry = `${propName}: changed from ${from} to ${to} `;
      this.changelog.push(entry);
    }
    console.log(this.changelog);
  }

  ngOnInit(): void {
    this.oldCustomer = Object.assign({}, this.customer);
  }

  // this is not working as expected - you need to change trackBy function to trackBy instead of trackByMultiple
  // because Angular recreates the component and ngOnInit is launched
  ngDoCheck(): void {
    console.log('app-init-hook component - ngDoCheck');
    this.doCheckCount++;
    if (this.oldCustomer.id !== this.customer.id
      || this.oldCustomer.name !== this.customer.name
      || this.oldCustomer.city !== this.customer.city) {
        console.log('Customer changed!');
        const to  = JSON.stringify(this.customer);
        const from = JSON.stringify(this.oldCustomer);
        const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
        this.changelog.push(changeLog);

        this.oldCustomer = Object.assign({}, this.customer);
    } else {
      console.log('Customer not changed!');
    }
  }

  update() {
    this.customerChange.emit(this.customer);
  }

}
