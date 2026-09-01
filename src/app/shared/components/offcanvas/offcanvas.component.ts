import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { IMobileMenu } from '../../types/menu-d-t';
import { mobile_menus } from '../../data/menu-data';


@Component({
    selector: 'app-offcanvas',
    templateUrl: './offcanvas.component.html',
    styleUrls: ['./offcanvas.component.scss'],
    standalone: false
})


export class OffcanvasComponent {

  constructor(public utilsService:UtilsService){}

  mobile_menus: IMobileMenu[] = mobile_menus;

  activeMenu: string = "";

  handleOpenMenu(navTitle: string) {
    if (navTitle === this.activeMenu) {
      this.activeMenu = "";
    } else {
      this.activeMenu = navTitle;
    }
  }

}
