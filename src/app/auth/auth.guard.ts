import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShopifyCustomerAccountService } from '../shared/services/shopify-customer-account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private oauthService: ShopifyCustomerAccountService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const oauthAuthenticated = this.oauthService.isAuthenticated();
    
    if (oauthAuthenticated) {
      return true;
    } else {
      // Not logged in, redirect to login page (which will start Shopify login)
      this.router.navigate(['/pages/login']);
      return false;
    }
  }
}
