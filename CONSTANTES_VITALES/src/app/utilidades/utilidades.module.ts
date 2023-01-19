import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GraficosComponent } from './graficos/graficos.component';



@NgModule({
  exports: [
    SideNavComponent,
    GraficosComponent
  ],
  declarations: [
    SideNavComponent,
    GraficosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilidadesModule { }
