import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../modules/auth/shared/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.isAuth();
      }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuth();
  }

  private isAuth(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/', 'auth', 'login'], {
        queryParams: {
          sessionMessage: 'Su sesion ha expirado',
        }
      });
      return false;
    }
  }
}
