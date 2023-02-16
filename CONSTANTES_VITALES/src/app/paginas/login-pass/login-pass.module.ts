import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { PassNuevaComponent } from './pass-nueva/pass-nueva.component';
import { UtilidadesModule } from 'src/app/utilidades/utilidades.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    EmailComponent,
    PassNuevaComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule,
    FormsModule //LUIS
  ]
})
export class LoginPassModule { }
