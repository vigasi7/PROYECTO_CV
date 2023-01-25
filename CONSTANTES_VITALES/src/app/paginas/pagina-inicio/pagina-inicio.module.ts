import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';
import { VentanasEmergentesModule } from "../../utilidades/ventanas-emergentes/ventanas-emergentes.module";



@NgModule({
    declarations: [
        PaginaInicioComponent
    ],
    imports: [
        CommonModule,
        UtilidadesModule,
        VentanasEmergentesModule,
    ]
})
export class PaginaInicioModule { }
