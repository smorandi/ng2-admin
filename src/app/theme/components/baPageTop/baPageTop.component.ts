import {Component, OnInit} from '@angular/core';

import {GlobalState} from '../../../global.state';

import 'style-loader!./baPageTop.scss';
import {Observable} from "rxjs";
import {STOMPService, STOMPState} from "../../../_services/stomp/stomp.service";
import {AuthenticationService} from "../../../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop implements OnInit {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  public state: Observable<string>;

  constructor(private _state: GlobalState,
              private _stompService: STOMPService,
              private _authService: AuthenticationService,
              private _router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
    this.state = this._stompService.state
      .map((state: number) => STOMPState[state]);
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public isLoggedIn():boolean {
    return this._authService.isLoggedIn();
  }

  public logout():void {
    this._authService.logout();
    this._router.navigate(["/"]);
  }

  public login():void {
    console.log("login");
    this._router.navigate(["/pages/tpa-login"]);
  }
}
