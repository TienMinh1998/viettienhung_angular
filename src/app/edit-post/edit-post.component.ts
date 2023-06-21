import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../services/post/post.service';
import { API_BASE_URL } from '../config/apiConfig';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})



export class EditPostComponent implements OnInit {
   word!:string;
   definition!:string;
    postId!: number;
    constructor( private postService:PostService, private modalService: NgbModal) {
}
    ngOnInit(): void {
       console.log(this.postId)
    }

AddWord(){
    let datajson ={
        readingId: this.postId ,
        meaning: this.word,
        word: this.word
    }
    var token = this.postService.getTokenFromLocalStorage();
    this.postService.API_Post(`${API_BASE_URL}/phrase/add`,datajson,String(token)).subscribe((res:any)=>{
        if (res && res.status==200) {
           this.modalService.dismissAll();
        }
    })
}


}
