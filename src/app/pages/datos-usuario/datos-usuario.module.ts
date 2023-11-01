import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosUsuarioComponent } from './datos-usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { IonAvatar, IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: DatosUsuarioComponent,
  }
];

@NgModule({
  declarations: [
    DatosUsuarioComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DatosUsuarioModule { }
