import {Component, OnInit} from "@angular/core";
import {CalypsoControllerApi} from "../../angular2/api/CalypsoControllerApi";
import {RequestOptions, Headers} from "@angular/http";
import {AlertService} from "../../_services/alert.service";

import 'style-loader!./buttons.scss';

@Component({
  selector: "tpa-trade-overview",
  templateUrl: "./tpa-trade-overview.html"
})
export class TpaTradeOverviewComponent implements OnInit {

  constructor(private api: CalypsoControllerApi,
              private alertService: AlertService) {
  }

  public ngOnInit() {
  }

  public loadTrades(): void {
    this.api.getTradesUsingGET(this.jwt()).subscribe(
      data => {
        this.alertService.success(JSON.stringify(data, null, 4));
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  public getLegalEntity(): void {
    this.api.getLegalEntityUsingGET(26, this.jwt()).subscribe(
      data => {
        this.alertService.success(JSON.stringify(data, null, 4));
      },
      error => {
        this.alertService.error(error);
      }
    );
  }


  private jwt(): RequestOptions {
    // create authorization header with jwt token
    let accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      let headers = new Headers({'Authorization': 'Bearer ' + accessToken});
      return new RequestOptions({headers: headers});
    }
  }
}
