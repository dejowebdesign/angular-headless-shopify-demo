import { Component,Input } from '@angular/core';
import IBlogType from 'src/app/shared/types/blog-d-t';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    standalone: false
})
export class BlogItemComponent {
  @Input() blog!:IBlogType
}
