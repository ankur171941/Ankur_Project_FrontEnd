import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';

import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {OrderhistoryComponent} from "./orderhistory/orderhistory.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";

// tslint:disable-next-line:variable-name
export const Main_Routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full'},
  {  path: 'home', component: HomePageComponent, },
  {  path: 'login', component: LoginComponent, },
{  path: 'SignUp', component: SignUpComponent, },
{  path: 'orders', component: OrderhistoryComponent, },

  {  path: 'cart', component: UserCartComponent, },
  {  path: 'profile', component: MyprofileComponent, },

  {  path: 'productDetails/:id', component: ProductDetailsComponent, }


  ];

