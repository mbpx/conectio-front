import { Component, OnInit } from '@angular/core';
import { EventosCercaService } from './eventos-cerca.service'; // Asegúrate de ajustar la ruta
import { EventosCercaRequest } from './eventos-cerca.request'; // Asegúrate de ajustar la ruta

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class Inicio implements OnInit {

  eventos: any[] = [];
  errorOcurred = false;


  constructor(private eventosService: EventosCercaService) {

  }

  ngOnInit(): void {
    const request: EventosCercaRequest = {
      latitud: 0.0133,
      longitud: 0.0133,
      maxDistancia: 1,
      page: 0,
      size: 10,
    };

    // Realizar la llamada para mostrar los eventos al cargar el componente
    this.eventosService.buscarEventosCerca(request).subscribe({
      next: (data) => {
        this.eventos = data; // Almacenar los eventos recuperados en la propiedad 'eventos'
      },
      error: (error) => {
        this.errorOcurred = true; // Marcar que ocurrió un error
      }
    });
    
  }

}
