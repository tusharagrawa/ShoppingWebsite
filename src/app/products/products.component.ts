import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import productsData from '../../assets/products.json';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = productsData;
  shoppingCart: ShoppingCart = {} as ShoppingCart;

  constructor() {
    this.shoppingCart = new ShoppingCart();
  }

  ngOnInit() {
  }

  addToCart(product: Product) {

    const cartId = JSON.stringify(product.id);
    if (!sessionStorage.cartId) {
      product.quantity = 1;
      this.shoppingCart.addProduct(product);
      sessionStorage.setItem(cartId,  JSON.stringify(this.shoppingCart));
    } else {
      this.shoppingCart = JSON.parse(sessionStorage.getItem(cartId));
      this.shoppingCart.addProduct(product);
      sessionStorage.setItem(cartId,  JSON.stringify(this.shoppingCart));
    }
  }

  getQuantity(product: Product) {

    if(!product.quantity) {
      return 0;
    }
    return product.quantity;

  }
}
