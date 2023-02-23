import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdAlumnoComponent } from './ed-alumno/ed-alumno.component';
import { EdProfesorComponent } from './ed-profesor/ed-profesor.component';
import { VerEdProfesorComponent } from './ver-ed-profesor/ver-ed-profesor.component';
import { VerEdAlumnoComponent } from './ver-ed-alumno/ver-ed-alumno.component';
import { EditorEdProfesorComponent } from './editor-ed-profesor/editor-ed-profesor.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';
import { DatosEDComponent } from './datos-ed/datos-ed.component';



@NgModule({
  declarations: [
    EdAlumnoComponent,
    EdProfesorComponent,
    VerEdProfesorComponent,
    VerEdAlumnoComponent,
    EditorEdProfesorComponent,
    DatosEDComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule
  ]
})
export class EspacioDidacticoModule { }
