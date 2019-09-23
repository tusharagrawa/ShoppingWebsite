import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart = {} as ShoppingCart;
  prod: Product = {} as Product;
  qty: number;
  totalPrice: number;

  constructor() { }

  ngOnInit() {
    let count = 0;
    let price = 0;
    let cart1 = new ShoppingCart();
    Object.keys(sessionStorage).forEach(function (item) {
      if (item) {
        let prod1 = JSON.parse(sessionStorage[item]);
        count += prod1.quantity;
        price += (prod1.quantity * prod1.price);
        cart1.addProduct(prod1);
      }
    });
    this.qty = count;
    this.cart = cart1;
    this.totalPrice = price;
  }

  clearCart() {
    sessionStorage.clear();
  }
}
