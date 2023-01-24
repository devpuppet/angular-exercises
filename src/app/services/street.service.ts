import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor() { }

  isValidStreet(value: string, requiredValues: string[]): boolean {
    return requiredValues.includes(value);
  }
}
