import { Component } from '@angular/core';
import { EspDidService } from "../../../esp-did.service";

@Component({
  selector: 'app-ed-profesor',
  templateUrl: './ed-profesor.component.html',
  styleUrls: ['./ed-profesor.component.css']
})
export class EdProfesorComponent {
  ed: any;

  constructor(private edService: EspDidService){

  }


  ngOnInit() {
    this.edService.retornar()
      .subscribe( result =>  this.ed = result)
  }
}
