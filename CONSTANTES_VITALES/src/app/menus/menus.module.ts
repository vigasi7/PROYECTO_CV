import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CodigoMonitorComponent } from './codigo-monitor/codigo-monitor.component';
import { MonitorComponent } from './monitor/monitor.component';



@NgModule({
    exports: [
        PagInicioComponent,
        LoginComponent,
        PerfilComponent,
        CodigoMonitorComponent,
        MonitorComponent
    ],
    declarations: [
        PagInicioComponent,
        LoginComponent,
        PerfilComponent,
        CodigoMonitorComponent,
        MonitorComponent
    ],
    imports: [
        CommonModule,
        UtilidadesModule,
    ]
})
export class MenusModule { }
