import {Component, OnInit} from "@angular/core";
import {AlertService} from "../../_services/alert.service";
import {Observable} from "rxjs";
import {StompConfig} from "../../_services/stomp/stomp.config";
import {Message} from "stompjs";
import {STOMPService} from "../../_services/stomp/stomp.service";

@Component({
  selector: 'tpa-notifications',
  templateUrl: "./tpa-notifications.html"
})
export class TpaNotificationsComponent implements OnInit {

  private stompConfig: StompConfig;
  public messages: Observable<Message>;
  public mq: Array<string> = [];
  public count = 0;

  constructor(private alertService: AlertService,
              private stompService: STOMPService) {
    this.stompConfig = {
      "host": "localhost",
      "port": 9000,
      "ssl": false,

      "user": null,
      "pass": null,

      "subscribe": ["/topic/notifications"],
      "publish": [],

      "heartbeat_in": 0,
      "heartbeat_out": 25000,

      "debug": true
    };
  }

  ngOnInit() {
    this.stompService.configure(this.stompConfig);
    this.stompService.try_connect().then(this.on_connect);
  }

  public on_connect = () => {
    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this.stompService.messages;

    // Subscribe a function to be run on_next message
    this.messages.subscribe(this.on_next);
  }

  public on_next = (message: Message) => {
    // Store message in "historic messages" queue
    this.mq.push(message.body + '\n');

    // Count it
    this.count++;

    // Log it to the console
    console.log(this.messages);
  }

  onClick() {
  }
}
