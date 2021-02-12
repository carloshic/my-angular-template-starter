import { REQUEST_TIMEOUT, RETRY_TIMES_ON_ERROR } from '../../constants';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      timeout(REQUEST_TIMEOUT),
      retry(RETRY_TIMES_ON_ERROR),
      catchError((error: HttpErrorResponse) => {
        return throwError(new Error(error.message));
      })
    );
  }
}
