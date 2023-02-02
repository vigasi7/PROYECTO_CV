import { Component } from '@angular/core';
import { AlumnosService } from '../../alumnos.service';


@Component({
  selector: 'menu-lateral-admin',
  templateUrl: './menu-lateral-admin.component.html',
  styleUrls: ['./menu-lateral-admin.component.css']
})
export class MenuLateralAdminComponent {

  alumnos: any;

  constructor(private alumnosService: AlumnosService){

  }


  ngOnInit() {
    this.alumnosService.retornar()
      .subscribe( result =>  this.alumnos = result)
  }

}
