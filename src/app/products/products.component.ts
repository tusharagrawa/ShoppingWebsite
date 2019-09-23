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
      const addedProduct = this.shoppingCart.addProduct(product);
      sessionStorage.setItem(cartId, JSON.stringify(addedProduct));
    } else {
      this.shoppingCart = JSON.parse(sessionStorage.getItem(cartId));
      const addedProduct = this.shoppingCart.addProduct(product);
      sessionStorage.setItem(cartId, JSON.stringify(addedProduct));
    }
  }

  removeFromCart(product: Product) {
    return product.quantity--;
  }

  getQuantity(product: Product) {

    if (!product.quantity) {
      return 0;
    }
    return product.quantity;

  }
}
