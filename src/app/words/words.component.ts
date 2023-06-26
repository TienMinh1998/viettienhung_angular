import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Vocabulary } from '../shared/models/vocabularyModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddvocabularyComponent } from './addvocabulary/addvocabulary.component';

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

  constructor(private postService:PostService,
    private modalService: NgbModal
    ){}
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


  openFormChild(content: any) {
    console.log(content);
    const modalRef = this.modalService.open(AddvocabularyComponent, {
        size: "md",
        centered: true,
        ariaLabelledBy: 'modal-basic-title',
        scrollable: true
    });
    modalRef.result.then(()=>{
      console.log('Add OK')
    }).catch(()=>{
      this.getVocabulary();
    })
  }
}
