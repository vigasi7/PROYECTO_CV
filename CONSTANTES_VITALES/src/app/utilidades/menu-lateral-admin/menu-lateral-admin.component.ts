import { Component } from '@angular/core';
import { AlumnosService } from '../../alumnos.service';
import { ProfesoresService } from "../../profesores.service";


@Component({
  selector: 'menu-lateral-admin',
  templateUrl: './menu-lateral-admin.component.html',
  styleUrls: ['./menu-lateral-admin.component.css']
})
export class MenuLateralAdminComponent {

  list=[
    {
      number: '1',
      name: 'MONITOR',
      icon: 'fas fa-sharp fa-solid fa-desktop text-light fa-3x',
      direccion: '/editorMonitor',
    },
    {
      number: '2',
      name: 'ESPACIO DIDÁCTICO',
      icon: 'fas fa-sharp fa-solid fa-book text-light fa-3x',
      direccion: '/ed',
    },
    {
      number: '3',
      name: 'PERFIL',
      icon: 'fas fa-solid fa-user text-light fa-3x',
      direccion: '/perfil',
    },
    {
      number: '4',
      name: 'LISTAS',
      icon: 'fas fa-thin fa-list text-light fa-3x',
      direccion: '/tablas',
    },
    {
      number: '5',
      name: 'CERRAR SESIÓN',
      icon: 'fas fa-sign-out-alt text-light fa-3x',
      direccion: '/login',
    },
  ]
}
