import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductService } from '../services/product.service';

@Injectable()
class LoggerServiceMock extends LoggerService {
  public override log(msg: any) {
    console.log('mock logger!', msg);
  }
}

@Injectable()
class ProductServiceMock {
  public getProducts() {
    return [
      new Product(1, 'Mocked product', 10),
    ];
  }
}

@Component({
  selector: 'app-providers-example',
  templateUrl: './providers-example.component.html',
  styleUrls: ['./providers-example.component.css'],
  providers: [
    { provide: LoggerService, useClass: LoggerServiceMock },
    { provide: 'USE_FAKE', useValue: true }, // Change this to false to get mocked data
    { provide: 'WELCOME_FUNC', useValue: () => { return "Hi there!" } },
    { provide: 'USE_REAL', useFactory: (USE_FAKE: boolean, LoggerService: LoggerService) => USE_FAKE ? new ProductServiceMock() : new ProductService(LoggerService), deps: ["USE_FAKE", LoggerService]},
    { provide: ProductService, useExisting: "USE_REAL" }
  ]
})
export class ProvidersExampleComponent implements OnInit {
  welcomeMessage: string;
  realProducts: string[];
  products: string[];

  constructor(
    @Inject('WELCOME_FUNC') welcomeFunc: any,
    @Inject("USE_REAL") private realProductService: ProductService,
    private productService: ProductService,
    private loggerService: LoggerService) {
      this.welcomeMessage = welcomeFunc();
      this.realProducts = this.realProductService.getProducts().map(product => product.name);
      this.products = this.productService.getProducts().map(product => product.name);
      this.loggerService.log("created");
    }

  ngOnInit(): void { }

}
