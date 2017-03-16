import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TpaTradeOverviewComponent} from "./tpa-trade-overview.component";
import {routing} from "./tpa-trade-overview.routing";
import {NgaModule} from "../../theme/nga.module";

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    TpaTradeOverviewComponent
  ]
})
export class TpaTradeOverviewModule {
}
