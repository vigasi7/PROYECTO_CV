import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorAlumnoComponent } from './monitor-alumno/monitor-alumno.component';
import { MonitorProfesorComponent } from './monitor-profesor/monitor-profesor.component';
import { EditorMonitorProfesorComponent } from './editor-monitor-profesor/editor-monitor-profesor.component';
import { CodigoMonitorAlumnoComponent } from './codigo-monitor-alumno/codigo-monitor-alumno.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';



@NgModule({
  declarations: [
    MonitorAlumnoComponent,
    MonitorProfesorComponent,
    EditorMonitorProfesorComponent,
    CodigoMonitorAlumnoComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule
  ]
})
export class MonitorModule { }
