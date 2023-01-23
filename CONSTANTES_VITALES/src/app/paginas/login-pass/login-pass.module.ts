import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { PassNuevaComponent } from './pass-nueva/pass-nueva.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';



@NgModule({
  declarations: [
    LoginComponent,
    EmailComponent,
    PassNuevaComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule
  ]
})
export class LoginPassModule { }
