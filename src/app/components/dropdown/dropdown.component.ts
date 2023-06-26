import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
 inputText:string= ''

 @Input() name = "No name"; // Tên của dropdown
 @Output() newItemEvent = new EventEmitter<string>();

 constructor(){}
  ngOnInit(): void {
    
  }
  


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  mychange(value:any){
      console.log("change action:",value)
  }

}
