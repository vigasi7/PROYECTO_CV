import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './menus/login/login.component';
import { PagInicioComponent } from './menus/pag-inicio/pag-inicio.component';
import { PerfilComponent } from './menus/perfil/perfil.component';
import { CodigoMonitorComponent } from "./menus/codigo-monitor/codigo-monitor.component";
import { MonitorComponent } from './menus/monitor/monitor.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},

{path: 'login', component: LoginComponent},
{path: 'home', component: PagInicioComponent},
{path: 'perfil', component: PerfilComponent},
{path: 'monitorCodigo', component: CodigoMonitorComponent},
{path: 'monitor', component: MonitorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
