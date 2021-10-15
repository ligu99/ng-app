import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { UserComponent } from "../app/user/user.component"
import { ShopComponent } from "../app/shop/shop.component"
import { AddcardComponent } from "../app/addcard/addcard.component"

const routes: Routes = [
  // 重定向
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // 登录页面
  { path: 'login', component: LoginComponent },
  // 嵌套
  { path: '', component: ConsoleComponent,children:[
    { path: 'user', component: UserComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'addcard', component: AddcardComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
