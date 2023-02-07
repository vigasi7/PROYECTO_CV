import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaTablaAlumnosComponent } from './vista-tabla-alumnos/vista-tabla-alumnos.component';
import { VistaTablaProfesoresComponent } from './vista-tabla-profesores/vista-tabla-profesores.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';
import { TablasModule } from 'src/app/utilidades/tablas/tablas.module';



@NgModule({
  declarations: [
    VistaTablaAlumnosComponent,
    VistaTablaProfesoresComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule,
    TablasModule
  ]
})
export class VistaTablasModule { }
