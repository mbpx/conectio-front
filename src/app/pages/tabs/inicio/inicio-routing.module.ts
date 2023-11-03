import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './inicio.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

const routes: Routes = [
  {
    path: '',
    component: Inicio,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class InicioRoutingModule {}
