import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';
import { FiltersListComponent } from './components/filters-list/filters-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    InstrumentCardComponent,
    FiltersListComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],

  exports: [
    NavBarComponent,
    InstrumentCardComponent,
    FiltersListComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
