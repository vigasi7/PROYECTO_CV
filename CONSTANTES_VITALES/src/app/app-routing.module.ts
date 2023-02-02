import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './paginas/login-pass/login/login.component';
import { PaginaInicioComponent } from './paginas/pagina-inicio/pagina-inicio/pagina-inicio.component';
import { DatosPerfilComponent } from './paginas/perfil-usuario/datos-perfil/datos-perfil.component';
import { CodigoMonitorAlumnoComponent } from "./paginas/monitor/codigo-monitor-alumno/codigo-monitor-alumno.component";
import { MonitorAlumnoComponent } from './paginas/monitor/monitor-alumno/monitor-alumno.component';
import { CambiarPassComponent } from './paginas/perfil-usuario/cambiar-pass/cambiar-pass.component';
import { EdAlumnoComponent } from './paginas/espacio-didactico/ed-alumno/ed-alumno.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},

{path: 'login', component: LoginComponent},
{path: 'home', component: PaginaInicioComponent},
{path: 'perfil', component: DatosPerfilComponent},
{path: 'cambiarContraseña', component: CambiarPassComponent},
{path: 'monitorCodigo', component: CodigoMonitorAlumnoComponent},
{path: 'monitor', component: MonitorAlumnoComponent},
{path: 'ed', component: EdAlumnoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
