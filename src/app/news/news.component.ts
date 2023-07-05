import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { NewsService } from '../services/news/news.service';
import { News } from '../shared/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:News[] = [];
  constructor( private _newsService:NewsService){}

  ngOnInit(): void {
    this.getNews();
  }
// Get news 
 async getNews()
 {
   this.news = await this._newsService.GetAll();
 }
}
