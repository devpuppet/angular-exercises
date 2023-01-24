import { Inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loggerService: LoggerService) { }

  public getProducts() {
    this.loggerService.log("Returning products");
    return [
      new Product(1, 'Memory Card', 25.99),
      new Product(2, 'Pen Drive', 49.50),
      new Product(3, 'Power Bank', 99.99),
    ];
  }
}
