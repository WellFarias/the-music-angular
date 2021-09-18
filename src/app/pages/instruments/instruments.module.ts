import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StorefrontInstrumentsComponent } from './storefront-instruments/storefront-instruments.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { InstrumentRegisterComponent } from './instrument-register/instrument-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StorefrontInstrumentsComponent,
    InstrumentDetailComponent,
    InstrumentRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
})
export class InstrumentsModule { }
