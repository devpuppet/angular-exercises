import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.css']
})
export class DynamicRouteComponent implements OnInit {

  product!: Product;

  constructor(private router: Router) {
    console.log("Dynamic data route state:", this.router.getCurrentNavigation()?.extras.state)
  }

  ngOnInit(): void {
    this.product = history.state;
  }

}
