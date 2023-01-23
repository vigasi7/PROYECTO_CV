import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassModificadaComponent } from './pass-modificada/pass-modificada.component';
import { OcultarEdComponent } from './ocultar-ed/ocultar-ed.component';
import { MonitorPersonalizadoComponent } from './monitor-personalizado/monitor-personalizado.component';
import { SalirMonitorComponent } from './salir-monitor/salir-monitor.component';
import { EliminarEdComponent } from './eliminar-ed/eliminar-ed.component';



@NgModule({
  declarations: [
    PassModificadaComponent,
    OcultarEdComponent,
    MonitorPersonalizadoComponent,
    SalirMonitorComponent,
    EliminarEdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentanasEmergentesModule { }
