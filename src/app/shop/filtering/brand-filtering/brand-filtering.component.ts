import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-brand-filtering',
    templateUrl: './brand-filtering.component.html',
    styleUrls: ['./brand-filtering.component.scss'],
    standalone: false
})
export class BrandFilteringComponent {
  public brands: string[] = [];
  public brand: string | null = null;

  public activeCls = '';

  handleBrand(brand: string) {
    this.activeCls = brand;
    // Define the query parameters as an object
    const queryParams: Params = {
      brand: brand.toLowerCase(),
    };

    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams, // Pass the queryParams object here
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products'); // Anchore Link
      });
  }

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {
    this.productService.products.subscribe((products) => {
      this.brands = [...new Set(products.map((p) => p.brand))];
    });
    this.route.queryParams.subscribe((params) => {
      this.brand = params['brand'] ? params['brand'] : null;
    });
  }
}
