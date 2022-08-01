import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'eshop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public products: Product[];

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit() {
    const path = this.router.url.slice(1);

    if (path === 'men' || path === 'women' || path === 'kids') {
      this.products = this.productsService.getByType(path);
      return;
    }

    if (path === '') {
      this.products = this.productsService.getAll();
      return;
    }
  }
}
