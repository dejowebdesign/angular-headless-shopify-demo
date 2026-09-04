import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopifyCustomerService } from '../../shared/services/shopify-customer.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: false
})
export class RegisterComponent {

  isShowPass = false;
  isLoading = false;
  registerError = '';

  handleShowPass () {
    this.isShowPass = !this.isShowPass;
  }

  public registerForm!: FormGroup;
  public formSubmitted = false;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private customerService: ShopifyCustomerService
  ) { }

  ngOnInit () {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    this.registerError = '';
    if (this.registerForm.valid) {
      this.isLoading = true;
      const firstName = this.registerForm.get('name')?.value.split(' ')[0] || '';
      const lastName = this.registerForm.get('name')?.value.split(' ')[1] || '';
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      this.customerService.register(firstName, lastName, email, password).subscribe(
        result => {
          this.isLoading = false;
          if (result.success) {
            // Optionally auto-login and navigate to account
            this.toastrService.success('Registration successful');
            this.router.navigate(['/pages/login']);
          } else {
            this.registerError = result.errors?.join(', ') || 'Registration failed';
            this.toastrService.error(this.registerError);
          }
        },
        error => {
          this.isLoading = false;
          console.error('Register error', error);
          this.registerError = 'Registration failed';
          this.toastrService.error('Registration failed');
        }
      );
    }
  }

  get name() { return this.registerForm.get('name') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
}
