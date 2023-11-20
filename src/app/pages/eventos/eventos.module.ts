import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
  {
  path: '',
  component: CrearEventoComponent,

  }
]

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    CrearEventoComponent,
    MapaComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EventosModule { }
