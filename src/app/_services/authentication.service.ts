import {Injectable} from "@angular/core";
import {AuthenticationControllerApi} from "../../../lib/angular2/api/AuthenticationControllerApi";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import * as models from "../../../lib/angular2/model/models";
import {STOMPService} from "./stomp/stomp.service";

@Injectable()
export class AuthenticationService {
  constructor(private api: AuthenticationControllerApi,
              private stompService: STOMPService) {
  }

  public isLoggedIn(): boolean {
    return sessionStorage.getItem("accessToken") ? true : false;
  }

  public login(username: string, password: string): Observable<models.LoginInfo> {
    return this.api.loginUsingPOST(
      {
        userName: username,
        password: password
      })
      .map(
        response => {
          sessionStorage.setItem("accessToken", response.accessToken);
          sessionStorage.setItem("refreshToken", response.refreshToken);
          sessionStorage.setItem("csrfToken", response.csrfToken);

          this.stompService.init();

          return response;
        }
      );
  }

  public logout(): void {
    // remove user from local storage to log user out
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("csrfToken");

    this.stompService.disconnect();
  }
}
