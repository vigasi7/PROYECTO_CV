import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './menus/login/login.component';
import { PagInicioComponent } from './menus/pag-inicio/pag-inicio.component';
import { PerfilComponent } from './menus/perfil/perfil.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},

{path: 'login', component: LoginComponent},
{path: 'home', component: PagInicioComponent},
{path: 'perfil', component: PerfilComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
