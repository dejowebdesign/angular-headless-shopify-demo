import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ShopifyCartService } from 'src/app/shared/services/shopify-cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-mini-cart',
    templateUrl: './mini-cart.component.html',
    styleUrls: ['./mini-cart.component.scss'],
    standalone: false
})
export class MiniCartComponent implements OnInit {
  isCheckoutProcessing = false;
  checkoutError: string | null = null;

  constructor(
    public cartService: CartService,
    private shopifyCartService: ShopifyCartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // Migrate old cart items that may be missing variantId
    this.migrateCartItems();
  }

  /**
   * Migrate cart items that were stored before variantId was added.
   * Looks up the current product from the ProductService cache and
   * updates the cart item with the fresh variantId.
   */
  private migrateCartItems(): void {
    const items = this.cartService.getCartProducts();
    let updated = false;

    items.forEach(item => {
      if (item.variantId === undefined || item.variantId === null) {
        // Look up the product from the cache to get the current variantId
        const cached = this.productService.getProductById(String(item.id));
        cached.subscribe(product => {
          if (product && product.variantId) {
            this.cartService.updateCartItemVariantId(item.id, product.variantId);
          }
        });
      }
    });
  }

  async proceedToCheckout(): Promise<void> {
    this.isCheckoutProcessing = true;
    this.checkoutError = null;

    try {
      const cartItems = this.cartService.getCartProducts();

      if (!cartItems || cartItems.length === 0) {
        this.checkoutError = 'Your cart is empty';
        return;
      }

      // Check for items still missing variantId (migration not yet complete)
      const itemsWithoutVariant = cartItems.filter(item => !item.variantId);
      if (itemsWithoutVariant.length > 0) {
        this.checkoutError = 'Some products are still loading. Please try again.';
        return;
      }

      const checkoutUrl = await this.shopifyCartService.synchronizeAndGetCheckoutUrl(cartItems);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        this.checkoutError = 'Failed to initialize checkout. Please try again.';
      }
    } catch (error) {
      console.error('Checkout error:', error);
      this.checkoutError = 'An unexpected error occurred during checkout';
    } finally {
      this.isCheckoutProcessing = false;
    }
  }
}
