import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = [];
  subject:any;
  constructor(private fs:FoodService, private postService:PostService){}

  ngOnInit(): void {
   this.foods = this.fs.getAll(); // Call service
    this.postService.GetList().subscribe(res=>{
      console.log(res);
    })
  }

}
