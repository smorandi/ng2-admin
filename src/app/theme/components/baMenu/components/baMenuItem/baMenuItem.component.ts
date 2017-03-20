import {Component, Input, Output, EventEmitter} from '@angular/core';

import 'style-loader!./baMenuItem.scss';
import {AuthenticationService} from "../../../../../_services/authentication.service";

@Component({
  selector: 'ba-menu-item',
  templateUrl: './baMenuItem.html'
})
export class BaMenuItem {

  @Input() menuItem: any;
  @Input() child: boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  constructor(private authenticationService: AuthenticationService) {
  }

  public onHoverItem($event): void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item): boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }

  public shouldShow(): boolean {
    if (this.menuItem.auth) {
      return this.authenticationService.isLoggedIn();
    }
    else {
      return !this.authenticationService.isLoggedIn();
    }
  }

}
