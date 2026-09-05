import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShopifyCustomerService } from '../shared/services/shopify-customer.service';
import { ShopifyCustomerAccountService } from '../shared/services/shopify-customer-account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private customerService: ShopifyCustomerService,
    private oauthService: ShopifyCustomerAccountService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const legacyAuthenticated = this.customerService.isAuthenticated();
    const oauthAuthenticated = this.oauthService.isAuthenticated();
    
    if (legacyAuthenticated || oauthAuthenticated) {
      return true;
    } else {
      // Not logged in, redirect to login page
      this.router.navigate(['/pages/login']);
      return false;
    }
  }
}