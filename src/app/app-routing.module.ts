import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BaseComponent } from "./base/base.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BaseComponent },
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