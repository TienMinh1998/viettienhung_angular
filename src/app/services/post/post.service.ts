import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {API_BASE_URL, KEY_TOKEN} from 'src/app/config/apiConfig'
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
      'Authorization': `Bearer ${token}`,
      'Accept' : 'application/json'
    });

    return this.http.post(url, data, { headers });
  }

  API_Post(url: string, data: any, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(url, data, { headers });
  }


  API_POST_FORMDATA(url: string, data: FormData, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(url, data, { headers });
  }



  API_put(url: string, data: any, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(url, data, { headers });
  }
  
  API_get(url:string,token:string):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(url,{headers})
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(`${KEY_TOKEN}`);
  }
}
