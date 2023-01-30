import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  numberOfProducts!: number | null;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(params => console.log('params:', params));
  }

  getProducts() {
    this.products$ = this.productService.getProducts(this.numberOfProducts);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const num = params.get('numberOfProducts');
      if (num) {
        this.numberOfProducts = +num;
      } else {
        this.getProducts();
      }
    });
  }

}
