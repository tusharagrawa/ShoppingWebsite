import { Product } from './product';

export class ShoppingCart {

  product: Product[] = [];

  addProduct(newProduct: Product): Product {
    if (this.product == null) {
      this.product[0] = newProduct;
    } else {
      this.product.forEach(prod => {

        if (prod.id === newProduct.id) {
          prod.quantity++;
          return prod;
        }

      });
      this.product[this.product.length] = newProduct;
      return newProduct;
    }
  }
}
