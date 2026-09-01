import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-home-three-testimonial',
    templateUrl: './home-three-testimonial.component.html',
    styleUrls: ['./home-three-testimonial.component.scss'],
    standalone: false
})
export class HomeThreeTestimonialComponent {

  public nav_data = [
    { id: 1, img: '/assets/img/testimonial/person-1.jpg' },
    { id: 2, img: '/assets/img/testimonial/person-2.jpg' },
    { id: 3, img: '/assets/img/testimonial/person-3.jpg' },
    { id: 4, img: '/assets/img/testimonial/person-4.jpg' },
  ]

 public testimonial_data = [
    {
      id: 1,
      name: "Mason Robinson",
      title: "UX - Designer",
      desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
    },
    {
      id: 2,
      name: "David Cruso",
      title: "Web Developer",
      desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
    },
    {
      id: 3,
      name: "Naim Ahmed",
      title: "Web Developer",
      desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
    },
    {
      id: 4,
      name: "Salim Rana",
      title: "WP Expert",
      desc: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.",
    },
  ]

  ngOnInit(){
    const swiper = new Swiper(".testimonial__nav", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
     new Swiper(".testimonial__wrapper", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      pagination: {
        clickable: true,
        el:'.tp-slider-dot-3'
      },
    });
  }
}
