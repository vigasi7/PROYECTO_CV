import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPerfilComponent } from './datos-perfil/datos-perfil.component';
import { CambiarPassComponent } from './cambiar-pass/cambiar-pass.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';
import { VentanasEmergentesModule } from 'src/app/utilidades/ventanas-emergentes/ventanas-emergentes.module';



@NgModule({
  declarations: [
    DatosPerfilComponent,
    CambiarPassComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule,
    VentanasEmergentesModule,
  ]
})
export class PerfilUsuarioModule { }
