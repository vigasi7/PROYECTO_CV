import { Component } from '@angular/core';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})

export class PagInicioComponent {

  constructor() { }

  ngOnInit(): void {
  }

  sideNavStatus: boolean = false;

}
