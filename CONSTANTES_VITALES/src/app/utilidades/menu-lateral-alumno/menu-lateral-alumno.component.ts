import { Component } from '@angular/core';

@Component({
  selector: 'menu-lateral-alumno',
  templateUrl: './menu-lateral-alumno.component.html',
  styleUrls: ['./menu-lateral-alumno.component.css']
})
export class MenuLateralAlumnoComponent {
  list=[
    {
      number: '1',
      name: 'MONITOR',
      icon: 'fas fa-sharp fa-solid fa-desktop text-light fa-3x',
      direccion: '/monitorCodigo',
    },
    {
      number: '2',
      name: 'ESPACIO DIDÁCTICO',
      icon: 'fas fa-sharp fa-solid fa-book text-light fa-3x',
      direccion: '/home',
    },
    {
      number: '3',
      name: 'PERFIL',
      icon: 'fas fa-solid fa-user text-light fa-3x',
      direccion: '/perfil',
    },
    {
      number: '4',
      name: 'CERRAR SESIÓN',
      icon: 'fas fa-sign-out-alt text-light fa-3x',
      direccion: '/login',
    },
  ]
}
