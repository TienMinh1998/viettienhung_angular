import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { PostService } from '../services/post/post.service';
import { KEY_TOKEN } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:PostModel[] = [];
  subject:any;
  constructor(private fs:FoodService, private postService:PostService){}

  ngOnInit(): void {

    var data1 = {
      pageSize: 24,
      pageNumber: 1,
      search : {}
  }
  var localToken =  this.getTokenFromLocalStorage()
   this.postData(String(localToken),data1);
    this.postService.GetList().subscribe(res=>{
      console.log(res.data.items);
    })
    var result = this.postData(String(localToken),data1)
    console.log("data list : ")
    console.log(result)
  }
 
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(`${KEY_TOKEN}`);
  }

  postData(token:string,data:any){
    const url = 'https://viettienhung.com/reading/search';
     this.postService.postDataWithToken(url,data,token).subscribe((res:any)=>{
       this.posts = res.data.items
    })
  
  }

}
