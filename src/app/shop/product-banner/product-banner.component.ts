import { Component,Input } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-product-banner',
    templateUrl: './product-banner.component.html',
    styleUrls: ['./product-banner.component.scss'],
    standalone: false
})
export class ProductBannerComponent {
  @Input() style_2: boolean = false;
  @Input() style_3: boolean = false;

  public bannerProducts: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.bannerProducts = products.filter((p) => p.banner).slice(0, 2);
    });
  }
}
