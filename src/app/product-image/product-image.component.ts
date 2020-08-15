import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: `
  <img class="product-image" src="{{ product.imageUrl }}">
  `
})
export class ProductImageComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
