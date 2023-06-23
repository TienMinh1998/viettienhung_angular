import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
   
 constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
