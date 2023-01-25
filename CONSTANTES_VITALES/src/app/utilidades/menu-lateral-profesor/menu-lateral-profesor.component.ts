import { Component } from '@angular/core';

@Component({
  selector: 'menu-lateral-profesor',
  templateUrl: './menu-lateral-profesor.component.html',
  styleUrls: ['./menu-lateral-profesor.component.css']
})
export class MenuLateralProfesorComponent {
  list=[
    {
      number: '1',
      name: 'MONITOR',
      icon: 'fas fa-sharp fa-solid fa-desktop text-light fa-3x',
      direccion: '/home',
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
      name: 'ALUMNOS',
      icon: 'fas fa-solid fa-users text-light fa-3x',
      direccion: '/login',
    },
    {
      number: '5',
      name: 'CERRAR SESIÓN',
      icon: 'fas fa-sign-out-alt text-light fa-3x',
      direccion: '/login',
    },
  ]
}
