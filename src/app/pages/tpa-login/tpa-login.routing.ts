import {Routes, RouterModule} from "@angular/router";
import {TpaLoginComponent} from "./tpa-login.component";

const routes: Routes = [
  {
    path: '',
    component: TpaLoginComponent
  }
];

export const routing = RouterModule.forChild(routes);
