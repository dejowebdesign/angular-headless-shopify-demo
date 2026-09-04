import { Component, OnInit } from '@angular/core';
import { ShopifyCustomerService } from '../../shared/services/shopify-customer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    standalone: false
})
export class AccountComponent implements OnInit {
  customer: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    address: string | null;
  } | null = null;
  isLoading = true;
  loadError = false;

  constructor(
    private customerService: ShopifyCustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService.getCurrentCustomer().subscribe({
      next: (data) => {
        this.customer = data;
        this.isLoading = false;
      },
      error: () => {
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }

  logout() {
    this.customerService.logout().subscribe({
      complete: () => {
        this.router.navigate(['/pages/login']);
      }
    });
  }
}
