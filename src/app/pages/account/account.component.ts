import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopifyCustomerAccountService } from '../../shared/services/shopify-customer-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: false
})
export class AccountComponent implements OnInit {
  isLoading = false;
  loadError = false;

  constructor(
    private router: Router,
    private oauthService: ShopifyCustomerAccountService
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    try {
      const authenticated = this.oauthService.isAuthenticated();
      if (!authenticated) {
        // Not authenticated: start Shopify login flow
        await this.oauthService.startLogin();
        // startLogin handles the redirect, so we don't navigate here
        this.isLoading = false;
      } else {
        // Authenticated: get account management URL and redirect
        const accountUrl = await this.oauthService.getAccountManagementUrl();
        if (accountUrl) {
          window.location.href = accountUrl;
        } else {
          // Fallback: if we cannot determine the URL, start login (should not happen)
          await this.oauthService.startLogin();
        }
        this.isLoading = false;
      }
    } catch (error) {
      this.isLoading = false;
      this.loadError = true;
      console.error('Account init error:', error);
    }
  }
}
