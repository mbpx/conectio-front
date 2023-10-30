import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    console.log(this.username,this.password);
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe();
    }
  }

  logout() {
    this.authService.logout();
  }
}
