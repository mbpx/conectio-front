import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Usuario } from '../../core/model/user.model';
import { RegisterRequest } from 'src/app/core/data/register.request';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  registrarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.registrarForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)      
    });
  }

  ngOnInit() {}

  registrar() {
    if (this.registrarForm.valid) {
      const value = this.registrarForm.value;
      let registro: RegisterRequest = {
        nombre: value.nombre,
        apellidos: value.apellidos,
        email: value.email,
        username: value.username,
        password: value.password
      }
      this.authService.register(registro).subscribe({
        next: (response) => {
          console.log('Usuario registrado con éxito', response);
        },
        error: (error) => {
          console.error('Error al registrar usuario', error);
        }
    });
    } else {
      console.error('Error, el formulario de registro no es válido');
    }
  }

}
