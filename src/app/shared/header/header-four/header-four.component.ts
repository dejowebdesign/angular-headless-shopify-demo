import { Component, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-header-four',
    templateUrl: './header-four.component.html',
    styleUrls: ['./header-four.component.scss'],
    standalone: false
})
export class HeaderFourComponent {

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
