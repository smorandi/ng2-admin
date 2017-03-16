import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgaModule} from "../../theme/nga.module";
import {TpaNotificationsComponent} from "./tpa-notifications.component";
import {routing} from "./tpa-notifications.routing";

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    TpaNotificationsComponent
  ]
})
export class TpaNotificationsModule {
}
