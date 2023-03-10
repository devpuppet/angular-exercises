import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomPreloadStrategy } from './modules/custom-preload-strategy';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductWithResolverComponent } from './product-with-resolver/product-with-resolver.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CanLoadGuard as CanLoadGuard } from './services/can-load.guard';
import { DeactivateGuardService } from './services/deactivate-guard.service';
import { ProductListResolverService } from './services/product-list-resolver.service';
import { StaticRouteComponent } from './static-route/static-route.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Subpage2Component } from './subpage2/subpage2.component';

const routes: Routes = [
  { path:'home', component: HomeComponent,
    children: [
      { path:'static', component: StaticRouteComponent, data: { id: 1, name: 'Static name' } },
      { path:'dynamic', component: DynamicRouteComponent },
    ] },
  { path:'login', component: LoginComponent, data: { title: 'Login comp', description: 'Login page desc', ogTitle: 'Title for social media. OG stands for Open Graph', robots: 'noindex, nofollow' } },
  { path:'contact', component: ContactComponent, data: { title: 'Title overriden by code in ContactComponent' } },
  { path:'register', component: RegisterComponent, canDeactivate: [DeactivateGuardService], data: { title: 'Register Title from Router' } },
  { path:'product-with-resolver', component: ProductWithResolverComponent, resolve: { products: ProductListResolverService } },
  { path:'product', component: ProductsComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'view/:id', component: ProductViewComponent },
      { path: 'edit/:id', component: ProductEditComponent },
      { path: 'add', component: AddProductComponent }
    ]
  },
  // you can use below route to enable CanLoadGuard which will block /admin routes
  // { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), data: { preload: true, delay: 5000 }, canLoad: [CanLoadGuard] },
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), data: { preload: true, delay: 5000 } },
  { path:'subpage1', component: Subpage1Component },
  { path:'subpage2', component: Subpage2Component },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', component: ErrorComponent },
];

@NgModule({
  // Default preloadingStrategy is NoPreloading. You can set the strategy to preload all lazy modules
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
