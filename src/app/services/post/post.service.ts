import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {API_BASE_URL} from 'src/app/config/apiConfig'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient
  ) { }

  // các phương thức khác

 
  
  GetList():Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }

  dataJson = {
    userName : "admin",
    password : "admin"
  }

  Login():Observable<any>{ 
    return this.http.post(`${API_BASE_URL}/Login_Admin`,this.dataJson)
  }

  postDataWithToken(url: string, data: any, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(url, data, { headers });
  }
}
