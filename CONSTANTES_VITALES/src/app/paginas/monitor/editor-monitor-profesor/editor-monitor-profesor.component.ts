import { Component, OnInit } from '@angular/core';
import { ParametrosService } from 'src/app/parametros.service';

@Component({
  selector: 'app-editor-monitor-profesor',
  templateUrl: './editor-monitor-profesor.component.html',
  styleUrls: ['./editor-monitor-profesor.component.css']
})
export class EditorMonitorProfesorComponent implements OnInit{

  parametros: any;

  constructor(private parametrosService: ParametrosService){

  }


  ngOnInit() {
    this.parametrosService.retornar()
      .subscribe( result =>  this.parametros = result)
  }

}
