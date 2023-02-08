import { Component } from '@angular/core';
import { AlumnosService } from 'src/app/alumnos.service';

@Component({
  selector: 'tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {
  alumnos: any;

  constructor(private alumnosService: AlumnosService){

  }


  ngOnInit() {
    this.alumnosService.retornar()
      .subscribe( result =>  this.alumnos = result)
  }
}
