import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { IProduct } from '../types/product-d-t';
import product_data from '../data/product-data';
import IBlogType from '../types/blog-d-t';
import blog_data from '../data/blog-data';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  public videoUrl: string = 'https://www.youtube.com/embed/EW4ZYb3mCZk';
  public isVideoOpen: boolean = false;
  public isSearchOpen: boolean = false;
  public isProductModalOpen: boolean = false;
  public openMobileMenus: boolean = false;
  public iframeElement: HTMLIFrameElement | null = null;
  // product modal
  public modalId: string = 'product-modal-641e887d05f9ee1717e1348a';
  public product: IProduct = product_data[0];

  // Get blogs
  public get blogs(): Observable<IBlogType[]> {
    return of(blog_data);
  }

  // Get blog Filter
  public filterBlogs(): Observable<IBlogType[]> {
    return this.blogs.pipe(map(blogs => {
      return blogs;
    }));
  }


    // Get Products By id
    public getBlogById(id: string): Observable<IBlogType | undefined> {
      return this.blogs.pipe(map(items => {
        const blog = items.find(p => Number(p.id ) === Number(id));
        return blog;
      }));
    }

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSearchOpen = false;
        this.isProductModalOpen = false;
        this.openMobileMenus = false;
        this.removeBackdropAndProductModal()
      }
    });
  }


  // open mobile sidebar
  handleOpenMobileMenu () {
    this.openMobileMenus = !this.openMobileMenus;
  };

  // modal video play
  playVideo(videoId: string) {
    const videoOverlay = document.querySelector('#video-overlay');
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
    if (!this.iframeElement) {
      this.iframeElement = document.createElement('iframe');
      this.iframeElement.setAttribute('src', this.videoUrl);
      this.iframeElement.style.width = '60%';
      this.iframeElement.style.height = '80%';
    }

    this.isVideoOpen = true;
    videoOverlay?.classList.add('open');
    videoOverlay?.appendChild(this.iframeElement);
  }
  // close modal video
  closeVideo() {
    const videoOverlay = document.querySelector('#video-overlay.open');

    if (this.iframeElement) {
      this.iframeElement.remove();
      this.iframeElement = null;
    }

    this.isVideoOpen = false;
    videoOverlay?.classList.remove('open');
  }

  handleSearchOpen() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  // handle Open Modal
  handleOpenModal(id: string, item: IProduct) {
    this.isProductModalOpen = true;
    this.modalId = id;
    this.product = item;
    this.productService.handleImageActive(item.img);
    this.cartService.initialOrderQuantity();
  }

   convertToURL(value: string): string {
    // Replace spaces and special characters with hyphens
    const converted_value = value
      .toLowerCase()
      .replace(/&/g, 'and') // Replace '&' with 'and'
      .replace(/[^a-z0-9-]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

    return converted_value;
  }

  removeBackdropAndProductModal() {
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const product_modal = document.querySelector('.tp-product-modal.show') as HTMLElement;
    if (modalBackdrop) {
      modalBackdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style');
    }
    if(product_modal){
      product_modal.style.display = 'none';
    }
  }
}
