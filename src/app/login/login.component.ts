import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username;
password;
logouturl;
  // tslint:disable-next-line:max-line-length
  constructor(private service: AppService, private router: Router, private authService: AuthenticationService, private client: HttpClient) { }

  ngOnInit() {
    if (this.service.checklogin()) {
      this.router.navigate(['home']);
    }
  }
  login() {
    console.log('login func');
    this.authService.authenticate(this.username, this.password).subscribe(data =>{
      this.service.isLoggedIn(true);
      this.router.navigate(['home']);
    });
  }
  logout() {
    this.service.isLoggedIn(false);
  }

}
