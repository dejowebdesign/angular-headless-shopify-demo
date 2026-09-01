import { Component } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';

@Component({
    selector: 'app-footer-two',
    templateUrl: './footer-two.component.html',
    styleUrls: ['./footer-two.component.scss'],
    standalone: false
})
export class FooterTwoComponent {
  public social_links: ISocial[] = social_links;
}
