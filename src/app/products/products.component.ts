import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] | undefined;
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

}
