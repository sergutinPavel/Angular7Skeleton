import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/index';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.error('TokenInterceptor', request);
    // todo: check token
     if (false) {
       request = request.clone({
         setHeaders: {
           Authorization: `Bearer ${'token_example'}`
         }
       });
     }

    return next.handle(request);
  }
}
