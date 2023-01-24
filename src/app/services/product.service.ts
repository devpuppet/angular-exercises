import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts() {
    return [
      new Product(1, 'Memory Card', 25.99),
      new Product(2, 'Pen Drive', 49.50),
      new Product(3, 'Power Bank', 99.99),
    ];
  }
}
