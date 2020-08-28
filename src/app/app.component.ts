import { 
  Component,
  EventEmitter, 
} from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    //Inventory Logic
    this.products = [
      new Product(
        "BKSHOES", //sku
        "Black Running Shoes", //name
        "/assets/images/products/black-shoes.jpg", //image URL
        ["Men's", "Shoes", "Running"], //department
        135.99 //price
      ),
      new Product(
        "BLUEJACKET", //sku
        "Blue Jacket", //name
        "/assets/images/products/blue-jacket.jpg", //image URL
        ["Women", "Apparel", "Jackets & Vests"], //department
        235.99 //price
      ),
      new Product(
        'NICEHAT', //sku
        'A Nice Black Hat', //name
        '/assets/images/products/black-hat.jpg', //image URL
        ['Men', 'Accessories', 'Hats'], //department
        29.99 //price
      )
    ];
  }


  productWasSelected(product: Product): void {
    console.log("Product Clicked: ", product);
  }
}
