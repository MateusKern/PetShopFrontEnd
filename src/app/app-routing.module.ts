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
import { rotas } from "./core/rotas";

const routes: Routes = [
  { path: rotas.login, component: LoginComponent },
  { path: '', component: BaseComponent, children: [
    { path: rotas.home, component: HomeComponent },
    { path: rotas.sobre, component: SobreComponent },
    { path: rotas.produtos, component: ProdutoComponent },
    { path: rotas.servicos, component: ServicoComponent },
    { path: rotas.clientes, component: ClienteComponent },
    { path: rotas.colaboradores, component: ColaboradorComponent }
  ]},
  { path: '', redirectTo: rotas.login, pathMatch: 'full' },
  { path: '**', redirectTo: rotas.login, pathMatch: 'full' }
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