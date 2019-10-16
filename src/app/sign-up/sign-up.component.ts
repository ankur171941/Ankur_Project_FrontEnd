import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username;
  email;
  password;
  conform;
  constructor( private client: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  signup() {
    const user = {

          // tslint:disable-next-line:label-position
          email: this.email,
          password : this.password,
      authorization: 'customer'
        };

    if (this.password === this.conform) {
  this.client.post('http://localhost:8080/user/postm', user).subscribe(data => {

    this.route.navigate(['/login']);
    console.log('signup');
  });
} else {
      alert('password does not match');
    }


  }

}
