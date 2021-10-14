import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
//antc-ICON图标引入
import { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline ,AppstoreOutline,SettingOutline} from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ MailOutline ,AppstoreOutline,SettingOutline ];

import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';

@NgModule({
  // 声明组件
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
