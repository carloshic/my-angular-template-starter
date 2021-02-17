import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';
import { ILogin } from './../../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string;

  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(login: ILogin): void {
    this.login(login);
  }

  login(login: ILogin): void {
    this.errorMessage = null;
    this.loading = true;

    const login$ = this.authService.login({
      username: login.username,
      password: login.password,
    });

    login$.subscribe((auth) => {
      this.authService.setLogin(auth);
      this.router.navigate(['/', 'home']);
    }, () => {
      this.errorMessage = 'Usuario o contraseña no valida';
    }).add(() => this.loading = false);
  }
}
