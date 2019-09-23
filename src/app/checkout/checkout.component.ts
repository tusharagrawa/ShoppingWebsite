import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  price: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.price = this.route.snapshot.paramMap.get('price');
  console.log(this.price);
  }


  placeOrder() {
    console.log('Order Placed');
  }

}
