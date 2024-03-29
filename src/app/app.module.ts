import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { MenuComponent } from './partials/menu/menu.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { VendasComponent } from './pages/vendas/vendas.component';

export function tokenGetter() {
  return localStorage.getItem('TOKEN')
}

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
    VendasComponent,
    MenuComponent
   ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.apiUrlJwtToken]
      }
    }),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
