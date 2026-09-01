import { Component,Input } from '@angular/core';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-product-details-area',
    templateUrl: './product-details-area.component.html',
    styleUrls: ['./product-details-area.component.scss'],
    standalone: false
})
export class ProductDetailsAreaComponent {
  @Input() product:IProduct | undefined;
}
