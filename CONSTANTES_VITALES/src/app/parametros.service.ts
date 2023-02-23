import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost/proyecto_cv/cv/public/api/listaParametros");
  }
}
