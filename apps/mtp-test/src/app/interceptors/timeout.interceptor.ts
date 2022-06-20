import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { EMPTY, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import Swal from 'sweetalert2';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable({
  providedIn: 'root',
})
export class RequestTimeoutHttpInterceptor implements HttpInterceptor {
  constructor(@Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modified = req.clone({
      setHeaders: { 'X-Request-Timeout': `${this.defaultTimeout}` },
    });

    return next.handle(modified).pipe(
      timeout(this.defaultTimeout),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          Swal.fire({
            title: 'Error!',
            text: 'Le service est momentanément indisponible',
            icon: 'error',
            confirmButtonText: 'OK',
          });
          console.error('Timeout has occurred', req.url);
        }
        return EMPTY;
      })
    );
  }
}
