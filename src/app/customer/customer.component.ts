import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  }

}
