import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productsData } from './products-data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products: Product[] = productsData;

  constructor() { }

  getAll() {
    return this._products;
  }

  getByType(type: 'men' | 'women' | 'kids') {
    return this._products.filter(product => product.type === type);
  }

  getById(id: string) {
    return this._products.find(product => product.id === id);
  }
}
