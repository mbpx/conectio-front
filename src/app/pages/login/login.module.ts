import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '../../core/interceptors/jwt.interceptor';
import { AuthenticationService } from '../../core/services/authentication.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from 'src/app/core/services/storage.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
        IonicModule,
        IonicStorageModule.forRoot(),
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        HttpClientModule
  ],
  providers: [
    AuthenticationService,
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class LoginModule { }
