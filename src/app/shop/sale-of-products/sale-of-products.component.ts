import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-sale-of-products',
    templateUrl: './sale-of-products.component.html',
    styleUrls: ['./sale-of-products.component.scss'],
    standalone: false
})
export class SaleOfProductsComponent {

  public discount_products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0, 5);
    });
  }

}
