import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private postService:PostService){}
  ngOnInit(): void {
   this.getVocabulary();
  }

  getVocabulary(){
   const dataJson = 
    {
      pageSize: 10,
      pageNumber: 1,
      columnSort: "created_on",
      isDesc: true,
      date: "",
      page: 1
  }
  var token = this.postService.getTokenFromLocalStorage();
  const url = "https://viettienhung.com/QuestionStandard/AllQuestion";
  var getVocabularies = this.postService.API_Post(url,dataJson,String(token)).subscribe(res=>{
    console.log("res",res);
  })
  console.log(getVocabularies)
  }
}
