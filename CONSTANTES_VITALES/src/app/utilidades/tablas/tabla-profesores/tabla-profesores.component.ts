import { Component } from '@angular/core';
import { ProfesoresService } from "../../../profesores.service";

@Component({
  selector: 'tabla-profesores',
  templateUrl: './tabla-profesores.component.html',
  styleUrls: ['./tabla-profesores.component.css']
})
export class TablaProfesoresComponent {
  profesores: any;

  constructor(private profesoresService: ProfesoresService){

  }


  ngOnInit() {
    this.profesoresService.retornar()
      .subscribe( result =>  this.profesores = result)
  }
}
