import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Pagination,EffectFade } from 'swiper/modules';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';
import { IHeroSlider } from 'src/app/shared/types/hero-slider-t';
import { HeroSliderData } from 'src/app/shared/data/hero-slider-data';

@Component({
    selector: 'app-home-one',
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss'],
    standalone: false
})

export class HomeOneComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_one;
  public trendingProducts: IProduct[] = [];
  public bannerProducts: IProduct[] = [];
  public discountProducts: IProduct[] = [];
  public perView: number = 8;

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.trendingProducts = products.filter((p) => p.trending);
      this.bannerProducts = products.filter((p) => p.banner).slice(0, 2);
      this.discountProducts = products.filter((p) => p.discount! > 0).slice(0,5);
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
        effect : 'fade',
        modules:[Pagination,EffectFade],
        pagination: {
          clickable: true,
          el:'.tp-slider-dot'
        },
      })
    }
  }
}
