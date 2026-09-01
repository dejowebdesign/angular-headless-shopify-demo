import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';


@Component({
    selector: 'app-shop-details',
    templateUrl: './shop-details.component.html',
    styleUrls: ['./shop-details.component.scss'],
    standalone: false
})
export class ShopDetailsComponent {

  public product:IProduct | undefined;
  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products[0];
    });
  }

}
