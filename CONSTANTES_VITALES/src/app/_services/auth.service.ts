import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost/proyecto_cv/cv/public/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(emailProfesor: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      emailProfesor,
      password
    }, httpOptions);
  }
}
