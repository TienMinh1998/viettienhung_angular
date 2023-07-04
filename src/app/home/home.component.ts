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
import { ReportModel } from '../shared/models/report';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

bgSuccess:string = 'badge bg-success';
bgDangger:string = 'badge bg-danger';


// KHai báo Model
  currentRate = 8;
  posts:PostModel[] = [];
  report:ReportModel[] = [];
  categories:string[] = [];
  items:any[]= [
    {
      text:"Từ vựng",
      seriesData : [],
      tooltext:"từ vựng",
      
    },
    {
      text:"Bài viết",
      seriesData : [],
      tooltext:"bài viết"
    }
  ]

 // Dữ liệu để phân trang
 totalCount:number = 0;
 pageIndex:number=0;
 pageSize:number=24;
 todayNum:number=0;
 todayNumCopy:number=0;
 options:string[] = ['Tất cả','writing','General', 'Vocabulary','Grammar','listening','Speaking','Tech (IT)']
 headeritems = [
  {
    text : 'Dictionary (Từ điển)',
    image: '/assets/dictionary_header_cam.png',
    href: 'https://dictionary.cambridge.org/'
  },
  {
    text : 'Dictionary (Từ điển)',
    image: '/assets/dictionary_header.png',
    href: 'https://www.vocabulary.com/dictionary/'
  },
  {
    text : 'Vocabulary (Từ vựng)',
    image: '/assets/vocabulary_header.png',
    href: 'words'
  },
  {
    text : 'Grammar (Ngữ pháp)',
    image: '/assets/grammar_header.png',
    href: 'words'
  },
  {
    text : 'Listening (Nghe)',
    image: '/assets/listening_header.png',
    href: 'https://www.newsinlevels.com/'
  },
  {
    text : 'Posts (Bài viết)',
    image: '/assets/posts_header.png',
    href: 'home'
  },
  {
    text : 'News (Tin Tức)',
    image: '/assets/news_header.png',
    href: 'words'
  },
  {
    text : 'Tip (Tiện ích)',
    image: '/assets/tip_header.png',
    href: 'words'
  },
  {
    text : 'Linking sound (Nối âm)',
    image: '/assets/linking.png',
    href: 'https://www.evaeaston.com/'
  }
 ]


 type!:string | null;
  subject:any;
 
  constructor(private fs:FoodService, 
    private postService:PostService,
     private router:Router,
     private modalService: NgbModal,
     private toastr:ToastrService,
     
     ){}

     formatDate(date:Date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
  }
   

  ngOnInit(): void {
    console.log('this is data :', this.postService.testData)
     this.GetListData();
     this.getReport()
   .then(() => {
     // Hàm này chỉ chạy khi getReport hoàn thành thành công
     console.log('getReport đã chạy xong. Tiếp tục thực hiện các tác vụ khác ở đây.');
     this.items[0].seriesData = this.report.map(x=>{
       return x.totalWords;
     })
     this.items[1].seriesData = this.report.map(x=>{
      return x.fK_UserId
     })
     this.categories = this.report.map(x=>{
      return this.formatDate(x.created_on)
     })
     console.log(this.categories)
   })
   .catch((error) => {
     console.error('Đã xảy ra lỗi trong quá trình chạy getReport:', error);
   });
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
  if(!confirm("Bạn có muốn xóa bài viết này không")) {
    return;
  }

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


getHref(){
  console.log("click parent OK");
}

getReport() {
  return new Promise((resolve, reject) => {
    var dataJson = {
      startTime: null,
      endTime: null,
    };
    var localToken = this.postService.getTokenFromLocalStorage();
    const url = 'https://viettienhung.com/QuestionStandard/overview';
    this.postService.API_Post(url, dataJson, String(localToken)).subscribe(
      (res: any) => {
        this.report = res.data;
        resolve(this.report); // Đánh dấu Promise đã hoàn thành thành công
      },
      (error: any) => {
        reject(error); // Đánh dấu Promise thất bại nếu có lỗi
      }
    );
  });
}

}
