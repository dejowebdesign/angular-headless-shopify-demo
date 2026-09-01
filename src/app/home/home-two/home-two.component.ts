import { Component} from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-home-two',
    templateUrl: './home-two.component.html',
    styleUrls: ['./home-two.component.scss'],
    standalone: false
})
export class HomeTwoComponent {
  public big_item: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public discount_products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.big_item = products.find(p => p.big_img);
      this.trending_products = products.filter(p => p.trending).slice(0, 6);
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0,12);
    });
  }


  ngAfterViewInit() {

  }
}
