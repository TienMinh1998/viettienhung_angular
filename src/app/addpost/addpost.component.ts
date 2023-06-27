import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  imageSrc:string ='';
  reactiveForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    subtitle:new FormControl(''),
    task: new FormControl(''),
    rank:new FormControl(''),
    type:new FormControl(''),
    contentEnglish: new FormControl(''),
    contentVietNam: new FormControl(''),
    file: new FormControl('')
  })



 constructor(private modalService: NgbModal, private postService:PostService){}

  ngOnInit(): void {
 
  }
  AddPost(){
   
  } 

  get title(){
    return this.reactiveForm.get('title')  // Tiêu đề của bài viết
  }

  get subtitle(){
    return this.reactiveForm.get('subtitle') // dịch tiêu đề của bài viết
  }
  get task(){
    return this.reactiveForm.get('task')    // đề bài
  }
 
  get rank()
  {
    return this.reactiveForm.get('rank')
  }

  get type()
  {
    return this.reactiveForm.get('type')
  }
 
  get contentEnglish()
  {
    return this.reactiveForm.get('contentEnglish')
  }

  get contentVietNam(){
    return this.reactiveForm.get('contentVietNam')
  }

onChangeFile(event:any){
let formData  = new FormData();
 if (event.target.files.length>0) {
  const file = event.target.files[0] as File;
  const reader = new FileReader();
 formData.append('file',file) ;
  formData.append('Title','test');
  formData.append('Definetion','test');
   formData.append('Content','dev-test-content');
 formData.append('Translate','dev-test-content');
 formData.append('TaskName','testTaskName');
 formData.append('Band',"1")
   const token = this.postService.getTokenFromLocalStorage();
    this.postService.API_POST_FORMDATA('https://viettienhung.com/reading/add',formData,String(token)).subscribe(res=>{
      console.log(res)
    })
 } else {
  
 }
}

}
