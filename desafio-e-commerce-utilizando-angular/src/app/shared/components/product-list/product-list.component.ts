import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'eshop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() public products: Product[];
}
