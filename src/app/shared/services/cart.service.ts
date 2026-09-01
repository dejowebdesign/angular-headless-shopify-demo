import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../types/product-d-t';

const state = {
  cart_products: JSON.parse(localStorage['cart_products'] || '[]')
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orderQuantity: number = 1;
  public isCartOpen: boolean = false;
  constructor(private toastrService: ToastrService) { }

  public getCartProducts(): IProduct[] {
    return state.cart_products;
  }

  handleOpenCartSidebar () {
    this.isCartOpen = !this.isCartOpen
  }

  // add_cart_product
  addCartProduct(payload: IProduct) {
    const isExist = state.cart_products.some((i: IProduct) => i.id === payload.id);
    if (payload.status === 'out-of-stock' || payload.quantity === 0) {
      this.toastrService.error(`Out of stock ${payload.title}`);
    }
    else if (!isExist) {
      const newItem = {
        ...payload,
        orderQuantity: 1,
      };
      state.cart_products.push(newItem);
      this.toastrService.success(`${payload.title} added to cart`);
    } else {
      state.cart_products.map((item: IProduct) => {
        if (item.id === payload.id) {
          if (typeof item.orderQuantity !== "undefined") {
            if (item.quantity >= item.orderQuantity + this.orderQuantity) {
              item.orderQuantity =
                this.orderQuantity !== 1
                  ? this.orderQuantity + item.orderQuantity
                  : item.orderQuantity + 1;
              this.toastrService.success(`${this.orderQuantity} ${item.title} added to cart`);
            } else {
              this.toastrService.success(`No more quantity available for this product!`);
              this.orderQuantity = 1;
            }
          }
        }
        return { ...item };
      });
    }
    localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
  };

// total price quantity
  public totalPriceQuantity() {
    return state.cart_products.reduce(
      (cartTotal: { total: number; quantity: number }, cartItem: IProduct) => {
        const { price, orderQuantity, discount } = cartItem;
        if (typeof orderQuantity !== "undefined") {
          if (discount && discount > 0) {
            // Calculate the item total with discount
            const itemTotal = (price - (price * discount) / 100) * orderQuantity;
            cartTotal.total += itemTotal;
          } else {
            // Calculate the item total without discount
            const itemTotal = price * orderQuantity;
            cartTotal.total += itemTotal;
          }
          cartTotal.quantity += orderQuantity;
        }
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
  };


  // quantity increment
  increment() {
    return this.orderQuantity = this.orderQuantity + 1;
  }

  // quantity decrement
  decrement() {
    return this.orderQuantity =
      this.orderQuantity > 1
        ? this.orderQuantity - 1
        : this.orderQuantity = 1;
  }

  // quantityDecrement
  quantityDecrement(payload: IProduct) {
    state.cart_products.map((item: IProduct) => {
      if (item.id === payload.id) {
        if (typeof item.orderQuantity !== "undefined") {
          if (item.orderQuantity > 1) {
            item.orderQuantity = item.orderQuantity - 1;
            this.toastrService.info(`Decrement Quantity For ${item.title}`);
          }
        }
      }
      return { ...item };
    });
    localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
  };

  // remover_cart_products
  removeCartProduct(payload: IProduct) {
    state.cart_products = state.cart_products.filter(
      (p: IProduct) => p.id !== payload.id
    );
    this.toastrService.error(`${payload.title} remove to cart`);
    localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
  };

  // clear cart
  clear_cart() {
    const confirmMsg = window.confirm(
      "Are you sure deleted your all cart items ?"
    );
    if (confirmMsg) {
      state.cart_products = [];
    }
    localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
  };
  // initialOrderQuantity
  initialOrderQuantity() {
    return this.orderQuantity = 1;
  };
}
