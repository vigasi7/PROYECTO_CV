import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './paginas/login-pass/login/login.component';
import { PaginaInicioComponent } from './paginas/pagina-inicio/pagina-inicio/pagina-inicio.component';
import { PagInicioAdminComponent } from './paginas/pagina-inicio/pag-inicio-admin/pag-inicio-admin.component';
import { DatosPerfilComponent } from './paginas/perfil-usuario/datos-perfil/datos-perfil.component';
import { CodigoMonitorAlumnoComponent } from "./paginas/monitor/codigo-monitor-alumno/codigo-monitor-alumno.component";
import { MonitorAlumnoComponent } from './paginas/monitor/monitor-alumno/monitor-alumno.component';
import { CambiarPassComponent } from './paginas/perfil-usuario/cambiar-pass/cambiar-pass.component';
import { EdAlumnoComponent } from './paginas/espacio-didactico/ed-alumno/ed-alumno.component';
import { VistaTablaProfesoresComponent } from './paginas/vista-tablas/vista-tabla-profesores/vista-tabla-profesores.component';
import { EditorMonitorProfesorComponent } from './paginas/monitor/editor-monitor-profesor/editor-monitor-profesor.component';
import { VistaTablaAlumnosComponent } from './paginas/vista-tablas/vista-tabla-alumnos/vista-tabla-alumnos.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},

{path: 'login', component: LoginComponent},
{path: 'home', component: PaginaInicioComponent},
{path: 'tablas', component: PagInicioAdminComponent},
{path: 'perfil', component: DatosPerfilComponent},
{path: 'cambiarContraseña', component: CambiarPassComponent},
{path: 'monitorCodigo', component: CodigoMonitorAlumnoComponent},
{path: 'monitor', component: MonitorAlumnoComponent},
{path: 'ed', component: EdAlumnoComponent},
{path: 'tablaProfesores', component: VistaTablaProfesoresComponent},
{path: 'tablaAlumnos', component: VistaTablaAlumnosComponent},
{path: 'editorMonitor', component: EditorMonitorProfesorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
