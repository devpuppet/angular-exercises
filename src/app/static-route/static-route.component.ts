import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-static-route',
  templateUrl: './static-route.component.html',
  styleUrls: ['./static-route.component.css']
})
export class StaticRouteComponent implements OnInit {

  product!: Product;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.product = data as Product);
  }

}
