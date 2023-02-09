import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { PaginasModule } from "./paginas/paginas.module";

import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    FormsModule,

    NgChartsModule,

    FontAwesomeModule,

    HttpClientModule,

    AppRoutingModule,


    UtilidadesModule,
    PaginasModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [PaginasModule]
})
export class AppModule { }
