import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(params => console.log('params:', params));
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

}
