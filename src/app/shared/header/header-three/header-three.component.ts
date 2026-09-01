import { Component, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-header-three',
    templateUrl: './header-three.component.html',
    styleUrls: ['./header-three.component.scss'],
    standalone: false
})
export class HeaderThreeComponent {

  public sticky: boolean = false;

  constructor(
    public cartService: CartService,
    public utilsService: UtilsService,
  ) { }

  // sticky nav
  @HostListener('window:scroll') onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
