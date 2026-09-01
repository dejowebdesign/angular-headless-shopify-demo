import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-color-filtering',
    templateUrl: './color-filtering.component.html',
    styleUrls: ['./color-filtering.component.scss'],
    standalone: false
})
export class ColorFilteringComponent {
  public all_colors: string[] = [];
  public color: string | null = null;

  handleColor(color: string) {
    // Define the query parameters as an object
    const queryParams: Params = {
      color: color.split(' ').join('-').toLowerCase(),
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
      products.forEach((product) => {
        let uniqueColors = new Set(product.colors);
        this.all_colors = [...new Set([...this.all_colors, ...uniqueColors])];
      });
    });
    this.route.queryParams.subscribe((params) => {
      this.color = params['color'] ? params['color'] : null;
    });
  }
}
