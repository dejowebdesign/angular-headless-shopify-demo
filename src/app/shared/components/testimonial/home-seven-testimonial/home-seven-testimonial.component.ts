import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-home-seven-testimonial',
    templateUrl: './home-seven-testimonial.component.html',
    styleUrls: ['./home-seven-testimonial.component.scss'],
    standalone: false
})
export class HomeSevenTestimonialComponent {

  public testimonial_data = [
    {
      id: 1,
      img: '/assets/img/testimonial/testi1.webp',
      desc: "Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!",
    },
    {
      id: 2,
      img: '/assets/img/testimonial/testi2.webp',
      desc: "Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!",
    },
    {
      id: 3,
      img: '/assets/img/testimonial/testi3.webp',
      desc: "Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!",
    },
  ]

  ngOnInit (){
    new Swiper(".testimonial__slider-active", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination:{
        clickable:true,
        el:'.tp-testi-dot'
      }
    });
  }
}
