import { Component, OnInit } from '@angular/core';
import {EcommService} from '../ecomm.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
mypro;
Prod;
  constructor(private Service: EcommService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.mypro = id;
    });
    this.Service.getBackEnd(this.mypro).subscribe((data) => {
      this.Prod = data;
    });
  }

}
