import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';
import { HeroSliderData } from 'src/app/shared/data/hero-slider-data';
import { IHeroSlider } from 'src/app/shared/types/hero-slider-t';
import { IProduct } from 'src/app/shared/types/product-d-t';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-home-six',
    templateUrl: './home-six.component.html',
    styleUrls: ['./home-six.component.scss'],
    standalone: false
})
export class HomeSixComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_one;
  public perView: number = 8;

  public big_item_1: IProduct | undefined;
  public big_item_2: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public discount_products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.big_item_1 = products.filter((p) => p.big_img)[0];
      this.big_item_2 = products.filter((p) => p.big_img)[1];
      this.trending_products = products.filter((p) => p.trending);
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0, 5);
    });
  }
  // handle per view
  handlePerView() {
    this.perView = this.perView + 4;
  }

  ngAfterViewInit() {
    if (this.heroSliderContainer) {
      this.swiperInstance = new Swiper('.slider-active', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        effect: 'fade',
        modules: [Pagination, EffectFade],
        pagination: {
          clickable: true,
          el: '.tp-slider-dot',
        },
      });
    }
  }
}
