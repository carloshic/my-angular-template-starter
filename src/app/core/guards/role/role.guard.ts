import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../../modules/auth/shared/services';
import { PageTitleService } from './../../services/page-title';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad, CanActivate {
  constructor(
    private authService: AuthService,
    private pageTitleService: PageTitleService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkPermission(route);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkPermission(route);
  }

  private checkPermission(route: Route | ActivatedRouteSnapshot): boolean {
    const hasPermission = this.hasRole(route.data.roles);

    if (!hasPermission) {
      this.router.navigate(['/', 'home', 'forbidden']);
    }

    return hasPermission;
  }

  private hasRole(roles: string[] = []): boolean {
    const auth = this.authService.getLoginInfo();

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
