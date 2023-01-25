import { Component, Host, Inject, Injectable, InjectionToken, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { ToggleDirective } from '../directives/toggle.directive';
import { Product } from '../models/product';
import { TempConverterPipe } from '../pipes/temp-converter.pipe';
import { CityService } from '../services/city-service.service';
import { LoggerService } from '../services/logger.service';
import { ProductService } from '../services/product.service';
import { StreetService } from '../services/street.service';

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

export const API_URL = new InjectionToken<string>('');

@Component({
  selector: 'app-providers-example',
  templateUrl: './providers-example.component.html',
  styleUrls: ['./providers-example.component.css'],
  providers: [
    { provide: LoggerService, useClass: LoggerServiceMock },
    { provide: 'USE_FAKE', useValue: true }, // Change this to false to get mocked data
    { provide: 'WELCOME_FUNC', useValue: () => { return "Hi there!" } },
    { provide: 'USE_REAL', useFactory: (USE_FAKE: boolean, LoggerService: LoggerService) => USE_FAKE ? new ProductServiceMock() : new ProductService(LoggerService), deps: ["USE_FAKE", LoggerService]},
    { provide: ProductService, useExisting: "USE_REAL" },
    { provide: API_URL, useValue: "https://somerandomendpoint.com/api" },
    TempConverterPipe,
    ToggleDirective,
    CityService
  ]
})
export class ProvidersExampleComponent implements OnInit {
  welcomeMessage: string;
  realProducts: string[];
  products: string[];
  injectedUrl: string;
  temp: string;
  cities: string;
  isCityValid: boolean;

  constructor(
    @Inject('WELCOME_FUNC') welcomeFunc: any,
    @Inject("USE_REAL") private realProductService: ProductService,
    private productService: ProductService,
    private loggerService: LoggerService,
    @Inject(API_URL) private apiUrl: string,
    @Self() private tempConveterPipe: TempConverterPipe, // @Self instructs Angular to look for dependency only in the local injector.
    @SkipSelf() private toggleDirective: ToggleDirective, // Opposite to @Self, instructs Angular to look for the dependency in parent
    @Optional() @Self() private cityService: CityService, // instructs Angular to look for dependency in local injector, return null if not found
    @Host() private streetService: StreetService // @Host first looks in providers of this component, next it looks in viewProviders of parent component
    ) {
      this.welcomeMessage = welcomeFunc();
      this.realProducts = this.realProductService.getProducts().map(product => product.name);
      this.products = this.productService.getProducts().map(product => product.name);
      this.loggerService.log("created");
      this.injectedUrl = this.apiUrl;
      this.temp = this.tempConveterPipe.transform(100, 'C');
      this.cities = this.cityService?.getPermittedCities().toString();
      this.isCityValid = this.streetService.isValidStreet('Fluffy', ['Fluffy', 'Happy']);
    }

  ngOnInit(): void { }

}
