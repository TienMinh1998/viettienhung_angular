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
  todayNum:number=0;
  today = new Date();
  constructor(private postService:PostService,
    private modalService: NgbModal
    ){}
  ngOnInit(): void {
  }
// Lấy danh sách từ vựng
  getVocabulary(){
    this.todayNum=0;
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
   this.CountVocabularyForToday();
  })
  }
// Thay đổi trang hiển thị
  changePage(){
     this.getVocabulary();
  }
// mở form con
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
 // đếm số từ vựng ngày hôm nay tạo được
   CountVocabularyForToday(){
    this.vocabularies.forEach((item)=>{
      const createdDate = new Date(item.created_on);
      if (
        createdDate.getDate() === this.today.getDate() &&
        createdDate.getMonth() ===this.today.getMonth() &&
        createdDate.getFullYear() ===this.today.getFullYear()
      ) {
        this.todayNum += 1;
      }
     })
   }
}
