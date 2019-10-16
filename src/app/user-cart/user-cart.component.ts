import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsercartService} from '../usercart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
mypr;
  constructor(private usr: UsercartService ) { }

  ngOnInit() {
    this.usr.showcart().subscribe(data => {
      this.mypr = data;
      console.log(data);
    });
  }
  decrement(abc1) {
    this.usr.decrement(1, abc1).subscribe(data => {
      this.usr.showcart().subscribe(data1 => {
        this.mypr = data1;
      });
    });
  }
  increment(abc2) {
    this.usr.decrement(1, abc2).subscribe(data => {
      this.usr.showcart().subscribe(data2 => {
        this.mypr = data2;
      });
    });
  }
  deletion(abc3) {
    this.usr.deletion(abc3).subscribe(data => {
      this.mypr = data;
      this.usr.showcart().subscribe(data1 => {
        this.mypr = data1;
      });
    });
  }

}
