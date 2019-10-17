import { Component, OnInit } from '@angular/core';
import {UsercartService} from "../usercart.service";

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
data1;
  constructor(private userservice: UsercartService) { }

  ngOnInit() {

    this.userservice.checkout().subscribe(data => {
      this.data1 = data;
    });
  }

}
