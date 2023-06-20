import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { API_BASE_URL } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';
import { phraseModel } from '../shared/models/phraseModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id :number = 0;
  post:PostModel = new PostModel();
  phrases :phraseModel[] = [];
  isNew!:Date;
  today!:Date;
  day!:number;
  dayOfpost!:number;

  constructor(private route:ActivatedRoute,private postService:PostService){
    this.id =  Number(this.route.snapshot.paramMap.get('id'));
    this.today = new Date();
   

  this.GetPostDetail();
  this.GetPhrase();
  }
  
  GetPostDetail(){
     const token = this.postService.getTokenFromLocalStorage();
    this.postService.API_get(`${API_BASE_URL}/reading/${this.id}`,String(token)).subscribe(res=>{
      this.post = res.data;
       this.dayOfpost = this.post.createdDate.getDay();
     });
     this.day = this.today.getDay();
     console.log(this.day)
     console.log(this.dayOfpost)
     console.log(this.day-this.dayOfpost)
  }
 
  GetPhrase(){
     const token = this.postService.getTokenFromLocalStorage();
     var dataJson = {
      pageSize: 100,
      pageNumber: 1,
      search: {
          readingId: `${this.id}`
      }
  }
     this.postService.postDataWithToken(`${API_BASE_URL}/phrase/lists`,dataJson,String(token)).subscribe((res:any)=>{
      this.phrases = res.data.items;
      
     });
  }

}
