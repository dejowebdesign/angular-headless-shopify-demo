import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShopifyCustomerService } from '../shared/services/shopify-customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private customerService: ShopifyCustomerService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.customerService.isAuthenticated()) {
      return true;
    } else {
      // Not logged in, redirect to login page
      this.router.navigate(['/pages/login']);
      return false;
    }
  }
}
