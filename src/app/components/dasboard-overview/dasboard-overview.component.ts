import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dasboard-overview',
  templateUrl: './dasboard-overview.component.html',
  styleUrls: ['./dasboard-overview.component.css']
})
export class DasboardOverviewComponent {
 @Input() number = 0;
 @Input() text = '';
}
