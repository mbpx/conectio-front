import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config, map } from 'rxjs';
import { Usuario } from './user.model';
import { AuthenticateRequest } from './authenticate.request';
import { RegisterRequest } from './register.request';
import { AuthenticationResponse } from './authentication.response';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<Usuario>;
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let request: AuthenticateRequest = { username, password };
    console.log(request);
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/authenticate`, request)
      .pipe(map(response => {
        let usuario: Usuario = {
          username: username,
          token: response.token
        };
        localStorage.setItem('currentUser', JSON.stringify(usuario));
        return response;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(request:RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/register`, request)
      .pipe(map(response => {
        let usuario: Usuario = request;
        usuario.token = response.token;
        localStorage.setItem('currentUser', JSON.stringify(usuario));
        return response;
      }));
  }
}