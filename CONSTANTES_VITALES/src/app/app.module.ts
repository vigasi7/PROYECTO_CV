import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { MenusModule } from "./menus/menus.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    FontAwesomeModule,

    AppRoutingModule,

    UtilidadesModule,
    MenusModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MenusModule]
})
export class AppModule { }
