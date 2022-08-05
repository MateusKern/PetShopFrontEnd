import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoComponent } from './produto/produto.component';
import { ServicoComponent } from './servico/servico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { MenuComponent } from './partials/menu/menu.component';

@NgModule({
  declarations: [									
    AppComponent,
    BaseComponent,
    LoginComponent,
    HomeComponent,
    SobreComponent,
    ProdutoComponent,
    ServicoComponent,
    ClienteComponent,
    ColaboradorComponent,
    MenuComponent
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
