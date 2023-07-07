import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ProductModel } from 'src/app/shared/models/product';
import { API_BASE_URL } from 'src/app/config/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _apiService:ApiService) { }

  // GET ALL NEWS -----------------------------------------------------------------------------------------
GetAll(): Promise<ProductModel[]> {
  return new Promise((resolve, reject) => {
    this._apiService.Get("https://viettienhung.com/product/list").subscribe(
      (res: any) => {
        resolve(res.data); // Resolve the Promise with the data
      },
      (error: any) => {
        reject(error); // Reject the Promise with an error
      }
    );
  });
}
//---------

DeleteProduct(id:number){
  this._apiService.Delete(`${API_BASE_URL}/product/${id}`);
}
}