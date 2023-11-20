import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { IonAvatar, IonicModule } from '@ionic/angular';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: DatosUsuarioComponent,
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
  }
];

@NgModule({
  declarations: [
    DatosUsuarioComponent,
    ConfiguracionComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class UsuarioModule { }
