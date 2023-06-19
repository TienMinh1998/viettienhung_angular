import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Route, Router } from '@angular/router';
import { KEY_TOKEN } from '../config/apiConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  userName =''
  passWord =''
  constructor(private authService:AuthService, private router:Router){}
  login() {
    // Use the username and password values as needed
    console.log('Username:', this.userName);
    console.log('Password:', this.passWord);

    var dataJson = {
      userName : this.userName,
      password : this.passWord
    }
    this.authService.Login(dataJson).subscribe(res=>{
      var status = res.status;
      var token = res.data.token;
      if (status==200) {
          // save data to local store
          localStorage.setItem(`${KEY_TOKEN}`,token);
          console.log("save token success");
          this.router.navigate(["/"]);
      } else {
        console.log("Sai tên tài khoản hoặc mật khẩu.")
      }
    })
  }
 
}
