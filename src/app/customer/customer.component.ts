import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
