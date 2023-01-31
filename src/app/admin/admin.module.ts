import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RightsComponent } from "./rights/rights.component";
import { UserComponent } from "./user/user.component";

@NgModule({
    declarations: [UserComponent, RightsComponent, DashboardComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
    ],
    providers: [],
})
export class AdminModule { }