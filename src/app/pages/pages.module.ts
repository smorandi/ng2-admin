import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {routing} from "./pages.routing";
import {NgaModule} from "../theme/nga.module";
import {Pages} from "./pages.component";
import {AlertModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [Pages]
})
export class PagesModule {
}
