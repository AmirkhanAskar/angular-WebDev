import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

import { laptops} from '../Laptops'
import { microWaves} from '../MicrowaveOvens'
import { phones} from '../phones'
import { tvs} from '../TVs'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;
  laptops = laptops;
  microWaves = microWaves;
  phones = phones;
  tvs = tvs;

  laptopscnt = false;
  microWavescnt = false;
  phonescnt = false;
  tvscnt = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {  }

  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('categoryId'));

  // Find the product that correspond with the id provided in route.
  // this.product = products.find(product => product.id === productIdFromRoute);
  if (productIdFromRoute === 1){
    this.phonescnt = true;
  } else if (productIdFromRoute === 2){
    this.laptopscnt = true;
  } else if (productIdFromRoute === 3){
    this.tvscnt = true;
  } else if (productIdFromRoute === 4){
    this.microWavescnt = true;
  }
}

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/