import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Vocabulary } from '../shared/models/vocabularyModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit, AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  nonHidenClass = "btn btn-outline-success m-1 key";
  hiddenClass = "btn btn-outline-success m-1 hidden key";
  currentWord = '';
  @Input() vocabularies:string[] = ['']
  @Input() audios :string[] = ['']
  index = 0;
  vocabulary = this.vocabularies[0];
  options:string[] = ['Tất cả','Hôm nay']
  constructor(private toastr:ToastrService){}
  ngAfterViewInit(): void {
    console.log('before af ', this.vocabularies)
    const voca = this.vocabularies[0] ;     
     console.log('current : ',voca)
  }
  ngOnInit(): void {
    console.log('before ', this.vocabularies)
    const voca = this.vocabularies[0] ;     
     console.log('current : ',voca)
  }

  myArray:any[] = []
  keys: string[] =[]
  arrayClasHiden:string[] = Array(this.keys.length).fill(this.nonHidenClass);
  shuffle(arra1:any) {
		var ctr = arra1.length, temp, index;
		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arra1[ctr];
			arra1[ctr] = arra1[index];
			arra1[index] = temp;
		}
		return arra1;
	}

  // Điền vào câu trả lời
   AddKey(i:number){
    if (i!==-1) {
      this.currentWord += this.myArray[i].text;
      this.myArray[i].class = this.hiddenClass;
      console.log( this.myArray[i].class)
    }
   }
   // xóa và reset
   remove(){
    this.currentWord = '';
    this.myArray.forEach(x=>{
     x.class = this.nonHidenClass;
    })
   }

   // Next câu tiếp theo
   onNext(){
     const vocabulary = this.vocabulary.trim();
     const vocabularyInput = this.currentWord.trim();
     if (vocabulary==vocabularyInput) {
      // Đúng
      this.currentWord = ''
      this.index = this.index +1;
      this.vocabulary = this.vocabularies[this.index];
      console.log('after next:', typeof(this.vocabularies))
      this.keys = this.vocabulary.split('');
      this.arrayClasHiden = Array(this.keys.length).fill(this.nonHidenClass);
      this.keys = this.shuffle(this.keys)
      this.myArray = this.keys.map((res)=>{
        return {
         text :res,
         class : this.nonHidenClass
        }
      });
      this.toastr.success('Tiếp tục nhé', 'Thông báo');
     }else {
      this.toastr.error('Sai rồi,Thử lại nhé', 'Thông báo');
     }
   }
   

   emitAudio(){
    const audio = this.audios[this.index];
    const clickSound = new Audio(audio);
    clickSound.play();
   }
}
