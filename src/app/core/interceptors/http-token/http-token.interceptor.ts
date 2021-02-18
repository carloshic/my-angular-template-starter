import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SKIP_TOKEN_HEADER } from '../../constants';
import { AuthService } from './../../../modules/auth/shared/services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = request.headers;

    if (headers.has(SKIP_TOKEN_HEADER)) {
      headers.delete(SKIP_TOKEN_HEADER);
      return next.handle(request);
    } else {
      if (this.authService.isAuthenticated()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authService.getToken()}`,
          },
        });
        return next.handle(request);
      } else {
        return throwError(new Error('No session'));
      }
    }
  }
}
