import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CodigoMonitorComponent } from './codigo-monitor/codigo-monitor.component';



@NgModule({
    exports: [
        PagInicioComponent,
        LoginComponent,
        PerfilComponent,
        CodigoMonitorComponent
    ],
    declarations: [
        PagInicioComponent,
        LoginComponent,
        PerfilComponent,
        CodigoMonitorComponent
    ],
    imports: [
        CommonModule,
        UtilidadesModule,
    ]
})
export class MenusModule { }
