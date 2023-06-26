import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements DoCheck{

 @Input() name!:string; // Tên của dropdown
 
 @Output() newItemEvent = new EventEmitter<string>();
 constructor(){}
  ngDoCheck(): void {
    console.log("ngDocheck executed!",this.name)
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
