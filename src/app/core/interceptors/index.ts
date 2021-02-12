import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandlerInterceptor } from './http-error-handler';
import { HttpTokenInterceptor } from './http-token';

export const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorHandlerInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true,
  },
];
