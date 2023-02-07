import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any): void {
    const router = this.injector.get(Router);
    
    console.log(`Global Error Handler - error occured in ${router.url} :`, error.message);
    console.log(error);
    router.navigate(['/error']);
  }
}
