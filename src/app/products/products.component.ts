import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = productsData;
  constructor() {
  }

  ngOnInit() {
  }

}
