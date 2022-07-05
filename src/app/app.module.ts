import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [			
    AppComponent,
    BaseComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }