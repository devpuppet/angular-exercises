import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-with-resolver',
  templateUrl: './product-with-resolver.component.html',
  styleUrls: ['./product-with-resolver.component.css']
})
export class ProductWithResolverComponent implements OnInit {

  products!: Product[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products'];
  }

}
