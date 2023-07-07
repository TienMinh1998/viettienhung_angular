import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../shared/models/product';
import { ProductService } from '../services/product/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddvocabularyComponent } from '../words/addvocabulary/addvocabulary.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {

  products:ProductModel[] = [];
  constructor(private _productService:ProductService, private modalService: NgbModal){}
  ngOnInit(): void {
    this.GetListProduct();
  }
 async  GetListProduct(){
    this.products =await this._productService.GetAll();
  }

  openFormChild(content: any) {
    console.log(content);
    const modalRef = this.modalService.open(AddproductComponent, {
        size: "md",
        centered: true,
        ariaLabelledBy: 'modal-basic-title',
        scrollable: true
    });
    modalRef.result.then(()=>{
      console.log('Add OK')
    }).catch(()=>{
      // this.getVocabulary();
    })
  }
  
  showMessage(){
    console.log('Test')
  }
}
