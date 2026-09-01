import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import IBlogType from 'src/app/shared/types/blog-d-t';

@Component({
    selector: 'app-blog-area',
    templateUrl: './blog-area.component.html',
    styleUrls: ['./blog-area.component.scss'],
    standalone: false
})
export class BlogAreaComponent {

  @Input() left_side:boolean = false;
  @Input() no_side:boolean = false;
  @Input() blog_2_col:boolean = false;
  @Input() blog_3_col:boolean = false;

  getClass() {
    let dynamicClass = '';
    if (this.no_side) {
      dynamicClass = 'col-xl-8 col-lg-8 offset-xl-2 offset-lg-2';
    } else {
      if (this.left_side) {
        dynamicClass = 'col-xl-9 col-lg-8';
      } else {
        dynamicClass = 'col-xl-8 col-lg-8';
      }
    }
    return dynamicClass;
  }

  public blogs: IBlogType[] = [];
  public pageSize: number = this.blog_2_col ? 4 : 3;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order
  public pageNo: number = 1;

  constructor(
    public productService: ProductService,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {}

  ngOnInit() {
    if (this.blog_2_col) {
      this.pageSize = 4;
    }
    if (this.blog_3_col) {
      this.pageSize = 6;
    }

    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.utilsService.filterBlogs().subscribe((response) => {
        // Sorting Filter
        this.blogs = response.filter((b) => b.blog === 'blog-standard');
        // Paginate Products
        this.paginate = this.productService.getPager(this.blogs.length, Number(+this.pageNo), this.pageSize);
        this.blogs = this.blogs.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
    });
  }

  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
      });
  }
}
