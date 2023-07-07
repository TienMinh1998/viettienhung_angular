import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductModel } from 'src/app/shared/models/product';

@Component({
  selector: 'app-productonmain',
  templateUrl: './productonmain.component.html',
  styleUrls: ['./productonmain.component.css']
})
export class ProductonmainComponent {
  products:ProductModel[] = [];
  constructor(private _productService:ProductService, private modalService: NgbModal){}
  ngOnInit(): void {
    this.GetListProduct();
  }
 async  GetListProduct(){
    this.products =await this._productService.GetAll();
  }


}
