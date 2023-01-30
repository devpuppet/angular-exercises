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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ProvidersExampleComponent } from './providers-example/providers-example.component';
import { HttpClientExampleComponent } from './http-client-example/http-client-example.component';
import { HttpRequestInterceptor, HttpResponseInterceptor, MockRepoResponseInterceptor } from './services/http-interceptor.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

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
    ProductsComponent,
    ProvidersExampleComponent,
    HttpClientExampleComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    ProductDetailComponent,
    LoginComponent,
    AddProductComponent,
    ProductEditComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    KeyValuePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockRepoResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
