import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from "./sign-up/sign-up.component";

// tslint:disable-next-line:variable-name
export const Main_Routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full'},
  {  path: 'home', component: HomePageComponent, },
  {  path: 'login', component: LoginComponent, },
{  path: 'SignUp', component: SignUpComponent, },

  {  path: 'cart', component: UserCartComponent, },
  {  path: 'productList', component: ProductListComponent, },
  {  path: 'productDetails', component: ProductDetailsComponent, }
  ];

