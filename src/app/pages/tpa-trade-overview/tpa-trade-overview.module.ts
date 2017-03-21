import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TpaTradeOverviewComponent} from "./tpa-trade-overview.component";
import {routing} from "./tpa-trade-overview.routing";
import {NgaModule} from "../../theme/nga.module";
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
  ],
  declarations: [
    TpaTradeOverviewComponent
  ]
})
export class TpaTradeOverviewModule {
}
