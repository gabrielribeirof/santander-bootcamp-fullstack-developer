import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'eshop-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  private _searchBy = '';
  private _products: Product[];

  @ViewChild('searchByInput') public searchByInput: ElementRef<HTMLInputElement>;
  public filteredProducts: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this._products = this.productsService.getAll();
    this.filteredProducts = this._products;
  }

  ngAfterViewInit() {
    this.searchByInput.nativeElement.focus();
  }

  public set searchBy(value: string) {
    this._searchBy = value;

    this.filteredProducts = this._products.filter(product => (
      product.name.toLocaleLowerCase().includes(this._searchBy.toLocaleLowerCase())
    ));
  }

  public get searchBy() {
    return this._searchBy;
  }
}
