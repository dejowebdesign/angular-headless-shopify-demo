import { Component } from '@angular/core';
import Swiper from 'swiper';
import blog_data from 'src/app/shared/data/blog-data';
import IBlogType from 'src/app/shared/types/blog-d-t';

@Component({
    selector: 'app-blog-slider',
    templateUrl: './blog-slider.component.html',
    styleUrls: ['./blog-slider.component.scss'],
    standalone: false
})
export class BlogSliderComponent {
  public blogData:IBlogType[] = blog_data.filter(b => b.blog === 'home');

  ngAfterViewInit() {
    // blog slider
    new Swiper('.blog__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    })
  }
}
