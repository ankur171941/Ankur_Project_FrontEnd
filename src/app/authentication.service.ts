import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private  http: HttpClient) { }

  authenticate(username, password) {
    console.log("authenticate");
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8081/user/allusers', {headers}).pipe(
      map(data => {
        sessionStorage.setItem('token', btoa(username + ':' + password));
      })
    );
  }
  isUserLoggedIn()
  {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }

  logoutService(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('auth');
  }
}
