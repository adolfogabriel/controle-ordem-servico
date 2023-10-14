import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {AuthGuard} from "./auth.guard";
import {ListarosComponent} from "./listaros/listaros.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detalhes/:id', component: DetalhesComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listar', component: ListarosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
