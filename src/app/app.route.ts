import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';

import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {OrderhistoryComponent} from "./orderhistory/orderhistory.component";

// tslint:disable-next-line:variable-name
export const Main_Routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full'},
  {  path: 'home', component: HomePageComponent, },
  {  path: 'login', component: LoginComponent, },
{  path: 'SignUp', component: SignUpComponent, },
{  path: 'OrderHistory', component: OrderhistoryComponentomponent, },

  {  path: 'cart', component: UserCartComponent, },

  {  path: 'productDetails/:id/', component: ProductDetailsComponent, }


  ];

