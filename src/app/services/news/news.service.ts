import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { News } from 'src/app/shared/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private _apiService:ApiService) { }

// GET ALL NEWS -----------------------------------------------------------------------------------------
GetAll(): Promise<News[]> {
  return new Promise((resolve, reject) => {
    this._apiService.Get("https://viettienhung.com/news/list").subscribe(
      (res: any) => {
        resolve(res.data); // Resolve the Promise with the data
      },
      (error: any) => {
        reject(error); // Reject the Promise with an error
      }
    );
  });
}
// --------------------------------------------------------------------------------------------------------



}
