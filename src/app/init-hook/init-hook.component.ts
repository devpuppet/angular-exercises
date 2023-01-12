import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer/model/customer';

@Component({
  selector: 'app-init-hook',
  templateUrl: './init-hook.component.html',
  styleUrls: ['./init-hook.component.css']
})
export class InitHookComponent implements OnInit, OnDestroy {
  @Input() customer!: Customer;
  message = '';

  constructor() { 
    console.log("app-init-hook component - constructor comes before ngOnInit");
  }

  ngOnInit(): void {
    console.log('app-init-hook component - ngOnInit comes after constructor');
  }
    
  ngOnDestroy(): void {
    console.log("app-init-hook component - ngOnDestroy")
  }

  ngOnChanges() {
    console.log('app-init-hook component - ngOnChanges');
  }
 
  ngDoCheck() {
    console.log('app-init-hook component - ngDoCheck');
  }
 
  ngAfterContentInit() {
    console.log('app-init-hook component - ngAfterContentInit');
  }
 
  ngAfterContentChecked() {
    console.log('app-init-hook component - ngAfterContentChecked');
  }
 
  ngAfterViewInit() {
    console.log('app-init-hook component - AfterViewInit');
  }
 
   ngAfterViewChecked() {
    console.log('app-init-hook component - AfterViewChecked');
  }

}
