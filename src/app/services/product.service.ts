import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';
import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor(private loggerService: LoggerService) {
    this.products = [
      new Product(1,'Memory Card',500),
      new Product(2,'Pen Drive',750),
      new Product(3,'Power Bank',100),
      new Product(4,'Computer',100),
      new Product(5,'Laptop',100),
      new Product(6,'Printer',100),
    ]
  }

  public getProducts(numberOfProducts?: number | null) {

    return of(this.products).pipe(
      map(products => products.slice(0, numberOfProducts ?? 0))
    );
  }

  public getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
