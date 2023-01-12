import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SideNavComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilidadesModule { }
