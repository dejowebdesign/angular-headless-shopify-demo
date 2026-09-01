import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import IBlogType from 'src/app/shared/types/blog-d-t';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    standalone: false
})
export class BlogDetailsComponent {
  public blog!:IBlogType;
  constructor(public utilsService:UtilsService){
    this.utilsService.blogs.subscribe((blogs) => {
      this.blog = blogs[0]
    });
  }
}
