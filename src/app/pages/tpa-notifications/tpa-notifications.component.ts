import {Component, OnInit, OnDestroy} from "@angular/core";
import {AlertService} from "../../_services/alert.service";
import {STOMPService} from "../../_services/stomp/stomp.service";
import * as Stomp from "stompjs";
import {Observable} from "rxjs";

@Component({
  selector: 'tpa-notifications',
  templateUrl: "./tpa-notifications.html"
})
export class TpaNotificationsComponent implements OnInit, OnDestroy {
  constructor(private alertService: AlertService,
              private stompService: STOMPService) {
  }


  public messages(): Observable<Array<Stomp.Message>> {
    return this.stompService.getMessages();
  }

  public lastMessage() {
    return this.messages().map(values => values[0]);
  }

  ngOnInit() {
    this.stompService.getMessages().subscribe(result => {
      console.log("result: " + result);
    });
  }

  ngOnDestroy() {
  }
}
