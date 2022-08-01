import { Component, OnInit } from '@angular/core';
import { BagProduct } from 'src/app/core/models/bag-product';
import { BagService } from 'src/app/core/services/bag.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'eshop-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent implements OnInit {
  public products: BagProduct[];

  constructor(
    private bagService: BagService,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.products = [];

    this.bagService.storage.forEach(storedProduct => {
      const product = this.productsService.getById(storedProduct.id);

      if (!product) return;

      this.products.push({
        ...product,
        quantity: storedProduct.quantity,
      });
    });
  }

  arraySequence(size: number) {
    return [...Array(size+1).keys()].slice(1);
  }

  removeProduct(id: string) {
    this.bagService.removeProduct(id);

    const index = this.products.findIndex(product => product.id === id);

    if (index > -1) this.products.splice(index, 1);
  }

  changeProductQuantity(id: string, newQuantity: string) {
    this.bagService.changeProductQuantity(id, Number(newQuantity));

    const index = this.products.findIndex(product => product.id === id);

    if (index > -1) this.products[index].quantity = Number(newQuantity);
  }
}
