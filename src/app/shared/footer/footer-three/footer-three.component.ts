import { Component } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';

@Component({
    selector: 'app-footer-three',
    templateUrl: './footer-three.component.html',
    styleUrls: ['./footer-three.component.scss'],
    standalone: false
})
export class FooterThreeComponent {
  public social_links: ISocial[] = social_links;
}
