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
 // Dữ liệu để phân trang
 totalCount:number = 0;
 pageIndex:number=0;
 pageSize:number=24;
 todayNum:number=0;
 todayNumCopy:number=0;

  subject:any;
  constructor(private fs:FoodService, 
    private postService:PostService,
     private router:Router,
     private modalService: NgbModal
     
     ){}

  ngOnInit(): void {
   this.GetListData();
  }
 
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(`${KEY_TOKEN}`);
  }

/* Lấy danh sách bài viết */
  GetListData(){
    var dataJson = {
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      search : {}
  }
  var localToken =  this.postService.getTokenFromLocalStorage();
    const url = 'https://viettienhung.com/reading/search';
     this.postService.API_Post(url,dataJson,String(localToken)).subscribe((res:any)=>{
       this.posts = res.data.items;
       this.totalCount = res.data.totalCount;
    })
    // xử lý dữ liệu khi trả về
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

/* Vì pagesize và pageNumber được binding 1-1 với @viewChild 
   Nên gọi hàm changPage ta chỉ việc gọi listData lại 1 lần là xong
   KHông cần quan tâm đến các việc bên trong nó làm
*/
changePage(){
  console.log("page change!",this.totalCount);
  console.log("pageindex", this.pageIndex);
  console.log("pageSize", this.pageSize);
  this.GetListData();
}


}
