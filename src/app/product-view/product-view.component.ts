import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    this.productService.getProduct(id)
      .subscribe(data => this.product = data)
  }

}
