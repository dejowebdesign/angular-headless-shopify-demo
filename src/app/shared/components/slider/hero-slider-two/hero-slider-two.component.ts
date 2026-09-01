import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { HeroSliderData } from 'src/app/shared/data/hero-slider-data';
import { IHeroSlider } from 'src/app/shared/types/hero-slider-t';
import { EffectFade, Pagination } from 'swiper/modules';

@Component({
    selector: 'app-hero-slider-two',
    templateUrl: './hero-slider-two.component.html',
    styleUrls: ['./hero-slider-two.component.scss'],
    standalone: false
})
export class HeroSliderTwoComponent {

  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_two;

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
          el:'.tp-slider-dot-2'
        },
      })
    }
  }
}
