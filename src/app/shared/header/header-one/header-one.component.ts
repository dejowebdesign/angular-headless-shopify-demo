import { Component,HostListener,Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    standalone: false
})
export class HeaderOneComponent {
  @Input () header_big = false;
  @Input () white_bg = false;
  @Input () transparent = false;


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
