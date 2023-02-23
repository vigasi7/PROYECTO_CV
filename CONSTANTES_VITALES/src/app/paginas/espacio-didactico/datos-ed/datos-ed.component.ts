import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-ed',
  templateUrl: './datos-ed.component.html',
  styleUrls: ['./datos-ed.component.css']
})
export class DatosEDComponent {
  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost/proyecto_cv/cv/public/api/listaDatosED");
  }
}
