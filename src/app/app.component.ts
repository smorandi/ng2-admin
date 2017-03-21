import {Component, ViewContainerRef, AfterViewInit, OnInit, ViewChild, OnDestroy} from "@angular/core";
import {GlobalState} from "./global.state";
import {BaImageLoaderService, BaThemePreloader, BaThemeSpinner} from "./theme/services";
import {BaThemeConfig} from "./theme/theme.config";
import {layoutPaths} from "./theme/theme.constants";
import "style-loader!./app.scss";
import "style-loader!./theme/initial.scss";
import {ModalDirective} from "ng2-bootstrap";
import {AlertService} from "./_services/alert.service";
import {Subscription} from "rxjs";
import {STOMPService} from "./_services/stomp/stomp.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: "./app.html"
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('childModal') childModal: ModalDirective;
  public alertTitle: string = "der";
  public alertMessage: string = "fisch";

  isMenuCollapsed: boolean = false;

  private subscription: Subscription;


  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef,
              private themeConfig: BaThemeConfig,
              private alertService: AlertService,
              private stompService: STOMPService) {

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      if (message) {
        this.alertTitle = message.type;
        this.alertMessage = message.text;

        if (message.text._body) {
          this.alertMessage = message.text._body;
        }

        this.showChildModal();
      }
      else {
        this.hideChildModal();
      }
    });

    let loggedIn: boolean = sessionStorage.getItem("accessToken") ? true : false;

    if (loggedIn) {
      this.stompService.disconnect();
      this.stompService.init();
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.stompService.disconnect();
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders

    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
