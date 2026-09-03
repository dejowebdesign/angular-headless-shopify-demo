import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopifyStorefrontService {
  private endpoint = `https://${environment.shopDomain}/api/2026-01/graphql.json`;

  constructor(private http: HttpClient) {}

  execute<T>(query: string, variables?: any): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': environment.storefrontPublicToken
    });
    return this.http.post<{ data?: T; errors?: any }>(this.endpoint, { query, variables }, { headers })
      .pipe(
        map(resp => {
          if (resp.errors && resp.errors.length) {
            console.error('Shopify GraphQL errors', resp.errors);
            throw new Error('Shopify GraphQL error');
          }
          if (!resp.data) {
            throw new Error('No data from Shopify');
          }
          return resp.data as T;
        }),
        catchError(err => {
          console.error('Shopify request failed', err);
          return throwError(() => err);
        })
      );
  }
}