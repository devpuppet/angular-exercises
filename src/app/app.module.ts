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
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { InitHookComponent } from './init-hook/init-hook.component';
import { CardComponent } from './card/card.component';
import { ChildTemplateComponent } from './child-template/child-template.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CardListComponent } from './card-list/card-list.component';
import { Card2Component } from './card2/card2.component';
import { ShadowDomComponentComponent } from './shadow-dom-component/shadow-dom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CustomerComponent,
    CustomerListComponent,
    AttributeDirective,
    CustomIfDirective,
    ToggleDirective,
    TooltipDirective,
    TempConverterPipe,
    InitHookComponent,
    CardComponent,
    ChildTemplateComponent,
    HighlightDirective,
    CardListComponent,
    Card2Component,
    ShadowDomComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
