import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventosCercaRequest } from './eventos-cerca.request';

@Injectable({
  providedIn: 'root',
})
export class EventosCercaService {
    private apiUrl = 'http://localhost:8080/api/v1';

    constructor(private http: HttpClient) {}

    // buscarEventosCerca(request: EventosCercaRequest): Observable<any> {
    //     return this.http.get(`${this.apiUrl}/eventos/nearby`, request);
    // }

    buscarEventosCerca(request: EventosCercaRequest): Observable<any> {
      return this.http.get(`${this.apiUrl}/eventos/nearby`, {
        params: {
          latitud: request.latitud.toString(),
          longitud: request.longitud.toString(),
          maxDistancia: request.maxDistancia.toString(),
          page: request.page.toString(),
          size: request.size.toString(),
        },
      });
    }
}