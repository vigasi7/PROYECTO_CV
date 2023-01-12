import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

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
      name: 'CERRAR SESIÓN',
      icon: 'fas fa-sign-out-alt text-light fa-3x',
      direccion: '/login',
    },
  ]

  constructor(){}

  ngOnInit(): void {}
}
