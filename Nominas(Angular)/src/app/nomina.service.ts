import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NominaService {
  private baseUrl = 'http://localhost:8080/nominas';

  constructor(private http: HttpClient) { }

  getListaNominas(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getNomina(dni : String): Observable<any>{
    return this.http.get(`${this.baseUrl}/${dni}`);
  }

}
