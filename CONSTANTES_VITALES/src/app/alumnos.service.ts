import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost/adminer-4.8.1-mysql.php?username=root&db=constantes_vitales&table=alumnos");
  }
}
