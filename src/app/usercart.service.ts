import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsercartService {

  constructor(private client: HttpClient) { }
  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cartcontrol/allcart';
    return this.client.get(url, {headers});
  }

  decrement(value, productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/cartcontrol/cart/decrement/1/product/' + productId);
  }
  increment(value, productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/cartcontrol/cart/increment/1/product/' + productId);
  }
  deletion(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/cartcontrol/cart/deleteItem/productId/' + productId);
  }

}
