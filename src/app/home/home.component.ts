import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: Product = { id: 1, name: 'Dynamic product', price: 1.99 }

  constructor(private title: Title, private meta: Meta) {
  }

  ngOnInit(): void {
    this.title.setTitle("Home");
    this.meta.addTag({ name: 'description', content: 'Angular exercise Home page' });
  }

}
