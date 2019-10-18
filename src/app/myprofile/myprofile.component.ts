import { Component, OnInit } from '@angular/core';
import {UsercartService} from "../usercart.service";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
my;
  constructor(private user:UsercartService) { }

  ngOnInit() {
    this.user.showcart().subscribe(data => {
      this.my = data;
    });
  }

}
