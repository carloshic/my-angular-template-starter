import { AuthService } from './../../../modules/auth/shared/services';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasRole(route.data.roles);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasRole(route.data.roles);
  }

  private hasRole(roles: string[] = []): boolean {
    const auth = this.authService.getLogin();

    for (const role of roles) {
      for (const userRole of auth.roles) {
        if (userRole === role) {
            return true;
        }
      }
    }
    return false;
  }
}
