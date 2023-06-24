import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Vocabulary } from '../shared/models/vocabularyModel';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  vocabularies:Vocabulary[]= [];
  totalCount:number = 0;
  pageindex:number=0;
  pagesize:number=24;

  constructor(private postService:PostService){}
  ngOnInit(): void {
  }

  getVocabulary(){
   const dataJson = 
    {
      pageSize: this.pagesize,
      pageNumber: this.pageindex,
      columnSort: "created_on",
      isDesc: true,
      date: ""
  }
  var token = this.postService.getTokenFromLocalStorage();
  const url = "https://viettienhung.com/QuestionStandard/AllQuestion";
   this.postService.API_Post(url,dataJson,String(token)).subscribe((res:any)=>{
   this.vocabularies = res.data.items;
   this.totalCount = res.data.totalCount;
   console.log(this.pageindex);
  })
  }

  changePage(){
   // this.pageindex = currnetIndex;
     console.log(this.pageindex);
     this.getVocabulary();
  }
}
