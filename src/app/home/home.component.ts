import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: Product = { id: 1, name: 'Dynamic product', price: 1.99 }

  constructor() { }

  ngOnInit(): void {
  }

}
