import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject<boolean>();
  ChangeLoginStatus(status:boolean){
   this.subject.next(status);
 }

 getLoginStatus():Observable<any>{
  return this.subject.asObservable();
 }
  constructor() { }
}
