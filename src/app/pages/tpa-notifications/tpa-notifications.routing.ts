import {Routes, RouterModule} from "@angular/router";
import {TpaNotificationsComponent} from "./tpa-notifications.component";

const routes: Routes = [
  {
    path: '',
    component: TpaNotificationsComponent
  }
];

export const routing = RouterModule.forChild(routes);
