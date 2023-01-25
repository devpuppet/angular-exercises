import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Repo } from './github.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request sent: ', req);
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    return next.handle(req);
  }
}

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = Date.now();

    return next.handle(req).pipe(
      tap(response => {
        const time = Date.now() - start;
        console.log(`Request took ${time} ms. Response:`, response);
      }),
      catchError(error => {
        console.log("Error occured!", error);
        return of(error);
      })
    )
  }
  
}

@Injectable()
export class MockRepoResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Repo>> {
    return next.handle(req).pipe(
      map(response => {

        if (response instanceof HttpResponse && req.url.includes('mock')) {
          const mockBody = [{
            id: 999,
            name: 'Mocked repo',
            owner: { login: 'Guy', avatar_url: 'blank' }
          }];
          response = response.clone({ body: mockBody });
        }

        return response;
      })
    );
  }
  
}