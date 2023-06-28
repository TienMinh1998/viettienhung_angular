import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../services/post/post.service';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {

  imageSrc: string = '';
  reactiveForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl('',[Validators.required]),
    task: new FormControl(''),
    rank: new FormControl(''),
    type: new FormControl(''),
    contentEnglish: new FormControl(''),
    contentVietNam: new FormControl(''),
    file: new FormControl(''),
    band: new FormControl('')
  });

  image!: File;
  formData!: FormData;
  constructor(
    private modalService: NgbModal,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    console.log(this.postService.typeOfpost)
    this.formData = new FormData();
  }

  get title() {
    return this.reactiveForm.get('title'); // Tiêu đề của bài viết
  }

  get subtitle() {
    return this.reactiveForm.get('subtitle'); // dịch tiêu đề của bài viết
  }
  get task() {
    return this.reactiveForm.get('task'); // đề bài
  }

  get rank() {
    return this.reactiveForm.get('rank');
  }

  get type() {
    return this.reactiveForm.get('type');
  }

  get contentEnglish() {
    return this.reactiveForm.get('contentEnglish');
  }

  get contentVietNam() {
    return this.reactiveForm.get('contentVietNam');
  }
  imagePreview!: string | ArrayBuffer | null;
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }


  onChangeFile(event: any) {
    this.formData.delete('*');
    if (event.target.files.length > 0) {
      this.image = event.target.files[0] as File;
      if (this.image) {
        this.previewImage(this.image);
      }
    } else {
    }
  }
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  choseFilebtn(){
    this.fileInput.nativeElement.click();
  }
  AddPost() {
    this.formData.delete('*');

    const title = this.reactiveForm.get('title')?.value as string;
    const definetion = this.reactiveForm.get('subtitle')?.value as string;
    const typeOfPost = String(this.postService.typeOfpost)
    console.log(typeOfPost);

    this.formData.append('file', this.image, this.image.name);
    this.formData.append('Title',title);
    this.formData.append('Type',typeOfPost);
    this.formData.append('Definetion', definetion);
    this.formData.append('Content', '');
    this.formData.append('Translate', '');
    this.formData.append('TaskName', 'testTaskName');
    this.formData.append('Band', '8');
    const token = this.postService.getTokenFromLocalStorage();
    this.postService.API_POST_FORMDATA('reading/add',this.formData, String(token))
      .subscribe((res:any) => {
        console.log(res);
        if (res.status==200) {
          this.postService.testData = 'Đã bị thay đổi';
          console.log('addComponent log', this.postService.testData)
           this.modalService.dismissAll();
        } else {
          
        }
      });
  }
}
