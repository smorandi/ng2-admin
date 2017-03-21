import {Component, OnInit} from "@angular/core";
import {CalypsoControllerApi} from "../../../../lib/angular2/api/CalypsoControllerApi";
import {RequestOptions, Headers} from "@angular/http";
import {AlertService} from "../../_services/alert.service";

import 'style-loader!./buttons.scss';
import 'style-loader!./smartTables.scss';

import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: "tpa-trade-overview",
  templateUrl: "./tpa-trade-overview.html",
})
export class TpaTradeOverviewComponent implements OnInit {

  private settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      book: {
        title: 'Book',
        type: 'string',
        editable: false,
      },
      enteredDate: {
        title: 'Entered Date',
        type: 'string',
        editable: false,
      }
    },
    hideHeader: false,
    hideSubHeader: true,
    actions: null,
    edit: null
  };

  private source: LocalDataSource = new LocalDataSource();


  constructor(private api: CalypsoControllerApi,
              private alertService: AlertService) {
  }

  public ngOnInit() {
  }

  public loadTrades(): void {
    this.api.getTradesUsingGET(this.jwt()).subscribe(
      data => {
        let d = [
          {id: 22, book: "der fisch 22", enteredDate: new Date()},
          {id: 23, book: "der fisch 23", enteredDate: new Date()}
        ];
        // this.alertService.success(JSON.stringify(data, null, 4));
        this.source.load(d).then(res => {
          console.log("loaded");
        });
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  public clearTrades() {
    this.source.empty().then(res => {
      this.source.reset();
    });
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
