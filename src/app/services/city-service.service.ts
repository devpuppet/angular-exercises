import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private _cities: string[] = [
    'Krakow',
    'Warsaw'
  ];

  constructor() { }

  public isValidCity(city: string): boolean {
    return this._cities.includes(city);
  }

  public getPermittedCities() {
    return this._cities;
  }
}
