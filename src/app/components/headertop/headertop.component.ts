import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KEY_TOKEN, LOGIN_STATUS } from 'src/app/config/apiConfig';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-headertop',
  templateUrl: './headertop.component.html',
  styleUrls: ['./headertop.component.css']
})
export class HeadertopComponent implements OnInit { 
  loginStatus : boolean =false;
 constructor(){

 }
  ngOnInit(): void {
  this.loginStatus = JSON.parse(String(localStorage.getItem(`${LOGIN_STATUS}`)));
  }


  logout(){
    // Cập nhật lại trạng thái đăng nhập
    // xóa token 
    localStorage.setItem(`${KEY_TOKEN}`,'');
    localStorage.setItem(`${LOGIN_STATUS}`,"false");
  }

}
