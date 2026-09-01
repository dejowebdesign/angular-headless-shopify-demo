import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { IProduct } from 'src/app/shared/types/product-d-t';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: false
})
export class SearchComponent {

  public products: IProduct[] = [];
  public filteredProducts: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';
  public perView: number = 8;
  public sortBy: string = 'asc';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params['searchText'] || '';
      this.productType = params['productType'] || '';
      this.sortBy = params['sortBy'] || 'asc';

      this.productService.products.subscribe((productData) => {
        this.products = productData;

        switch (this.sortBy) {
          case 'asc':
            this.products = this.products.sort((a, b) => {
              if (a.title < b.title) {
                return -1;
              } else if (a.title > b.title) {
                return 1;
              }
              return 0;
            })
            break;

          case 'high':
            this.products = this.products.sort(
              (a, b) => Number(a.price) - Number(b.price)
            );
            break;

          case 'low':
            this.products = this.products.sort(
              (a, b) => Number(b.price) - Number(a.price)
            );
            break;

          case 'sale':
            this.products = this.products.filter((p) => p.discount! > 0);
            break;

          default:
            this.products = productData;
            break;
        }

        if (this.searchText && !this.productType) {
          this.products = productData.filter((prd) =>
            prd.title.split(' ').join('-').toLowerCase().includes(this.searchText)
          );
        }
        if (this.productType && !this.searchText) {
          this.products = productData.filter(
            (prd) => prd.category.toLowerCase() === this.productType.toLowerCase()
          );
        }

        if (this.productType && this.searchText) {
          this.products = productData
            .filter(
              (prd) => prd.category.toLowerCase() === this.productType.toLowerCase()
            )
            .filter((p) =>
              p.title.toLowerCase().includes(this.searchText.toLowerCase())
            );
        }

      });
    });
  }

  ngOnInit(): void {}

  handlePerView(): void {
    this.perView += 4;
  }

  onSortingChange(value: string) {
    this.sortByFilter(value);
  }

  // SortBy Filter
  sortByFilter(value: string) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { sortBy: value ? value : null },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products');
      });
  }

   // product Pagination
   setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge',
        skipLocationChange: false
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products');
      });
  }
}
