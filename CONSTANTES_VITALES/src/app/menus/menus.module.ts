import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
    exports: [
        PagInicioComponent,
        LoginComponent,
        PerfilComponent
    ],
    declarations: [
        PagInicioComponent,
        LoginComponent,
        PerfilComponent
    ],
    imports: [
        CommonModule,
        UtilidadesModule,
    ]
})
export class MenusModule { }
