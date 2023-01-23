import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';



@NgModule({
  declarations: [
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule
  ]
})
export class PaginaInicioModule { }
