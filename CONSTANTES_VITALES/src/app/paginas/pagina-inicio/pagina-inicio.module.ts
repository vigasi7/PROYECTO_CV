import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';
import { VentanasEmergentesModule } from "../../utilidades/ventanas-emergentes/ventanas-emergentes.module";
import { PagInicioAdminComponent } from './pag-inicio-admin/pag-inicio-admin.component';



@NgModule({
    declarations: [
        PaginaInicioComponent,
        PagInicioAdminComponent
    ],
    imports: [
        CommonModule,
        UtilidadesModule,
        VentanasEmergentesModule,
    ]
})
export class PaginaInicioModule { }
