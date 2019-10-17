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
    const url = 'http://localhost:8081/cartcontrol/allcart';
    return this.client.get(url, {headers});
  }

  decrement(value, productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8081/cartcontrol/cart/decrement/1/product/' + productId,{headers});
  }
  increment(value, productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8081/cartcontrol/cart/increment/1/product/' + productId,{headers});
  }
  deletion(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8080/cartcontrol/cart/deleteItem/productId/' + productId,{headers});
  }
  checkout()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8081/cartcontrol/checkout',{headers});
  }
  addtocart(abc)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8081/cartcontrol/cart/addItem/productId/' + abc, {headers});
  }
pricefilter(price1,price2)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.client.get('http://localhost:8081/api/items/' + price1 + '/' + price2, {headers});
  }

}
