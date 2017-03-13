import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "../../_guards/auth.guard";
import {TpaTradeOverviewComponent} from "./tpa-trade-overview.component";

const routes: Routes = [
  {
    path: '',
    component: TpaTradeOverviewComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forChild(routes);
