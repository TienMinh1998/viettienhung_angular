import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { API_BASE_URL } from 'src/app/config/apiConfig';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  imageSrc: string = '';
  reactiveForm = new FormGroup({
    productname: new FormControl('', [Validators.required]),
    productdescription: new FormControl('',[Validators.required]),
    price: new FormControl(0,[Validators.required]),
    file: new FormControl('',[Validators.required]),
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

  get name() {
    return this.reactiveForm.get('productname'); // Tiêu đề của bài viết
  }

  get description() {
    return this.reactiveForm.get('productdescription'); // dịch tiêu đề của bài viết
  }

  get price(){
    return this.reactiveForm.get('price');
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
    const productname = this.reactiveForm.get('productname')?.value as string;
    const definetion = this.reactiveForm.get('productdescription')?.value as string;
    const price = this.reactiveForm.get('price')?.value as number;

    const typeOfPost = String(this.postService.typeOfpost)
    console.log(typeOfPost);

    this.formData.append('file', this.image, this.image.name);
    this.formData.append('Name',productname);
    this.formData.append('Description',definetion);
    this.formData.append('Price',String(price));
    this.formData.append('Type', '1');
    const token = this.postService.getTokenFromLocalStorage();
    this.postService.API_POST_FORMDATA('product/add',this.formData, String(token))
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

