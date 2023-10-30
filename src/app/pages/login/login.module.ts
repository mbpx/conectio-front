import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '../../core/jwt.interceptor';
import { AuthenticationService } from '../../core/authentication.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from 'src/app/core/storage.service';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'register',
   component: RegisterComponent 
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
        IonicModule,
        IonicStorageModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
