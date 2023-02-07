import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaProfesoresComponent } from './tabla-profesores/tabla-profesores.component';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';




@NgModule({
  declarations: [
    TablaProfesoresComponent,
    TablaAlumnosComponent
  ],
  exports:[
    TablaProfesoresComponent,
    TablaAlumnosComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TablasModule { }
