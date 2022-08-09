import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./pages/base/base.component";
import { ClienteComponent } from "./pages/cliente/cliente.component";
import { ColaboradorComponent } from "./pages/colaborador/colaborador.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProdutoComponent } from "./pages/produto/produto.component";
import { ServicoComponent } from "./pages/servico/servico.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { rotas } from "./core/constants/rotas";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  { path: rotas.login, component: LoginComponent },
  { path: '', component: BaseComponent, canActivate: [AuthGuard], children: [
    { path: rotas.home, component: HomeComponent },
    { path: rotas.sobre, component: SobreComponent },
    { path: rotas.produtos, component: ProdutoComponent },
    { path: rotas.servicos, component: ServicoComponent },
    { path: rotas.clientes, component: ClienteComponent },
    { path: rotas.colaboradores, component: ColaboradorComponent },
    { path: '', redirectTo: rotas.home, pathMatch: 'full' }
  ]}
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