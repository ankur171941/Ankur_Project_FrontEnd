import { Component, OnInit } from '@angular/core';
import {EcommService} from "../ecomm.service";
import {HomePageService} from "../home-page.service";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
info;
  constructor(private Service: EcommService, private home: HomePageService, public serv: AppService, private http: HttpService, private router: Router) { }

  ngOnInit() {
    if(!this.serv.checklogin()){
      this.router.navigate(['login']);
    }
    return this.Service.getBackEn().subscribe((data) => {this.info = data; });
  }
  getShoes()
  {
      this.home.getByCat('Sports').subscribe(data1 => {
        this.info = data1;
      });
  }
getBooks()
  {
      this.home.getByCat('Books').subscribe(data2 => {
        this.info = data2;
      });
  }
getElectronics()
  {
      this.home.getByCat('Electronics').subscribe(data3 => {
        this.info = data3;
      });
  }
getClothes()
  {
      this.home.getByCat('Clothes').subscribe(data4 => {
        this.info = data4;
      });
  }
  logout(){
    this.serv.isLoggedIn(false);
    this.router.navigate(['login']);
  }
  mycart() {
    if (this.serv.checklogin()) {
      this.router.navigate(['cart']);
    }
  }

}
