import { Component } from '@angular/core';
import blog_data from 'src/app/shared/data/blog-data';
import { UtilsService } from 'src/app/shared/services/utils.service';
import IBlogType from 'src/app/shared/types/blog-d-t';

@Component({
    selector: 'app-blog-sidebar',
    templateUrl: './blog-sidebar.component.html',
    styleUrls: ['./blog-sidebar.component.scss'],
    standalone: false
})
export class BlogSidebarComponent {

  public recent_blogs: IBlogType[] = [];

  constructor(public utilsService:UtilsService){
    this.utilsService.blogs.subscribe((blogs) => {
      this.recent_blogs = blogs.slice(-3)
    });
  }

}
