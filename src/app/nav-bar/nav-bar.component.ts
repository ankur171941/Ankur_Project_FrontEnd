import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
logouturl;
  // tslint:disable-next-line:max-line-length
  constructor(private service: AppService, private router: Router, private authService: AuthenticationService, private client: HttpClient) { }

  ngOnInit() {
  }
  logout()
  {
    if(this.authService.isUserLoggedIn()) {
      this.authService.logoutService();
      this.client.get(this.logouturl).subscribe(res => {
        alert('logout Successful');
      });
      this.router.navigate(['login']);
    }
  }
  checklogin() {
    return this.service.checklogin();
  }
}
