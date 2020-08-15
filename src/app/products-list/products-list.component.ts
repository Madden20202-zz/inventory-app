import { 
  Component, 
  OnInit,
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
export class ProductsListComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
