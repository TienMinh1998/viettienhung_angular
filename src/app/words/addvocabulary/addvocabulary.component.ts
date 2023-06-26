import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { API_BASE_URL } from 'src/app/config/apiConfig';
import { PostService } from 'src/app/services/post/post.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addvocabulary',
  templateUrl: './addvocabulary.component.html',
  styleUrls: ['./addvocabulary.component.css'],
})
export class AddvocabularyComponent implements OnInit {
  reactiveForm = new FormGroup({
  vocabulary: new FormControl('',[Validators.required]),
  phonetic: new FormControl(''),
  english: new FormControl('',[Validators.required]),
  vietnam: new FormControl('',[Validators.required]),
  note: new FormControl('')
})
  constructor(
    private modalService: NgbModal,
    private postService: PostService,
    private toastr:ToastrService
  ) {}
  ngOnInit(): void {
  }

  AddWord() {
    let dataJson = {
      phonetic: this.reactiveForm.get('phonetic')?.value,
      english: this.reactiveForm.get('vocabulary')?.value,
      meaningEnglish: this.reactiveForm.get('english')?.value,
      meaningVietNam: this.reactiveForm.get('vietnam')?.value,
      note: this.reactiveForm.get('note')?.value
    };
    console.log(dataJson)
    let token = this.postService.getTokenFromLocalStorage();
    this.postService
      .API_Post(`${API_BASE_URL}/QuestionStandard/AddStandardQuestion`, dataJson,String(token))
      .subscribe((res: any) => {
        if (res && res.status == 200) {
           this.toastr.success('Thêm thành công', 'Thông báo');
          this.modalService.dismissAll();
        }
      });
  }

  get vocabulary(){
    return this.reactiveForm.get('vocabulary')
  }

  get english(){
    return this.reactiveForm.get('english')
  }

  get vietnam(){
    return this.reactiveForm.get('vietnam')
  }

  get note(){
    return this.reactiveForm.get('note')
  }

  get phonetic(){
    return this.reactiveForm.get('phonetic')
  }
}
