import { Component } from '@angular/core';
import { BANNER_IMAGE1, BANNER_IMAGE2, BANNER_IMAGE3 } from 'src/app/config/apiConfig';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  banner_image = BANNER_IMAGE1;
  banner_image2 = BANNER_IMAGE2;
  banner_image3 = BANNER_IMAGE3;
}
