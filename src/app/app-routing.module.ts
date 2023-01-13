import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Subpage2Component } from './subpage2/subpage2.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:AppComponent},
    {path:'subpage1',component:Subpage1Component},
    {path:'subpage2',component:Subpage2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
