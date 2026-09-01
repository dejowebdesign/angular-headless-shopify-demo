import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-subscribe-area',
    templateUrl: './subscribe-area.component.html',
    styleUrls: ['./subscribe-area.component.scss'],
    standalone: false
})
export class SubscribeAreaComponent {

  @Input() style_2: boolean = false;
  @Input() style_3: boolean = false;
  inputVal: string = '';

  handleFormSubmit() {

  }
}
