import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-back-to-top',
    templateUrl: './back-to-top.component.html',
    styleUrls: ['./back-to-top.component.scss'],
    standalone: false
})
export class BackToTopComponent {

  scrollDisplay: string = 'none';

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 200) {
      this.scrollDisplay = 'block';
    } else {
      this.scrollDisplay = 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
