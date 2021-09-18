import { Component, OnInit } from '@angular/core';
import { FilterProducts } from 'src/app/pages/instruments/shared/instrument.model';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {

  public filterProducts: Array<FilterProducts>;

  constructor() { }

  ngOnInit(): void {
    this.filterProducts = FilterProducts.products
  }

}
