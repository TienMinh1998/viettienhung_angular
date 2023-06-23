import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { PostService } from '../services/post/post.service';
import { KEY_TOKEN } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';
import { Router } from '@angular/router';
import { AddpostComponent } from '../addpost/addpost.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRate = 8;
  posts:PostModel[] = [];
  newlists:PostModel[] = [];

  subject:any;
  constructor(private fs:FoodService, 
    private postService:PostService,
     private router:Router,
     private modalService: NgbModal
     
     ){}

  ngOnInit(): void {
    var data1 = {
      pageSize: 24,
      pageNumber: 1,
      search : {}
  }
  var localToken =  this.getTokenFromLocalStorage()
   this.postData(String(localToken),data1);
  }
 
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(`${KEY_TOKEN}`);
  }

  postData(token:string,data:any){
    const url = 'https://viettienhung.com/reading/search';
     this.postService.postDataWithToken(url,data,token).subscribe((res:any)=>{
       this.posts = res.data.items;
    })
    // xử lý dữ liệu
   this.newlists=  this.posts.map((post)=>{
      const date = new Date(post.createdDate);
      return {...post,createdDate:date}
    })
  }
  
  GoDetail(id:number){
      this.router.navigate(['/postdetail', id])
      console.log(id)
  }

  openFormChild(content: any) {
    console.log(content);
    const modalRef = this.modalService.open(AddpostComponent, {
        size: "md",
        centered: true,
        ariaLabelledBy: 'modal-basic-title',
        scrollable: true
    });
}


}
