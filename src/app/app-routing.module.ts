import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Subpage2Component } from './subpage2/subpage2.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'contact', component: ContactComponent },
  { path:'product/:id', component: ProductDetailComponent },
  { path:'product', component: ProductsComponent },
  { path:'subpage1', component: Subpage1Component },
  { path:'subpage2', component: Subpage2Component },
  { path:'**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
