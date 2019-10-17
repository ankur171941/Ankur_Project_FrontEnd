import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  getAllItems() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get( 'http://localhost:8081/api/notes', {headers});
  }

  getItemsById(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:8081/api/par/' + id, {headers});
  }
}
