import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-home-three',
    templateUrl: './home-three.component.html',
    styleUrls: ['./home-three.component.scss'],
    standalone: false
})
export class HomeThreeComponent {

  public big_item_1: IProduct | undefined;
  public big_item_2: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public discount_products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.big_item_1 = products.filter(p => p.big_img)[0];
      this.big_item_2 = products.filter(p => p.big_img)[1];
      this.trending_products = products.filter(p => p.trending);
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0,5);
    });
  }

  ngAfterViewInit() {}

}
