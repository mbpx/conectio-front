import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config, map } from 'rxjs';
import { Usuario } from './user.model';
import { AuthenticateRequest } from './authenticate.request';
import { RegisterRequest } from './register.request';
import { AuthenticationResponse } from './authentication.response';
import { StorageService } from './storage.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<Usuario>;
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse('{}'));
    this.currentUser = this.currentUserSubject.asObservable();

    async () => {
      let usuario = await this.storage.get('currentUser');
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(usuario || '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
    };
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
        this.storage.set('currentUser', JSON.stringify(usuario));
        return response;
      }));
  }

  logout() {
    this.storage.remove('currentUser');
    this.currentUserSubject.next(null);
  }

  register(request: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/register`, request)
      .pipe(map(response => {
        let usuario: Usuario = request;
        usuario.token = response.token;
        this.storage.set('currentUser', JSON.stringify(usuario));
        return response;
      }));
  }
}