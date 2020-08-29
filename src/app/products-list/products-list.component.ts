import { 
  Component,
  EventEmitter,
  Input,
  Output 
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  //Product is passed down to here
  @Input() productList: Product[];

  //Outputs the current product whenever 
  //a new product is selected 
  @Output() onProductSelected: EventEmitter<Product>;

  //currently selected product
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter(); 
   }

   clicked(product: Product): void {
     this.currentProduct = product;
     this.onProductSelected.emit(product);
   }

   isSelected(product: Product): boolean {
     if(!product || this.currentProduct) {
       return false;
     } 
    //  return product.sku == this.currentProduct.sku;
   }
}
