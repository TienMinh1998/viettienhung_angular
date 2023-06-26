import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addToArray(newItem: string) {
    this.items.push(newItem);
    console.log(this.items)
  }
}
