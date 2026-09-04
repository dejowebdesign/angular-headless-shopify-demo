import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IProduct } from '../types/product-d-t';
import { ShopifyStorefrontService } from './shopify-storefront.service';

interface CartLineInput {
  merchandiseId: string;
  quantity: number;
}

interface CartInput {
  lines: CartLineInput[];
}

interface CartCreatePayload {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
    };
    userErrors: Array<{ field: string[]; message: string }>;
  };
}

interface CartLinesAddPayload {
  cartLinesAdd: {
    cart: {
      id: string;
      checkoutUrl: string;
    };
    userErrors: Array<{ field: string[]; message: string }>;
  };
}

interface CartLinesRemovePayload {
  cartLinesRemove: {
    cart: {
      id: string;
    };
    userErrors: Array<{ field: string[]; message: string }>;
  };
}

interface CartQueryPayload {
  cart: {
    id: string;
    checkoutUrl: string;
    lines: {
      edges: Array<{
        node: {
          id: string;
          quantity: number;
          merchandise: {
            id: string;
          };
        };
      }>;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class ShopifyCartService {
  private readonly CART_ID_STORAGE_KEY = 'shopify_cart_id';

  constructor(private storefront: ShopifyStorefrontService) {}

  /**
   * Build a full Shopify ProductVariant GID from a variantId.
   * Handles both cases:
   *   - variantId is already a full GID (e.g. "gid://shopify/ProductVariant/123")
   *   - variantId is just the numeric part (e.g. "123")
   */
  private buildMerchandiseId(variantId: string | undefined): string | null {
    if (!variantId) return null;
    if (variantId.startsWith('gid://shopify/ProductVariant/')) {
      return variantId;
    }
    return `gid://shopify/ProductVariant/${variantId}`;
  }

  /**
   * Create a new Shopify cart with the given line items.
   * Returns the checkoutUrl on success, null on failure.
   */
  async createCart(items: IProduct[]): Promise<string | null> {
    try {
      const lines: CartLineInput[] = items
        .map(item => {
          const merchandiseId = this.buildMerchandiseId(item.variantId);
          if (!merchandiseId) return null;
          return {
            merchandiseId,
            quantity: item.orderQuantity || 1
          };
        })
        .filter((l): l is CartLineInput => l !== null);

      if (lines.length === 0) {
        console.error('No valid line items to create cart');
        return null;
      }

      const mutation = `
        mutation CreateCart($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const result = await firstValueFrom(
        this.storefront.execute<CartCreatePayload>(mutation, { input: { lines } })
      );

      if (result.cartCreate.userErrors.length > 0) {
        console.error('Shopify cartCreate userErrors:', result.cartCreate.userErrors);
        return null;
      }

      if (result.cartCreate.cart?.id) {
        localStorage.setItem(this.CART_ID_STORAGE_KEY, result.cartCreate.cart.id);
        return result.cartCreate.cart.checkoutUrl;
      }

      return null;
    } catch (error) {
      console.error('Failed to create Shopify cart:', error);
      return null;
    }
  }

  /**
   * Fetch the checkoutUrl for an existing cart.
   */
  async getCheckoutUrl(cartId: string): Promise<string | null> {
    try {
      const query = `
        query GetCart($cartId: ID!) {
          cart(id: $cartId) {
            id
            checkoutUrl
          }
        }
      `;

      const result = await firstValueFrom(
        this.storefront.execute<{ cart: { id: string; checkoutUrl: string } }>(query, { cartId })
      );

      return result.cart?.checkoutUrl ?? null;
    } catch (error) {
      console.error('Failed to get Shopify checkout URL:', error);
      return null;
    }
  }

  /**
   * Add line items to an existing cart.
   */
  async addLineItems(
    cartId: string,
    items: IProduct[]
  ): Promise<{ id: string; checkoutUrl: string } | null> {
    try {
      const lines: CartLineInput[] = items
        .map(item => {
          const merchandiseId = this.buildMerchandiseId(item.variantId);
          if (!merchandiseId) return null;
          return {
            merchandiseId,
            quantity: item.orderQuantity || 1
          };
        })
        .filter((l): l is CartLineInput => l !== null);

      if (lines.length === 0) return null;

      const mutation = `
        mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const result = await firstValueFrom(
        this.storefront.execute<CartLinesAddPayload>(mutation, { cartId, lines })
      );

      if (result.cartLinesAdd.userErrors.length > 0) {
        console.error('Shopify cartLinesAdd userErrors:', result.cartLinesAdd.userErrors);
        return null;
      }

      if (result.cartLinesAdd.cart) {
        return {
          id: result.cartLinesAdd.cart.id,
          checkoutUrl: result.cartLinesAdd.cart.checkoutUrl
        };
      }

      return null;
    } catch (error) {
      console.error('Failed to add line items to Shopify cart:', error);
      return null;
    }
  }

  /**
   * Remove all line items from a cart.
   */
  async removeAllLineItems(cartId: string): Promise<boolean> {
    try {
      // First, fetch the line IDs so we know what to remove
      const query = `
        query GetCartLines($cartId: ID!) {
          cart(id: $cartId) {
            id
            lines(first: 100) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      `;

      const cartResult = await firstValueFrom(
        this.storefront.execute<CartQueryPayload>(query, { cartId })
      );

      const lineIds = cartResult.cart?.lines?.edges?.map(e => e.node.id) ?? [];

      if (lineIds.length === 0) return true;

      const mutation = `
        mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
          cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
            cart {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const result = await firstValueFrom(
        this.storefront.execute<CartLinesRemovePayload>(mutation, { cartId, lineIds })
      );

      if (result.cartLinesRemove.userErrors.length > 0) {
        console.error('Shopify cartLinesRemove userErrors:', result.cartLinesRemove.userErrors);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Failed to remove line items from Shopify cart:', error);
      return false;
    }
  }

  /**
   * Get the stored Shopify cart ID from localStorage.
   */
  getCartId(): string | null {
    return localStorage.getItem(this.CART_ID_STORAGE_KEY);
  }

  /**
   * Clear the stored Shopify cart ID.
   */
  clearCartId(): void {
    localStorage.removeItem(this.CART_ID_STORAGE_KEY);
  }

  /**
   * Main entry point for checkout:
   * - If Angular cart is empty → clear Shopify cart and return null
   * - If no stored cart ID → create a new Shopify cart
   * - If stored cart ID exists → replace all its lines with current Angular cart
   * Returns the Shopify checkoutUrl on success, null on failure.
   */
  async synchronizeAndGetCheckoutUrl(cartItems: IProduct[]): Promise<string | null> {
    if (!cartItems || cartItems.length === 0) {
      const existingCartId = this.getCartId();
      if (existingCartId) {
        await this.removeAllLineItems(existingCartId);
        this.clearCartId();
      }
      return null;
    }

    let cartId = this.getCartId();

    if (!cartId) {
      // No existing Shopify cart — create one with all items
      return await this.createCart(cartItems);
    }

    // Existing cart — replace all its lines with the current Angular cart
    const removed = await this.removeAllLineItems(cartId);
    if (!removed) {
      // Could not clear the old cart — fall back to creating a new one
      this.clearCartId();
      return await this.createCart(cartItems);
    }

    // Re-add all current Angular cart items to the now-empty cart
    const added = await this.addLineItems(cartId, cartItems);
    if (added) {
      return added.checkoutUrl;
    }

    // Failed to add items — try creating a fresh cart as fallback
    this.clearCartId();
    return await this.createCart(cartItems);
  }
}
