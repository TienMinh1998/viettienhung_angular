import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_BASE_URL } from 'src/app/config/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http:HttpClient) { }
  // Hàm đăng nhập vào hệ thống
  Login(dataJson:any):Observable<any>{ 
    return this.http.post(`${API_BASE_URL}/Login_Admin`,dataJson)
  }
}
