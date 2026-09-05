import { Injectable } from '@angular/core';
import { ShopifyStorefrontService } from './shopify-storefront.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

interface CustomerAccessTokenCreateResponse {
  customerAccessTokenCreate: {
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: Array<{ message: string; field: string[] }>;
  };
}

interface CustomerAccessTokenDeleteResponse {
  customerAccessTokenDelete: {
    deletedAccessToken: string;
    deletedUserErrors: Array<{ message: string; field: string[] }>;
  };
}

interface CustomerCreateResponse {
  customerCreate: {
    customer: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
    customerUserErrors: Array<{ message: string; field: string[] }>;
  };
}

interface CustomerRecoverResponse {
  customerRecover: {
    userErrors: Array<{ message: string; field: string[] }>;
  };
}

interface GetCurrentCustomerResponse {
  customer: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    addresses: {
      edges: Array<{
        node: {
          address1: string | null;
          address2: string | null;
          city: string | null;
          province: string | null;
          country: string | null;
          zip: string | null;
        }
      }> | null;
    }
  } | null;
}

@Injectable({
  providedIn: 'root'
})
export class ShopifyCustomerService {

  private tokenSubject = new BehaviorSubject<string | null>(null);
  private readonly TOKEN_KEY = 'shopify_legacy_access_token';

  constructor(private storefront: ShopifyStorefrontService) {
    const token = sessionStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  login(email: string, password: string): Observable<{ success: boolean; errors?: string[] }> {
    const mutation = `\n      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {\n        customerAccessTokenCreate(input: $input) {\n          customerAccessToken {\n            accessToken\n            expiresAt\n          }\n          customerUserErrors {\n            message\n            field\n          }\n        }\n      }\n    `;
    const variables = { input: { email, password } };
    return this.storefront.execute<CustomerAccessTokenCreateResponse>(mutation, variables).pipe(
      map(result => {
        const payload = result.customerAccessTokenCreate;
        if (payload.customerUserErrors.length > 0) {
          return { success: false, errors: payload.customerUserErrors.map(e => e.message) };
        }
        const token = payload.customerAccessToken?.accessToken;
        if (!token) {
          return { success: false, errors: ['Login failed: no access token returned'] };
        }
        this.tokenSubject.next(token);
        sessionStorage.setItem(this.TOKEN_KEY, token);
        return { success: true };
      }),
      catchError(error => {
        console.error('Login error', error);
        return of({ success: false, errors: ['Login failed'] });
      })
    );
  }

  logout(): Observable<void> {
    const token = this.tokenSubject.getValue();
    if (!token) {
      return of(void 0);
    }
    const mutation = `\n      mutation customerAccessTokenDelete($accessToken: String!) {\n        customerAccessTokenDelete(accessToken: $accessToken) {\n          deletedAccessToken\n          deletedUserErrors {\n            message\n            field\n          }\n        }\n      }\n    `;
    const variables = { accessToken: token };
    return this.storefront.execute<CustomerAccessTokenDeleteResponse>(mutation, variables).pipe(
      tap(() => {
        this.tokenSubject.next(null);
        sessionStorage.removeItem(this.TOKEN_KEY);
      }),
      map(() => void 0),
      catchError(error => {
        console.error('Logout error', error);
        // Even if delete fails, we clear local state
        this.tokenSubject.next(null);
        sessionStorage.removeItem(this.TOKEN_KEY);
        return of(void 0);
      })
    );
  }

  register(firstName: string, lastName: string, email: string, password: string, phone?: string): Observable<{ success: boolean; errors?: string[] }> {
    const mutation = `\n      mutation customerCreate($input: CustomerCreateInput!) {\n        customerCreate(input: $input) {\n          customer {\n            id\n            email\n            firstName\n            lastName\n          }\n          customerUserErrors {\n            message\n            field\n          }\n        }\n      }\n    `;
    const variables = { input: { firstName, lastName, email, password, ...(phone && { phone }) } };
    return this.storefront.execute<CustomerCreateResponse>(mutation, variables).pipe(
      map(result => {
        const payload = result.customerCreate;
        if (payload.customerUserErrors.length > 0) {
          return { success: false, errors: payload.customerUserErrors.map(e => e.message) };
        }
        // Optionally auto-login after registration
        return { success: true };
      }),
      catchError(error => {
        console.error('Register error', error);
        return of({ success: false, errors: ['Registration failed'] });
      })
    );
  }

  recoverPassword(email: string): Observable<{ success: boolean; errors?: string[] }> {
    const mutation = `\n      mutation customerRecover($input: CustomerRecoverInput!) {\n        customerRecover(input: $input) {\n          userErrors {\n            message\n            field\n          }\n        }\n      }\n    `;
    const variables = { input: { email } };
    return this.storefront.execute<CustomerRecoverResponse>(mutation, variables).pipe(
      map(result => {
        const payload = result.customerRecover;
        if (payload.userErrors.length > 0) {
          return { success: false, errors: payload.userErrors.map(e => e.message) };
        }
        return { success: true };
      }),
      catchError(error => {
        console.error('Recover password error', error);
        return of({ success: false, errors: ['Recovery email failed'] });
      })
    );
  }

  getCurrentCustomer(): Observable<{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    address: string | null;
  } | null> {
    const token = this.tokenSubject.getValue();
    if (!token) {
      return of(null);
    }
    const query = `\n      {\n        customer {\n          id\n\n          email\n          firstName\n          lastName\n          phone\n          addresses(first: 1) {\n            edges {\n              node {\n                address1\n                address2\n                city\n                province\n                country\n                zip\n              }\n            }\n          }\n        }\n      }\n    `;
    return this.storefront.execute<GetCurrentCustomerResponse>(query).pipe(
      map(result => {
        const customer = result.customer;
        if (!customer) {
          return null;
        }
        let address = null;
        if (customer.addresses?.edges?.length) {
          const addr = customer.addresses.edges[0].node;
          const parts = [
            addr.address1,
            addr.address2,
            addr.city,
            addr.province,
            addr.country,
            addr.zip
          ].filter(p => p !== null && p !== '');
          address = parts.join(', ');
        }
        return {
          id: customer.id,
          email: customer.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
          phone: customer.phone,
          address: address
        };
      })
    );
  }
}