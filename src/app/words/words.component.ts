import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Vocabulary } from '../shared/models/vocabularyModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddvocabularyComponent } from './addvocabulary/addvocabulary.component';
import { FlashcardComponent } from '../flashcard/flashcard.component';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  vocabularies:Vocabulary[]= [];
  vocabularies_text :string[] = [];
  vocabularies_audio:string[] = [];
  totalCount:number = 0;
  pageindex:number=0;
  pagesize:number=24;
  todayNum:number=0;
  todayNumCopy:number=0;

  isTodayChange:boolean = false;

  today = new Date();
  constructor(private postService:PostService,
    private modalService: NgbModal
    ){}
  ngOnInit(): void {
  }
// Lấy danh sách từ vựng
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
   this.vocabularies.forEach(x=>{
    this.vocabularies_text.push(x.english)
    this.vocabularies_audio.push(x.audio)
   })
   console.log(this.vocabularies_text)



   this.totalCount = res.data.totalCount;
   this.todayNumCopy =0;
   this.CountVocabularyForToday();
   if (this.todayNumCopy!=this.todayNum) {
    this.todayNum= this.todayNumCopy;
   } else {
    // không làm gì cả
   }
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


  openFlashCard(content: any) {
    console.log(content);
    const modalRef = this.modalService.open(FlashcardComponent, {
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
        this.todayNumCopy +=1;
      }
     })
   }

   emitAudio(audiolink:string){
    const clickSound = new Audio(audiolink);
    clickSound.play();
   }
}
