import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-related-products',
    templateUrl: './related-products.component.html',
    styleUrls: ['./related-products.component.scss'],
    standalone: false
})
export class RelatedProductsComponent {
  @Input() productId: number | undefined;
  @Input() brand: string | undefined;
  public related_products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    if (this.productId && this.brand) {
      this.productService
        .getRelatedProducts(this.productId, this.brand)
        .subscribe((products) => {
          this.related_products = products.slice(0, 4);
        });
    }
  }
}
