import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { API_BASE_URL } from '../config/apiConfig';
import { PostModel } from '../shared/models/postModel';
import { phraseModel } from '../shared/models/phraseModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent {
  id :number = 0;
  post:PostModel = new PostModel();
  phrases :phraseModel[] = [];
  isNew!:Date;
  today!:Date;
  day!:number;
  dayOfpost!:number;

  public someHtmlCode = '';

  configNgxSummernote: any = {
    airMode: false,
    tabDisable: true,
    popover: {
        table: [
            ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
            ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
        ],
        image: [
            ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
            ['float', ['floatLeft', 'floatRight', 'floatNone']],
            ['remove', ['removeMedia']]
        ],
        link: [['link', ['linkDialogShow', 'unlink']]],
        air: [
            [
                'font',
                [
                    'bold',
                    'italic',
                    'underline',
                    'strikethrough',
                    'superscript',
                    'subscript',
                    'clear'
                ]
            ]
        ]
    },
    height: '500px',
    // uploadImagePath: '/api/upload',
    toolbar: [
        ['misc', ['undo', 'redo']],
        [
            'font',
            [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'superscript',
                'subscript',
                'clear'
            ]
        ],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style0', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']],
        ['customButtons', ['testBtn']]
    ]
};

binDataPost !:string;
binDataVietName !:string;
isEditterVisible = false;
isloading = true;

  constructor(private route:ActivatedRoute,
    private postService:PostService,
    private modalService: NgbModal,
    private toastr:ToastrService,
    public sanitizer: DomSanitizer
    ){
    this.id =  Number(this.route.snapshot.paramMap.get('id'));
    this.today = new Date();
  
  this.GetPostDetail();
  this.GetPhrase();
  this.isloading = false;
  }
  
  GetPostDetail(){
     const token = this.postService.getTokenFromLocalStorage();
     this.postService.API_get(`${API_BASE_URL}/reading/${this.id}`,String(token)).subscribe(res=>{
      this.post = res.data;
      this.binDataPost = res.data.content;
      this.someHtmlCode = this.sanitizer.bypassSecurityTrustHtml(res.data.content) as string;
      this.binDataVietName = res.data.translate;
     });
     console.log(this.day)
     console.log(this.dayOfpost)
     console.log(this.day-this.dayOfpost)
  }
  GetPhrase(){
     const token = this.postService.getTokenFromLocalStorage();
     var dataJson = {
      pageSize: 100,
      pageNumber: 1,
      search: {
          readingId: `${this.id}`
      }
  }
     this.postService.postDataWithToken(`${API_BASE_URL}/phrase/lists`,dataJson,String(token)).subscribe((res:any)=>{
      this.phrases = res.data.items;
     });
  }
  SavePost(){
    var dataJson = {
      title: this.post.title,
      definetion: this.post.definetion,
      image: this.post.image,
      content: this.binDataPost,
      translate: this.binDataVietName,
      status: this.post.status,
      taskName: this.post.taskName,
      band: this.post.brand,
      type: this.post.type,
      id: this.post.id,
      createdDate: this.post.createdDate,
      isDeleted: 0,
  }

  console.log(dataJson);
   const token = this.postService.getTokenFromLocalStorage();
   var result = this.postService.API_put(`${API_BASE_URL}/reading/update`,dataJson,String(token)).subscribe((res:any)=>{
    location.reload();
    });
    this.toastr.success('Cập nhật thành công', 'Thông báo');
  }
  open(content: any) {
    const modalRef = this.modalService.open(EditPostComponent, {
        size: "md",
        centered: true,
        ariaLabelledBy: 'modal-basic-title',
        scrollable: true
    });
}

displayEditer()
{
  this.isEditterVisible=!this.isEditterVisible;
}
}
