import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inicio } from './inicio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InicioRoutingModule } from './inicio-routing.module';
import { EventosCercaService } from './eventos-cerca.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InicioRoutingModule,
    HttpClientModule
  ],
  declarations: [
    Inicio
  ],
  providers: [
    EventosCercaService
  ]
})
export class InicioModule {}
