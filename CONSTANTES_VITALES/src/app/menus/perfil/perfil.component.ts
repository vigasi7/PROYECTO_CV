import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  list=[
    {
      number: '1',
      name: 'Víctor',
      icon: 'fas fa-solid fa-user text-light fa-3x',
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
