import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPassModule } from './login-pass/login-pass.module';
import { MonitorModule } from './monitor/monitor.module';
import { EspacioDidacticoModule } from './espacio-didactico/espacio-didactico.module';
import { PerfilUsuarioModule } from './perfil-usuario/perfil-usuario.module';
import { PaginaInicioModule } from './pagina-inicio/pagina-inicio.module';



import { UtilidadesModule } from '../utilidades/utilidades.module';
import { VistaTablasModule } from './vista-tablas/vista-tablas.module';
import { TablasModule } from '../utilidades/tablas/tablas.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [
    LoginPassModule,
    MonitorModule,
    EspacioDidacticoModule,
    PerfilUsuarioModule,
    PaginaInicioModule,
    VistaTablasModule
  ],
  declarations: [

  ],
  imports: [
    CommonModule,
    UtilidadesModule,
    TablasModule,
    FormsModule //Luis
  ]
})
export class PaginasModule { }
