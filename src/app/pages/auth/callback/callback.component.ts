import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopifyCustomerAccountService } from '../../../shared/services/shopify-customer-account.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  standalone: false
})
export class CallbackComponent implements OnInit {
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauthService: ShopifyCustomerAccountService
  ) {}

  async ngOnInit() {
    // Get query parameters from the callback URL
    const queryParams = this.route.snapshot.queryParams;
    const code = queryParams['code'];
    const returnedState = queryParams['state'];
    const error = queryParams['error'];
    const errorDescription = queryParams['error_description'];

    // Handle OAuth errors from Shopify
    if (error) {
      this.isLoading = false;
      this.errorMessage = errorDescription || error;
      return;
    }

    // Check for authorization code
    if (!code) {
      this.isLoading = false;
      this.errorMessage = 'No authorization code received.';
      return;
    }

    try {
      // Validate state to prevent CSRF attacks
      this.oauthService.validateState(returnedState);

      // Exchange authorization code for tokens
      const tokens = await this.oauthService.exchangeCodeForTokens(code);

      // Store the returned OAuth tokens
      this.oauthService.storeTokens(tokens);

      // Clear temporary OAuth PKCE state and verifier
      this.oauthService.clearSessionData();

      // Redirect to account page
      this.router.navigate(['/pages/account']);
    } catch (error: any) {
      this.isLoading = false;
      this.errorMessage = error.message || 'An error occurred during authentication.';
      // Clear session data on error as well
      this.oauthService.clearSessionData();
    }
  }
}
