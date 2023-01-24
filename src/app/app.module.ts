import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DatePipe, KeyValuePipe } from '@angular/common';
import { InitHookComponent } from './init-hook/init-hook.component';
import { CardComponent } from './card/card.component';
import { ChildTemplateComponent } from './child-template/child-template.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CardListComponent } from './card-list/card-list.component';
import { Card2Component } from './card2/card2.component';
import { ShadowDomComponentComponent } from './shadow-dom-component/shadow-dom-component.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Subpage2Component } from './subpage2/subpage2.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { StreetValidator } from './validators/template-validator';
import { PasswordFormComponent } from './password-form/password-form.component';
import { DynamicValidatorsComponent } from './dynamic-validators/dynamic-validators.component';
import { ProductsComponent } from './products/products.component';

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
    ShadowDomComponentComponent,
    Subpage1Component,
    Subpage2Component,
    TodoListComponent,
    TodoAddComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    SkillsFormComponent,
    EmployeeFormComponent,
    ContactFormComponent,
    StreetValidator,
    PasswordFormComponent,
    DynamicValidatorsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
