import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }

  init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService called');
      setTimeout(() => {
        console.log('AppInitService finished');
        resolve();
      }, 500);
    });
  }
}
