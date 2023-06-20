import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
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

config = {
  placeholder: '',
  tabsize: 2,
  height: '200px',
  uploadImagePath: '/api/upload',
  toolbar: [
      ['misc', ['codeview', 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']]
  ],
  fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
}


constructor(private modalService: NgbModal) {

}

closeModal() {
  this.modalService.dismissAll();
}

}
