import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderOneComponent } from './header/header-one/header-one.component';
import { NavManusComponent } from './header/header-com/nav-manus/nav-manus.component';
import { BlogItemComponent } from './components/blogs/blog-item/blog-item.component';
import { SubscribeAreaComponent } from './components/subscribe-area/subscribe-area.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ClientSliderComponent } from './components/slider/client-slider/client-slider.component';
import { BlogSliderComponent } from './components/blogs/blog-slider/blog-slider.component';
import { HeroSliderTwoComponent } from './components/slider/hero-slider-two/hero-slider-two.component';
import { HomeThreeTestimonialComponent } from './components/testimonial/home-three-testimonial/home-three-testimonial.component';
import { MiniCartComponent } from './header/header-com/mini-cart/mini-cart.component';
import { ExtraInfoComponent } from './header/header-com/extra-info/extra-info.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { HeaderTwoComponent } from './header/header-two/header-two.component';
import { HeaderThreeComponent } from './header/header-three/header-three.component';
import { SearchPopupComponent } from './header/header-com/search-popup/search-popup.component';
import { HeaderFourComponent } from './header/header-four/header-four.component';
import { HomeSevenTestimonialComponent } from './components/testimonial/home-seven-testimonial/home-seven-testimonial.component';
import { FooterThreeComponent } from './footer/footer-three/footer-three.component';
import { VideoPopupComponent } from './components/modals/video-popup/video-popup.component';
import { BreadcrumbOneComponent } from './components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { ProductDetailsUpperComponent } from './components/product-details-upper/product-details-upper.component';
import { ReviewFormComponent } from './components/forms/review-form/review-form.component';
import { BlogSidebarComponent } from './components/blogs/blog-sidebar/blog-sidebar.component';
import { BlogPostboxItemComponent } from './components/blogs/blog-postbox-item/blog-postbox-item.component';
import { BlogAreaComponent } from './components/blogs/blog-area/blog-area.component';
import { BlogDetailsAreaComponent } from './components/blogs/blog-details-area/blog-details-area.component';
import { BlogReplyFormComponent } from './components/forms/blog-reply-form/blog-reply-form.component';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';


@NgModule({
  declarations: [
    HeaderOneComponent,
    NavManusComponent,
    BlogItemComponent,
    SubscribeAreaComponent,
    FooterOneComponent,
    BackToTopComponent,
    ClientSliderComponent,
    BlogSliderComponent,
    HeroSliderTwoComponent,
    HomeThreeTestimonialComponent,
    MiniCartComponent,
    ExtraInfoComponent,
    FooterTwoComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    SearchPopupComponent,
    HeaderFourComponent,
    HomeSevenTestimonialComponent,
    FooterThreeComponent,
    VideoPopupComponent,
    BreadcrumbOneComponent,
    PaginationComponent,
    ProductDetailsUpperComponent,
    ReviewFormComponent,
    BlogSidebarComponent,
    BlogPostboxItemComponent,
    BlogAreaComponent,
    BlogDetailsAreaComponent,
    BlogReplyFormComponent,
    ProductModalComponent,
    ContactFormComponent,
    OffcanvasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderOneComponent,
    BlogItemComponent,
    SubscribeAreaComponent,
    FooterOneComponent,
    BackToTopComponent,
    ClientSliderComponent,
    BlogSliderComponent,
    HeroSliderTwoComponent,
    HomeThreeTestimonialComponent,
    FooterTwoComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    HomeSevenTestimonialComponent,
    FooterThreeComponent,
    VideoPopupComponent,
    BreadcrumbOneComponent,
    PaginationComponent,
    ProductDetailsUpperComponent,
    ReviewFormComponent,
    BlogSidebarComponent,
    BlogPostboxItemComponent,
    BlogAreaComponent,
    BlogDetailsAreaComponent,
    ProductModalComponent,
    ContactFormComponent,
    OffcanvasComponent,
  ]
})
export class SharedModule { }
