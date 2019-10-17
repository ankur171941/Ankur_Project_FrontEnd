import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsercartService} from '../usercart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
mypr;
sum;count;
  checkoutd;
  constructor(private usr: UsercartService, private router: Router) { }

  ngOnInit() {
    this.usr.showcart().subscribe(data => {
      this.mypr = data;
      console.log(data);
    });
    this.totalchange();
  }
  decrement(abc1) {
    this.usr.decrement(1, abc1).subscribe(data => {
      this.usr.showcart().subscribe(data1 => {
        this.mypr = data1;
        this.totalchange();
      });
    });
  }
  increment(abc2) {
    this.usr.decrement(1, abc2).subscribe(data => {
      this.usr.showcart().subscribe(data2 => {
        this.mypr = data2;
        this.totalchange();
      });
    });
  }
  deletion(abc3) {
    this.usr.deletion(abc3).subscribe(data => {
      this.mypr = data;
      this.usr.showcart().subscribe(data1 => {
        this.mypr = data1;
        this.totalchange();
      });
    });
  }
  checkout()
  {
    this.usr.checkout().subscribe(data => {
      this.checkoutd = data;


    });
    this.router.navigate(['OrderHistory']);
    location.reload();
    alert('nothing in cart continue shopping');
  }
  totalchange()
  {
    this.sum = 0;
    this.count = 0;
    for (const val of this.mypr)
    {
      this.sum += val.items.price * val.quantity;
      this.count += 1;
    }
  }


}
