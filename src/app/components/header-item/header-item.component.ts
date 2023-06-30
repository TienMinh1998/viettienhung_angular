import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent {
  @Input() text !:string; 
  @Input() imageUrl !:string;
  @Input() href !:string;

  @Output() newItemEvent = new EventEmitter<string>();

  Click(){
    this.newItemEvent.emit();
    console.log('Click OK!')
  }
}
