import {Routes, RouterModule} from "@angular/router";
import {TpaNotificationsComponent} from "./tpa-notifications.component";
import {AuthGuard} from "../../_guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: TpaNotificationsComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forChild(routes);
