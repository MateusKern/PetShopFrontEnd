import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./base/base.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { ColaboradorComponent } from "./colaborador/colaborador.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProdutoComponent } from "./produto/produto.component";
import { ServicoComponent } from "./servico/servico.component";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: BaseComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'produtos', component: ProdutoComponent },
    { path: 'servicos', component: ServicoComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'colaboradores', component: ColaboradorComponent }
  ]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }  