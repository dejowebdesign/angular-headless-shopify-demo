import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { HeroSliderData } from 'src/app/shared/data/hero-slider-data';
import { IHeroSlider } from 'src/app/shared/types/hero-slider-t';
import { EffectFade, Pagination } from 'swiper/modules';
import { IProduct } from 'src/app/shared/types/product-d-t';
import { ProductService } from 'src/app/shared/services/product.service';
import IBlogType from 'src/app/shared/types/blog-d-t';
import blog_data from 'src/app/shared/data/blog-data';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-home-seven',
    templateUrl: './home-seven.component.html',
    styleUrls: ['./home-seven.component.scss'],
    standalone: false
})
export class HomeSevenComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  @ViewChild('productSliderContainer') productSliderContainer!: ElementRef;
  @ViewChild('blogSliderContainer') blogSliderContainer!: ElementRef;
  @ViewChild('brandSliderContainer') brandSliderContainer!: ElementRef;

  public swiperInstance: Swiper | undefined;
  public productSliderInstance: Swiper | undefined;
  public blogSliderInstance: Swiper | undefined;
  public brandSliderInstance: Swiper | undefined;

  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_seven;
  public blog_items: IBlogType[] = blog_data.filter(b => b.blog === 'home-7');

  public big_item_1: IProduct | undefined;
  public big_item_2: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public sm_best_prd: IProduct[] = [];

  constructor(private productService: ProductService,public utilsService:UtilsService) {
    this.productService.products.subscribe((products) => {
      const best_sale_prd = products.filter((p) => p.bestSeller);
      this.big_item_1 = best_sale_prd.filter(p => p.big_img)[0];
      this.big_item_2 = best_sale_prd.filter(p => p.big_img)[1];
      this.sm_best_prd = best_sale_prd.filter(p => !p.big_img);
    });
  }


  // client logos
  public client_logos:string[] = [
    '/assets/img/client/client-1.jpg',
    '/assets/img/client/client-2.jpg',
    '/assets/img/client/client-3.jpg',
    '/assets/img/client/client-4.jpg',
    '/assets/img/client/client-5.jpg',
    '/assets/img/client/client-2.jpg',
    '/assets/img/client/client-4.jpg',
  ]

  ngAfterViewInit() {
    if (this.heroSliderContainer) {
      this.swiperInstance = new Swiper('.slider-active-3', {
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

    if (this.productSliderContainer) {
      this.productSliderInstance = new Swiper('.product__slider-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 1,
          },
        }
      })
    }

    if (this.blogSliderContainer) {
      this.blogSliderInstance = new Swiper('.blog__slider-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 1,
          },
          '0': {
            slidesPerView: 1,
          },
        }
      })
    }

    if (this.brandSliderContainer) {
      this.brandSliderInstance = new Swiper('.brand__slider-active', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
          '1200': {
            slidesPerView: 5,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 1,
          },
        }
      })
    }

  }
}
