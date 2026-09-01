import { Component, Input } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';

@Component({
    selector: 'app-footer-one',
    templateUrl: './footer-one.component.html',
    styleUrls: ['./footer-one.component.scss'],
    standalone: false
})
export class FooterOneComponent {
  @Input() box_style: Boolean = false;
  public social_links: ISocial[] = social_links;
}
