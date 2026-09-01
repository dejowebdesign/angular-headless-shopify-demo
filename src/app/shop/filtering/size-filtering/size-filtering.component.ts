import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-size-filtering',
    templateUrl: './size-filtering.component.html',
    styleUrls: ['./size-filtering.component.scss'],
    standalone: false
})
export class SizeFilteringComponent {
  public all_sizes: string[] = [];
  public size: string | null = null;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {
    this.productService.products.subscribe((products) => {
      products.forEach((product) => {
        let uniqueSizes = new Set(product.sizes);
        this.all_sizes = [...new Set([...this.all_sizes, ...uniqueSizes])];
      });
    });
    this.route.queryParams.subscribe((params) => {
      this.size = params['size'] ? params['size'] : null;
    });
  }

  handleSize(size: string) {
    // Define the query parameters as an object
    const queryParams: Params = {
      size: size.toLowerCase(),
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
}
