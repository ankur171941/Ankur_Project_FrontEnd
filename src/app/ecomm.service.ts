import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EcommService {

  constructor(private client: HttpClient) { }
  getInformation() {
    const url = '/assets/data/ajax.json';
    return this.client.get(url);
  }
  getBackEn() {

    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8081/api/notes';
    return this.client.get(url,{headers});
  }
  getBackEnd(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url1 = 'http://localhost:8081/api/par/' + id;
    return this.client.get(url1, {headers});
  }

}
