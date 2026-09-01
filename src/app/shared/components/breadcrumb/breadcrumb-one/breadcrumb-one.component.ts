import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-breadcrumb-one',
    templateUrl: './breadcrumb-one.component.html',
    styleUrls: ['./breadcrumb-one.component.scss'],
    standalone: false
})
export class BreadcrumbOneComponent {
  @Input() bg?: string;
  @Input() title!: string;
  @Input() subtitle!: string;

  public bg_img = '/assets/img/page-title/page-title-1.jpg';

  ngOnInit () {
    if(this.bg){
      this.bg_img = this.bg;
    }
  }
}
