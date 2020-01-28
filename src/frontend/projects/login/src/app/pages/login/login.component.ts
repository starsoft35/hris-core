import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  rememberMe: boolean;
  failedLogin: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginAction(e) {
    const payload = {
      username: this.username,
      password: this.password
    }
    this.loginService.getUserInfo(payload).subscribe(response => {
      // Now redirect the app to default ROOT url, server will handle
      location.href = '/';
    }, error => {
      this.failedLogin = true;
      this.username = '';
      this.password = '';
    });
  }

  onEditing(e) {
    this.failedLogin = false;
  }

}
