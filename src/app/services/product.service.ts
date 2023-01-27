import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loggerService: LoggerService) { }

  public getProducts(numberOfProducts?: number | null): Product[] {
    this.loggerService.log("Returning products");
    return [
      new Product(1, 'Memory Card', 25.99),
      new Product(2, 'Pen Drive', 49.50),
      new Product(3, 'Power Bank', 99.99),
    ].slice(0, numberOfProducts ?? 0);
  }

  public getProduct(id: number) {
    return this.getProducts().find(product => product.id === id);
  }
}
