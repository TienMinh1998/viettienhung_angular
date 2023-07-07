import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Route, Router } from '@angular/router';
import { KEY_TOKEN, LOGIN_STATUS, USER_NAME } from '../config/apiConfig';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  userName =''
  passWord =''
  constructor(private authService:AuthService, private router:Router, public data:DataService){}
  login() {
    // Use the username and password values as needed
    var dataJson = {
      userName : this.userName,
      password : this.passWord
    }
    this.authService.Login(dataJson).subscribe(res=>{
      var status = res.status;
      var token = res.data.token;
      var name = res.data.user.name;

      console.log(res);
      if (status==200) {
          // save data to local store
          localStorage.setItem(`${KEY_TOKEN}`,token);
          localStorage.setItem(`${LOGIN_STATUS}`,"true");
          localStorage.setItem(`${USER_NAME}`,name);

          this.router.navigate(["/"]);
      } else {
        console.log("Sai tên tài khoản hoặc mật khẩu.")
      }
    })
  }
 
 async Success() {
    await this.data.ChangeLoginStatus(true)
  }

  


}
