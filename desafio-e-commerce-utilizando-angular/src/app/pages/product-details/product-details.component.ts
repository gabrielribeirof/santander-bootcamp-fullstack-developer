import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { BagService } from 'src/app/core/services/bag.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'eshop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  public quantity = 1;

  constructor(
    private productsService: ProductsService,
    private bagService: BagService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        const id = params.get('id')!;

        const foundProduct = this.productsService.getById(id);

        if (foundProduct) this.product = foundProduct;
      }
    });
  }

  arraySequence(size: number) {
    return [...Array(size+1).keys()].slice(1);
  }

  handleAddBag() {
    this.bagService.addProduct({
      id: this.product.id,
      quantity: this.quantity,
    });

    this.router.navigate(['/bag']);
  }
}
