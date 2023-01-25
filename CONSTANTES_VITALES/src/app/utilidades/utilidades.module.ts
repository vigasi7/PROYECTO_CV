import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosComponent } from './graficos/graficos.component';


import { PerfilesMonitorComponent } from './perfiles-monitor/perfiles-monitor.component';
import { ParametrosMonitorComponent } from './parametros-monitor/parametros-monitor.component';
import { MenuLateralAlumnoComponent } from './menu-lateral-alumno/menu-lateral-alumno.component';
import { MenuLateralProfesorComponent } from './menu-lateral-profesor/menu-lateral-profesor.component';
import { MenuLateralAdminComponent } from './menu-lateral-admin/menu-lateral-admin.component';
import { GeneradorCodigoMonitorComponent } from './generador-codigo-monitor/generador-codigo-monitor.component';
import { VentanasEmergentesModule } from './ventanas-emergentes/ventanas-emergentes.module';
import { CerrarSesionComponent } from './ventanas-emergentes/cerrar-sesion/cerrar-sesion.component';



@NgModule({
  exports: [
    GraficosComponent,

    PerfilesMonitorComponent,
    ParametrosMonitorComponent,
    MenuLateralAlumnoComponent,
    MenuLateralProfesorComponent,
    MenuLateralAdminComponent,
    GeneradorCodigoMonitorComponent,

  ],
  declarations: [
    GraficosComponent,

    PerfilesMonitorComponent,
    ParametrosMonitorComponent,
    MenuLateralAlumnoComponent,
    MenuLateralProfesorComponent,
    MenuLateralAdminComponent,
    GeneradorCodigoMonitorComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class UtilidadesModule { }
