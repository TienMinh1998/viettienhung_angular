import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  form!: FormGroup;
 constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  submitForm(){

  }

  uploadFile(event:any){

  }
}
