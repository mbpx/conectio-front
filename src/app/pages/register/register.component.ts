import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  registrarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registrarForm = this.formBuilder.group({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')      
    });
  }

  ngOnInit() {}

}
