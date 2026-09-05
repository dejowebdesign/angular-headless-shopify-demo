import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopifyCustomerService } from '../../shared/services/shopify-customer.service';
import { ShopifyCustomerAccountService } from '../../shared/services/shopify-customer-account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {
  isShowPass = false;
  isLoading = false;
  loginError = '';

  handleShowPass () {
    this.isShowPass = !this.isShowPass;
  }

  public loginForm!: FormGroup;
  public formSubmitted = false;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private customerService: ShopifyCustomerService,
    private oauthService: ShopifyCustomerAccountService
  ) { }

  ngOnInit () {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    this.loginError = '';
    if (this.loginForm.valid) {
      this.isLoading = true;
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.customerService.login(email, password).subscribe(
        result => {
          this.isLoading = false;
          if (result.success) {
            // Navigate to account page
            this.router.navigate(['/pages/account']);
          } else {
            this.loginError = result.errors?.join(', ') || 'Login failed';
            this.toastrService.error(this.loginError);
          }
        },
        error => {
          this.isLoading = false;
          console.error('Login error', error);
          this.loginError = 'Login failed';
          this.toastrService.error('Login failed');
        }
      );
    }
  }

  // Shopify Customer Accounts login action
  loginWithShopify(): void {
    this.isLoading = true;
    this.oauthService.startLogin().then(
      () => {
        // startLogin handles the redirect, so we don't navigate here
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

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
}
