import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
})
export class ProductImageComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
