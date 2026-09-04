import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ShopifyCartService } from 'src/app/shared/services/shopify-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: false
})
export class CartComponent {
  
  couponCode: string = '';
  shipCost: number = 0;
  isCheckoutProcessing = false;
  checkoutError: string | null = null;

  constructor (
    public cartService:CartService,
    private shopifyCartService: ShopifyCartService
  ) {}

  handleCouponSubmit() {
    if(this.couponCode){
      this.couponCode = '';
    }
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }

  async proceedToCheckout() {
    this.isCheckoutProcessing = true;
    this.checkoutError = null;
    
    try {
      const cartItems = this.cartService.getCartProducts();
      
      if (!cartItems || cartItems.length === 0) {
        this.checkoutError = 'Your cart is empty';
        return;
      }
      
      // Validate that all items have variantId (required for Shopify Cart API)
      const itemsWithoutVariant = cartItems.filter(item => !item.variantId);
      if (itemsWithoutVariant.length > 0) {
        this.checkoutError = 'Some products are missing variant information and cannot be processed for checkout';
        return;
      }
      
      // Synchronize with Shopify and get checkout URL
      const checkoutUrl = await this.shopifyCartService.synchronizeAndGetCheckoutUrl(cartItems);
      
      if (checkoutUrl) {
        // Redirect to Shopify checkout
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