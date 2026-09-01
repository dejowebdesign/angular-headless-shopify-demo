import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
    selector: 'app-mini-cart',
    templateUrl: './mini-cart.component.html',
    styleUrls: ['./mini-cart.component.scss'],
    standalone: false
})
export class MiniCartComponent {
  constructor(public cartService: CartService) { }
}
