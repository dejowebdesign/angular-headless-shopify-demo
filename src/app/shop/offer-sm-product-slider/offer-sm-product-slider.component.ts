import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-offer-sm-product-slider',
    templateUrl: './offer-sm-product-slider.component.html',
    styleUrls: ['./offer-sm-product-slider.component.scss'],
    standalone: false
})

export class OfferSmProductSliderComponent {

  @ViewChild('trendingProductSliderContainer') trendingProductSliderContainer!: ElementRef;
  @ViewChild('onSellSliderContainer') onSellSliderContainer!: ElementRef;
  @ViewChild('topRatedSellSliderContainer') topRatedSellSliderContainer!: ElementRef;

  public trendingSellInstance: Swiper | undefined;
  public onSellInstance: Swiper | undefined;
  public topRatedSellInstance: Swiper | undefined;
  public trending_slider_products: {id:number;products:IProduct[]}[] = [];
  public discount_slider_products: {id:number;products:IProduct[]}[] = [];
  public top_rated_slider_products: {id:number;products:IProduct[]}[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.trending_slider_products = this.chunkArray(products.filter((p) => p.trending), 3);
      this.discount_slider_products = this.chunkArray(products.filter((p) => p.discount! > 0), 3);
      this.top_rated_slider_products = this.chunkArray(products.filter((p) => p.topRated), 3);
    });
  }

  private chunkArray(arr: IProduct[], chunkSize: number) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push({id:i+1,products:arr.slice(i, i + chunkSize)});
    }
    return chunkedArray;
  }

  ngAfterViewInit() {
    if (this.trendingProductSliderContainer) {
      this.trendingSellInstance = new Swiper('.trending_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
      })
    }
    if (this.onSellSliderContainer) {
      this.onSellInstance = new Swiper('.on_sell_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
      })
    }
    if (this.topRatedSellSliderContainer) {
      this.topRatedSellInstance = new Swiper('.top_rated_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
      })
    }
  }

}
