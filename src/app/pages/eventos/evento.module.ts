import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { EventoComponent } from './evento/evento.component';

const routes: Routes = [
  {
    path: '',
    component: EventoComponent,
  }
];

@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot()
  ]
})
export class EventoModule { }
