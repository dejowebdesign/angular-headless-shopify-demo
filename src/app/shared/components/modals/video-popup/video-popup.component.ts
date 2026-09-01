import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-video-popup',
    templateUrl: './video-popup.component.html',
    styleUrls: ['./video-popup.component.scss'],
    standalone: false
})
export class VideoPopupComponent {

  constructor(public utilsService: UtilsService){}

}
