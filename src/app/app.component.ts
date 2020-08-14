import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  product: Product;

  constructor() {
    //Inventory Logic
    this.product= new Product(
      "NICEHAT", //SKU
      "A Nice Black Hat", //Name
      "/assets/images/products/a_nice_black_hat.png", //image URL
      ["Men's", "Accessories", "Hats"], //Department
      29.99 //Price
    );
  }
}
