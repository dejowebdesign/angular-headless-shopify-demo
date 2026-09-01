import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import product_data from '../data/product-data';
import { IProduct } from '../types/product-d-t';
import blog_data from '../data/blog-data';
import IBlogType from '../types/blog-d-t';

const all_products = product_data;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public filter_offcanvas: boolean = false;
  public pageSize: number = 9;

  // Get Products
  public get products(): Observable<IProduct[]> {
    return of(product_data);
  }

  constructor() { }

  activeImg: string | undefined;

  handleImageActive(img: string) {
    this.activeImg = img;
  }

  // Get Products By id
  public getProductById(id: string): Observable<IProduct | undefined> {
    return this.products.pipe(map(items => {
      const product = items.find(p => Number(p.id) === Number(id));
      if(product){
        this.handleImageActive(product.img)
      }
      return product;
    }));
  }
   // Get related Products
   public getRelatedProducts(productId: number,brand:string): Observable<IProduct[]> {
    return this.products.pipe(map(items => {
      return items.filter(
        (p) => p.brand.toLowerCase().includes(brand.toLowerCase()) &&
          p.id !== Number(productId)
      )
    }));
  }
  // Get max price
  public get maxPrice(): number {
    const max_price = all_products.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
    return max_price
  }
// shop filterSelect
  public filterSelect = [
    { value: 'asc', text: 'Default Sorting' },
    { value: 'low', text: 'Low to Hight' },
    { value: 'high', text: 'High to Low' },
    { value: 'on-sale', text: 'On Sale' },
  ];

    // Get Product Filter
    public filterProducts(): Observable<IProduct[]> {
      return this.products.pipe(map(product => {
        return product;
      }));
    }


      // Sorting Filter
  public sortProducts(products: IProduct[], payload: string): any {

    if(payload === 'asc') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'sale') {
      return products.filter((p) => p.discount! > 0)
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      })
    }
  }

  /*
    ---------------------------------------------
    ------------- Product Pagination  -----------
    ---------------------------------------------
  */
  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if(currentPage < paginateRange - 1){
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage =  currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
