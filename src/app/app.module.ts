import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AttributeDirective } from './directives/attribute.directive';
import { CustomIfDirective } from './directives/structural.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CustomerComponent,
    CustomerListComponent,
    AttributeDirective,
    CustomIfDirective,
    ToggleDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
