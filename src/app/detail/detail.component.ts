import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { API_BASE_URL } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id :number = 0;
  post:PostModel = new PostModel();

  constructor(private route:ActivatedRoute,private postService:PostService){
    this.id =  Number(this.route.snapshot.paramMap.get('id'));
  this.GetPostDetail();
  }
  
  GetPostDetail(){
     const token = this.postService.getTokenFromLocalStorage();
    this.postService.API_get(`${API_BASE_URL}/reading/${this.id}`,String(token)).subscribe(res=>{
      this.post = res.data;
     });
  }

}
