import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// httpq请求方法
import { HttpService } from './service/http';
// 路由
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
// antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';





//antc-ICON图标引入
import { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline ,AppstoreOutline,SettingOutline,TeamOutline} from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ MailOutline ,AppstoreOutline,SettingOutline,TeamOutline ];
//封装后的Storage
import { StroageService } from './service/stroage';

import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  // 声明组件
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    UserComponent,
    ShopComponent,
    LoginComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCheckboxModule,
    NzTableModule
  ],
  providers: [
    StroageService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
