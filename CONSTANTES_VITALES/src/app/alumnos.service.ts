import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost/proyecto_cv/cv/public/api/listaAlumnos");
  }
}
