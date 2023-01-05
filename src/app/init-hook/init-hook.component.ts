import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer/model/customer';

@Component({
  selector: 'app-init-hook',
  templateUrl: './init-hook.component.html',
  styleUrls: ['./init-hook.component.css']
})
export class InitHookComponent implements OnInit, OnDestroy {
  @Input() customer!: Customer;

  constructor() { 
    console.log("app-init-hook component - constructor comes before ngOnInit");
  }

  ngOnInit(): void {
    console.log('app-init-hook component - ngOnInit comes after constructor');
  }
    
  ngOnDestroy(): void {
    console.log("app-init-hook component - ngOnDestroy")
  }

}
