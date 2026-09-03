import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { IProduct } from '../types/product-d-t';
import { ShopifyStorefrontService } from './shopify-storefront.service';
import { ProductMapperService } from './product-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public filter_offcanvas: boolean = false;
  public pageSize: number = 9;
  public activeImg: string | undefined;

  handleImageActive(img: string) {
    this.activeImg = img;
  }

  // GraphQL query – minimal fields needed for mapping
  private static readonly GET_PRODUCTS_QUERY = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            handle
            title
            description
            vendor
            productType
            featuredImage { url altText }
            images(first: 10) { edges { node { url altText } } }
            variants(first: 20) {
              edges {
                node {
                  id
                  title
                  price { amount currencyCode }
                  compareAtPrice { amount currencyCode }
                  availableForSale
                  quantityAvailable
                  selectedOptions { name value }
                }
              }
            }
          }
        }
      }
    }
  `;


  // Cached observable of products from Shopify
  private products$!: Observable<IProduct[]>;

  constructor(
    private storefront: ShopifyStorefrontService,
    private mapper: ProductMapperService
  ) {
    this.products$ = this.storefront.execute<any>(ProductService.GET_PRODUCTS_QUERY, { first: 100 }).pipe(
      map((res: any) => (res.products?.edges || []).map((e: any) => e.node)),
      map((nodes: any[]) => nodes.map(node => this.mapper.map(node))),
      tap(products => this.productCache = products), // keep cache for synchronous methods
      shareReplay(1)

    );
  }

  // Public getter – unchanged signature
  public get products(): Observable<IProduct[]> {
    return this.products$;
  }

  // Existing method – uses cached stream
  public getProductById(id: string): Observable<IProduct | undefined> {
    // Resolve from cached product stream to avoid extra network call
    return this.products$.pipe(
      map(products => products.find(p => p.id === Number(id))),
      map(product => product ? product : undefined)
    );
  }

  public getRelatedProducts(productId: number, brand: string): Observable<IProduct[]> {
    return this.products$.pipe(
      map(products => products.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()) && p.id !== productId))
    );
  }

  public filterProducts(): Observable<IProduct[]> {
    return this.products$;
  }

  // Synchronous methods – operate on already fetched data, unchanged
  public sortProducts(products: IProduct[], payload: string): any {
    if (payload === 'asc') {
      return products.sort((a, b) => a.id - b.id);
    } else if (payload === 'on-sale') {
      return products.filter(p => p.discount! > 0);
    } else if (payload === 'low') {
      return products.sort((a, b) => a.price - b.price);
    } else if (payload === 'high') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  }

  private productCache: IProduct[] = [];

  public get maxPrice(): number {
    // Calculate from cached product array; returns 0 if cache empty
    if (this.productCache.length === 0) {
      return 0;
    }
    return this.productCache.reduce((acc, p) => (p.price > acc ? p.price : acc), 0);
  }

  public filterSelect = [
    { value: 'asc', text: 'Default Sorting' },
    { value: 'low', text: 'Low to High' },
    { value: 'high', text: 'High to Low' },
    { value: 'on-sale', text: 'On Sale' },
  ];

  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) { currentPage = 1; } else if (currentPage > totalPages) { currentPage = totalPages; }
    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < 3) {
      startPage = 1;
      endPage = 3;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
}
