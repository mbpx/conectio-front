import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './inicio.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: Inicio,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule

  ],
  exports: [RouterModule]
})
export class InicioRoutingModule {}
