import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { PostService } from '../services/post/post.service';
import { KEY_TOKEN } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:PostModel[] = [];
  subject:any;
  constructor(private fs:FoodService, private postService:PostService, private router:Router){}

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
       console.log('call APi')
    })
  
  }
  
  GoDetail(id:number){
      this.router.navigate(['/home', id])
      console.log(id)
  }
}
