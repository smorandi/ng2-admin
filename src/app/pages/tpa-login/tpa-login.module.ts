import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {TpaLoginComponent} from "./tpa-login.component";
import {routing} from "./tpa-login.routing";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    TpaLoginComponent
  ]
})
export class TpaLoginModule {
}
