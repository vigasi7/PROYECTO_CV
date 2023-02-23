import { Component } from '@angular/core';
import { ParametrosService } from 'src/app/parametros.service';

@Component({
  selector: 'perfiles-monitor',
  templateUrl: './perfiles-monitor.component.html',
  styleUrls: ['./perfiles-monitor.component.css']
})
export class PerfilesMonitorComponent {
  parametros: any;

  constructor(private parametrosService: ParametrosService){

  }


  ngOnInit() {
    this.parametrosService.retornar()
      .subscribe( result =>  this.parametros = result)
  }
}
