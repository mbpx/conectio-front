import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
})
export class CrearEventoComponent  implements OnInit {

  
  crearEventoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.crearEventoForm = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fechaDesde: new FormControl(new Date(), Validators.required),       
      fechaHasta: new FormControl(new Date(), Validators.required)
    });
  }

  ngOnInit() {}

  crear() {

  }

}
