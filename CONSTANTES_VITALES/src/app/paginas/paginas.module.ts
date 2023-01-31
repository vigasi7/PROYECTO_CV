import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPassModule } from './login-pass/login-pass.module';
import { MonitorModule } from './monitor/monitor.module';
import { EspacioDidacticoModule } from './espacio-didactico/espacio-didactico.module';
import { PerfilUsuarioModule } from './perfil-usuario/perfil-usuario.module';
import { PaginaInicioModule } from './pagina-inicio/pagina-inicio.module';


import { UtilidadesModule } from '../utilidades/utilidades.module';


@NgModule({
  exports: [
    LoginPassModule,
    MonitorModule,
    EspacioDidacticoModule,
    PerfilUsuarioModule,
    PaginaInicioModule
  ],
  declarations: [

  ],
  imports: [
    CommonModule,
    UtilidadesModule
  ]
})
export class PaginasModule { }
