import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ShopifyCustomerAccountService } from '../../shared/services/shopify-customer-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  isLoading = false;
  loginError = '';

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private oauthService: ShopifyCustomerAccountService
  ) { }

  ngOnInit () {
    this.isLoading = true;
    this.oauthService.startLogin().then(
      () => {
        // startLogin handles the redirect
        this.isLoading = false;
      }
    ).catch(
      error => {
        this.isLoading = false;
        this.loginError = error.message || 'Failed to initiate Shopify login';
        this.toastrService.error(this.loginError);
      }
    );
  }
}