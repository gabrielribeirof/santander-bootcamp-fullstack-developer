import { Injectable } from '@angular/core';
import { StoredBagProduct } from '../models/stored-bag-product';

@Injectable({
  providedIn: 'root',
})
export class BagService {
  constructor() {
    try {
      if (!this.storage) this.storage = [];
    } catch (error) {
      this.storage = [];
    }
  }

  public get storage() {
    return JSON.parse(localStorage.getItem('bag-products')!);
  }

  private set storage(value: StoredBagProduct[]) {
    localStorage.setItem('bag-products', JSON.stringify(value));
  }

  addProduct(value: StoredBagProduct) {
    this.storage = [...this.storage, value];
  }

  removeProduct(id: string) {
    const index = this.storage.findIndex(product => product.id === id);

    if (index > -1) {
      const tempStorage = this.storage;
      tempStorage.splice(index, 1);

      this.storage = tempStorage;
    }
  }

  changeProductQuantity(id: string, newQuantity: number) {
    const index = this.storage.findIndex(target => target.id === id);

    const tempStorage = this.storage;
    tempStorage[index] = { id, quantity: newQuantity };

    this.storage = tempStorage;
  }
}
