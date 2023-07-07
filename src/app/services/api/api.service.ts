import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KEY_TOKEN } from 'src/app/config/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

// Lấy token từ local store
getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(`${KEY_TOKEN}`);
  }

// GET ---------------------------------------------------------------------------------- 
 Get(url:string):Observable<any> {
  const token = String(this.getTokenFromLocalStorage());
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(url,{headers})
}

// POST ---------------------------------------------------------------------------------
Post(url: string, data: any, token: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  return new Promise((resolve, reject) => {
    this.http.post(url, data, { headers })
      .subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
//----------------------------------------------------------------------------------------
// PUT -----------------------------------------------------------------------------------

PUT(url: string, data: any, token: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  return new Promise((resolve, reject) => {
    this.http.put(url, data, { headers })
      .subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
// ------------------------------------------------------------------------------------------

Delete(url: string) {
  const token = String(this.getTokenFromLocalStorage());
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  return new Promise((resolve, reject) => {
    this.http.delete(url, { headers })
      .subscribe(
        response => {
          resolve(response); // Return the response JSON
        },
        error => {
          reject(error);
        }
      );
  });
}


}
