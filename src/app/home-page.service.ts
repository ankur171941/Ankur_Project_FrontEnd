import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private client: HttpClient) { }
  getByCat(caetgory)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/api/cat/' + caetgory;
    return this.client.get(url, {headers});
  }
}
