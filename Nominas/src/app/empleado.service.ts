import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl = 'http://localhost:8080/empleados';

  constructor(private http: HttpClient) { }

  getListaEmpleados(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteEmpleado(dni: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${dni}`, {responseType: 'text'});
  }

  crearEmpleado(empleado: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, empleado);
  }
}
