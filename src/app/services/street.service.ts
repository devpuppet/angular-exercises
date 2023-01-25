import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor() {
    console.log('StreetService constructed');
  }

  isValidStreet(value: string, requiredValues: string[]): boolean {
    return requiredValues.includes(value);
  }
}
