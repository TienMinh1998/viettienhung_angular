import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { PostService } from '../services/post/post.service';
import { API_BASE_URL, KEY_TOKEN } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';
import { Router } from '@angular/router';
import { AddpostComponent } from '../addpost/addpost.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

bgSuccess:string = 'badge bg-success';
bgDangger:string = 'badge bg-danger';



  currentRate = 8;
  posts:PostModel[] = [];
 // Dữ liệu để phân trang
 totalCount:number = 0;
 pageIndex:number=0;
 pageSize:number=24;
 todayNum:number=0;
 todayNumCopy:number=0;
 options:string[] = ['Tất cả','writing','Tiếng anh', 'Từ vựng','Ngữ pháp']
 type!:string | null;
  subject:any;
 
  constructor(private fs:FoodService, 
    private postService:PostService,
     private router:Router,
     private modalService: NgbModal,
     private toastr:ToastrService,
     
     ){}

  ngOnInit(): void {
    console.log('this is data :', this.postService.testData)
   this.GetListData();
  }
 
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(`${KEY_TOKEN}`);
  }

/* Lấy danh sách bài viết */
  GetListData(){
    if (this.type=="0") {
       this.type = null;
    } else {
      
    }
    var dataJson = {
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      search : {
        type:this.type
      }
  }
  var localToken =  this.postService.getTokenFromLocalStorage();
    const url = 'https://viettienhung.com/reading/search';
     this.postService.API_Post(url,dataJson,String(localToken)).subscribe((res:any)=>{
       this.posts = res.data.items;
       this.totalCount = res.data.totalCount;
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
    modalRef.result.then(()=>{
      console.log('Add OK')
    }).catch(()=>{
       this.GetListData();
    })
}

/* Vì pagesize và pageNumber được binding 1-1 với @viewChild 
   Nên gọi hàm changPage ta chỉ việc gọi listData lại 1 lần là xong
   KHông cần quan tâm đến các việc bên trong nó làm
*/
changePage(){
  
  this.GetListData();
}

onSelected(value:any){
 this.type = value;
 this.postService.typeOfpost = this.type
 console.log(this.postService.typeOfpost)
 this.GetListData(); 
}

deletePost(id:number){
  const url = `${API_BASE_URL}/reading/${id}`
  this.postService.API_Delete(url).subscribe((res:any)=>{
    console.log(res);
    if (res.status==200) {
      // xóa dưới fontend và không cần động đến backend
      const index = this.posts.findIndex((x)=>x.id==id);
      if (index!=-1){
        this.posts.splice(index,1);
      }

      this.toastr.success('Xóa thành công', 'Thông báo');
      
    } else {
      this.toastr.error('Xóa thất bại','Thông báo')
      console.log(res);
    }
  });
}
showData(){
  console.log("Home log",this.postService.testData);
}

}
