import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Start', loadChildren: './start/start.module#StartPageModule' },  { path: 'Inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
