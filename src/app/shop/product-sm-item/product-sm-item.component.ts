import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-product-sm-item',
    templateUrl: './product-sm-item.component.html',
    styleUrls: ['./product-sm-item.component.scss'],
    standalone: false
})
export class ProductSmItemComponent {
  @Input() product!: IProduct;

  constructor(
    public cartService: CartService
  ) { }

  // add to cart
  addToCart(item: IProduct) {
    this.cartService.addCartProduct(item);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
}
