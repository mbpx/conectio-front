import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
})
export class ConfiguracionComponent {

  constructor(
    private authService: AuthenticationService
  ) { }


  eliminarCuenta() {

    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.");

    if (confirmar) {
      this.authService.eliminarCuenta();
    }
  }

}
