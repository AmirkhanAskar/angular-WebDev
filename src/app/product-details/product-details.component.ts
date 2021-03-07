import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

import { laptops} from '../Laptops'
import { microWaves} from '../MicrowaveOvens'
import { phones} from '../phones'
import { tvs} from '../TVs'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  phone;
  tv;
  laptop;
  microWave;
  likes = 0;
    
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {  }

  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  const phoneIdFromRoute = Number(routeParams.get('phoneId'));
  const laptopIdFromRoute = Number(routeParams.get('laptopId'));
  const microWaveIdFromRoute = Number(routeParams.get('microWaveId'));
  const tvIdFromRoute = Number(routeParams.get('tvId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  this.phone = phones.find(phone => phone.id === phoneIdFromRoute);
  this.laptop = laptops.find(laptop => laptop.id === laptopIdFromRoute);
  this.microWave = microWaves.find(microWave => microWave.id === microWaveIdFromRoute);
  this.tv = tvs.find(tv => tv.id === tvIdFromRoute);
}

  addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
}

