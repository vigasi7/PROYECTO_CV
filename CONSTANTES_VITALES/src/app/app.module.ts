import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { PaginasModule } from "./paginas/paginas.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    NgChartsModule,

    FontAwesomeModule,

    HttpClientModule,

    AppRoutingModule,

    UtilidadesModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PaginasModule]
})
export class AppModule { }
