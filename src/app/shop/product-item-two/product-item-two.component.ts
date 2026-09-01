import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-product-item-two',
    templateUrl: './product-item-two.component.html',
    styleUrls: ['./product-item-two.component.scss'],
    standalone: false
})
export class ProductItemTwoComponent {
  @Input() product!: IProduct;

  constructor(
    public cartService: CartService,
    public utilsService: UtilsService,
  ) {}

  // add to cart
  addToCart(item: IProduct) {
    this.cartService.addCartProduct(item);
  }
  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
}
