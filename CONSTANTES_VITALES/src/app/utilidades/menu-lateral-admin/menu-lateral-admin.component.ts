import { Component } from '@angular/core';
import { AlumnosService } from '../../alumnos.service';
import { ProfesoresService } from "../../profesores.service";


@Component({
  selector: 'menu-lateral-admin',
  templateUrl: './menu-lateral-admin.component.html',
  styleUrls: ['./menu-lateral-admin.component.css']
})
export class MenuLateralAdminComponent {

  profesores: any;

  constructor(private profesoresService: ProfesoresService){

  }


  ngOnInit() {
    this.profesoresService.retornar()
      .subscribe( result =>  this.profesores = result)
  }

}
